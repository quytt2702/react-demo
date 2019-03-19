import App from 'src/app';
import {HomePage, Login, ListProduct} from "components/pages";


const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: HomePage },
      { path: '/login', exact: true, component: Login },
      { path: '/products', exact: true, component: ListProduct }
    ]
  }
];

export default routes;
