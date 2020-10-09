import Login from './components/authentification/Login';
import Register from './components/authentification/Register';
import ProductDetails from './views/product/ProductDetails';
const { default: HomePage } = require('./views/HomePage');

const Routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/productDetails/:id',
    component: ProductDetails
  },
  {
    protected: true,
    path: '/product/add',
    component: Login
  }
];

export default Routes;
