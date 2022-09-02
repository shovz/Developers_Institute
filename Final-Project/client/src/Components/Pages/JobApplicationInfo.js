import React from 'react'
import { connect} from 'react-redux'
import {Container ,Card,CardMedia,Typography ,Divider} from '@mui/material';
import {Link} from 'react-router-dom';
import InfoAccordion from '../Elements/InfoAccordion';

export const JobApplicationInfo = ({title}) => {
  return (
    <div style={{display:'flex',width:'80%',justifyContent:'center',margin:'auto'}}>

      <Container>
        <Card sx={{mb:2,p:2}}>
        <Typography gutterBottom variant="h5" component="div">
           Full Stack Engineer (Full-time)
          </Typography>
          <Divider variant='string'/>
          <Typography sx={{mt:1}} gutterBottom variant="h5" component="div">About the company</Typography>
          <Typography  gutterBottom  component="p">
            Cynamics develops AI-Based SaaS solution for complete network visibility
            and threat prediction for complex and complicated networks.
            The ideal candidate is a team player, who will proactively 
            seek ways to improve and optimize the system. Working with 
            high standards for code quality, maintainability, and performance.
            The position requires a high level of experience and the ability
            to work on features, from design through implementation to delivery.
          </Typography>
          

        </Card>
        <Card sx={{mb:2,p:2}}>
        <Typography gutterBottom variant="h5" component="div">
        About the Role
          </Typography>
          <Typography gutterBottom component="ul">
              <Typography gutterBottom component="li">
               Building production-grade backend services and APIs to delight customers
              </Typography>
              <Typography gutterBottom component="li">
              Architecting, designing and developing simple, yet flexible solutions for a variety of customers              </Typography>
              <Typography gutterBottom component="li">
              Ensuring high performance of systems and fast page load speeds.
              </Typography>
              <Typography gutterBottom component="li">
              Building reusable components for frontend and backend infrastructure
              </Typography>
              <Typography gutterBottom component="li">
              Writing quality code that’s automatically tested as part of the development lifecycle
              </Typography>
          </Typography>
          

        </Card>
        <InfoAccordion/>
      </Container>


  </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(JobApplicationInfo)