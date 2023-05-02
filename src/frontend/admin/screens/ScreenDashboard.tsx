import { AxiosBasicCredentials } from "axios";
import { Outlet, useLocation } from "react-router-dom";
import { axAdmin } from "../axios/axios";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { ScreenRoot } from "./ScreenRoot";

export const ScreenDashboard = () => {
  const location = useLocation();

  const renderRoot =
    location.pathname == "/admin/dashboard" ? <ScreenRoot /> : <Outlet />;

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

        <div className="flex w-full h-screen bg-slate-100">{renderRoot}</div>
      </div>
    </div>
  );
};
//top-20 left-52
