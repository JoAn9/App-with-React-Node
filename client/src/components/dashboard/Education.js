import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import ConfirmationDialog from '../layout/ConfirmationDialog';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map(item => (
    <tr key={item._id}>
      <td>{item.school}</td>
      <td className="hide-sm">{item.degree}</td>
      <td className="hide-sm">
        <Moment format="YYYY/MM">{item.from}</Moment> -{' '}
        {item.to === null ? 'Now' : <Moment format="YYYY/MM">{item.to}</Moment>}
      </td>
      <td>
        <ConfirmationDialog
          textButton="Delete"
          question="Are you sure you want to delete this education?"
          textCancel="Cancel"
          textConfirm="Delete"
          doAction={() => deleteEducation(item._id)}
        />
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Education</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(
  null,
  { deleteEducation }
)(Education);
