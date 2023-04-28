import { AxiosBasicCredentials } from "axios";
import { axAdmin } from "../axios/axios";

export const ScreenDashboard = () => {
  const credentials: AxiosBasicCredentials = {
    username: "moris.sirotic1@gmail.com",
    password: "test1233",
  };

  axAdmin
    .get("/categories", { auth: credentials })
    .then((res) => {
      console.log("NICE");
    })
    .catch((err) => {
      console.log("NOT NICE");
    });

  return <div className="text-green-500">Admin Dashboard</div>;
};
