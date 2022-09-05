import {connect} from 'react-redux';
// import { useEffect } from 'react';
// import axios from 'axios';
import { useState } from 'react';
import {Typography,IconButton,Card} from '@mui/material';
import GridTab from './GridTab';
import applications from '../../LocalDB/applicationDb.json';
import AddBoxIcon from '@mui/icons-material/AddBox';

function GridTabs(props) {


  return (
      <div style={{backgroundColor:'white',opacity:'0.8',
      height:'650px',borderLeft:'1px solid grey',borderRight:'1px solid grey'}}>
        <Card sx={{textAlign:'center',height:'100px',pt:2,mb:1}}>
          <Typography variant='h5'> {props.title}</Typography>
          <Typography variant='h7'>  Jobs</Typography>
          <div>
            <IconButton >
                  <AddBoxIcon />
              </IconButton>
          </div>
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
