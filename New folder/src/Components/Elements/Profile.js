import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Typography,Button,Stack} from '@mui/material';
import Avatar from "boring-avatars";
import { setAccessToken } from '../../Redux/Actions/LoginRegisterAction';
import {useNavigate} from 'react-router-dom';

const Profile = (props) => {
  const {profile} = props;
  let navigate = useNavigate();

  const delUser = async(event) => {
    const {user_id} = props.application;
    console.log('shoval delUser ',user_id);
        try{
        const profile = await axios.post('/delUser',{
          user_id
        },{
          withCredentials:true,
          headers:{
            'Content-Type':'application/json'
          }
        });
        localStorage.clear();
        props.dispatch(setAccessToken('')); 
        console.log('shoval delUser profile ',props.profile);

        axios.delete('/signOut')
        .then(() => navigate('/'));

      }
    catch(e){
        console.log(e);
     }
  };
  return (
    <div style={{display:'flex',width:'800px',margin:'40px auto',padding:'40px 0',boxShadow:'1px 1px 4px grey'}}>
      <div style={{width:'30%',display:'flex',flexDirection:'column',
            alignItems:'center'}}>
        <Avatar
          size={120}
          name={profile.fname}
          square
          variant="beam"
          colors={["#ffdc08", "#C4B232", "#0c8f8f", "#FFDC08", "#0c8f8f"]}
              />
        {/* <Button>CHange colors</Button> */}
      </div>
      <Stack  spacing={2} sx={{width:'40%',mx:2}}>
          <Stack alignItems='center' spacing={2}  direction={'row'}>
            <Typography variant='h5'>First Name : </Typography>
            <Typography variant='h5'>{profile.fname}</Typography>
          </Stack>
          <Stack alignItems='center' spacing={2} direction={'row'}>
            <Typography variant='h5'>Last Name : </Typography>
            <Typography variant='h5'>{profile.lname}</Typography>
          </Stack>
          <Stack alignItems='center' spacing={2} direction={'row'}>
            <Typography variant='h5'>Email : </Typography>
            <Typography variant='h5'>{profile.email}</Typography>
          </Stack>
          <Stack alignItems='center' spacing={2} direction={'row'}>
            <Typography variant='h5'>Gender : </Typography>
            <Typography variant='h5'>{profile.gender}</Typography>
          </Stack>
          <Stack alignItems='center' spacing={2} direction={'row'}>
            <Typography variant='h5'>Position : </Typography>
            <Typography variant='h5'>{profile.my_position}</Typography>
          </Stack>
          <Stack alignItems='center' spacing={2} direction={'row'}>
            <Typography variant='h5'>Expericne : </Typography>
            <Typography variant='h5'>{profile.xp_years}</Typography>
          </Stack>

      </Stack>
      <Button 
      onClick={()=>delUser()}
      sx={{height:'40px'}} 
      color='primary'
      >Delete Profile</Button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  profile : state.setInitState.profile,
  application : state.setjobApp,

})


export default connect(mapStateToProps)(Profile)