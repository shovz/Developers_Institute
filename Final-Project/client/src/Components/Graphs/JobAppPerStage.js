import React from 'react';
import {connect} from 'react-redux';
import {Chart as ChartJS} from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';



const JobAppPerStage = (props) => {
  const {stages} = props;
  const data = {
    labels : stages,
    datasets: [
      {
        label: 'JOB APPLICATION PER STAGE',
        data: props.sorted_Job_Apps_by_stage.map((data) =>data[1].length),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      
    ],
    
  };

  const options={
    scales: {
      y: {
        beginAtZero: true,
        max: 20
    }
  },
  }


  return (
      <div style={{width:'95%',margin:'auto'}}>
        <Bar data={data} options={options} />
      </div>
  )
}


const mapStateToProps=(state)=>{
  return {
    stages: state.setInitState.stages,
    user_id: state.setJobApp.user_id,
    sorted_Job_Apps_by_stage:state.setAnalytics.sorted_Job_Apps_by_stage,  
  }
}

export default connect(mapStateToProps)(JobAppPerStage)