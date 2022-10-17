import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import ROUTES from '../../utils/routes';
import { Link } from 'react-router-dom';

/**
 * Componente que consulta el producto
 */

const ProductItem = ({ data }) => {
	const { id, brand, imgUrl, model, price } = data;

	return (
		<Grid item key={id} xs={12} sm={6} md={3}>
			<Card>
				<CardActionArea>
					<CardMedia component="img" image={imgUrl} alt={model} />
					<CardContent>
						<Typography variant="body2" color="text.secondary">
							{model}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{brand}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							$ {price}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button component={Link} to={`${ROUTES.PRODUCT_DETAIL}/${id}`}>
						VER MAS
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default ProductItem;
