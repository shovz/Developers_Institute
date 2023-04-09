import React from 'react'
import { connect } from 'react-redux'
import {Container,Typography,Card,Grid ,CardMedia,Button} from '@mui/material'
import './landing.css'
export const Landing = (props) => {  
  return (
    <div>
        <Grid container className='main'>
            <Grid item sx={{mt:10,mx:5}} xs={3}  >
              <Container sx={{maxWidth:'150px'}}>
                <Typography variant='h3'>MY JOB TRACKER</Typography>
                <Typography  variant='p'>
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
            </Grid>
        </Grid>


        <Card 
        sx={{display:'flex',
        backgroundColor:'lightblue',
        flexDirection:'column',
        alignItems:'center',
        pt:2}}>
                <Typography variant='h2'>About this Project</Typography>
                <div sx={{backgroundColor:'lightblue'}}>
                  <Grid container direction={'row'} pt={3} pb={10} spacing={2} justifyContent={'center'} alignItems={'center'}>
                    <Grid item xs={6}>
                      <Typography variant='p'>
                      Growing up I learned that anything not written down will be forgotten,
                      with that said, the job search process can be long and tedious.
                      You need to remember which position you submitted your resume for,
                      which company you are in contact with, at what stage of the process you are in,
                      the dates of submitting the assignment, etc.

                      I wanted to create a project that would help me and others keep
                      track of all these jobs applications and also enable analyzing them,
                      through where I submitted my resume and from where I got the most returns,
                      field of work, employment conditions, etc.
                      </Typography>
                    </Grid>
                    {/* <Grid item xs={3}><Typography variant='h5'>Landing</Typography></Grid> */}
                  </Grid>
                </div>
        </Card>




        <Card 
        sx={{display:'flex',
        backgroundColor:'lightcyan',
        flexDirection:'column',
        alignItems:'center',
        pt:2}}>
           <Typography variant='h2' >About Me</Typography>
            <Container sx={{m:5,display:'flex',justifyContent:'space-between'}}>
              <div  style={{ maxWidth: 180}}>
                  <CardMedia
                  component="img"
                  height="140"
                  image="https://y26uq11r8xr1zyp0d3inciqv-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/35-1-1024x597.jpg"
                  alt="green iguana"
                  />
              </div>
              <Card  sx={{ maxWidth: 180}}>

                  <CardMedia
                  sx={{}}
                  component="img"
                  height="140"
                  image="https://learn.g2.com/hubfs/Imported%20sitepage%20images/1ZB5giUShe0gw9a6L69qAgsd7wKTQ60ZRoJC5Xq3BIXS517sL6i6mnkAN9khqnaIGzE6FASAusRr7w=w1439-h786.png"
                  alt="green iguana"
                  />
              </Card>
              <Card  sx={{ maxWidth: 180}}>
                  <CardMedia
                  component="img"
                  height="140"
                  image="https://y26uq11r8xr1zyp0d3inciqv-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/35-1-1024x597.jpg"
                  alt="green iguana"
                  />
              </Card>
              <Card  sx={{ maxWidth: 180}}>

                  <CardMedia
                  sx={{}}
                  component="img"
                  height="140"
                  image="https://learn.g2.com/hubfs/Imported%20sitepage%20images/1ZB5giUShe0gw9a6L69qAgsd7wKTQ60ZRoJC5Xq3BIXS517sL6i6mnkAN9khqnaIGzE6FASAusRr7w=w1439-h786.png"
                  alt="green iguana"
                  />
              </Card>
              <Card  sx={{ maxWidth: 180}}>
                  <CardMedia
                  component="img"
                  height="140"
                  image="https://y26uq11r8xr1zyp0d3inciqv-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/35-1-1024x597.jpg"
                  alt="green iguana"
                  />
              </Card>
              <Card  sx={{ maxWidth: 180}}>

                  <CardMedia
                  sx={{}}
                  component="img"
                  height="140"
                  image="https://learn.g2.com/hubfs/Imported%20sitepage%20images/1ZB5giUShe0gw9a6L69qAgsd7wKTQ60ZRoJC5Xq3BIXS517sL6i6mnkAN9khqnaIGzE6FASAusRr7w=w1439-h786.png"
                  alt="green iguana"
                  />
              </Card>
            </Container>
        </Card>



        <Card 
        sx={{display:'flex',
        backgroundColor:'lightblue',
        flexDirection:'column',
        alignItems:'center',
        pt:2}}>
                <Typography variant='h2'>Contact Me</Typography>
                <Card sx={{backgroundColor:'lightblue',textAlign:'center'}}>
                  <Grid container direction={'row'} p={10} spacing={6} justifyContent={'center'} alignItems={'center'}>
                    <Grid item xs={6}><Typography variant='h5'>shovz12@gmail.com</Typography></Grid>
                    <Grid item xs={6}>
                      <Button href="https://www.linkedin.com/in/shoval-zvulun">Linkedin</Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button href="https://github.com/shovz">Github</Button>
                    </Grid>
                    <Grid item xs={6}><Typography variant='h5'>+972-54-690-4003</Typography></Grid>

                  </Grid>
                </Card>
        </Card>
    </div>
  )
}

const mapStateToProps = (state) => ({
  accessToken  : state.setInitState.accessToken,

})

export default connect(mapStateToProps)(Landing)