import React from 'react'
import { connect } from 'react-redux'
import {TextField} from '@mui/material';
import { setNotes } from '../../Redux/Actions/InsertNotes';

export const Notes = (props) => {
  const {IsNewApp,application} = props;
  const newApplicaiton = props.application;
  const thisAppLog = props.thisAppLog|| newApplicaiton;

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
              IsNewApp? application.notes:thisAppLog.notes         
            }/> 
      </div>
  )
}

const mapStateToProps = (state) => ({
  IsNewApp: state.setInitState.IsNewApp,
  application : state.setJobApp,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)