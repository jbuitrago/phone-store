import React, { useEffect } from 'react'

import Box from '@mui/material/Box'

import Grid from '@mui/material/Grid'
import Image from '../../components/Image'
import Description from '../../components/Description'
import Actions from '../../components/Actions'
import { useDispatch, useSelector } from 'react-redux/es/exports'
//import { useTheme } from '@mui/material/styles';
import { useParams } from 'react-router-dom'
import {
    setProductId,
    getProductDetail,
    // eslint-disable-next-line no-unused-vars
    postProductCart,
} from '../../redux/actions/productAction'



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
        }
    }, [])

    return (
        <Box sx={{ flexGrow: 4 }}>
            <Grid container spacing={4} sx={{ p: 2 }}>
                <Grid item xs={4}>
                    <Image img={productDetail.imgUrl} />
                </Grid>
                <Grid item xs={8}>
                    <Description data={productDetail} />
                    {productDetail.options !== undefined && (
                        <Actions
                            options={productDetail.options}
                            productId={routeParams.id}
                        />
                    )}
                </Grid>
            </Grid>
        </Box>
    )
}

export default detail
