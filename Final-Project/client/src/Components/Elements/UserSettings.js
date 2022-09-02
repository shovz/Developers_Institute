import {Box,Typography,IconButton,Avatar,Menu} from '@mui/material'
import {useState} from 'react';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
// import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import {setAccessToken, isSignedIn } from '../../Redux/Actions/LoginRegisterAction';

const settings = ['Profile', 'Analytics', 'Signout'];

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
    console.log(event.target.id);
    switch (event.target.id) {
      case "Profile":
          navigate('/profile');
        break;
      case "Analytics":
          navigate('/analytics');
        break;
      case "Signout":
            props.dispatch(isSignedIn(false));
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
            <Avatar/>
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
    accessToken  : state.accessToken,
    isSignedIn : state.isSignedIn
  }
}
export default  connect(mapStateToProps)(UserSettings);