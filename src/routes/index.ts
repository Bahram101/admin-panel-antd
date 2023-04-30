import Home from "../pages/Home";
import Hrmda from "../pages/Hrmda";
import Products from "../pages/Products";

export interface IRoute {
  path: string;
  element: React.ComponentType
}

export enum RouteNames {
  HOME = "/",
  PRODUCTS = "/products",
  HRMDA = "/hr/report/hrmda",
}

export const routes  = [
  { path: '/', element: Home },
  { path: '/products', element: Products },
  { path: '/hr/report/hrmda', element: Hrmda },
];
