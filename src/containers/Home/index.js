import React, { useEffect } from 'react'
import Products from '../Products/'
//import Search from '../../components/Search'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { getProductsList } from '../../redux/actions/productAction'
import Grid from '@mui/material/Grid';
import Search from '../../components/Search'

const Home = () => {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.product.products)
    useEffect(() => {
        if (!productList.length) {
            dispatch(getProductsList())
        }
    }, [])
 
    return (
        <>
        <Grid container  sx={{ p: 2 }}>
        <Search />
        </Grid>
        <Grid container spacing={4}>
              {productList.length > 0 && productList?.map((product) => {
                  return (
                    <Products data={product} key={product.id} />  

                  )
              })} 
        </Grid>
        </>

    )
}

export default Home

