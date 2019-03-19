import {createStore, combineReducers, applyMiddleware} from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from "redux-thunk";
import {SEO} from './seo';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import {reducer as toastrReducer} from 'react-redux-toastr'

let rootReducer = combineReducers({
  reduxAsyncConnect,
  routing: routerReducer,
  SEO,
  toastr: toastrReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export {store, rootReducer};
