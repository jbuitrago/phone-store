import {GET_PRODUCTS_LIST, GET_PRODUCTS_LIST_SUCCESS,GET_PRODUCT_DETAIL,GET_PRODUCT_DETAIL_SUCCESS} from "../constants/counterConstant"


export const getProductsList = () => {
	return {
		type: GET_PRODUCTS_LIST,
	};
};

export const getProductsListSuccess = (data) => {
	return {
		type: GET_PRODUCTS_LIST_SUCCESS,
    payload: data
	};
};


export const getProductDetail = () => {
	return {
		type: GET_PRODUCT_DETAIL,
	};
};

export const getProductDetailSuccess = (data) => {
	return {
		type: GET_PRODUCT_DETAIL_SUCCESS,
    payload: data
	};
};