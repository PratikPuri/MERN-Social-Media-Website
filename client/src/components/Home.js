// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import PostItem from './PostItem';
// import PostForm from './PostForm';
// import { getPosts } from '../../actions/post';

// const Posts = ({ getPosts, post: { posts } }) => {
//   useEffect(() => {getPosts();}, [getPosts]);

//   return (
//     <section className="container">
//       <h1 className="large text-primary">Posts</h1>
//       <p className="lead">
//         <i className="fas fa-user" /> Welcome to the community
//       </p>
//       <PostForm />
//       <div className="posts">
//         {posts.map((post) => (
//           <PostItem key={post._id} post={post} />
//         ))}
//       </div>
//     </section>
//   );
// };

// Posts.propTypes = {
//   getPosts: PropTypes.func.isRequired,
//   post: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//   post: state.post
// });

// export default connect(mapStateToProps, { getPosts })(Posts);

const HomePage = () => {return (<pre>This is a home page</pre>)}

export default HomePage

// const Landing = () => {
//     return (
//         <section className="landing">
//       <div className="dark-overlay">
//         <div className="landing-inner">
//           <div className="buttons">
//             <pre><Link to="/register" className="btn btn-1">Sign Up</Link>
//               <Link to="/login" className="btn btn-2">Login</Link></pre>
//           </div>
//         </div>
//       </div>
//     </section>
//     )
// }

// export default Landing