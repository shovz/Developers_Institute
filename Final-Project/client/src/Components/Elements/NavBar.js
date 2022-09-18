import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import {AppBar,Toolbar,Typography,Container,Button,Stack} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import UserSettings from './UserSettings'
import {setAccessToken } from '../../Redux/Actions/LoginRegisterAction';
import { setUserId } from '../../Redux/Actions/DashboardAction';
import {setprofile} from '../../Redux/Actions/Profile'


const NavBar = (props) => {
  let navigate = useNavigate();

  useEffect (()=>{
      try {
        if(props.accessToken){
          const decode = jwt_decode(props.accessToken)
          const timeout = decode.exp*1000 - new Date().getTime();
          const id = decode.user_id;
          // console.log('shoval getProfile ',id);

          props.dispatch(setUserId(id));
          getProfile(id);
          setTimeout(() => {
            props.dispatch(setAccessToken('')); 
            localStorage.removeItem('accessToken');
            navigate('/')
          }, timeout);
        }
      } catch (e) {
        console.log(e);
      }
  },[props.accessToken])

  const getProfile = async(user_id) => {
    // console.log('shoval getProfile ',user_id);
        try{
        const profile = await axios.post('/profile',{
          user_id
        },{
          withCredentials:true,
          headers:{
            'Content-Type':'application/json'
          }
        });
        console.log('shoval get profile',profile.data[0]);
        localStorage.setItem('profile',JSON.stringify(profile.data[0]));
        props.dispatch(setprofile(profile.data[0]));

      }
    catch(e){
        console.log(e);
     }
  };

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
          props.accessToken? (
            <>
            <Button color="secondary" variant="contained"  component={Link} to={'/dashBoard'}>DashBoard</Button>
            <Button color="secondary" variant="contained"  component={Link} to={'/analytics'}>Analytics</Button>
            </>
          ): null
          }

          </Stack>

          {
            !props.accessToken? (
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
    accessToken  : state.setInitState.accessToken,
    application : state.setjobApp,

  }
}

export default  connect(mapStateToProps)(NavBar);