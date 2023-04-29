import { createBrowserRouter } from "react-router-dom";
import { ScreenOrder } from "../admin/screens/ScreenOrder";
import { ScreenAuth } from "../admin/screens/ScreenAuth";
import { ScreenDashboard } from "../admin/screens/ScreenDashboard";
import { Root } from "../common/Root";
import { ScreenProducts } from "../admin/screens/ScreenProducts";

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
        children: [
          {
            path: "orders",
            element: <ScreenOrder />,
            loader: () => {
              return [];
            },
          },
          {
            path: "products",
            element: <ScreenProducts />,
            loader: () => {
              return [
                {
                    "id": 1,
                    "publicId": "079c1647-43ed-4bc9-a4f7-d3917c747205",
                    "name": "Test Product #1",
                    "price": 25.5,
                    "stock": 10,
                    "createdAt": "2023-04-25T08:39:31.461Z",
                    "updatedAt": "2023-04-25T08:39:31.461Z"
                },
                {
                    "id": 2,
                    "publicId": "a2dedf2a-100d-4091-8a12-4a75928a760a",
                    "name": "Test Product #2",
                    "price": 55.5,
                    "stock": 30,
                    "createdAt": "2023-04-25T08:39:44.025Z",
                    "updatedAt": "2023-04-25T08:39:44.025Z"
                },
                {
                    "id": 3,
                    "publicId": "0c127061-0dc0-4766-bc2b-9204e66f3bf0",
                    "name": "Test Product #3",
                    "price": 75.5,
                    "stock": 50,
                    "createdAt": "2023-04-25T08:39:55.550Z",
                    "updatedAt": "2023-04-25T08:39:55.550Z"
                }
            ];
            },
          },
        ],
      },
    ],
  },
]);
