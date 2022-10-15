import React from 'react'

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import  Copyright from '../Copyright'

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography
      variant="subtitle1"
      align="center"
      color="text.secondary"
      component="p"
    >
      Phone Store
    </Typography>
    <Copyright />
  </Box>
  )
}

export default Footer