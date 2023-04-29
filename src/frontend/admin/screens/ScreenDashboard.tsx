import { AxiosBasicCredentials } from "axios";
import { axAdmin } from "../axios/axios";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

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

  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />

      <div className="flex w-full h-screen ">
        <Sidebar />

        <div className="flex w-full h-screen bg-slate-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
//top-20 left-52
