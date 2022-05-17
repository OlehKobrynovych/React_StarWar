import React from "react";
import { NavLink} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbarr = () => {
    console.log('Navbarr');

    return (
        
        <Box sx={{ flexGrow: 1 }} my={2} >
          <AppBar position="static">
            <Toolbar>
              <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              >
              <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                      <NavLink className='menu' to='/dashboard'>Dashboard</NavLink>
                      <NavLink className='menu' to='/peoples' >Peoples</NavLink>
                      <NavLink className='menu' to='/planets' >Planets</NavLink>
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>


    )
}

export default React.memo(Navbarr);