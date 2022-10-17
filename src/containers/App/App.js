import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
/* routes */
import ROUTES from '../../utils/routes';
import Home from '../Home';
import About from '../About';
import NotFound from '../NotFound';
import ProductDetail from '../../components/Product/ProductDetail';
import { setWithExpiry, getWithExpir } from '../../utils/cache';

const theme = createTheme();

/**
 * Componente principal
 */

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<main>
				{/* Container */}
				<Container maxWidth="md">
					<BrowserRouter>
						<Routes>
							<Route exact path={ROUTES.HOME} element={<Home />} />
							<Route exact path={ROUTES.ABOUT} element={<About />} />
							<Route
								path={`${ROUTES.PRODUCT_DETAIL}/:id`}
								element={<ProductDetail />}
							/>
							<Route path={'*'} element={<NotFound />} />
						</Routes>
					</BrowserRouter>
				</Container>
				{/* Container */}
			</main>
			{/* Footer */}
			<Footer />
			{/* End footer */}
		</ThemeProvider>
	);
};

export default App;
