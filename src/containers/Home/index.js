import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Search from '../../components/Search';
import ProductList from '../../components/Product/ProductList';

const Home = () => {
	return (
		<>
			<Grid container sx={{ p: 2 }}>
				<Search />
			</Grid>
			<Grid container spacing={4}>
				<ProductList></ProductList>
			</Grid>
		</>
	);
};

export default Home;
