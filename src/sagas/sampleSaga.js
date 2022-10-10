import { takeLatest, call, put } from "redux-saga/effects";
import API from "./api";
import {GET_PRODUCTS_LIST, GET_PRODUCT_DETAIL} from "../redux/constants/counterConstant"
import { getProductsListSuccess,getProductDetailSuccess } from "../redux/actions/counterAction";


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

function* getProductsListSaga(action){
  try {
    const response = yield call(getProductsList, action.payload);
    const { data, status } = response
    if (status === 200) {
      yield put(getProductsListSuccess(data));
    } else {
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
export default function* authSagas() {
  yield takeLatest(GET_PRODUCTS_LIST, getProductsListSaga);
  yield takeLatest(GET_PRODUCT_DETAIL, getProductDetailSaga);
}
