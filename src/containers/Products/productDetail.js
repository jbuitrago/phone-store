import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../utils/routes'
import { useParams } from "react-router-dom";

const ProductDetail = () => {

    const routeParams = useParams();
    console.log("params:***");
    console.log(routeParams);

    return (
        <div>
            <p>Detail</p>
            <>{routeParams.id}</>
            <Link to={ROUTES.HOME}>Back to home page</Link>
        </div>
    )
}

export default ProductDetail
