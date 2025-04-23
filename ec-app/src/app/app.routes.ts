// src/app/app.routes.ts
import { RouteObject } from 'react-router-dom';
import pageRoutes from './pages/page.routes';

const appRoutes: RouteObject[] = [...pageRoutes];

export default appRoutes;
