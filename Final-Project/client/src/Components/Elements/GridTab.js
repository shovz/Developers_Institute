import {connect} from 'react-redux';
import {Typography,Button,Card} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {setJobAppDisplay} from '../../Redux/Actions/DashboardAction';


function GridTabs(props) {
  const navigate = useNavigate();
  
  const getRandomColor = ()=> {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const {company,postiion} = props;
  return (
        <Card sx={{textAlign:'center',height:'70px',pt:2,m:1,
        backgroundColor:getRandomColor(),cursor:'pointer'}} 
        onClick={()=>{
          props.dispatch(setJobAppDisplay('flex'))
          // navigate('/application')
        }}>
          <Typography variant='h7'> {company}</Typography>
          <Typography variant='h7'> {postiion}</Typography>
        </Card>
  );
}


export default  connect()(GridTabs);