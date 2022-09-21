import {connect} from 'react-redux';
import {Typography,IconButton,Card} from '@mui/material';
import GridTab from './GridTab';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {setDashboardStyle,setIsNewApp,resetLogState } from '../../Redux/Actions/DashboardAction';
import { resetJobApp } from '../../Redux/Actions/ResetApllicationFrom';


function GridTabs(props) {

  const handleAddButton =()=>{
    props.dispatch(resetLogState());       
    props.dispatch(setIsNewApp(true));
    props.dispatch(resetJobApp(props.application_id));
    props.dispatch(setDashboardStyle('flex'))    
  }
  return (
      <div style={{backgroundColor:'white',opacity:'0.8',
      height:'650px',border:'1px solid grey'}}>
        <Card sx={{textAlign:'center',height:'100px',backgroundColor:'lightgrey',pt:2,mb:1}}>
          <Typography variant='h5'> {props.title}</Typography>
          <Typography variant='h5'> </Typography>
          {
            props.title==='Applied'?(
              <div>
              <IconButton onClick={()=> handleAddButton()}>
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
            return null
            
          })
        }


      </div>
  );
}
const mapStateToProps=(state)=>{
  return {
    application_id: state.setJobApp.application_id,
    refresh: state.setInitState.stages,
    active_jobApps: state.setInitState.active_jobApps,

  }

}
export default  connect(mapStateToProps)(GridTabs);
