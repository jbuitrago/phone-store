import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';

const NotFound = () => {
	return (
		<Grid container sx={{ p: 2 }}>
			Pagina no existe: <Link to={ROUTES.HOME}>Regresar a Home</Link>
		</Grid>
	);
};

export default NotFound;
