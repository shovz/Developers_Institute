import React from 'react';
import { useState} from 'react';
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
  const newApplicaiton = props.application;
  const thisAppLog = props.thisAppLog|| newApplicaiton;
  // console.log('thisAppLog',thisAppLog);
  // console.log('newApplicaiton',newApplicaiton);
  const [method, setMethod] = useState(' ');
  const [assignment, setAssignment] = useState(false);
  const [assCompleted, setAssCompleted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [reason, setReason] = useState('culture');
  const [refused, setRefused] = useState(false);
  
  const handleMethodChange = (event) => {
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
              defaultValue={
                IsNewApp? newApplicaiton.company:thisAppLog.company         
              }/>
            </div>
            <div>
              <TextField 
              onChange={(e)=>props.dispatch(setPosition(e.target.value))}
              size='small' 
              label="Job title" 
              defaultValue={
                IsNewApp? newApplicaiton.position:thisAppLog.position         
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
                defaultValue={IsNewApp? newApplicaiton.createdat:thisAppLog.createdat}
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            {
              !newApplicaiton.active?
              (             
                <TextField
                onChange={(e)=>props.dispatch(setEndedat(e.target.value))}
                label="End Date"
                size='small'
                type="datetime-local"
                defaultValue={IsNewApp? newApplicaiton.endedat:thisAppLog.endedat}
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
              defaultValue={
                IsNewApp? newApplicaiton.post_url:thisAppLog.post_url         
              }/>
            </div>
            <div>
              <TextField 
              onChange={(e)=>props.dispatch(setWebsite(e.target.value))}
              size='small'  
              label="Company's Website" 
              defaultValue={
                IsNewApp? newApplicaiton.website:thisAppLog.website         
              }/>
            </div>    
            <TextField
                size='small'
                select 
                label="Method of Communication"
                value={IsNewApp? method:thisAppLog.method  }
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
              defaultValue={
                IsNewApp? newApplicaiton.location:null         
              }/>
            </div>
            <div>
              <TextField 
              onChange={(e)=>props.dispatch(setSalary(e.target.value))}
              size='small'  
              label="Salary" 
              defaultValue={
                IsNewApp? newApplicaiton.salary:null         
              }/>
            </div>   

          </Stack>
          <Stack sx={{mt:6}} direction={'row'} spacing={5}>
            <TextField
                  size='small'
                  select
                  label="Assignment"
                  value={newApplicaiton.assignment}
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
                defaultValue={newApplicaiton.assignment_date}
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            <TextField
                size='small'
                select 
                label="Assignment Completed"
                value={newApplicaiton.completed_ass}
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
                  value={newApplicaiton.rejected}
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
                value={newApplicaiton.reason}
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
                value={newApplicaiton.refused}
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
                  rows={14}
                  sx={{width:'450px',mt:6}}
                  defaultValue={
                    IsNewApp? newApplicaiton.job_description :null         
                  }/>
            </div>    
      </div>
  )
}

const mapStateToProps = (state) => ({
  IsNewApp: state.setInitState.IsNewApp,
  application : state.setjobApp,
  
})



export default connect(mapStateToProps)(JobInfo)