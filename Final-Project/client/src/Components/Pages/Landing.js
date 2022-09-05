import React from 'react'
import { connect } from 'react-redux'
import {Container,Typography,Card,Grid ,CardMedia,Button} from '@mui/material'
import './landing.css'
export const Landing = (props) => {  
  return (
    <div>
        <div className='main'>
            <Container maxWidth="sm" sx={{position:'absolute'
            ,left:'150px',top:'150px'}}>
            <Typography  variant='h2'>Landing Page</Typography>
             <Typography variant='p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip
              </Typography>

              <Button sx={{my:2}} variant='contained' href='/register'>Lets Get started</Button>

            </Container>
            
        </div>


        <Card 
        sx={{display:'flex',
        backgroundColor:'lightblue',
        flexDirection:'column',
        alignItems:'center',
        pt:2}}>
                <Typography variant='h2'>About this Project</Typography>
                <Card sx={{backgroundColor:'lightblue'}}>
                  <Grid container direction={'row'} pt={3} pb={10} spacing={2} justifyContent={'center'} alignItems={'center'}>
                    <Grid item xs={6}><Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography></Grid>
                    <Grid item xs={3}><Typography variant='h5'>Landing</Typography></Grid>
                  </Grid>
                </Card>
        </Card>




        <Card 
        sx={{display:'flex',
        backgroundColor:'lightcyan',
        flexDirection:'column',
        alignItems:'center',
        pt:2}}>
           <Typography variant='h2' >About Me</Typography>
            <Container sx={{m:5,display:'flex',justifyContent:'space-between'}}>
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

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)