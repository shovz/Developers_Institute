import React, { Component } from 'react';
import {connect} from 'react-redux';
import TransactionForm from './TransactionForm';
import {handleDelete,handleEdit} from '../reducers/actions'



class TransactionList extends Component{
  render(){

    return (
      <div>
            <TransactionForm/>
            <table>
              <tbody>
                {
                  this.props.list.map((elem,index)=>{
                    return (
                  
                        <tr indexd={elem.currentIndex} key={index}>
                            <td>{elem.accountNumber}</td>
                            <td>{elem.name} </td>
                            <td>{elem.amount} </td>
                            <td><button onClick={()=>this.props.edit(index)}>Edit</button></td>
                            <td><button onClick={()=>this.props.delete(index)}>Delete</button></td>
                        </tr>                        
                    )
                  })
                } 
              </tbody>
            </table>
      </div>




    );
  }
}

const mapStateToProps=(state)=>{
  return {
    list: state.transactions.list,
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    edit : (index) => dispatch(handleEdit(index)),
    delete : (index) => dispatch(handleDelete(index)),

  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(TransactionList);

