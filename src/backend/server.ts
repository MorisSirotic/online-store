import { log } from "console";
import dotenv from "dotenv";
import Express, { NextFunction, Request, Response, json } from "express";
import { readFileSync } from "fs";
import https from "https";
import User from "./db/model/User";
import { db } from "./db/sequelize";
import { authCartItemsRoutes } from "./routes/auth/CartItems";
import { authCategoriesRoutes } from "./routes/auth/Category";
import { authCountriesRoutes } from "./routes/auth/Countries";
import { authOrderRoutes } from "./routes/auth/Order";
import { authProductsRoutes } from "./routes/auth/Products";
import { authUserRoutes } from "./routes/auth/User";
import { comparePasswords } from "./util/bcrypt";
import { authTest } from "./routes/auth/Test";

dotenv.config();
const { PORT, PASSPHRASE } = process.env;

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

app.use(json());

app.use((req, res, next) => {
  db.sync({ alter: true })
    .then((res) => {
      log("DB synced successfully");
      next();
    })
    .catch((err) => {
      log("Db sync error");
      res.status(500).send({ message: err });
    });
});

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
  if (!req.body.auth) {
    res.status(400).send({ message: "Authorization is missing" });
    return;
  }
  const { email, password } = req.body.auth;

  const isLoginValid = await login(email, password);
  //Login information correct, call next function
  if (isLoginValid) {
    next();
    //Login failed, return 401
  } else {
    res.status(401).send({ message: "Incorrect authorization information" });
  }
};
app.use("/api/admin/test", authTest);
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
