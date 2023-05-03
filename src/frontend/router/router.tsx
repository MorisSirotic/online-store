import { createBrowserRouter } from "react-router-dom";
import { ScreenAuth } from "../admin/screens/ScreenAuth";
import { ScreenCustomer } from "../admin/screens/ScreenCustomer";
import { ScreenDashboard } from "../admin/screens/ScreenDashboard";
import { ScreenOrder } from "../admin/screens/ScreenOrder";
import { ScreenProducts } from "../admin/screens/ScreenProducts";
import { ScreenReviews } from "../admin/screens/ScreenReviews";
import { ScreenStaff } from "../admin/screens/ScreenStaff";
import { ScreenStatistics } from "../admin/screens/ScreenStatistics";
import { ScreenTransactions } from "../admin/screens/ScreenTransactions";
import { Root } from "../common/Root";
import { PublicRoot } from "../public/PublicRoot";
import { StripeWrapper } from "../public/stripe/StripeWrapper";
import CheckoutForm from "../public/components/CheckoutForm";

const rootLoader = () => {
  return [];
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoot />,
    loader: () => {
      return [];
    },
    children: [],
  },
  {
    path: "/checkout",
    element: (
      <StripeWrapper>
        <CheckoutForm />
      </StripeWrapper>
    ),
  },
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
                  id: 1,
                  publicId: "079c1647-43ed-4bc9-a4f7-d3917c747205",
                  name: "Test Product #1",
                  price: 25.5,
                  stock: 10,
                  createdAt: "2023-04-25T08:39:31.461Z",
                  updatedAt: "2023-04-25T08:39:31.461Z",
                },
                {
                  id: 2,
                  publicId: "a2dedf2a-100d-4091-8a12-4a75928a760a",
                  name: "Test Product #2",
                  price: 55.5,
                  stock: 30,
                  createdAt: "2023-04-25T08:39:44.025Z",
                  updatedAt: "2023-04-25T08:39:44.025Z",
                },
                {
                  id: 3,
                  publicId: "0c127061-0dc0-4766-bc2b-9204e66f3bf0",
                  name: "Test Product #3",
                  price: 75.5,
                  stock: 50,
                  createdAt: "2023-04-25T08:39:55.550Z",
                  updatedAt: "2023-04-25T08:39:55.550Z",
                },
              ];
            },
          },
          {
            path: "customers",
            element: <ScreenCustomer />,
            loader: () => {
              return [
                {
                  id: 1,
                  type: "GUEST",
                  name: "Test Testerman",
                  email: "test@testermail.com",
                  phone: "+12345678910",
                  totalSpent: "€55",
                },
                {
                  id: 2,
                  type: "REGISTERED",
                  name: "Registered User",
                  email: "registered@testermail.com",
                  phone: "+12345678910",
                  totalSpent: "€255",
                },
                {
                  id: 2,
                  type: "REGISTERED",
                  name: "Registered User",
                  email: "registered@testermail.com",
                  phone: "+12345678910",
                  totalSpent: "€255",
                },
                {
                  id: 2,
                  type: "REGISTERED",
                  name: "Registered User",
                  email: "registered@testermail.com",
                  phone: "+12345678910",
                  totalSpent: "€255",
                },
                {
                  id: 2,
                  type: "REGISTERED",
                  name: "Registered User",
                  email: "registered@testermail.com",
                  phone: "+12345678910",
                  totalSpent: "€255",
                },
                {
                  id: 2,
                  type: "REGISTERED",
                  name: "Registered User",
                  email: "registered@testermail.com",
                  phone: "+12345678910",
                  totalSpent: "€255",
                },
              ];
            },
          },
          {
            path: "statistics",
            element: <ScreenStatistics />,
            loader: () => {
              return [];
            },
          },
          {
            path: "reviews",
            element: <ScreenReviews />,
            loader: () => {
              return [];
            },
          },
          {
            path: "transactions",
            element: <ScreenTransactions />,
            loader: () => {
              return [];
            },
          },

          {
            path: "transactions",
            element: <ScreenTransactions />,
            loader: () => {
              return [];
            },
          },
          {
            path: "staff",
            element: <ScreenStaff />,
            loader: () => {
              return [
                {
                  role: "ADMIN",
                  name: "Moris",
                  phone: "+385123456789",
                  email: "moris.sirotic1@gmail.com",
                  picture: "https://via.placeholder.com/400/325",
                },
                {
                  role: "MOD",
                  name: "Mod",
                  phone: "+385123456789",
                  email: "mod@mailmail.com",
                  picture: "https://via.placeholder.com/400/325",
                },
                {
                  role: "MANAGER",
                  name: "Manager",
                  phone: "+385123456789",
                  email: "manager@mailmail.com",
                  picture: "https://via.placeholder.com/400/325",
                },
              ];
            },
          },
        ],
      },
    ],
  },
]);
