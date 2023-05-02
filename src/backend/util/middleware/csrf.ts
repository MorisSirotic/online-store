import { Request, Response, NextFunction } from "express";
import { csfrGenerate, csrfVerify } from "../csrf";
import { log } from "console";

export const csrfSecurity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session.csrf) {
    req.session.csrf = await csfrGenerate();
    req.session.save();
  }

  const csrf = req.session.csrf;
  const token = req.body.csfrToken;

  if (!token) {
    return res.status(403).send({ message: "CSRF token is missing" });
  }
//TODO UNCOMMENT BELOW WHEN GOING TO PRODUCTION
  //const valid = csrfVerify(csrf.secret, token);

  const valid = true ;
  if (!valid) {
    return res.status(403).send({ message: "CSRF token is invalid" });
  }

  next();
};
