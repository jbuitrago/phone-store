import {
    GET_PRODUCTS_LIST,
    GET_PRODUCTS_LIST_SUCCESS,
    GET_PRODUCT_DETAIL,
    GET_PRODUCT_DETAIL_SUCCESS,
    SET_PRODUCT_ID,
} from '../constants/counterConstant'

const INITIAL_STATE = {
    count: 0,
    products: [],
    productId:null,
    productDetail: {},
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCTS_LIST:
            return {
                ...state
            }
        case GET_PRODUCTS_LIST_SUCCESS:
            return {
                ...state,
                products: action.payload,
            }
        case SET_PRODUCT_ID:

            return {
                ...state,
                productId: action.payload,
            }
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                productId: action.payload,
                productDetail: {},
            }
        case GET_PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                productDetail: action.payload,
            }
        default:
            return state
    }
}

export default reducer
