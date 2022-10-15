import {
    GET_PRODUCTS_LIST,
    GET_PRODUCTS_LIST_SUCCESS,
    GET_PRODUCT_DETAIL,
    GET_PRODUCT_DETAIL_SUCCESS,
    SET_PRODUCT_ID,
    POST_PRODUCT_CART,
    POST_PRODUCT_CART_SUCCESS,
} from "../constants/productConstant"

const INITIAL_STATE = {
    count: 0,
    products: [],
    productId: null,
    productDetail: {},
    productCart: {},
    total: 0,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCTS_LIST:
            return {
                ...state,
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
            }
        case GET_PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                productDetail: action.payload,
            }
        case POST_PRODUCT_CART:
            console.log("POST_PRODUCT_CART:***")
            console.log(action.payload)
            return {
                ...state,
                productCart: action.payload,
            }
        case POST_PRODUCT_CART_SUCCESS:
            console.log("POST_PRODUCT_CART_SUCCESS:***")

            return {
                ...state,
                productDetail: action.payload,
                total: localStorage.getItem("totalCart"),
            }
        default:
            return state
    }
}

export default reducer
