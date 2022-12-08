import React from 'react';

import {connect} from 'react-redux';
import JobAppPerStage from '../Graphs/JobAppPerStage';
import {Typography, Stack,Divider} from '@mui/material'; 



const Analytics = (props) => {  
  return (
      <div style={{width:'1000px',display:'flex',
      boxShadow:'1px 1px 4px grey',margin:'30px auto'}}>
        <Stack spacing={2} sx={{width:'20%',backgroundColor:'lightblue',mr:3,p:2}}>
          <Typography>Job App Per Stage</Typography>
          <Typography>graph 2</Typography>
          <Typography>graph 3</Typography> 
          <Typography>graph 4</Typography>
          <Typography>graph 5</Typography>
        </Stack>
        <div style={{width:'80%',height:'100%'}}>
          <div style={{width:'100%',height:'60%'}}>
              <JobAppPerStage/>
          </div>
          <Divider/>

          <Stack spacing={2} style={{width:'100%',height:'40%',margin:'10px 0'}}>
              {
                props.active_jobApps.map(jobapp=>{
                  return(
                    <Stack direction={'row'} spacing={5}>
                      <Typography>company : {jobapp.company}</Typography>
                      <Typography>position : {jobapp.position}</Typography>
                    </Stack>
                  )
                })
              }
          </Stack>
        </div>




      </div>
  )
}


const mapStateToProps=(state)=>{
  return {
    active_jobApps: state.setInitState.active_jobApps,
  }
}

export default connect(mapStateToProps)(Analytics)
