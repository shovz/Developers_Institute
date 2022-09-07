import React from 'react';
import { connect } from 'react-redux';
import {useState} from 'react'
import {TextField,Select,MenuItem,Stack} from '@mui/material';
import { setContactFname,setContactLname,setContactPos,
        setContactEmail,setContactLinkedin,setContactPhone } from '../../Redux/Actions/InsertContact';

export const Contact = (props) => {
    const {application_id} = props;
    const [contact_Pos, setContact_Pos] = useState('HR Recuter');

    const handlePosition = (event) => {
        setContact_Pos(event.target.value);
        props.dispatch(setContactPos(event.target.value))
    };


  return (
        <div style={{display:'flex',
            flexDirection:'column',
            width:'90%',
            padding:'20px 30px',
            boxShadow:'0 1px 5px grey'
            }}>
            <Stack spacing={4}>
                <Stack  direction={'row'} spacing={2}>
                    <div>
                        <TextField 
                        onChange={(e)=>props.dispatch(setContactFname(e.target.value))}
                        size='small' 
                        sx={{width:'180px'}} 
                        label="First Name" 
                        defaultValue={
                            application_id? '':null         
                        }/>
                    </div>
                    <div>
                        <TextField 
                        onChange={(e)=>props.dispatch(setContactLname(e.target.value))}
                        size='small' 
                        sx={{width:'180px'}}  
                        label="Last Name" 
                        defaultValue={
                            application_id? '':null         
                        }/>
                    </div>    
                    <TextField
                    size='small'
                    select
                    label= 'Contact Position'
                    value={contact_Pos}
                    onChange={handlePosition}
                    sx={{width:'200px'}}
                    >
                        <MenuItem value={'HR Recuter'}>HR Recuter</MenuItem>
                        <MenuItem value={'HR Manager'}>HR Manager</MenuItem>
                        <MenuItem value={'Personal Manager'}>Personal Manager</MenuItem>
                        <MenuItem value={'Devition Manager'}>Devition Manager</MenuItem>
                        <MenuItem value={'Other'}>Other</MenuItem>
                    </TextField>
                </Stack>
                <div>   
                    <TextField 
                    onChange={(e)=>props.dispatch(setContactEmail(e.target.value))}
                    size='small' 
                    sx={{width:'350px'}} 
                    label="Email" 
                    defaultValue={
                        application_id? '':null         
                    }/>
                </div>
                <div>   
                    <TextField 
                    onChange={(e)=>props.dispatch(setContactPhone(e.target.value))}
                    size='small' 
                    sx={{width:'350px'}} 
                    label="Phone Number" 
                    defaultValue={
                        application_id? '':null         
                    }/>
                </div>
                <div>   
                    <TextField 
                    onChange={(e)=>props.dispatch(setContactLinkedin(e.target.value))}
                    size='small' 
                    sx={{width:'350px'}} 
                    label="LinkedIn" 
                    defaultValue={
                        application_id? '':null         
                    }/>
                </div>
            </Stack>
        </div>    
  )
}

const mapStateToProps = (state) => ({
    application_id: state.setjobApp.application_id
})



export default connect(mapStateToProps)(Contact)
