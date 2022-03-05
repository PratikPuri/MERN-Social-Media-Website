import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './post/postItem';
import PostForm from './post/postForm';
import { getPosts } from '../actions/posts';

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {getPosts();}, [getPosts]);
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
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);