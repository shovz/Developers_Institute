import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container,Box,Typography} from '@mui/material';

function mapStateToProps(state) {
    return {
        current_condition:state.current_condition,
        city_key: state.city_key,
    };
}

class Forcast extends Component {
    render() {
        return (
            <Container>
                <Box>
                    <Typography  variant="h2"> 
                    5 Days Forcast :
                    </Typography>
                </Box>
                <Box>
                <Typography  variant="h5"> 
                Time :
                    {this.props.current_condition[0].LocalObservationDateTime}

                </Typography>
                <Typography  variant="h5"> 
                Current Temperature :
                    {this.props.current_condition[0].Temperature.Metric.Value}
                    {this.props.current_condition[0].Temperature.Metric.Unit}
                </Typography>
                <Typography  variant="h5"> 
                Weather :
                    {this.props.current_condition[0].WeatherText}

                </Typography>
                </Box>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(Forcast);