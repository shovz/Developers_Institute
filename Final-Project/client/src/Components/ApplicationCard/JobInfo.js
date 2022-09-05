import React from 'react';
import { connect } from 'react-redux';
import {TextField,Stack} from '@mui/material';
import applications from '../../LocalDB/applicationDb.json'


export const JobInfo = (props) => {
    const {company,postiion,link,notes,location} = applications[0]

  return (
      <div style={{display:'flex',
        flexDirection:'column',
        width:'100%',
        height:'100%',
        padding:'20px 5px',
        }}>
          <Stack direction={'row'} spacing={2}>
            <div>
              <TextField size='small'  label="Company" defaultValue={company}/>
            </div>
            <div>
              <TextField size='small' sx={{width:'300px'}} label="Job title" defaultValue={postiion}/>
            </div>    
          </Stack>

          <Stack sx={{my:6}} direction={'row'} spacing={2}>
            <div>
              <TextField size='small' sx={{width:'300px'}} label="Post URL" defaultValue={link}/>
            </div>
            <div>
              <TextField size='small'  label="Company's Website" defaultValue={''}/>
            </div>    
          </Stack>

          <Stack direction={'row'} spacing={5}>
            <div>
              <TextField size='small' sx={{width:'350px'}} label="Location" defaultValue={location}/>
            </div>
            <div>
              <TextField size='small'  label="Salary" defaultValue={'60000'}/>
            </div>   
          </Stack>
          <div>
              <TextField size='small' 
                  label="Job Description"
                  multiline
                  rows={14}
                  sx={{width:'450px',mt:6}}
                  defaultValue={notes}
                  />
            </div>    
      </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(JobInfo)