import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';

/**
 * Componente que recibe una url de imagen  y la muestra por pantalla
 */

const Image = ({ imgUrl }) => {
	return (
		<Card sx={{ p: 2 }}>
			<CardActionArea>
				<CardMedia component="img" image={imgUrl} />
			</CardActionArea>
		</Card>
	);
};

export default Image;
