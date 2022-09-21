import {connect} from 'react-redux';
import {useEffect} from 'react';
import axios from 'axios';

import {Container,Grid} from '@mui/material';
import GridTabs from '../Elements/GridTabs';
import JobApplicationInfo from './JobApplicationInfo';
import {setActiveJobApp} from '../../Redux/Actions/DashboardAction';
import {setAppStageSorted} from '../../Redux/Actions/Analytics';


const DashBoard = (props) =>{

  useEffect (()=>{
    const getAllActiveJobApp = async() => {
      const {user_id} = props;
      try{
          const response = await axios.post('/getAllActiveJobApp',{
            user_id
          },{
            withCredentials:true,
            headers:{
              'Content-Type':'application/json'
            }
          });
        props.dispatch(setAppStageSorted(response.data.sorted_Job_Apps_by_stage));
        localStorage.setItem('activeJobs',JSON.stringify(response.data.allActiveJobApp))
        props.dispatch(setActiveJobApp(response.data.allActiveJobApp));
        }
      catch(e){
          console.log(e);
      }
    };
    getAllActiveJobApp();
},[])

  return (
    <div style={{position:'relative'}}>
    <Container maxWidth={'lg'} sx={{display:'flex',mt:4}}>
    <Grid container justifyContent={"space-evenly"}  spacing={2}>
      {
        props.stages.map(stage=>{
          return( 
            <Grid key={stage} item  xs={3}>
              <GridTabs  title={stage} />
            </Grid>
          )
        })
      }
    </Grid>

    </Container>

      <div  
      
      style={{backgroundColor:'rgba(150, 100, 250, 0.5)',display:props.dashboard_display_style,
      justifyContent:'center',alignItems:'center',inset:0,overflowY:'scroll',
      position:'fixed',zIndex: 1}}>
        <div style={{zIndex: 100,maxWidth:'100%',display:'flex',
        alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
          <div style={{width:'1140px',maxWidth:'70%',display:'flex',position:'absolute',
          backgroundColor:'white',overflow:'hidden',top:'5%',paddingLeft:'10px',
          justifyContent:'center'}}>

              <JobApplicationInfo/>

         </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps=(state)=>{
  return {
    dashboard_display_style  : state.setInitState.dashboard_display_style,
    stages : state.setInitState.stages,
    active_jobApps: state.setInitState.active_jobApps,
    user_id: state.setJobApp.user_id,
    application_id: state.setJobApp.application_id,


  }
}

export default  connect(mapStateToProps)(DashBoard);