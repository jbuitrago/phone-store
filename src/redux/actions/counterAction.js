import {
    GET_PRODUCTS_LIST,
    GET_PRODUCTS_LIST_SUCCESS,
    GET_PRODUCT_DETAIL,
    GET_PRODUCT_DETAIL_SUCCESS,
    SET_PRODUCT_ID,
} from '../constants/counterConstant'

export const getProductsList = () => {
    return {
        type: GET_PRODUCTS_LIST,
    }
}

export const getProductsListSuccess = (data) => {
    return {
        type: GET_PRODUCTS_LIST_SUCCESS,
        payload: data,
    }
}

export const setProductId = (id) => {


    return {
        type: SET_PRODUCT_ID,
        payload:id
    }
}

export const getProductDetail = (id) => {
    return {
        type: GET_PRODUCT_DETAIL,
        payload:id
    }
}

export const getProductDetailSuccess = (data) => {
    return {
        type: GET_PRODUCT_DETAIL_SUCCESS,
        payload: data,
    }
}
