import React from 'react';
import { connect } from 'react-redux';
import {useState} from 'react'
import {TextField,Select,MenuItem,Stack} from '@mui/material';
import applications from '../../LocalDB/applicationDb.json'


export const Contact = (props) => {
    const {email,phone,link} = applications[0]
    let contact = applications[0].contact.split(' ');
    const [contactPos, setContactPos] = useState('HR Recuter');
    
    const handlePosition = (event) => {
        setContactPos(event.target.value);
      };
    
  return (
        <div style={{display:'flex',
            flexDirection:'column',
            width:'100%',
            padding:'20px 30px',
            boxShadow:'0 1px 5px grey'
            }}>
            <Stack spacing={4}>
                <Stack  direction={'row'} spacing={2}>
                    <div>
                    <TextField size='small' sx={{width:'180px'}} label="First Name" defaultValue={contact[0]}/>
                    </div>
                    <div>
                    <TextField size='small' sx={{width:'180px'}}  label="Last Name" defaultValue={contact[1]}/>
                    </div>    
                    <Select
                    size='small'
                    value={contactPos}
                    onChange={handlePosition}
                    sx={{width:'200px'}}
                    >
                    <MenuItem value={'HR Recuter'}>HR Recuter</MenuItem>
                    <MenuItem value={'HR Manager'}>HR Manager</MenuItem>
                    <MenuItem value={'Personal Manager'}>Personal Manager</MenuItem>
                    <MenuItem value={'Devition Manager'}>Devition Manager</MenuItem>
                    </Select>
                </Stack>
                <div>   
                    <TextField size='small' sx={{width:'350px'}} label="Email" defaultValue={email}/>
                </div>
                <div>   
                    <TextField size='small' sx={{width:'350px'}} label="Phone Number" defaultValue={phone}/>
                </div>
                <div>   
                    <TextField size='small' sx={{width:'350px'}} label="Social Media" 
                    defaultValue={link}/>
                </div>
            </Stack>
        </div>    
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
