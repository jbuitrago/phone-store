import { GET_PRODUCTS_LIST, GET_PRODUCTS_LIST_SUCCESS } from '../constants/counterConstant';

const INITIAL_STATE = {
	count: 0,
	products: []
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {

    case GET_PRODUCTS_LIST:
      return {
        ...state,
        products: [],
      };
    case GET_PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };

		default:
			return state;
	}
};

export default reducer;