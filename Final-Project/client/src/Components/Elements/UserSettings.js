import {Box,Typography,IconButton,Menu} from '@mui/material'
import {useState} from 'react';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import {setAccessToken} from '../../Redux/Actions/LoginRegisterAction';
import Avatar from "boring-avatars";

const settings = ['Profile', 'DashBoard','Analytics', 'Signout'];

function UserSettings(props) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  let navigate = useNavigate();


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSettingClick= (event) => {
    switch (event.target.id) {
      case "Profile":
          navigate('/profile');
        break;
      case "DashBoard":
        navigate('/dashBoard');
      break;
      case "Analytics":
          navigate('/analytics');
        break;
      case "Signout":
            localStorage.removeItem('accessToken');
            props.dispatch(setAccessToken('')); 
            axios.delete('/signOut')
            .then(() => navigate('/'));
        break;
    
      default: handleCloseUserMenu()
        break;
    }
  };


  return (
    <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              size={40}
              name={props.profile.fname? props.profile.fname:null}
              square             
              variant="beam"
              colors={["#ffdc08", "#C4B232", "#0c8f8f", "#FFDC08", "#0c8f8f"]}
            />

            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}  onClick={handleSettingClick}>
                  <Typography id={setting} textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
  )
}

const mapStateToProps=(state)=>{
  return {
    accessToken  : state.setInitState.accessToken,
    isSignedIn : state.setInitState.isSignedIn,
    application : state.setjobApp,
    profile : state.setInitState.profile,


  }
}
export default  connect(mapStateToProps)(UserSettings);