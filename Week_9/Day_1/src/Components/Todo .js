import {connect} from 'react-redux';

const Todo=(props)=>
{
  return (
          <li 
            style={{ textDecoration: props.completed ? 'line-through' : 'none'}}>
              {props.task}
          </li>

  )
}
 
const mapStateToProps=(state)=>{
    return {
      completed:state.moviesReducer,
      task: state.task
    }
  }


export default  connect(mapStateToProps)(Todo);