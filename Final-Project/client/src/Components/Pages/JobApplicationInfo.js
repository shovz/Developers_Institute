import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux'
import {Tabs ,Typography ,Tab, Stack,
        FormControlLabel,Switch ,Divider,IconButton   } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {setJobAppDisplay} from '../../Redux/Actions/DashboardAction';
import applications from '../../LocalDB/applicationDb.json';
import JobInfo from '../ApplicationCard/JobInfo';
import Contact from '../ApplicationCard/Contact';
import Notes from '../ApplicationCard/Notes';

export const JobApplicationInfo = (props) => {
  const {company,postiion} = applications[0]


  const [tab, setTab] = useState('Job_Info');

  const [active, setActive] = useState(true);
  const [label, setLabel] = useState('Active');
  const [color, setColor] = useState('success');


 
  const handleTabs = (event, newValue) => {
    setTab(newValue);
  };

  const handleActive = (event) => {
    setActive(event.target.checked);
    if(label==='Active'){
      setColor('default');
      setLabel('InActive');
    }

    if(label==='InActive'){
      setColor('success');
      setLabel('Active');
    }
  };

  return (
    <div style={{display:'flex',width:'100%'}}>
      <div style={{display:'flex',flexDirection:'column',width:'80%'}}>
        <div style={{height:'100px',display:'flex'}}>
          <div style={{width:'70%',padding:'10px'}}>
            <Typography variant='h4'>{company}</Typography>
            <Typography variant='h7'>{postiion}</Typography>
          </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',
            alignItems:'flex-end',width:'30%'}}>
            <IconButton onClick={()=> props.dispatch(setJobAppDisplay('none'))}>
               <CloseIcon />
            </IconButton>
            <div >
                <FormControlLabel
                label={label}
                control={
                  <Switch 
                  checked={active}
                  onChange={handleActive}
                  color={color}/>
                  } 
                /> 
            </div>
          </div>
        </div>
        <div >
        <Tabs
          value={tab}
          onChange={handleTabs}
          textColor="secondary"
          indicatorColor="secondary">
          
          <Tab value="Job_Info" label="Job Info"/>
          <Tab value="Contact" label="Contact"/>
          <Tab value="Notes" label="Notes"/>
          <Tab value="Documents" label="Documents" />
        </Tabs>
        </div>
        <Divider/>
        <div style={{display:'flex',
                  height:'700px',
                  alignItems:'start',
                  padding:'10px'}}>
        {
          tab==='Job_Info'? (<JobInfo/>):
          tab==='Contact'? (<Contact/>):
          tab==='Notes'? (<Notes/>):null
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
          <div style={{height:'40px',boxShadow:'1px 5px 10px 0.25px grey',
          borderRadius:'10px',display:'flex',padding:'5px',alignItems:'center',
          backgroundColor:'lightgoldenrodyellow'}}>
            <Typography variant='h6'>Log Item</Typography>
          </div>
          <div style={{height:'40px',boxShadow:'1px 5px 10px 0.25px grey',
          borderRadius:'10px',display:'flex',padding:'5px',alignItems:'center',
          backgroundColor:'lightgoldenrodyellow'}}>
            <Typography variant='h6'>Log Item</Typography>
          </div>
          <div style={{height:'40px',boxShadow:'1px 5px 10px 0.25px grey',
          borderRadius:'10px',display:'flex',padding:'5px',alignItems:'center',
          backgroundColor:'lightgoldenrodyellow'}}>
            <Typography variant='h6'>Log Item</Typography>
          </div>
          <div style={{height:'40px',boxShadow:'1px 5px 10px 0.25px grey',
          borderRadius:'10px',display:'flex',padding:'5px',alignItems:'center',
          backgroundColor:'lightgoldenrodyellow'}}>
            <Typography variant='h6'>Log Item</Typography>
          </div>
          <div style={{height:'40px',boxShadow:'1px 5px 10px 0.25px grey',
          borderRadius:'10px',display:'flex',padding:'5px',alignItems:'center',
          backgroundColor:'lightgoldenrodyellow'}}>
            <Typography variant='h6'>Log Item</Typography>
          </div>
          <div style={{height:'40px',boxShadow:'1px 5px 10px 0.25px grey',
          borderRadius:'10px',display:'flex',padding:'5px',alignItems:'center',
          backgroundColor:'lightgoldenrodyellow'}}>
            <Typography variant='h6'>Log Item</Typography>
          </div>
          <div style={{height:'40px',boxShadow:'1px 5px 10px 0.25px grey',
          borderRadius:'10px',display:'flex',padding:'5px',alignItems:'center',
          backgroundColor:'lightgoldenrodyellow'}}>
            <Typography variant='h6'>Log Item</Typography>
          </div>
        </Stack>
      </div>

      
  </div>
  )
}

const mapStateToProps=(state)=>{
  return {
    display_JobApp  : state.display_JobApp 
  }
}

export default connect(mapStateToProps)(JobApplicationInfo)