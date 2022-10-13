// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom'
//import ROUTES from '../../utils/routes'
import { useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import { useDispatch, useSelector } from 'react-redux/es/exports'
// eslint-disable-next-line no-unused-vars
import {
    setProductId,
    getProductDetail,
    // eslint-disable-next-line no-unused-vars
    postProductCart,
} from '../../redux/actions/productAction'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const detail = () => {
    const dispatch = useDispatch()
   

    let productDetail = useSelector((state) => state.product.productDetail)
    //const [detail, setDetail] = useState(productDetail);
    const routeParams = useParams()
    useEffect(() => {
        dispatch(setProductId(routeParams.id))
    }, [routeParams.id])

    useEffect(() => {

        if (!productDetail.length) {
            dispatch(getProductDetail(routeParams.id))
            //setDetail(productDetail)
        }
       
    }, [])

    /*const onSubmit = (e) => {
 
     e.preventDefault()
      // eslint-disable-next-line no-unused-vars
      const data = {
        id: routeParams.id,
        colorCode: 1,
        storageCode: 2,
    }

    setDetail(productDetail)
    dispatch(postProductCart(data))

    }*/
    

    //console.log("DETAILS:***",detail);
    console.log("MODELO:",productDetail.model)
    return (
        
        <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>

    )
}

export default detail

        {/*<div>
            <p>Detail</p>
           
            <form onSubmit={onSubmit}>
                <label>
                    <b>Battery:</b>
                    <p>{productDetail.battery!==undefined?productDetail.battery:detail.battery }</p>
                </label>
                <label>
                    <b>Modelo:</b>
                    <p>{productDetail.model!==undefined?productDetail.model:detail.model }</p>
                </label>
                <button type="submit" className="btn btn-default">
                    Submit
                </button>
            </form>
            <Link to={ROUTES.HOME}>Back to home page</Link>

    </div>*/}