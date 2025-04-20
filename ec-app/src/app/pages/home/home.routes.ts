import React from "react";
import { RouteObject } from "react-router-dom";

import Home from "./Home";

const homeRoutes: RouteObject[] = [
  {
    path: "/",
    element: React.createElement(Home),
  },
];

export default homeRoutes;
