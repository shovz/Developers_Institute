import React from 'react'
import { connect } from 'react-redux'
import {TextField} from '@mui/material';


export const Notes = (props) => {
  const {application_id} = props;


  return (
      <div style={{
        // margin:'0 auto',
        padding:'10px 5px',
        }}>
        <TextField size='small' 
            label="Notes"
            multiline
            rows={14}
            sx={{width:'550px'}}
            defaultValue={
              application_id? 'Add Notes':null         
            }/> 
      </div>
  )
}

const mapStateToProps = (state) => ({
  application_id: state.setjobApp.application_id
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)