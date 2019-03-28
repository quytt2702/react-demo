import * as types from 'base/constants/ActionTypes';

const listProduct = () => {
    return {
        type: types.LIST_PRODUCT
    }
};

const addProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
};

const deleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id  : id
    }
};

const generateProduct = () => {
    return {
        type: types.GENERATE_PRODUCT,
    }
};


export {listProduct, addProduct, deleteProduct, generateProduct};