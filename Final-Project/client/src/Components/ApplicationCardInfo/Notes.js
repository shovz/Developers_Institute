import React from 'react'
import { connect } from 'react-redux'
import {TextField} from '@mui/material';
import { setNotes } from '../../Redux/Actions/InsertNotes';

export const Notes = (props) => {
  const {application_id} = props;


  return (
      <div style={{
        padding:'10px 5px',
        }}>
        <TextField 
            onChange={(e)=>props.dispatch(setNotes(e.target.value))}
            label="Notes"
            multiline
            rows={14}
            sx={{width:'550px'}}
            defaultValue={
              application_id? '':null         
            }/> 
      </div>
  )
}

const mapStateToProps = (state) => ({
  application_id: state.setjobApp.application_id
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)