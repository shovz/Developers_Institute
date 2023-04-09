import React from 'react';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import axios from 'axios';

import {Chart as ChartJS} from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';




const BarGraph = (props) => {
  const {stages} = props;

  // useEffect (()=>{
  //   const sortedByStage = async ()=>{
  //     console.log('sortedByStage user id :',props.user_id);
  //     const [user_id] = props;
  //     try{
  //       const sorted_data_by_stage = await axios.post('/sortedByStage',{
  //         user_id
  //       },{
  //         withCredentials:true,
  //         headers:{
  //           'Content-Type':'application/json'
  //         }
  //       });
  //       console.log(sorted_data_by_stage.data);
  //     }
  //   catch(e){
  //       console.log(e);
  //    }
  //   }
  //   sortedByStage();
  // },[])
  

console.log(props.active_jobApps);


  const data = {
    labels : stages,
    datasets: [
      {
        label: 'Dataset 1',
        data: props.active_jobApps.map((data) => data.application_id),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };



  return (
      <div style={{width:'95%',margin:'auto'}}>
        <Bar data={data}  />
      </div>
  )
}


const mapStateToProps=(state)=>{
  return {
    active_jobApps: state.setInitState.active_jobApps,
    stages: state.setInitState.stages,
    user_id: state.setJobApp.user_id
  }
}

export default connect(mapStateToProps)(BarGraph)