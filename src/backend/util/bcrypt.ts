import bcrypt from "bcrypt";
import { log } from "console";

const encryptPassword = (password: string) => {
  return bcrypt.hash(password, 12);
};

const comparePasswords = (rawPassword: string, encPassword: string) => {
  return bcrypt.compare(rawPassword, encPassword);
};

export { encryptPassword, comparePasswords };
