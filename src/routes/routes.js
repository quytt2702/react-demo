import App from 'src/app';
import {HomePage, Login, ListProduct, CreateProduct, Demo} from "components/pages";


const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: HomePage },
      { path: '/login', exact: true, component: Login },
      { path: '/products', exact: true, component: ListProduct },
      { path: '/products/create', exact: true, component: CreateProduct },
      { path: '/demo', exact: true, component: Demo }
    ]
  }
];

export default routes;
