import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import { Solutions } from "../pages/Solutions";
import OurOffer from "../pages/OurOffer";

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
      {
        path: "/offer",
        Component: OurOffer,
      },
    ],
  },
]);
