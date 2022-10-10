import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../utils/routes'
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux/es/exports'
import { setProductId, getProductDetail } from '../../redux/actions/counterAction'




const ProductDetail = () => {
    const dispatch = useDispatch()
    const productDetail = useSelector((state) => state.counter.productDetail)
    const routeParams = useParams();
    useEffect(() => {
        dispatch(setProductId(routeParams.id));
    }, [routeParams.id]);

    useEffect(() => {
        console.log("useEffect productDetail:")
        console.log(routeParams.id);
        if (!productDetail.length) {
            dispatch(getProductDetail(routeParams.id))
        }
    }, [])

    console.log(productDetail);

    return (
        <div>
            <p>Detail</p>
            <>Battery:{productDetail.battery}</>
            <Link to={ROUTES.HOME}>Back to home page</Link>
        </div>
    )
}

export default ProductDetail
