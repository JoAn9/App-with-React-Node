import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import ConfirmationDialog from '../layout/ConfirmationDialog';
import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map(item => (
    <tr key={item._id}>
      <td>{item.company}</td>
      <td className="hide-sm">{item.title}</td>
      <td className="hide-sm">
        <Moment format="YYYY/MM">{item.from}</Moment> -{' '}
        {item.to === null ? 'Now' : <Moment format="YYYY/MM">{item.to}</Moment>}
      </td>
      <td>
        <ConfirmationDialog
          textButton="Delete"
          question="Are you sure you want to delete this experience?"
          textCancel="Cancel"
          textConfirm="Delete"
          doAction={() => deleteExperience(item._id)}
        />
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Experience</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
