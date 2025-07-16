import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/pricing",
        Component: Pricing,
      },
      {
        path: "/solutions",
        Component: Home,
      },
    ],
  },
]);
