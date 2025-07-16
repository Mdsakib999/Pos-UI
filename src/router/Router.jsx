import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import { Solutions } from "../pages/Solutions";

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
        Component: Solutions,
      },
    ],
  },
]);
