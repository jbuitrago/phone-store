import React from 'react'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'

const Image = ({ img }) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia component="img" image={img} />
            </CardActionArea>
        </Card>
    )
}

export default Image
