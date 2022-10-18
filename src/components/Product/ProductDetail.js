import React, { useEffect } from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Image from '../Image';
import Description from '../Description';
import Actions from '../Actions';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom';
import {
	setProductId,
	getProductDetail,
} from '../../redux/actions/productAction';
import { setWithExpiry, getWithExpir } from '../../utils/cache';

/**
 * Componente que consulta el detalle del producto,obtiene los datos de api con ayuda de la saga getProductDetail
 */

const ProductDetail = () => {
	const dispatch = useDispatch();

	const productDetail = useSelector(state => state.product.productDetail);
	// const [detail, setDetail] = useState(productDetail);
	const routeParams = useParams();
	useEffect(() => {
		dispatch(setProductId(routeParams.id));
	}, [routeParams.id]);

	useEffect(() => {
		if (!productDetail.length) {
			dispatch(getProductDetail(routeParams.id));
		}
	}, []);

	return (
		<Box sx={{ flexGrow: 4 }}>
			<Grid container spacing={4} sx={{ p: 2 }}>
				<Grid item xs={4}>
					<Image imgUrl={productDetail.imgUrl} />
				</Grid>
				<Grid item xs={8}>
					<Description data={productDetail} />
					<br></br>
					{productDetail.options !== undefined && (
						<Actions
							options={productDetail.options}
							productId={routeParams.id}
						/>
					)}
				</Grid>
			</Grid>
		</Box>
	);
};

export default ProductDetail;
