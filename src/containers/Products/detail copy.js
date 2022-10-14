import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
//import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import Grid from '@mui/material/Grid'
import ROUTES from '../../utils/routes'
import { Link , useNavigate} from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
const detail = () => {
    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate();

    return (
        <Grid  container  sx={{ p: 2 }}>
            <Card>
                <CardActionArea>
                    
                    <CardContent>
                        <Typography gutterBottom component="div">
                       
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                     
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                     
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>

               
                </CardActions>
            </Card>
            <Card>
                <CardActionArea>
                    
                    <CardContent>
                        <Typography gutterBottom component="div">
                       
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                     
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                     
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button
                        component={Link}
                        to={`${ROUTES.HOME}`}
                    >
                       REGRESAR
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default detail


/*import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
//import { useTheme } from '@mui/material/styles';
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
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
          //setDetail(productDetail)
      }
     
  }, [])

    return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
          
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={productDetail.imgUrl}
        alt="Live from space album cover"
      />
    </Card>
    )
  }
  
  export default detail
  */

/*
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
//import { Link } from 'react-router-dom'
//import ROUTES from '../../utils/routes'
import { useParams } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'

import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
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
}))

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

    console.log(productDetail)
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

    }

    //console.log("DETAILS:***",detail);
    console.log('MODELO:', productDetail.model)
    return (
      <Grid item >
            <Grid>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={productDetail.imgUrl}
                            alt=""
                        />
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                    <CardContent>
                        <Typography gutterBottom component="div">
                            {productDetail.model}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {productDetail.brand}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            $ {productDetail.price}
                        </Typography>
                    </CardContent>
                    </Card>
                    <Item>xs=4</Item>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default detail
*/
{
    /*<div>
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

    </div>*/
}
