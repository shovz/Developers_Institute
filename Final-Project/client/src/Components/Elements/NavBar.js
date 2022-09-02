import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import {AppBar,Box,Toolbar,Typography,Container,Button,Stack} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import UserSettings from './UserSettings'
import {setAccessToken, isSignedIn } from '../../Redux/Actions/LoginRegisterAction';


const NavBar = (props) => {
  let navigate = useNavigate();

  useEffect (()=>{
      try {
          if(props.accessToken){
            const decode = jwt_decode(props.accessToken)
            const timeout = decode.exp*1000 - new Date().getTime();
            setTimeout(() => {
              props.dispatch(isSignedIn(false));
              props.dispatch(setAccessToken('')); 
              alert('session expired');
              navigate('/')
            }, timeout);
          }
    } catch (e) {
      console.log(e);
    }
  })

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            component={Link}
            to="/"
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>


          <Stack direction="row"  spacing={2} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button color="secondary" variant="contained"  component={Link} to={'/'}>Home</Button>
         {
          props.isSignedIn===true? (
            <>
            <Button color="secondary" variant="contained"  component={Link} to={'/DashBoard'}>DashBoard</Button>
            <Button color="secondary" variant="contained"  component={Link} to={'/analytics'}>Analytics</Button>
            </>
          ): null
          }

          </Stack>

          {
            props.isSignedIn===false? (
              <Stack direction="row"  spacing={2} >
              <Button color="secondary"  variant="contained" component={Link} to={'/register'}>Register</Button>
              <Button color="secondary" variant="contained"  component={Link} to={'/signIn'}>SignIn</Button>
            </Stack>
            ): <UserSettings/>
          }


        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapStateToProps=(state)=>{
  return {
    accessToken  : state.accessToken,
    isSignedIn : state.isSignedIn
  }
}

export default  connect(mapStateToProps)(NavBar);