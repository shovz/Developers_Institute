import {Container,Grid} from '@mui/material';
import JobApplication from '../Elements/JobApplication';
import SideFilter from '../Elements/SideFilter';

const jobs=[
    {
      title: 'apple',
      applicationDate: '20-06-2022'
    },
    {
      title: 'facebook',
      applicationDate: '31-01-2022'
    },
    {
      title: 'wix',
      applicationDate: '01-11-2022'
    },
    {
      title: 'slagator',
      applicationDate: '15-11-2022'
    },
    {
      title: 'intel',
      applicationDate: '06-08-2022'
    },
    {
      title: 'bond',
      applicationDate: '02-09-2022'
    },
  ]

function DashBoard() {
  return (
    <Container sx={{display:'flex',mt:2}}>
    <SideFilter>
      <div>
        <Container>Favorites</Container>
        <Container>ASD</Container>
        <Container>ASD</Container>
        <Container>ASD</Container>
        <Container>ASD</Container>
      </div>
      <div style={{margin:'50px 0',height:'200px',backgroundColor:'lightcoral'}}>
        <div>Upcoming Interviews</div>
        <div>
        </div>
      </div>
    </SideFilter>
    <Grid container spacing={2}>
      {
        jobs.map((item,i)=>{
          return(
            <Grid item key={i} xs={4}>
              <JobApplication title={item.title} date={item.applicationDate}/>
            </Grid>
          )
        })
      }
    </Grid>

  </Container>
  )
}

export default DashBoard