import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const Description = ({ data }) => {
  const { brand, cpu, model, price } = data
    return (
        <Card>
            <CardContent>
                <Typography variant="body2" color="text.primary">
                    Marca: {brand}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    Modelo: {model}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    Precio: $ {price}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    Cpu: {cpu}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Description
