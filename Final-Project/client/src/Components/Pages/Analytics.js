import React from 'react';
import {connect} from 'react-redux';
import BarGraph from '../Graphs/BarGraph';
import {Typography, Stack,Divider} from '@mui/material'; 

const data = [
  { argument: 1, value: 10 },
  { argument: 2, value: 20 },
  { argument: 3, value: 30 },
];

const Analytics = (props) => {




  
  return (
      <div style={{width:'1000px',height:'600px',display:'flex',border:'1px solid grey',
      margin:'30px auto'}}>
        <Stack spacing={2} sx={{width:'20%',height:'100%',borderRight:'1px solid grey',mx:3,pt:2}}>
          <Typography>graph 1</Typography>
          <Typography>graph 2</Typography>
          <Typography>graph 3</Typography> 
          <Typography>graph 4</Typography>
          <Typography>graph 5</Typography>
        </Stack>
        <div style={{width:'80%',height:'100%'}}>
          <div style={{width:'100%',height:'60%'}}>
              <BarGraph/>
          </div>
          <Divider/>

          <Stack spacing={2} style={{width:'100%',height:'40%',margin:'10px 0'}}>
              {
                props.active_jobApps.map(jobapp=>{
                  return(
                    <Typography>{jobapp.stage}</Typography>
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
