import { useState,useEffect,useRef} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Container,Grid,} from '@mui/material';
import GridTabs from '../Elements/GridTabs';
import JobApplicationInfo from './JobApplicationInfo';


function DashBoard(props) {
  const [appData,setAppData]= useState([]);
  const [applied,setApplied]= useState([]);
  const [hr,setHr]= useState([]);
  const [techincal,setTechincal]= useState([]);
  const [offer,setOffer]= useState([]);

  const effectRef = useRef(false);
  useEffect(()=>{
    const getApplications = async()=>{
      try{
        let user_app = await axios.get('/dashBoard',{
          withCredentials:true,
          headers:{
            'Content-Type':'application/json'
          }
        });
        if(!effectRef.current){
          for(let i in user_app.data) {
            setAppData(appData.push(user_app.data[i]));
          }
          effectRef.current = true;
          // console.log(appData);
          appData.map(data=>{
            switch (data.stage) {
              case "applied":
                setApplied([applied.push(data)]);
              break;
              case "hr":
                setHr(hr.push(data))
              break;
              case "techincal":
                setTechincal(techincal.push(data))
              break;
              default :
                setOffer(offer.push(data))
              break;
            }
          })
          console.log(applied,hr,techincal,offer);
       }
      }
      catch(e){
        console.log(e);
      }
    }
    getApplications();

  },[])

  return (
    <div style={{position:'relative'}}>
    <Container maxWidth={'lg'} sx={{display:'flex',mt:2}}>
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
      
      style={{backgroundColor:'rgba(150, 100, 250, 0.5)',display:props.display_JobApp,
      justifyContent:'center',alignItems:'center',inset:0,overflowY:'scroll',
      position:'fixed',zIndex: 1}}>
        <div style={{zIndex: 100,maxWidth:'100%',display:'flex',
        alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
         <div style={{width:'1040px',maxWidth:'70%',display:'flex',position:'absolute',
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
    display_JobApp  : state.display_JobApp 
  }
}

export default  connect(mapStateToProps)(DashBoard);