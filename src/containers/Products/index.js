import React from 'react'
import ROUTES from "../../utils/routes";
import { Link } from "react-router-dom"

const Product = ({ productData }) => {
  const { id,brand, model } = productData;
  return (
    <div>
         Modelo:{model}
         Marca: {brand}
       <Link to={`${ROUTES.PRODUCT_DETAIL}/${id}`}>Id {id} </Link>
    </div>
  )
}

export default Product