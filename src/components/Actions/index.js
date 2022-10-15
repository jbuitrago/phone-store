import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ROUTES from "../../utils/routes";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { postProductCart } from "../../redux/actions/productAction";

const Actions = ({ options, productId }) => {
    const dispatch = useDispatch();
    const { ap, colors, storages } = options;
    const [colorSelect, setColorSelect] = useState(null);
    const [storageSelect, setStorageSelect] = useState(null);

    // Setear valores de color y almacenamiento
    const handleRadioChange = (event) => {
        if (event.target.name === "colors") {
            setColorSelect(event.target.value);
        }
        if (event.target.name === "storages") {
            setStorageSelect(event.target.value);
        }
    };

    // Enviar datos para cart
    const onSubmit = (e) => {
        e.preventDefault();
        if (colorSelect !== null && storageSelect !== null) {
            const data = {
                id: productId,
                colorCode: colorSelect,
                storageCode: storageSelect,
            };

            console.log(data);
            dispatch(postProductCart(data));
        }
    };


    return (
        <Card sx={{ p: 2 }}>
            <CardContent>
                Colores:{colorSelect}
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="colors"
                    onChange={handleRadioChange}
                >
                    {colors.map((color) => {
                        return (
                            <FormControlLabel
                                key={color.code}
                                value={color.code}
                                control={<Radio />}
                                label={color.name}
                                color={color.name}
                            />
                        );
                    })}
                </RadioGroup>
                Almacenamiento: {storageSelect}
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="storages"
                    onChange={handleRadioChange}
                >
                    {storages?.map((storage) => {
                        return (
                            <FormControlLabel
                                key={storage.code}
                                value={storage.code}
                                control={<Radio />}
                                label={storage.name}
                                color={storage.name}
                            />
                        );
                    })}
                </RadioGroup>
            </CardContent>
            <CardActions>
                <Button onClick={(e) => onSubmit(e)}>COMPRAR</Button>
                <Button component={Link} to={`${ROUTES.HOME}`}>
                    REGRESAR
                </Button>
            </CardActions>
        </Card>
    );
};

export default Actions;
