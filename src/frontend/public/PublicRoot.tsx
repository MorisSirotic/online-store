import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ScreenProducts } from "../screens/ScreenProducts";

export const PublicRoot = () => {
  const location = useLocation();
  return (
    <div className="w-full h-screen bg-slate-200">
      <Navbar />

      {location.pathname === "/" ? <ScreenProducts /> : <Outlet />}
    </div>
  );
};
