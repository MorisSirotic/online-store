import { readFileSync } from "fs";
import https from "https";
import Express, { NextFunction, Request, Response, json } from "express";
import { log } from "console";
import dotenv from "dotenv";
import { db } from "./db/sequelize";
import { authProducts } from "./routes/auth/Products";
import { authUser } from "./routes/auth/User";
import { authCartItems } from "./routes/auth/CartItems";

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
  db.sync({alter:true})
    .then((res) => {
      log("DB synced successfully");
      next();
    })
    .catch((err) => {
      res.send({ message: err });
    });
});

const login = (email: string, password: string): boolean => {
  return email == "moris.sirotic1@gmail.com" && password == "test123";
};

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  if(!req.body.auth){
    res.status(400).send({message: "Authorization is missing"})
  }
  const { email, password } = req.body.auth;
  //Verify the information
  log(email);
  log(password);

  //Login incorrect, return 401
  if (!login(email, password)) {
    res.status(401).send("Wrong login information");
    //Login correct, allow access
  } else {
    next();
  }
};

app.use("/api/products", authenticate, authProducts);
app.use("/api/users", authenticate, authUser);
app.use("/api/carts", authenticate, authCartItems);

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
