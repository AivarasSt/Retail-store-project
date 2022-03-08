import AdminPageLayout from 'components/layouts/admin-page-layout';
import AdminProducts from 'pages/admin-only/admin-products';
import AdminAddProduct from 'pages/admin-only/admin-add-product';
import ComingSoonPage from 'pages/coming-soon';
import PageLayout from '../components/layouts/page-layout';

// no-auth
import HomePage from '../pages/home-page';
import ProductPage from '../pages/product-page';
import ErrorPage from '../pages/error-page';
import ShopPage from '../pages/shop-page';
import MensWatchesPage from '../pages/mens-watches';
import WomensWatchesPage from '../pages/womens-watches';
import BrandPage from '../pages/brand-page';
import CartPage from '../pages/cart-page';
// public-only
import AdminLoginPage from '../pages/public-only/admin-login-page';
// admin
import AdminDashboard from '../pages/admin-only/admin-dashboard';

export type LayoutPageName = 'PageLayout' | 'AdminPageLayout';
export type DynamicPageName = 'ErrorPage' | 'ProductPage';
export type ConcretePageName = 'HomePage' | 'CartPage' | 'ProductPage' | 'ShopPage' | 'MensWatchesPage' | 'WomensWatchesPage' | 'BrandPage' | 'AdminLoginPage' | 'AdminDashboard' | 'AdminProducts' | 'AdminAddProduct' | 'ComingSoonPage';

export type PageName = LayoutPageName | ConcretePageName | DynamicPageName;

export type PageRouteEnum = {
  [key in PageName]: React.FC
};

const pageRouteEnum: PageRouteEnum = {
  PageLayout,
  AdminPageLayout,
  HomePage,
  ProductPage,
  ShopPage,
  MensWatchesPage,
  WomensWatchesPage,
  BrandPage,
  CartPage,
  ComingSoonPage,
  AdminLoginPage,
  AdminDashboard,
  AdminProducts,
  AdminAddProduct,
  ErrorPage,
};

export default pageRouteEnum;
