import {connect} from 'react-redux';
import { useState } from 'react';
import {Typography,Button,Card} from '@mui/material';
import GridTab from './GridTab';
import applications from '../../LocalDB/applicationDb.json';


function GridTabs(props) {
  const [counter,setCounter]= useState(0);
  return (
      <div style={{backgroundColor:'white',opacity:'0.8',
      height:'650px',borderLeft:'1px solid grey',borderRight:'1px solid grey'}}>
        <Card sx={{textAlign:'center',height:'70px',pt:2,mb:1}}>
          <Typography variant='h5'> {props.title}</Typography>
          <Typography variant='h7'> {counter} Jobs</Typography>
        </Card>
        {
          applications.map(app=>{
            if(app.type===props.title.toLowerCase()){
              return (
                <GridTab 
                key={app.id}
                  company={app.company}
                  postiion={app.postiion}/>
                
              )

            }
            
          })
        }


      </div>
  );
}


export default  connect()(GridTabs);
