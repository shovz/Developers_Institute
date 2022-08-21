import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, TextField,Container,Box} from '@mui/material'
import {getLocationKey,changeInput} from '../reducers/actions'
function mapStateToProps(state) {
    return {
        city:state.city,
        city_key: state.city_key,

    };
}

class Search extends Component {
    render() {
        return ( 
            <Container maxWidth="sm">
                <Box mx={16} pt={1}>
                    <TextField 
                    onChange={(e)=>this.props.dispatch(changeInput(e.target.value))}
                    id="standard-basic" 
                    label="Search City Weather" 
                    variant="standard" />
                    <Button href='/' onClick={()=> this.props.dispatch(getLocationKey(this.props.city))}>
                        Get City Weather
                    </Button>
                </Box>
            </Container >
            


        );
    }
}

export default connect(mapStateToProps)(Search);