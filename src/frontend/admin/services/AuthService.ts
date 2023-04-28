import { AxiosResponse } from "axios";
import { axAdmin } from "../axios/axios";

export const authLogin = async (
  email: string,
  password: string
): Promise<AxiosResponse<{ ma: string }, any>> => {
  return await axAdmin.post(
    "/auth/login",
    {},
    { auth: { username: email, password } }
  );
};

export const authLogout = async (email: string, password: string) => {
  return await axAdmin.post("/auth/logout", { auth: { email, password } });
};

export const authRegister = async (email: string, password: string) => {
  return await axAdmin.post("/auth/register", { auth: { email, password } });
};
