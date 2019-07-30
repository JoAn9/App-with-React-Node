import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({ education }) => (
  <div className="profile-edu bg-white p-2">
    <h2 className="text-primary">Education</h2>
    {education.length > 0 ? (
      education.map(item => {
        const {
          _id,
          school,
          degree,
          fieldofstudy,
          from,
          to,
          description,
        } = item;
        return (
          <div key={_id}>
            <h3 className="text-dark">{school}</h3>
            <p>
              <Moment format="YYYY/MM">{from}</Moment> -{' '}
              {to ? <Moment format="YYYY/MM">{to}</Moment> : ' Now'}
            </p>
            <p>
              <strong>Degree: </strong>
              {degree}
            </p>
            <p>
              <strong>Field of study: </strong>
              {fieldofstudy}
            </p>
            {description && (
              <p>
                <strong>Description: </strong>
                {description}
              </p>
            )}
          </div>
        );
      })
    ) : (
      <h4>User have no education</h4>
    )}
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
