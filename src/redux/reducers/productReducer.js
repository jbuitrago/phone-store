import {
	GET_PRODUCTS_LIST,
	GET_PRODUCTS_LIST_SUCCESS,
	GET_PRODUCT_DETAIL,
	GET_PRODUCT_DETAIL_SUCCESS,
	SET_PRODUCT_ID,
	POST_PRODUCT_CART,
	POST_PRODUCT_CART_SUCCESS,
	SET_PRODUCT_LIST,
} from '../constants/productConstant';

const INITIAL_STATE = {
	count: 0,
	products: [],
	productId: null,
	productDetail: {},
	productCart: {},
	total: 0,
	productSearch: [],
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_PRODUCTS_LIST:
			return {
				...state,
			};
		case GET_PRODUCTS_LIST_SUCCESS:
			return {
				...state,
				products: action.payload,
				productSearch: action.payload,
			};
		case SET_PRODUCT_ID:
			return {
				...state,
				productId: action.payload,
			};
		case GET_PRODUCT_DETAIL:
			return {
				...state,
				productId: action.payload,
			};
		case GET_PRODUCT_DETAIL_SUCCESS:
			return {
				...state,
				productDetail: action.payload,
			};
		case POST_PRODUCT_CART:
			return {
				...state,
				productCart: action.payload,
			};
		case POST_PRODUCT_CART_SUCCESS:
			return {
				...state,
				total: action.payload,
			};
		case SET_PRODUCT_LIST:
			return {
				...state,
				products: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
