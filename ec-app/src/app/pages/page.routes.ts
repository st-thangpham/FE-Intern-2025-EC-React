import React from 'react';
import { RouteObject } from 'react-router-dom';

import homeRoutes from './home/home.routes';
import Page from './Page';

const pageRoutes: RouteObject[] = [
  {
    path: '/',
    element: React.createElement(Page),
    children: [...homeRoutes],
  },
];

export default pageRoutes;
