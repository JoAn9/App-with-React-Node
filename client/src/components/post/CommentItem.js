import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import ConfirmationDialog from '../layout/ConfirmationDialog';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  comment: { avatar, date, name, text, user, _id },
  postId,
  deleteComment,
  auth,
}) => (
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
      {!auth.loading && auth.user._id === user && (
        <ConfirmationDialog
          textButton=""
          question="Are you sure you want to delete this comment?"
          textCancel="Cancel"
          textConfirm="Delete"
          doAction={e => deleteComment(postId, _id)}
          iconClass="fas fa-times"
        />
      )}
    </div>
  </div>
);

CommentItem.propTypes = {
  auth: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
