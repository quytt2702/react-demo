import {createStore, combineReducers, applyMiddleware} from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from "redux-thunk";
import {SEO} from './seo';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import {reducer as toastrReducer} from 'react-redux-toastr';
import {products} from './products';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let rootReducer = combineReducers({
  reduxAsyncConnect,
  routing: routerReducer,
  SEO,
  toastr: toastrReducer,
  products
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export {store, rootReducer};
