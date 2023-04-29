import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="flex min-w-max flex-col w-full h-screen bg-slate-100">
      <Outlet />
    </div>
  );
};
