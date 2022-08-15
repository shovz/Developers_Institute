import {connect} from 'react-redux';
 
const Three=(props)=>
{
  return (
    <div>
        <h1>Three</h1>
        <h1>{props.c}</h1>
    </div>
  )
}
 
const mapStateToProps=(state)=>{
    return {
      c:state.prop_three

    }
  }
  


  export default  connect(mapStateToProps)(Three);