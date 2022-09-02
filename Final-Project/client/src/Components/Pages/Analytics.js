import React from 'react'
import { connect } from 'react-redux'
import {Container,Typography} from '@mui/material'


export const Analytics = (props) => {
  return (
    <div>
    <Container ><Typography variant='h2'>Analytics</Typography></Container>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Analytics)