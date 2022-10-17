import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux/es/exports';

/**
 * Componente que muestra el Header de la aplicacion y el total del carrito de compras
 */

const Header = () => {
	let totalCart = useSelector(state => state.product.total);
	// FIXME: El api /cart me retorna siempre count:1, con postman funciona bien pero desde react,curl siempre me da 1, por eso lo hice de esta manera
	if (localStorage.getItem('totalCart') && totalCart === 0) {
		totalCart = localStorage.getItem('totalCart');
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
					>
						<SmartphoneIcon />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ display: { xs: 'none', sm: 'block' } }}
					>
						Zara Phone
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<IconButton
							size="large"
							aria-label="show 4 new mails"
							color="inherit"
						>
							<Badge badgeContent={totalCart} color="error">
								<ShoppingCartIcon />
							</Badge>
						</IconButton>
						<IconButton
							size="large"
							aria-label="show 17 new notifications"
							color="inherit"
						></IconButton>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
