import React from 'react';
import { connect } from 'react-redux';
import {useState} from 'react'
import {TextField,Select,MenuItem,Stack} from '@mui/material';
import { setContactFname,setContactLname,setContactPos,
        setContactEmail,setContactLinkedin,setContactPhone } from '../../Redux/Actions/InsertContact';

export const Contact = (props) => {
    const {IsNewApp,application} = props;
    const [contact_Pos, setContact_Pos] = useState('HR Recuter');

    const newApplicaiton = props.application;
    const thisAppLog = props.thisAppLog|| newApplicaiton;

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
                            IsNewApp?application.contact_fname :thisAppLog.contact_fname         
                        }/>
                    </div>
                    <div>
                        <TextField 
                        onChange={(e)=>props.dispatch(setContactLname(e.target.value))}
                        size='small' 
                        sx={{width:'180px'}}  
                        label="Last Name" 
                        defaultValue={
                            IsNewApp? application.contact_lname:thisAppLog.contact_lname         
                        }/>
                    </div>    
                    <TextField
                    size='small'
                    select
                    label= 'Contact Position'
                    value={application.contact_pos}
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
                        IsNewApp? application.contact_email:thisAppLog.contact_email         
                    }/>
                </div>
                <div>   
                    <TextField 
                    onChange={(e)=>props.dispatch(setContactPhone(e.target.value))}
                    size='small' 
                    sx={{width:'350px'}} 
                    label="Phone Number" 
                    defaultValue={
                        IsNewApp? application.contact_phone:thisAppLog.contact_phone         
                    }/>
                </div>
                <div>   
                    <TextField 
                    onChange={(e)=>props.dispatch(setContactLinkedin(e.target.value))}
                    size='small' 
                    sx={{width:'350px'}} 
                    label="LinkedIn" 
                    defaultValue={
                        IsNewApp? application.contact_linkedin:thisAppLog.contact_linkedin         
                    }/>
                </div>
            </Stack>
        </div>    
  )
}

const mapStateToProps = (state) => ({
    IsNewApp: state.setInitState.IsNewApp,
    application : state.setJobApp,
})



export default connect(mapStateToProps)(Contact)
