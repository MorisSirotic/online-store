import { createBrowserRouter } from "react-router-dom";
import { OrderScreen } from "../admin/screens/OrderScreen";
import { ScreenAuth } from "../admin/screens/ScreenAuth";
import { ScreenDashboard } from "../admin/screens/ScreenDashboard";
import { Root } from "../common/Root";

const rootLoader = () => {
  return [];
};

export const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "auth",
        element: <ScreenAuth />,
        loader: () => {
          return [];
        },
      },
      {
        path: "dashboard",
        element: <ScreenDashboard />,
        loader: () => {
          return [];
        },
        children: [{ path: "orders", element: <OrderScreen /> }],
      },
    ],
  },
]);
