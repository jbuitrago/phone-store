import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const Description = ({ data }) => {
    const {
        battery,
        brand,
        cpu,
        dimentions,
        displayResolution,
        model,
        os,
        price,
        primaryCamera,
        ram,
        secondaryCmera,
    } = data
    return (
        <Card sx={{ p: 2 }}>
            <CardContent>
                <Typography component={'span'} variant="body2" gutterBottom>
                    <b>Marca:</b>&ensp;{brand}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <b>Modelo:</b>&ensp;{model}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <b>Precio:</b>&ensp;$ {price}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <b>Cpu:</b>&ensp;{cpu}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <b>Ram:</b>&ensp;{ram}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <b>Sitema Operativo:</b>&ensp;{os}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <b>Resolucion de Pantalla:</b>&ensp;{displayResolution}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <b>Bateria:</b>&ensp;{battery}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <b>Camara principal:</b>&ensp;{primaryCamera}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <b>Camara secundaria:</b>&ensp;{secondaryCmera}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <b>Dimensionas:</b>&ensp;{dimentions}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Description
