/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import ROUTES from '../../utils/routes'
import { Link } from 'react-router-dom'

const Actions = ({ options, productId }) => {
    console.log(options)

    const onSubmit = (e) => {
        e.preventDefault()
       const data = {
            id: productId,
            colorCode: 1,
            storageCode: 2,
        }
        
        alert(e.target)
    }
    return (
        <Card>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="colors"
                    >
                        <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                        />
                        <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                        />
                        <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="Other"
                        />
                    </RadioGroup>
                </Typography>
                <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" onClick={(e) => onSubmit(e)}>
                    AGREGAR AL CARRITO
                </Button>
                <Button component={Link} to={`${ROUTES.HOME}`}>
                    REGRESAR
                </Button>
            </CardActions>
        </Card>
    )
}

export default Actions
