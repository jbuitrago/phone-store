import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import Grid from '@mui/material/Grid'
import ROUTES from '../../utils/routes'
import { Link } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
const Product = ({ data }) => {
    // eslint-disable-next-line no-unused-vars
    const { id, brand, imgUrl, model, price } = data

    return (
        <Grid item key={id} xs={12} sm={6} md={3}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={imgUrl}
                        alt={model}
                        height="50%"
                    />
                    <CardContent>
                        <Typography gutterBottom component="div">
                            {model}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {brand}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            $ {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`${ROUTES.PRODUCT_DETAIL}/${id}`}>
                        <Button size="small" color="primary">
                            info
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Product
