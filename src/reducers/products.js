import * as types from 'base/constants/ActionTypes';
import {toastr} from "react-redux-toastr";

var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var generateId = () => {
    return s4() + s4() + '-' + s4() + s4() + '-' + 
        s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4();
}

var initialState = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

function products(state = initialState, action) {
    switch(action.type) {
        case types.LIST_PRODUCT:
            return state;
        case types.ADD_PRODUCT:
            state.push(action.product);
            localStorage.setItem('products', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT:
            state = state.filter((product) => {
                return product.id != action.id
            })
            
            localStorage.setItem('products', JSON.stringify(state));
            return [...state];
        case types.GENERATE_PRODUCT:
            let products = [
                {
                    id: generateId(),
                    vertion: 'Iphone',
                    name: 'xs mart',
                    price: '32.000.000 đ',
                },
                {
                    id: generateId(),
                    vertion: 'Samsung',
                    name: 's10',
                    price: '15.000.000 đ',
                },
                {
                    id: generateId(),
                    vertion: 'Oppo',
                    name: 'f7s',
                    price: '20.000.000 đ',
                }
            ];

            state = state.concat(products);
            localStorage.setItem('products', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

export { products };