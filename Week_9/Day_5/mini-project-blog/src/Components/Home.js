import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {getPost} from '../reducers/actions'
import blog from './blog.png'
import './style.css'
class Home extends Component{
  
  
  render(){
    return (
      
      <div>
        <h2>Home</h2>
        <div className='post_contanier'>
        {
          this.props.posts.length ? (
            this.props.posts.map((post)=>{
                  // console.log(post);
                  return (
                    <Link key={post.id} to={`/${post.id}`} onClick={()=>this.props.p(post.id)}>
                      <div className='post' >
                          <img alt='post' src={blog}/>
                          <div>
                            <h5>{post.title}</h5>
                            <p >{post.body}</p>
                          </div>
                      </div>
                    </Link>
                  )
                })

              ) : null
              
              
            }




        </div>

    </div>
    );
  }
}
 
const mapStateToProps=(state)=>{
  return {
    posts : state.posts
  }
}


const mapDispatchToProps=(dispatch)=>{
  return {
    p : (post_id) => dispatch(getPost(post_id)),

  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Home);


