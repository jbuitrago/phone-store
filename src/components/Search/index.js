import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setProductList } from '../../redux/actions/productAction';

const Search = () => {
	const dispatch = useDispatch();
	const productList = useSelector(state => state.product.productSearch);
	const [filteredResults, setFilteredResults] = useState([]);
	const [searchInput, setSearchInput] = useState('');

	/**
	 * Componente que filtra resultados en la lista de copia productSearch
	 */
	const searchItems = searchValue => {
		setSearchInput(searchValue);
		// Guardamos en session el valor de busqueda
		localStorage.setItem('searchValue', searchValue);

		if (searchInput !== '') {
			const filteredData = productList.filter(
				x =>
					x.brand.toUpperCase().includes(searchValue.toUpperCase()) ||
					x.model.toUpperCase().includes(searchValue.toUpperCase())
			);
			setFilteredResults(filteredData);
		} else {
			setFilteredResults(productList);
		}
		dispatch(setProductList(filteredResults));
	};

	return (
		<Paper
			component="form"
			sx={{
				p: '2px 4px',
				display: 'flex',
				alignItems: 'center',
				width: 400,
			}}
		>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Buscar"
				inputProps={{ 'aria-label': 'search google maps' }}
				name="searchInput"
				onInput={e => searchItems(e.target.value)}
				defaultValue={localStorage.getItem('searchValue')}
			/>
			<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
				<SearchIcon />
			</IconButton>
		</Paper>
	);
};

export default Search;
