import {connect} from 'react-redux';
import { useState,useEffect,useRef} from 'react';
import axios from 'axios';
import {Typography,IconButton,Card} from '@mui/material';
import GridTab from './GridTab';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {setDashboardStyle,setIsNewApp,resetLogState } from '../../Redux/Actions/DashboardAction';
import { resetJobApp } from '../../Redux/Actions/ResetApllicationFrom';
// import { setAppliedTab,setHrTab,setTechTab,setOfferTab } from '../../Redux/Actions/GridTabs';


function GridTabs(props) {
  return (
      <div style={{backgroundColor:'white',opacity:'0.8',
      height:'650px',border:'1px solid grey'}}>
        <Card sx={{textAlign:'center',height:'100px',backgroundColor:'lightgrey',pt:2,mb:1}}>
          <Typography variant='h5'> {props.title}</Typography>
          {/* <Typography variant='h7'>  Jobs</Typography> */}
          {
            props.title==='Applied'?(
              <div>
              <IconButton onClick={()=>{
                props.dispatch(resetLogState());       
                props.dispatch(setIsNewApp(true));
                props.dispatch(resetJobApp(props.application_id));
                props.dispatch(setDashboardStyle('flex'))       
              }}>
                    <AddBoxIcon />
                </IconButton>
            </div>
            ):null
          }
        </Card>
        
        {
          // console.log(props.active_jobApps)
          props.active_jobApps.map((app,index)=>{
            // console.log(app);
            if(props.title===app.stage){
              return (
                <GridTab 
                id = {app.application_id}
                key={index}
                company={app.company}
                position={app.position}/>
                
              )
            }
            
          })
        }


      </div>
  );
}
const mapStateToProps=(state)=>{
  return {
    application_id: state.setjobApp.application_id,
    active_jobApps: state.setInitState.active_jobApps,

  }

}
export default  connect(mapStateToProps)(GridTabs);
