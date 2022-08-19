import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {deletetPost} from '../reducers/actions'
class Post extends Component{

  render(){
    const {post_id, posts} = this.props;
    return (
      <div>
        <h1>{posts[post_id-1].title}</h1>
        <p>{posts[post_id-1].body}</p>
        <Link to={'/'}>
          <button onClick={()=>this.props.dispatch(deletetPost(post_id,posts))}>
            delete post
            </button>
        </Link>
    </div>
    );
  }
}
 
const mapStateToProps=(state)=>{
  return {
    posts : state.posts,
    post_id  : state.post_id 
  }
}

export default  connect(mapStateToProps)(Post);


