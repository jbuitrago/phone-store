import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ROUTES from '../../utils/routes';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { postProductCart } from '../../redux/actions/productAction';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

/**
 * Componente que muestra las acciones,añade el producto al carrito al api con ayuda de la saga postProductCart
 */
const Actions = ({ options, productId }) => {
	const dispatch = useDispatch();
	const { colors, storages } = options;
	const [colorSelect, setColorSelect] = useState(null);
	const [storageSelect, setStorageSelect] = useState(null);
	const [helperText, setHelperText] = useState('');
	const [error, setError] = React.useState(false);
	// Setear valores de color y almacenamiento
	const handleRadioChange = event => {
		if (event.target.name === 'colors') {
			setColorSelect(event.target.value);
		}
		if (event.target.name === 'storages') {
			setStorageSelect(event.target.value);
		}
	};

	// Enviar datos para cart
	const onSubmit = e => {
		e.preventDefault();
		// Inicializar color y storage
		/* if (colors.length === 1) {
			setColorSelect(colors[0].code);
		}
		if (storages.length === 1) {
			setStorageSelect(storages[0].code);
		} */
		if (colorSelect !== null && storageSelect !== null) {
			const data = {
				id: productId,
				colorCode: colorSelect,
				storageCode: storageSelect,
			};
			dispatch(postProductCart(data));
			setHelperText('Se añadio el producto al carrito correctamente');
			setError(false);
		} else {
			setHelperText('Seleccione Color y Almacenamiento');
			setError(true);
		}
	};

	return (
		<Card>
			<CardContent>
				Colores:
				<RadioGroup
					row
					aria-labelledby="demo-controlled-radio-buttons-group"
					name="colors"
					onChange={handleRadioChange}
					/* defaultValue={
						colors !== undefined && colors.length === 1 ? colors[0].code : null
					} */
				>
					{colors.map(color => {
						return (
							<FormControlLabel
								key={color.code}
								value={color.code}
								control={<Radio />}
								label={color.name}
							/>
						);
					})}
				</RadioGroup>
				Almacenamiento:
				<RadioGroup
					row
					aria-labelledby="demo-controlled-radio-buttons-group"
					name="storages"
					onChange={handleRadioChange}
					/* defaultValue={
						storages !== undefined && storages.length === 1
							? storages[0].code
							: null
					} */
				>
					{storages?.map(storage => {
						return (
							<FormControlLabel
								key={storage.code}
								value={storage.code}
								control={<Radio />}
								label={storage.name}
							/>
						);
					})}
				</RadioGroup>
			</CardContent>
			<CardContent>
				{error === true && helperText && (
					<Alert severity="error">{helperText}</Alert>
				)}
				{error === false && helperText && (
					<Alert severity="success">{helperText}</Alert>
				)}
			</CardContent>
			<CardActions>
				<Button type="submit" onClick={e => onSubmit(e)}>
					AÑADIR
				</Button>
				<Button component={Link} to={`${ROUTES.HOME}`}>
					REGRESAR
				</Button>
			</CardActions>
		</Card>
	);
};

export default Actions;
