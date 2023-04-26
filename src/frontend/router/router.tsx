import { createBrowserRouter } from "react-router-dom";
import { Root } from "../common/Root";
import { ScreenAuth } from "../admin/screens/ScreenAuth";

const rootLoader = () => {
  return [];
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "auth",
        element: (
         <ScreenAuth/>
        ),
        loader: () => {
          return [];
        },
      },
    ],
  },
]);
