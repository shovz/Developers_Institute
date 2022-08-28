import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container,Box,Typography} from '@mui/material';

function mapStateToProps(state) {
    return {
        forcast:state.forcast,
        city_key: state.city_key,
    };
}

class Forcast extends Component {
    
    render() {
        const forcast = this.props.forcast.DailyForecasts
        console.log(forcast);
        return (
            <Container>
                <Box>
                    <Typography  variant="h2"> 
                    5 Days Forcast :
                    </Typography>
                </Box>
                {
                    forcast.map((day,i)=>{
                        return(
                            <Box  sx={{ bgcolor: 'primary.main' ,margin:'30px 0',padding:'15px'}}  key={i}>
                            <Typography  variant="h5"> 
                            Time :
                                { day.Date  }
                               
                            </Typography>
                            <Typography  variant="h5"> 
                            Min Temperature :
                                {day.Temperature.Minimum.Value}
                                {day.Temperature.Minimum.Unit}
                            </Typography>
                            <Typography  variant="h5"> 
                            Max Temperature :
                                {day.Temperature.Minimum.Value}
                                {day.Temperature.Minimum.Unit}
                            </Typography>
                            <Typography  variant="h5"> 
                           day forcast :
                                {day.Day.IconPhrase}
                            </Typography>
                            <Typography  variant="h5"> 
                            night forcast :
                                {day.Night.IconPhrase}
                            </Typography>
                            </Box>
                        )
                    })
                }
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(Forcast);