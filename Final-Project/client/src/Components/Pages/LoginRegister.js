import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Box,TextField,Button,Radio,RadioGroup,MenuItem, 
        FormControlLabel,FormLabel, Typography} from '@mui/material';
import FormContainer from '../Elements/Styled/FormContainer';
import {connect} from 'react-redux';
import { setAccessToken} from '../../Redux/Actions/LoginRegisterAction';


const LoginRegister = (props) => {
  let navigate = useNavigate();
  const {title,accessToken} = props;
  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [gender,setGender] = useState('female');
  const [msg,setMsg]=useState('');
  const [xp_years,setXp_years] = useState('0-2');
  const [my_position,setMy_position] = useState('Fullstack Developer');

  const handleForm = async () => {

    if(title==='Register'){
        try {
          const response = await axios.post(`/register`,{
            fname,lname,email,password,my_position,xp_years,gender
          },{
            withCredentials:true,
            headers:{
              'Content-Type':'application/json'
            },
          });
          console.log('register=>', response);
          setMsg(" ");
          navigate('/signIn')
        } catch (e) {
          setMsg(e.response.data.msg);
        }
    }
    else{
      try {
        const token = await axios.post('/signIn',{
          email,password
        },{
          withCredentials:true,
          headers:{
            'Content-Type':'application/json'
          }
        });
        // console.log('signed in token =>',token.data);
        localStorage.setItem('accessToken',JSON.stringify(token.data));
        props.dispatch(setAccessToken(token.data));
        navigate('/')
        
      } catch (e) {
        setMsg(e.response.data.msg);
      }
    }
  }


  return (
    <FormContainer>
        <div>
            <h1>{title}</h1>
        </div>
            <Box component={'form'} sx={{m:1}} noValidate autoComplete='off'>
              {title==='Register'? (
                  <Box > 
                  <TextField 
                  sx={{m:1}}
                  id='fname'
                  label='Enter First Name'
                  variant='outlined'
                  required
                  onChange={(e)=> setFname(e.target.value)}
                  />
                  <TextField 
                  sx={{m:1}}
                  id='lname'
                  required
                  label='Enter Last Name'
                  variant='outlined'
                  onChange={(e)=> setLname(e.target.value)}
                  />
                </Box>
                ):null}
              <Box> 
                <TextField 
                sx={{m:1,width:'300px'}}
                id='email'
                type='email'
                required
                label='Enter Email'
                variant='outlined'
                onChange={(e)=> setEmail(e.target.value)}
                />
              </Box>
              <Box> 
                <TextField 
                sx={{m:1,width:'300px'}}
                id='password'
                type='password'
                required
                label='Enter Pasword'
                variant='outlined'
                onChange={(e)=> setPassword(e.target.value)}
                />
              </Box>
              {title==='Register'? ( 
                <>
                  <Box sx={{display:'flex', alignItems:'center',m:2}} >
                    <FormLabel sx={{mr:1}}  id="gender">Gender :</FormLabel>
                    <RadioGroup 
                      row
                      aria-labelledby="gender"
                      defaultValue="male"
                      name="gender"
                      onClick={(e)=>setGender(e.target.value)}
                    >
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                  </Box>
                  <Box  sx={{m:2,display:'flex',alignItems:'center'}} >
                    <FormLabel sx={{mr:1}} id="Xp-years">Position :</FormLabel>
                    <TextField
                      select
                      value={my_position}
                      label="Position"
                      onChange={(e)=>setMy_position(e.target.value)}
                    >
                      <MenuItem value={'Fullstack Developer'}>Fullstack Developer</MenuItem>
                      <MenuItem value={'Mechanical Engineer'}>Mechanical Engineer</MenuItem>
                      <MenuItem value={'System Integration Engineer'}>System Integration Engineer</MenuItem>
                      <MenuItem value={'Application Engineer'}>Application Engineer</MenuItem>
                      <MenuItem value={'QA Engineer'}>QA Engineer</MenuItem>
                      <MenuItem value={'Product Manager '}>Product Manager</MenuItem>
                      <MenuItem value={'Data Scientist'}>Data Scientist</MenuItem>
                      <MenuItem value={'Other'}>Other</MenuItem>
                  </TextField>
                  </Box>
                  <Box  sx={{m:2,display:'flex',alignItems:'center'}}>
                    <FormLabel sx={{mr:1}} id="Xp-years">Experience :</FormLabel>
                    <TextField
                      select
                      value={xp_years}
                      label="Experience"
                      onChange={(e)=>setXp_years(e.target.value)}
                    >
                      <MenuItem value={'0-2'}>0-2 Years</MenuItem>
                      <MenuItem value={'2-5'}>2-5 Years</MenuItem>
                      <MenuItem value={'5-10'}>5-10 Years</MenuItem>
                      <MenuItem value={'10+'}>10+ Years</MenuItem>
                  </TextField>
                  </Box>
                </>
                ):null}
            </Box>
            <Button variant='contained'
              onClick={handleForm}>
              {title}
            </Button>
            <Typography sx={{m:2}}>{msg}</Typography>
    </FormContainer>
  )
}

const mapStateToProps=(state)=>{
  return {
    accessToken  : state.setInitState.accessToken,
    application : state.setJobApp,

  }
}


export default  connect(mapStateToProps)(LoginRegister);

