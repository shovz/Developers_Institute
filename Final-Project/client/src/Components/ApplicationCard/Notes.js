import React from 'react'
import { connect } from 'react-redux'
import applications from '../../LocalDB/applicationDb.json'
import {TextField} from '@mui/material';


export const Notes = (props) => {
    const {notes} = applications[0]

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
            defaultValue={notes}
            />   
      </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)