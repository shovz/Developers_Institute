import React from 'react';
import { useState,useEffect} from 'react';
import { connect } from 'react-redux';
import {TextField,Stack,MenuItem} from '@mui/material';
import {setCompany,setSalary,setPost_url,
        setWebsite,setPosition,setJob_description,setLocation,
        setCreatedat,setEndedat,setJobMethod,
        setaJobAssignment,setAssignment_date,setCompletedAss,
        setJobRejected,setJobRefused,setJobReason,setJobOffer,setOfferDetails }
        from '../../Redux/Actions/InsertJobInfo';

export const JobInfo = (props) => {
  const {IsNewApp} = props;
  let thisAppLog = IsNewApp ? props.application : props.appInfo;
  
  const [method, setMethod] = useState(' ');
  const [assignment, setAssignment] = useState(false);
  const [assCompleted, setAssCompleted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [reason, setReason] = useState('culture');
  const [refused, setRefused] = useState(false);
  
  // const initJobInfo = ()=>{
    

  // }

  // useEffect(() => {
  //   initJobInfo();
  
  // }, [])
  





  const handleMethodChange = (event) => {
    console.log('shoval method');
    setMethod(event.target.value);
    props.dispatch(setJobMethod(method))
    };

  const handleAssignmentChange = (event) => {
    setAssignment(event.target.value);
    props.dispatch(setaJobAssignment(event.target.value))
    };
  
  const handleAssCompletedChange= (event) => {
    setAssCompleted(event.target.value);
    props.dispatch(setCompletedAss(event.target.value))
    };
    
  const handleRejectedChange= (event) => {
    setRejected(event.target.value);
    props.dispatch(setJobRejected(event.target.value))
    };

  const handleReasonChange= (event) => {
    setReason(event.target.value);
    props.dispatch(setJobReason(event.target.value))
    }; 

  const handleRefusedChange= (event) => {
    setRefused(event.target.value);
    props.dispatch(setJobRefused(event.target.value))
    }; 

  return (
      <div style={{display:'flex',
        flexDirection:'column',
        width:'100%',
        height:'100%',
        padding:'20px 5px',
        }}>
          <Stack direction={'row'} spacing={2}>
            <div>
              <TextField 
              onChange={(e)=>props.dispatch(setCompany(e.target.value))}
              size='small'  
              label="Company" 
              value={
               thisAppLog.company        
              }/>
              
            </div>
            <div>
              <TextField 
              onChange={(e)=>props.dispatch(setPosition(e.target.value))}
              size='small' 
              label="Job title" 
              value={
                thisAppLog.position         
              }/>
            </div>   

            <TextField
                onChange={(e)=>{
                  console.log(e.target.value)
                  props.dispatch(setCreatedat(e.target.value)
                )}}
                label="Start Date"
                size='small'
                type="datetime-local"
                value={thisAppLog.createdat}
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            {
              !thisAppLog.active?
              (             
                <TextField
                onChange={(e)=>props.dispatch(setEndedat(e.target.value))}
                label="End Date"
                size='small'
                type="datetime-local"
                value={thisAppLog.endedat}
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />):null
            }
          </Stack>

          <Stack sx={{my:6}} direction={'row'} spacing={2}>
            <div>
              <TextField 
              onChange={(e)=>props.dispatch(setPost_url(e.target.value))}
              size='small' 
              sx={{width:'300px'}} 
              label="Post URL" 
              value={
               thisAppLog.post_url         
              }/>
            </div>
            <div>
              <TextField 
              onChange={(e)=>props.dispatch(setWebsite(e.target.value))}
              size='small'  
              label="Company's Website" 
              value={
                thisAppLog.website         
              }/>
            </div>    
            <TextField
                size='small'
                select 
                label="Method of Communication"
                value={thisAppLog.method}
                onChange={handleMethodChange}
                sx={{width:'200px'}}
                >
                <MenuItem value={' '}>Website</MenuItem>
                <MenuItem value={'phone'}>Phone</MenuItem>
                <MenuItem value={'video'}>Video</MenuItem>
                <MenuItem value={'onsite'}>Onsite</MenuItem>
              </TextField>

          </Stack>

          <Stack direction={'row'} spacing={5}>
            <div>
              <TextField 
              onChange={(e)=>props.dispatch(setLocation(e.target.value))}
              size='small' 
              sx={{width:'350px'}} 
              label="Location" 
              value={
                thisAppLog.location            
              }/>
            </div>
            <div>
              <TextField 
              onChange={(e)=>props.dispatch(setSalary(e.target.value))}
              size='small'  
              label="Salary" 
              value={
                thisAppLog.salary         
              }/>
            </div>   

          </Stack>
          <Stack sx={{mt:6}} direction={'row'} spacing={5}>
            <TextField
                  size='small'
                  select
                  label="Assignment"
                  value={thisAppLog.assignment}
                  onChange={handleAssignmentChange}
                  sx={{width:'150px'}}
                  >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
            </TextField>
            {
              assignment?
              ( 
                <>
                <TextField
                onChange={(e)=>props.dispatch(setAssignment_date(e.target.value))}
                label="Assignment Deadline"
                size='small'
                type="datetime-local"
                value={thisAppLog.assignment_date}
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            <TextField
                size='small'
                select 
                label="Assignment Completed"
                value={thisAppLog.completed_ass}
                onChange={handleAssCompletedChange}
                sx={{width:'200px'}}
                >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </TextField>
              </>
              ):null
            }
          </Stack>
          <Stack sx={{mt:6}} direction={'row'} spacing={5}>
            <TextField
                  size='small'
                  select
                  label="Rejected"
                  value={thisAppLog.rejected}
                  onChange={handleRejectedChange}
                  sx={{width:'150px'}}
                  >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
            </TextField>          
            {
              rejected?
              (
                <TextField
                size='small'
                select
                label="Reason"
                value={thisAppLog.reason}
                onChange={handleReasonChange}
                sx={{width:'200px'}}
                >
                  <MenuItem value={'culture'}>Culture Fiting</MenuItem>
                  <MenuItem value={'techincal'}>Technical</MenuItem>
                  <MenuItem value={'experience'}>Experience</MenuItem>
                  <MenuItem value={'not relevant'}>Not Relevant</MenuItem>
                  <MenuItem value={'other'}>Other</MenuItem>
               </TextField>  
              ) :null
            }
            <TextField
                size='small'
                select 
                label="Refused By User"
                value={thisAppLog.refused}
                onChange={handleRefusedChange}
                sx={{width:'150px'}}
                >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </TextField>
          </Stack>
          <div>
              <TextField 
                  onChange={(e)=>props.dispatch(setJob_description(e.target.value))}
                  size='small' 
                  label="Job Description"
                  multiline
                  rows={8}
                  sx={{width:'450px',mt:6}}
                  value={
                    thisAppLog.job_description         
                  }/>
            </div>    
      </div>
  )
}

const mapStateToProps = (state) => ({
  IsNewApp: state.setInitState.IsNewApp,
  application : state.setJobApp,
  
})



export default connect(mapStateToProps)(JobInfo)