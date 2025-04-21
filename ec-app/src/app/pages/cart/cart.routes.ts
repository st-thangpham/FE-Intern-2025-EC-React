import React from "react";
import { RouteObject } from "react-router-dom";

import Cart from "./Cart";

const cartRoutes: RouteObject[] = [
  {
    path: "/cart",
    element: React.createElement(Cart),
  },
];

export default cartRoutes;
