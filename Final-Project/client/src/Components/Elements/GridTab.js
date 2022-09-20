import {connect} from 'react-redux';
import axios from 'axios';

import {Typography,Card} from '@mui/material';
import {setDashboardStyle,setAppLog,setIsNewApp,setAppId} from '../../Redux/Actions/DashboardAction';

export const GridTabs= (props) =>{
  const {company,position,id} = props;

  const getRandomColor = ()=> {
 
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const getApplicationLogs = async(application_id)=>{
    await props.dispatch(setAppId(application_id));
    // console.log('shoval getApplicationLogs',application_id);
    try{
      const logs_fromDB = await axios.post('/getApplicationLogs',{
        application_id
      },{
        withCredentials:true,
        headers:{
          'Content-Type':'application/json'
        }
      });
        console.log('getApplicationLogs logs_fromDB =>',logs_fromDB.data);
        props.dispatch(setAppLog(logs_fromDB.data));
      }
    catch(e){
      console.log(e);
    }
  }
 


  return (
        <Card id={id} sx={{textAlign:'center',height:'70px',pt:2,m:1,
        backgroundColor:getRandomColor(),cursor:'pointer'}} 
        onClick={()=>{
          props.dispatch(setIsNewApp(false));
          props.dispatch(setDashboardStyle('flex'))
          getApplicationLogs(id);
        }}>
          <Typography variant='h6' component={'div'}> {company}</Typography>
          <Typography variant='h7' component={'div'}> {position}</Typography>
        </Card>
  );
}

const mapStateToProps=(state)=>{
  return {
    application_id: state.setJobApp.application_id
  }
}

export default  connect(mapStateToProps)(GridTabs);