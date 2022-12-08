import React from 'react';
import { connect } from 'react-redux';
import {Container,Typography,Card,Grid ,CardMedia,Button} from '@mui/material';
import { Stack } from '@mui/system';
import shoval from '../../Pic/shoval.jpg'
import LandingCardSection from '../Elements/Styled/LandingCardSection';
import LandingBackImg from '../Elements/Styled/LandingBackImg';



export const Landing = (props) => {  
  return (
    <div style={{maxWidth:'1000px',margin:'0 auto'}}>
        <LandingBackImg >
          <div style={{width:'30%',height:'80%',display:'flex',justifyContent:'flex-start',alignItems:'center',margin:'0 12%'}}>
            <Container>
              <Typography variant='h3'>MY JOB TRACKER</Typography>
              <Typography variant='p'>
                  Track and analyze your job applications all in one place.
              </Typography>

                <div>
                  {!props.accessToken?
                  (
                    <Button sx={{my:2}} variant='contained' href='/register'>Lets Get started</Button>
                  ):
                  (
                    <Button sx={{my:2}} variant='contained' href='/dashBoard'>My Applications</Button>
                  )
                }
                
                </div>
            </Container>
          </div>
        </LandingBackImg>


        <LandingCardSection>
            <Typography variant='h2'>About this Project</Typography>
            <div sx={{backgroundColor:'lightblue'}}>
              <Grid container  pt={3} pb={10} spacing={2} justifyContent={'center'} alignItems={'center'}>
                <Grid item xs={6}>
                  <Stack spacing={3}>
                    <Typography variant='p'>
                    Growing up I've learned that anything not written down will be forgotten,
                    with that said, the job search process can be long and tedious.
                    You need to remember which position you submitted your resume for,
                    which company you are in contact with, at what stage of the process you are in,
                    the dates of submitting the assignment, etc.
                    </Typography>
                    <Typography variant='p'>
                    I wanted to create a project that would help me and others keep
                    track of all these jobs applications and also enable analyzing them,
                    through where I submitted my resume and from where I got the most returns,
                    field of work, employment conditions, etc.
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </div>
        </LandingCardSection>




        <LandingCardSection style={{backgroundColor:'lightcyan'}} >
           <Typography variant='h2' >About Me</Typography>
          <Stack direction={'row'} sx={{my:3}} spacing={2}>
            <Stack spacing={3} sx={{maxWidth:'600px',margin:'0 auto'}}>
                <Typography variant='p'>
                  Hi my name is <span style={{fontWeight:'bold'}}> Shoval Zvulun </span>I'm a 31 years old from Ramat Gan,Israel.<br/>
                  I am a full stack developer experienced in JavaScript-based programming with a background in React,
                  Node.JS, PostgreSQL, Redux, Express.js, and MUI.

                  I also have a B.S. in mechanical engineering with a demonstrated history of working in the industry.
                </Typography>
                <Typography variant='p'>
                  I possess strong skills in problem solving and I am an excellent team player.
                  I have expericne in Computer-Aided Design (CAD), SolidWorks, Blender, and C programming.
                  Basic Knowledge of Photoshop, Lightroom, and Video editing.
                </Typography>
                <Typography variant='h6'>
                  Looking for a job that will intrigue me and will make me think hard.
                
                </Typography>
              
              </Stack>
              <CardMedia
                  component="img"
                  height="140"
                  image={shoval}
                  alt="green iguana"
                  />
          </Stack>
        </LandingCardSection>



        <LandingCardSection>
                <Typography variant='h2'>Contact Me</Typography>
                <div style={{backgroundColor:'lightblue',textAlign:'center'}}>
                  <Grid container direction={'row'} p={5} spacing={6} justifyContent={'center'} alignItems={'center'}>
                    <Grid item xs={6}><Typography variant='h5'>shovz12@gmail.com</Typography></Grid>
                    <Grid item xs={6}>
                      <Button href="https://www.linkedin.com/in/shoval-zvulun">Linkedin</Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button href="https://github.com/shovz">Github</Button>
                    </Grid>
                    <Grid item xs={6}><Typography variant='h5'>+972-54-690-4003</Typography></Grid>

                  </Grid>
                </div>
        </LandingCardSection>
    </div>
  )
}

const mapStateToProps = (state) => ({
  accessToken  : state.setInitState.accessToken,

})

export default connect(mapStateToProps)(Landing)