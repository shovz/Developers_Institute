import {connect} from 'react-redux';
const  One =(props)=>{
    return (
        <>
        <h1>One</h1>
        <h2>display state from store {props.one}</h2>
        </>
    )
}

const mapStateToProps=(state)=>{
    return {
      one:state.one_one
    }
  }
export default  connect(mapStateToProps)(One);