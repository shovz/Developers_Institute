import React, { Component } from 'react';
import {connect} from 'react-redux';
import { handleInsert,handleInputChange,} from '../reducers/actions';


class TransactionForm extends Component{

  handleSubmit = (e)=>{
    e.preventDefault();
    if (this.props.currentIndex === -1){
       this.props.insertTransaction(this.state)
    }
    else{
        this.props.updateTransaction(this.state)
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length) {
        this.setState({ ...this.returnStateObject() })
    }
}

  render(){
    return (
      <div style={{display:"flex",justifyContent:"center"}} >

        <form  onSubmit={()=>this.handleSubmit}>
          <input onChange={this.props.inputChange} 
          name='accountNumber' type="text" placeholder='Account Number'
          value={this.props.accountNumber}/> <br/>

          <input onChange={this.props.inputChange}  
          name='fsc' type="text" placeholder='FSC'
          value={this.props.FSC}/> <br/>

          <input onChange={this.props.inputChange}  
          name='name' type="text" placeholder='Name'
          value={this.props.name}/> <br/>
          
          <input onChange={this.props.inputChange}  
          name='amount' type="text" placeholder='Amount'
          value={this.props.amount}/> <br/>  

          <button type="submit">submit</button>

        </form>
</div>

    );
  }
}
 
const mapStateToProps=(state)=>{
    return {
      accountNumber: state.transactions.accountNumber,
      FSC: state.transactions.FSC,
      name : state.transactions.name ,
      amount: state.transactions.amount,
      list: state.transactions.list,
      currentIndex  : state.transactions.currentIndex
    }
  }

const mapDispatchToProps=(dispatch)=>{
    return {
      inputChange: (e) => dispatch(handleInputChange(e.target.value,e.target.name)),
      insertTransaction: () => dispatch(handleInsert()),
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(TransactionForm);

