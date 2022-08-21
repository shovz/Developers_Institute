import React, { Component } from 'react';
import {AppBar,Toolbar,Stack,Button } from '@mui/material'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
          <AppBar style={{backgroundColor:'lightblue'}} position='static'>
            <Toolbar>
              <Stack direction='row' spacing={2}>
               <Button variant="text"><Link style={{textDecoration:'none'}} to='/'>Home</Link></Button>
               <Button variant="text"><Link style={{textDecoration:'none'}}  to='/Favorites'>Favorites</Link></Button>
              </Stack>
            </Toolbar>
          </AppBar>
        );
    }
}

export default Navbar;