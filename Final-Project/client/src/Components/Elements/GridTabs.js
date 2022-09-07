import {connect} from 'react-redux';
import { useState,useEffect,useRef} from 'react';
import axios from 'axios';
import {Typography,IconButton,Card} from '@mui/material';
import GridTab from './GridTab';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {setDashboardStyle,setAppId } from '../../Redux/Actions/DashboardAction';

function GridTabs(props) {
  const [stageData,setStageData]= useState([]);
  const effectRef = useRef(false);

  useEffect(()=>{
    const getStageApplications = async()=>{
      try{
        let user_app = await axios.get(`/${props.title}`,{
          withCredentials:true,
          headers:{
            'Content-Type':'application/json'
          }
        });
        setStageData(user_app.data);
        // console.log('shoval grid tabs',user_app.data);
      }
      catch(e){
        console.log(e);
      }
    }
    if(!effectRef.current){
      effectRef.current = true;
      getStageApplications();
    }
  },[])
  
  return (
      <div style={{backgroundColor:'white',opacity:'0.8',
      height:'650px',border:'1px solid grey'}}>
        <Card sx={{textAlign:'center',height:'100px',backgroundColor:'lightgrey',pt:2,mb:1}}>
          <Typography variant='h5'> {props.title}</Typography>
          <Typography variant='h7'>  Jobs</Typography>
          {
            props.title==='Applied'?(
              <div>
              <IconButton onClick={()=>{
                console.log('grid tab',props.application_id);
                props.dispatch(setDashboardStyle('flex'))              
                // props.dispatch(setAppId(props.application_id+1))
              }}>
                    <AddBoxIcon />
                </IconButton>
            </div>
            ):null
          }
        </Card>
        
        {
          stageData.map((app,index)=>{
            if(props.title.toLowerCase()===app.stage){
              return (
                <GridTab 
                id = {index}
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
    application_id : state.setjobApp.application_id
  }

}
export default  connect(mapStateToProps)(GridTabs);
