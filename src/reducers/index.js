import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'
let rootReducer = combineReducers({
    toastr: toastrReducer
});

const store = createStore(reducers, applyMiddleware(thunk));
export {store, rootReducer};
