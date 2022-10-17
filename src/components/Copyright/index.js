import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

/**
 * Componente que muestra el Copyright
 */
const Copyright = () => {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				{}
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

export default Copyright;
