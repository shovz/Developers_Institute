import {connect} from 'react-redux';
import { changeOne } from '../redux/actions';

const  Two =(props)=>{
    return (
        <>
        <h1>Two</h1>
         Cahnge state of One  :
         <input type='text' onChange={(e)=> props.change(e.target.value)}/>
        </>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return {
      change: (val) => dispatch(changeOne(val))
    }
  }
  export default  connect(null,mapDispatchToProps)(Two);

