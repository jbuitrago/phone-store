import { takeLatest, call, put } from "redux-saga/effects";
import API from "./api";
import {GET_PRODUCTS_LIST, GET_PRODUCT_DETAIL ,POST_PRODUCT_CART, POST_PRODUCT_CART_SUCCESS} from "../redux/constants/productConstant"
import { getProductsListSuccess,getProductDetailSuccess,postProductCartSuccess } from "../redux/actions/productAction";

const getProductsList = async () => {
  return await API.get("/product")
  .catch((err) => {
    console.log(err);
  });
}

const getProductDetail = async (id) => {
  return await API.get(`/product/${id}`)
  .catch((err) => {
    console.log(err);
  });
}

const postProductCart = async (data) => {
  console.log("postProductCart:***");
  console.log(data);
  
  const config = {
    headers: {
    'Content-Type': 'application/json'
    }
};
  return await API.post("/cart",data,config)
  .catch((err) => {
    console.log(err);
  });
}

function* getProductsListSaga(action){
  try {
    const response = yield call(getProductsList, action.payload);
    const { data, status } = response
    if (status === 200) {
      
      yield put(getProductsListSuccess(data));

      
    } else {
      //TODO:put(getProductListFailed)
      console.log("Error on getProductsListSaga")
    }
  } catch (error) {
    console.log("Error:", error)
  }
}

function* getProductDetailSaga(action){
  try {
    const response = yield call(getProductDetail, action.payload);
    const { data, status } = response
    if (status === 200) {
      yield put(getProductDetailSuccess(data));
    } else {
      console.log("Error on getProductDetail")
    }
  } catch (error) {
    console.log("Error:", error)
  }

}

function* postProductCartSaga(action){
  try {
    const response = yield call(postProductCart, action.payload);
    console.log("RESPONSE:")
    console.log(response);
    const { data, status } = response
    if (status === 200) {
      yield put(postProductCartSuccess(data));
      localStorage.setItem("totalCart", data.count);
      
    } else {
      console.log("Error on getProductDetail")
    }
  } catch (error) {
    console.log("Error:", error)
  }

}

export default function* authSagas() {
  yield takeLatest(GET_PRODUCTS_LIST, getProductsListSaga);
  yield takeLatest(GET_PRODUCT_DETAIL, getProductDetailSaga);
  yield takeLatest(POST_PRODUCT_CART, postProductCartSaga);
  yield takeLatest(POST_PRODUCT_CART_SUCCESS, postProductCartSuccess);
  
  
}
