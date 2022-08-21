import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container,Grid,Typography,IconButton } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
import CurrentCondition from './CurrentCondition';
import Forcast from './Forcast';
import {addToFav} from '../reducers/actions'

function mapStateToProps(state) {
    return {
        searched_city:state.searched_city,
        city_key: state.city_key,

    };
}

class Home extends Component {
    render() {
        return (
            
            <Container maxWidth="sm">
                <Grid mt={5} container spacing={2}>
                    <Grid container justifyContent="center" alignItems="center" >
                       <Typography  variant="h3"> {this.props.searched_city}</Typography>
                        <IconButton onClick={()=>this.props.dispatch(addToFav(this.props.searched_city))}>
                            <StarIcon/>
                        </IconButton >
                    </Grid>
                    <Grid>
                        <CurrentCondition/>
                    </Grid>
                    <Grid>
                        <Forcast/>
                    </Grid>
                </Grid>
            </Container >
            


        );
    }
}

export default connect(mapStateToProps)(Home);