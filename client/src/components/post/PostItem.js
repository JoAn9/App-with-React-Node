import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import ConfirmationDialog from '../layout/ConfirmationDialog';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  addLike,
  removeLike,
  deletePost,
  showActions,
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        {showActions && (
          <Fragment>
            <button
              type="button"
              className="btn btn-light"
              onClick={e => addLike(_id)}
            >
              <i className="fas fa-thumbs-up" />{' '}
              {likes.length > 0 && <span>{likes.length}</span>}
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={e => removeLike(_id)}
            >
              <i className="fas fa-thumbs-down" />
            </button>
            <Link to={`/posts/${_id}`} className="btn btn-primary">
              Discussion{' '}
              {comments.length > 0 && (
                <span className="comment-count">{comments.length}</span>
              )}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <ConfirmationDialog
                textButton=""
                question="Are you sure you want to delete this comment?"
                textCancel="Cancel"
                textConfirm="Delete"
                doAction={e => deletePost(_id)}
                iconClass="fas fa-times"
              />
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

PostItem.defaultProps = {
  showActions: true,
};

const mapsStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapsStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
