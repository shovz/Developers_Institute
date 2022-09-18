import React from 'react'
import { useState,useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {Tabs ,Typography ,Tab, Stack,Button,Select,MenuItem,
        FormControlLabel,Switch ,Divider,IconButton   } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {setDashboardStyle} from '../../Redux/Actions/DashboardAction';
import JobInfo from '../ApplicationCardInfo/JobInfo';
import Contact from '../ApplicationCardInfo/Contact';
import Notes from '../ApplicationCardInfo/Notes';
import { setAppId ,setActiveJobApp} from '../../Redux/Actions/DashboardAction';
import { setJobActive,setJobStage } from '../../Redux/Actions/InsertJobInfo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


export const JobApplicationInfo = (props) => {
  const [tab, setTab] = useState('JobInfo');
  const [active, setActive] = useState(true);
  const [label, setLabel] = useState('Active');
  const [color, setColor] = useState('success');
  const {IsNewApp} = props;
  const [stage, setStage] = useState('Applied');

  let length;
  props.app_logs.length>0? length=props.app_logs.length-1:length=0;
  const thisAppLog = props.app_logs[length] ||props.application;



  const saveJobInfo = async(event) => {
    const application = props.application;
    console.log(' saveJobInfo props.application',application);
        try{
        const response = await axios.post('/saveJobInfo',{
          application,IsNewApp
        },{
          withCredentials:true,
          headers:{
            'Content-Type':'application/json'
          }
        });

        console.log('shoval all active data=>', response.data);
        props.dispatch(setActiveJobApp(response.data));
        const lastinsetedApp = 0;
        props.dispatch(setAppId(response.data[lastinsetedApp].application_id));
      }
    catch(e){
        console.log(e);
     }
  };


  const handleTabs = (event, newValue) => {
    setTab(newValue);
  };

  const handleStage= (event) => {
    setStage(event.target.value);
    props.dispatch(setJobStage(event.target.value))
  };

  const handleActiveChange = (event) => {
   
    setActive(event.target.checked)
    props.dispatch(setJobActive(event.target.checked))
    if(label==='Active'){
      setColor('default');
      setLabel('InActive');

    }else if(label==='InActive'){
      setColor('success');
      setLabel('Active');
    }


  };


  return (
    <div style={{display:'flex',width:'100%'}}>
      <div style={{display:'flex',flexDirection:'column',width:'80%'}}>
        <div style={{display:'flex'}}>
          <Stack spacing={2} style={{width:'70%',padding:'25px 10px'}}>
              <Stack  >
                  <Typography variant='h4'>
                  {
                    // props.app_logs[length].company
                    IsNewApp? 'NEW APPLICATION FORM':thisAppLog.company
                  }
                </Typography>
                <Typography variant='h7'>
                  {
                    // 
                    IsNewApp? 'NEW APPLICATION FORM':thisAppLog.position
                  }
                </Typography>
              </Stack>
              <div>
                <Select
                      size='small'
                      value={IsNewApp?stage:thisAppLog.stage}
                      onChange={(event)=>handleStage(event)}
                      sx={{width:'200px'}}
                      >
                      <MenuItem value={'Applied'}>Applied</MenuItem>
                      <MenuItem value={'HR'}>HR</MenuItem>
                      <MenuItem value={'Technical'}>Technical</MenuItem>
                      <MenuItem value={'Offer'}>Offer</MenuItem>
              </Select>
              </div>
          </Stack>
          <div style={{display:'flex',flexDirection:'column',
          justifyContent:'flex-start', alignItems:'flex-end',width:'30%'}}>
              <IconButton onClick={(e)=> 
                {
                  
                  props.dispatch(setDashboardStyle('none'))
                }
                }>
                <CloseIcon />
              </IconButton>
              <div>
                  <FormControlLabel
                  label={label}
                  control={
                    <Switch 
                    checked={IsNewApp?active:thisAppLog.active}
                    onChange={handleActiveChange}
                    color={color}/>
                    } 
                  /> 
              </div>
              <Button 
                onClick={()=>saveJobInfo()}
                sx={{m:'10px'}} 
                size='small'
                variant='contained'>
                  Save Changes
              </Button>
          </div>
        </div>
        <div>
          <Tabs
            value={tab}
            onChange={handleTabs}
            textColor="secondary"
            indicatorColor="secondary">
            
            <Tab value="JobInfo" label="Job Info"/>
            <Tab value="Contact" label="Contact"/>
            <Tab value="Notes" label="Notes"/>
          </Tabs>
        </div>
        <Divider/>
        <div style={{display:'flex',
                  height:'700px',
                  alignItems:'start',
                  padding:'10px'}}>
        {
          tab==='JobInfo'? (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <JobInfo appInfo={thisAppLog}/>
            </LocalizationProvider>
          ):
          tab==='Contact'? (<Contact appInfo={thisAppLog}/>):
          tab==='Notes'? (<Notes appInfo={thisAppLog}/>):null
        }
        </div>
      </div>

        


      
      <div style={{width:'20%',padding:'10px',
      backgroundColor:'rgba(255, 189, 189, 0.712)',display:'flex',
      flexDirection:'column',height:'100%'}}>
        <div style={{height:'50px'}}>
          <Typography sx={{textAlign:'center'}} variant='h5' >Logs</Typography>
            <Divider variant='string' />
        </div>
        <Stack spacing={2}>
          {
            // console.log('job apllicaiton info app_logs',props.app_logs.length)
            props.app_logs.length>0?(
            props.app_logs.map((app,i)=>{
              // console.log(app)
              return (
                <Stack 
                key={i} 
                  style={{
                  boxShadow:'1px 5px 10px 0.25px grey',
                  borderRadius:'10px',
                  display:'flex',padding:'5px',
                  alignItems:'center',
                  backgroundColor:'lightgoldenrodyellow',
                  cursor:'pointer'}}>
                    <Typography variant='h6'>{app.stage}</Typography>
                    <Typography variant='h6'>application_id:{app.application_id}</Typography>
                </Stack>
              )
            })):null
          }

        </Stack>
      </div>

      
    </div>
  )
}

const mapStateToProps=(state)=>{
  return {
    dashboard_display_style  : state.setInitState.dashboard_display_style,
    IsNewApp: state.setInitState.IsNewApp,
    application : state.setjobApp,
    application_id: state.setjobApp.application_id,
    app_logs: state.setInitState.app_logs,
  }
}

export default connect(mapStateToProps)(JobApplicationInfo)