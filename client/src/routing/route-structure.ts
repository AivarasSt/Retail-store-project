import { PageName, ConcretePageName, DynamicPageName } from './page-route-enum';
import {
  PUBLIC_ONLY,
  ADMIN,
  AuthType,
} from './auth-types';

export type RoutePageData = {
  index?: true,
  path?: string,
  auth?: AuthType
};

export type ConcreteRoutePageData = RoutePageData & {
  pageName: ConcretePageName,
};

export type DynamicRoutePageData = RoutePageData & {
  pageName: DynamicPageName,
};

export type RouteData = RouteLayoutData | ConcreteRoutePageData | DynamicRoutePageData;

export type RouteLayoutData = {
  path: string,
  pageName: PageName,
  childRoutes: Array<RouteData>
};

const dynamicSymbols = ['*', ':'];

export const isConcretePath = (path?: RoutePageData['path']): boolean => {
  if (path) {
    return dynamicSymbols.every((dynamicSymbol) => !path.includes(dynamicSymbol));
  }

  return false;
};

export const isIndexPage = (index: RoutePageData['index']): boolean => Boolean(index);

const routeStructure: Array<RouteData> = [
  {
    path: '/',
    pageName: 'PageLayout',
    childRoutes: [
      { index: true, pageName: 'HomePage' },
      { path: 'admin', pageName: 'AdminLoginPage', auth: PUBLIC_ONLY },
      { path: '*', pageName: 'ErrorPage' },
      { path: '/coming-soon', pageName: 'ComingSoonPage' },
    ],
  },
  {
    path: '/shop',
    pageName: 'PageLayout',
    childRoutes: [
      { index: true, pageName: 'ShopPage' },
      { path: 'mens', pageName: 'MensWatchesPage' },
      { path: 'womens', pageName: 'WomensWatchesPage' },
      { path: 'brands', pageName: 'BrandPage' },
      { path: 'cart', pageName: 'CartPage' },
      { path: 'product/:id', pageName: 'ProductPage' },
    ],
  },
  {
    path: '/admin',
    pageName: 'AdminPageLayout',
    childRoutes: [
      { path: 'dashboard', pageName: 'AdminDashboard', auth: ADMIN },
      { path: 'products', pageName: 'AdminProducts', auth: ADMIN },
      { path: 'addproduct', pageName: 'AdminAddProduct', auth: ADMIN },
      { path: 'editproduct/:id', pageName: 'AdminAddProduct', auth: ADMIN },
    ],
  },
];

export default routeStructure;
