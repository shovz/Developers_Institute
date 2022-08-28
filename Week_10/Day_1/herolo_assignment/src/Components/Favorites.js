import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        fav_cities:state.fav_cities

    };
}

class Favorites extends Component {
    render() {
        return (
            <div>
                {
                    this.props.fav_cities.map((city,i)=>{
                        console.log(city)
                        return (
                            <div key={i}>
                                <h1>{city}</h1>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Favorites);