import { log } from "console";
import cors from "cors";
import dotenv from "dotenv";
import Express, { NextFunction, Request, Response, json } from "express";
import session from "express-session";
import { readFileSync } from "fs";
import https from "https";
import { db } from "./db/sequelize";
import { authCartItemsRoutes } from "./routes/auth/CartItems";
import { authCategoriesRoutes } from "./routes/auth/Category";
import { authCountriesRoutes } from "./routes/auth/Countries";
import { authOrderRoutes } from "./routes/auth/Order";
import { authProductsRoutes } from "./routes/auth/Products";
import { authTest } from "./routes/auth/Test";
import { authUserRoutes } from "./routes/auth/User";
import { comparePasswords, encryptPassword } from "./util/bcrypt";

import connectSessionSequelize from "connect-session-sequelize";
import cookieParser from "cookie-parser";
import { Session } from "./db/model/Session";
import User from "./db/model/User";
import { Token } from "./util/csrf";
import { publicStripe } from "./routes/public/stripe";

declare module "express-session" {
  interface SessionData {
    csrf: Token;

    email: string;
    password: string;
    isLoggedIn: boolean;
    user: {
      email: string;
      password: string;
      isLoggedIn: boolean;
    };
  }
}

dotenv.config();
const { PORT, PASSPHRASE, SECRET_KEY, COOKIE_SECRET } = process.env;

const key = readFileSync("../../cert/private_key.pem");
const cert = readFileSync("../../cert/certificate.pem");
const ca = readFileSync("../../cert/certificate.csr");

const options = {
  key,
  cert,
  ca,
  passphrase: PASSPHRASE,
};

const app = Express();

app.use(
  cors({
    origin: "https://localhost:5173",
    credentials: true,
  })
);
app.use(json());
app.use(cookieParser(COOKIE_SECRET));

// app.use((req, res, next) => {
//   res.on("finish", () => {
//     console.log(res.getHeaders());
//   });
//   next();
// });

const SequelizeStore = connectSessionSequelize(session.Store);

const sessionStore = new SequelizeStore({
  db: db,
  table: "Session",
  expiration: 3600000,
  checkExpirationInterval: 37000,
});

app.use((req, res, next) => {
  Session.sync()
    .then((mam) => {
      sessionStore.sync();
      db.sync({  })
        .then((res) => {
          log("DB synced successfully");
          next();
        })
        .catch((err) => {
          log("Db sync error");
          res.status(500).send({ message: err });
        });
    }
    )
    .catch((err) => res.status(500).send(err));
});

app.use(
  session({
    store: sessionStore,
    secret: String(SECRET_KEY),
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true, // Set to true if using HTTPS
      maxAge: 3600000, // Session expiration time in milliseconds
      httpOnly: true,
      signed: true,
      sameSite: "strict",
    },
  })
);

const login = async (email: string, password: string): Promise<boolean> => {
  // Find the user by email
  return await User.findOne({ where: { email: email } })
    // User exists, verify the  password
    .then((user) => {
      return comparePasswords(password, user!.getDataValue("password"));
    })
    //Email doesn't exit, fail the login
    .catch((err) => {
      return false;
    });
};

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    res.status(400).send({ message: "Authorization is missing" });
    return;
  }

  const authHeader = req.headers.authorization;

  const decodedCredentials = Buffer.from(
    authHeader.split(" ")[1],
    "base64"
  ).toString();
  const [email, password] = decodedCredentials.split(":");

  //User's session is still valid, continue
  if (req.session.user?.isLoggedIn) {
    log("valid");
    next();
    return;
  }

  const isLoginValid = await login(email, password);

  //Login information correct, call next function
  if (isLoginValid) {
    req.session.user = {
      isLoggedIn: true,
      email,
      password: await encryptPassword(password),
    };

    res.locals.session = {
      sessId: req.session.id,
      isLoggedIn: true,
    };
    next();
  }

  //Login failed, return 401
  else {
    log("INVALIDDDD");
    req.session.destroy(() => {});
    res.status(401).send("ala via");
  }
};

//HERE
app.get("/api/admin/csrf/", async (req, res) => {
  res.cookie("mycookie", "cookievalue", {
    signed: true,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  log("coooooooookie");
  log(req.signedCookies["mycookie"]);

  const cookieValue = req.signedCookies["mycookie"];
  if (cookieValue === false) {
    log("invalid cookčinas");
    res.status(401).send({ message: "Cookie integrity failed" });
    return;
  }

  res.send(`Cookie value: ${cookieValue}`);
});


app.use("/api/stripe", publicStripe);

app.use("/api/admin/auth", authenticate, authTest);
app.use("/api/admin/products", authenticate, authProductsRoutes);
app.use("/api/admin/users", authenticate, authUserRoutes);
app.use("/api/admin/carts", authenticate, authCartItemsRoutes);
app.use("/api/admin/orders", authenticate, authOrderRoutes);
app.use("/api/admin/countries", authenticate, authCountriesRoutes);
app.use("/api/admin/categories", authenticate, authCategoriesRoutes);

app.get("/", (_req, res) => {
  db.authenticate()
    .then((res) => {
      log("Connection has been established successfully.");
    })
    .catch((err) => {
      log("Unable to connect to the database: " + err);
    });

  res.send("Nice");
});

app.get("/profile", authenticate, (req, res) => {
  db.authenticate()
    .then((res) => {
      log("Connection has been established successfully.");
    })
    .catch((err) => {
      log("Unable to connect to the database: " + err);
    });

  res.send("Nice");
});

const server = https.createServer(options, app);
server.listen(PORT, () => {
  log(`Server running at https://localhost:${PORT} on HTTPS`);
});

// const server = http.createServer(app);
// server.listen(PORT, () => {
//   log(`Server running at http://localhost:${PORT} on HTTP`);
// });
