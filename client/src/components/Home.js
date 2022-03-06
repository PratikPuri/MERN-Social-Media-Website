import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './post/postItem';
import PostForm from './post/postForm';
import { getPosts } from '../actions/posts';
import { Navigate } from 'react-router-dom';

const Posts = ({ getPosts, post: { posts }, isAuthenticated }) => {
  useEffect(() => {getPosts();}, [getPosts]);
  if (!isAuthenticated){
    return <Navigate to = '/'/>;
  }
  return (
    <section className="container1">
      <p className="lead">
        <i className="fas fa-user" /> Welcome to the community
      </p>
      <PostForm/>
      <div className="posts"> {posts.map((post) => ( <PostItem post={post} />))}
      </div>
    </section>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  post: state.post,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getPosts })(Posts);