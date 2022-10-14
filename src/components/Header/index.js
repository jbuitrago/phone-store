import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux/es/exports'

const Header = () => {
 let totalCart = useSelector((state) => state.product.total)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <SmartphoneIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Zara
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={totalCart} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
            </IconButton>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header

/*import React from 'react'
import AppBar from '@mui/material/AppBar';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {

  let totalCart = localStorage.getItem("totalCart");
  
  return (
    <AppBar position="relative">
    <Toolbar>
      <SmartphoneIcon sx={{ mr: 2 }} />
      <Typography variant="h6" color="" noWrap>
       Phone Store {totalCart}
      </Typography>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
    </Toolbar>
  </AppBar>
  )
}

export default Header*/