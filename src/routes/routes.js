import App from 'src/app';
import {HomePage, Login, ListProductContainer, CreateProductContainer, Demo} from "components/pages";


const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: HomePage },
      { path: '/login', exact: true, component: Login },
      { path: '/products', exact: true, component: ListProductContainer },
      { path: '/products/create', exact: true, component: CreateProductContainer },
      { path: '/demo', exact: true, component: Demo }
    ]
  }
];

export default routes;
