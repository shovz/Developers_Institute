import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux'
import {Tabs ,Typography ,Tab,Divider,IconButton   } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {setDashboardStyle} from '../../Redux/Actions/DashboardAction';
import JobInfo from '../ApplicationCardInfo/JobInfo';
import Contact from '../ApplicationCardInfo/Contact';
import Notes from '../ApplicationCardInfo/Notes';

export const AddJobApp = (props) => {
  const [tab, setTab] = useState('Job_Info');
 
  const handleTabs = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div style={{display:'flex',width:'100%'}}>
      <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
        <div style={{display:'flex'}}>
          <div style={{width:'70%'}} >
          <Tabs
            value={tab}
            onChange={handleTabs}
            textColor="secondary"
            indicatorColor="secondary">
            
            <Tab value="Job_Info" label="Job Info"/>
            <Tab value="Contact" label="Contact"/>
            <Tab value="Notes" label="Notes"/>
          </Tabs>
          </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',
            alignItems:'flex-end',width:'30%'}}>
            <IconButton onClick={()=> props.dispatch(setDashboardStyle('none'))}>
                <CloseIcon />
            </IconButton>
          </div>
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
      
  </div>
  )
}

const mapStateToProps=(state)=>{
  return {
    display_JobApp  : state.setInitState.display_JobApp 
  }
}

export default connect(mapStateToProps)(AddJobApp)