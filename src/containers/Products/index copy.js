import React from 'react'
import ROUTES from "../../utils/routes";
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

const Product = ({ productData }) => {
    const { id, brand, imgUrl, model, price } = productData
    return (
        <Grid item key={id} xs={12} sm={6} md={3}>
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <CardMedia component="img" image={imgUrl} alt="random" />
                <CardContent sx={{ flexGrow: 2 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {brand}
                    </Typography>
                    <Typography>
                        {model} $ {price}
                    </Typography>
                </CardContent>
                <CardActions>  
                  <Link to={`${ROUTES.PRODUCT_DETAIL}/${id}`}>Info</Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Product
