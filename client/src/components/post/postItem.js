import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate.js';
import { connect } from 'react-redux';
import { like } from '../../actions/posts';

const PostItem = ({
like,post,
  post: { _id, text, name, likes, date},
}) => (
  <div className="post bg-white p-1 my-1">
    <div>
        <h4>{name}</h4>
    </div>
    <div>
      <p className="my-1">{text}</p>
      <p className="post-date">Posted on {formatDate(date)}</p>
        <button onClick={() => like(_id)} type="button" className="btn btn-light">
        
        <i className="fas fa-thumbs-up" />{' '} <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        </button>
        {/* Discussion{' '} */}
    </div>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  like: PropTypes.func.isRequired,
};

// export default PostItem
export default connect(null, { like })(PostItem);