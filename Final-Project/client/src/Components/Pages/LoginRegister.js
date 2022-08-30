import {useState,useEffect} from 'react'
import {Navigate,Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Box,TextField,Button,Radio,RadioGroup,Select,MenuItem 
  ,FormControlLabel,FormControl,FormLabel} from '@mui/material';
import FormContainer from '../Elements/FormContainer';


const LoginRegister = ({title}) => {
  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  // const [position,setPostion] = useState('');
  const [xp_years,setXp_years] = useState('0-2');

  let navigate = useNavigate();

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
                  onChange={(e)=> setFname(e.target.value)}
                  />
                  <TextField 
                  sx={{m:1}}
                  id='lname'
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
                label='Enter Pasword'
                variant='outlined'
                onChange={(e)=> setPassword(e.target.value)}
                />
              </Box>
              {title=='Register'? ( 
                <>
                  <Box sx={{display:'flex', alignItems:'center',m:2}} >
                    <FormLabel sx={{mr:1}}  id="gender">Gender :</FormLabel>
                    <RadioGroup 
                      row
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                  </Box>
                  <Box  sx={{m:2}}>
                    <FormLabel sx={{mr:1}} id="Xp-years">Experience :</FormLabel>
                    <Select
                      id="demo-simple-select"
                      value={xp_years}
                      label="Experience"
                      onChange={(e)=>setXp_years(e.target.value)}
                    >
                      <MenuItem value={'0-2'}>0-2 Years</MenuItem>
                      <MenuItem value={'2-5'}>2-5 Years</MenuItem>
                      <MenuItem value={'5-10'}>5-10 Years</MenuItem>
                      <MenuItem value={'10+'}>10+ Years</MenuItem>
                  </Select>
                  </Box>
                </>
                ):null}
            </Box>
            <Button variant='contained'>{title}</Button>
    </FormContainer>
  )
}

export default LoginRegister;



