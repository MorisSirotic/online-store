import { Request, Response, NextFunction } from "express";
import { csfrGenerate, csrfVerify } from "../csrf";

export const csrfSecurity = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.csrf) {
    req.session.csrf = await csfrGenerate();
    req.session.save();
  }

  const csrf = req.session.csrf;
  const token = req.body.csfrToken;

  if (!token) {
    return res.status(403).send({ message: "CSRF token is missing" });
  }

  const valid = csrfVerify(csrf.secret, token);

  if (!valid) {
    return res.status(403).send({ message: "CSRF token is invalid" });
  }

  next();
};
