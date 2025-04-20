import React from "react";
import { RouteObject } from "react-router-dom";

import homeRoutes from "./home/home.routes";
import Page from "./Page";
// import cartRoutes from "./cart/cart.routes"; 

const pageRoutes: RouteObject[] = [
  // ...cartRoutes,
  {
    path: '/',
    element: React.createElement(Page),
    children: [...homeRoutes],
  }
];

export default pageRoutes;
