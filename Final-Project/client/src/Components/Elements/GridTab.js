import {connect} from 'react-redux';
import {Typography,Card} from '@mui/material';
import {setDashboardStyle,setJobInfo} from '../../Redux/Actions/DashboardAction';


function GridTabs(props) {
  const getRandomColor = ()=> {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const {company,position,id} = props;
  return (
        <Card id={id} sx={{textAlign:'center',height:'70px',pt:2,m:1,
        backgroundColor:getRandomColor(),cursor:'pointer'}} 
        onClick={()=>{
          props.dispatch(setDashboardStyle('flex'))
        }}>
          <Typography variant='h6' component={'div'}> {company}</Typography>
          <Typography variant='h7' component={'div'}> {position}</Typography>
        </Card>
  );
}


export default  connect()(GridTabs);