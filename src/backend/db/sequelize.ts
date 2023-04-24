import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config({});

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

export const db = new Sequelize(String(DB_NAME), String(DB_USER), DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
});
