const {
  default: HomePage
} = require('./pages/Home');

const Routes = [{
    path: '/',
    exact: true,
    component: HomePage
  },

];

export default Routes;