import { takeLatest, call, put } from 'redux-saga/effects';
import API from './api';
import {
	GET_PRODUCTS_LIST,
	GET_PRODUCT_DETAIL,
	POST_PRODUCT_CART,
} from '../redux/constants/productConstant';
import {
	getProductsListSuccess,
	getProductDetailSuccess,
	postProductCartSuccess,
} from '../redux/actions/productAction';

/**
 * Obtener el listado de productos
 */
const getProductsList = async () => {
	return await API.get('/product').catch(err => {
		console.log(err);
	});
};

/**
 * Obtener el Detalle de producto
 */
const getProductDetail = async id => {
	return await API.get(`/product/${id}`).catch(err => {
		console.log(err);
	});
};

/**
 * Añadir producto a la cesta
 */
const postProductCart = async data => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	return await API.post('/cart', data, config).catch(err => {
		console.log(err);
	});
};

/**
 *
 * @param {*} action
 */
function* getProductsListSaga(action) {
	try {
		const response = yield call(getProductsList, action.payload);
		const { data, status } = response;
		if (status === 200) {
			yield put(getProductsListSuccess(data));
		} else {
			// TODO:put(getProductListFailed)
			console.log('Error on getProductsListSaga');
		}
	} catch (error) {
		// TODO:put(getProductsListFail)
		console.log('Error:', error);
	}
}

/**
 *
 * @param {*} action
 */
function* getProductDetailSaga(action) {
	try {
		const response = yield call(getProductDetail, action.payload);
		const { data, status } = response;
		if (status === 200) {
			yield put(getProductDetailSuccess(data));
		} else {
			console.log('Error on getProductDetail');
		}
	} catch (error) {
		console.log('Error:', error);
	}
}

/**
 *
 * @param {*} action
 */
function* postProductCartSaga(action) {
	try {
		const response = yield call(postProductCart, action.payload);
		console.log(response);
		let total = 0;
		const { data, status } = response;
		if (status === 200) {
			total =
				Number(data.count) === 1
					? Number(localStorage.getItem('totalCart')) + 1
					: Number(data.count);

			localStorage.setItem('totalCart', total);
			// FIXME: El api /cart me retorna siempre count:1, con postman funciona bien pero desde react,curl siempre me da 1, por eso lo hice de esta manera
			yield put(postProductCartSuccess(total));
		} else {
			// TODO: crear postProductCartFail
			console.log('Error on getProductDetail');
		}
	} catch (error) {
		console.log('Error:', error);
	}
}

export default function* authSagas() {
	yield takeLatest(GET_PRODUCTS_LIST, getProductsListSaga);
	yield takeLatest(GET_PRODUCT_DETAIL, getProductDetailSaga);
	yield takeLatest(POST_PRODUCT_CART, postProductCartSaga);
}
