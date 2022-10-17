import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

/**
 * Componente que muestra la descripcion del producto
 */
const Description = ({ data }) => {
	const {
		battery,
		brand,
		cpu,
		dimentions,
		displayResolution,
		model,
		os,
		price,
		primaryCamera,
		ram,
		secondaryCmera,
	} = data;

	return (
		<Card sx={{ p: 2 }}>
			<CardContent>
				<Typography gutterBottom>
					<b>Marca:</b>&ensp;{brand}
				</Typography>
				<Typography gutterBottom>
					<b>Modelo:</b>&ensp;{model}
				</Typography>
				<Typography gutterBottom>
					<b>Precio:</b>&ensp;$ {price}
				</Typography>
				<Typography gutterBottom>
					<b>Cpu:</b>&ensp;{cpu}
				</Typography>
				<Typography gutterBottom>
					<b>Ram:</b>&ensp;{ram}
				</Typography>
				<Typography gutterBottom>
					<b>Sitema Operativo:</b>&ensp;{os}
				</Typography>
				<Typography gutterBottom>
					<b>Resolucion de Pantalla:</b>&ensp;{displayResolution}
				</Typography>
				<Typography gutterBottom>
					<b>Bateria:</b>&ensp;{battery}
				</Typography>
				<Typography gutterBottom>
					<b>Camara principal:</b>&ensp;{primaryCamera}
				</Typography>
				<Typography gutterBottom>
					<b>Camara secundaria:</b>&ensp;{secondaryCmera}
				</Typography>
				<Typography gutterBottom>
					<b>Dimensiones:</b>&ensp;{dimentions}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Description;
