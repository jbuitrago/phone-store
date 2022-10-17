import React, { useEffect } from 'react';
import ProductItem from './ProductItem';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getProductsList } from '../../redux/actions/productAction';

/**
 * Componente que consulta el api de productos , obtiene los datos de api con ayuda de la saga getProductsList
 */
const ProductList = () => {
	console.log('ProductList');
	const dispatch = useDispatch();
	const productList = useSelector(state => state.product.products);
	useEffect(() => {
		if (!productList.length) {
			dispatch(getProductsList());
		}
	}, []);

	return (
		<>
			{productList.length > 0 &&
				productList?.map(product => {
					return <ProductItem data={product} key={product.id} />;
				})}
		</>
	);
};

export default ProductList;
