import {Container,Button,Grid,Stack} from '@mui/material';
// import JobApplicationCard from '../Elements/JobApplicationCard';
// import SideBar from '../Elements/SideBar';
// import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {connect} from 'react-redux';
import GridTabs from '../Elements/GridTabs';
import JobApplicationInfo from './JobApplicationInfo';
import {setJobAppDisplay} from '../../Redux/Actions/DashboardAction';

function DashBoard(props) {


  return (
    <div style={{position:'relative'}}>
    <Container maxWidth={'lg'} sx={{display:'flex',mt:2}}>
    {/* <SideBar>
      <Stack  justifyContent="flex-start"
  alignItems="center">
        <Button>Favorites</Button>
        <Button>ASD</Button>
        <Button>ASD</Button>
        <Button>ASD</Button>
        <Button>ASD</Button>
      </Stack>
      <div style={{margin:'10px 0',height:'200px',backgroundColor:'lightcoral'}}>
        <div>Upcoming Interviews</div>
        <div>
        </div>
      </div>
    </SideBar> */}
    <Grid container justifyContent={"space-evenly"}  spacing={2}>
      <Grid item xs={3}>
          <GridTabs title={'Applied'} counter={6}/>
       </Grid>
       <Grid item xs={3}>
          <GridTabs title={'Hr'} counter={4}/>
       </Grid>
       <Grid item xs={3}>
          <GridTabs title={'Techincal'} counter={4}/>
       </Grid>
       <Grid item xs={3}>
          <GridTabs title={'Offer'} counter={4}/>
       </Grid>
    </Grid>

    </Container>

      <div  
      onClick={()=> props.dispatch(setJobAppDisplay('none'))}
      style={{backgroundColor:'rgba(150, 100, 250, 0.5)',display:props.display_JobApp,
      justifyContent:'center',alignItems:'center',inset:0,overflowY:'scroll',
      position:'fixed',zIndex: 20}}>
        <div style={{zIndex: 1,maxWidth:'100%',display:'flex',
        alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
         <div style={{width:'1000px',maxWidth:'90%',display:'flex',position:'absolute',
         backgroundColor:'white',overflow:'hidden',top:'10%',padding:'30px 0',}}>
           <JobApplicationInfo/>
         </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps=(state)=>{
  return {
    display_JobApp  : state.display_JobApp 
  }
}

export default  connect(mapStateToProps)(DashBoard);