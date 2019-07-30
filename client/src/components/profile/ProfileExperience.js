import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({ experience }) => (
  <div className="profile-exp bg-white p-2">
    <h2 className="text-primary">Experience</h2>
    {experience.length > 0 ? (
      experience.map(item => {
        const { _id, company, title, from, to, description } = item;
        return (
          <div key={_id}>
            <h3 className="text-dark">{company}</h3>
            <p>
              <Moment format="YYYY/MM">{from}</Moment> -{' '}
              {to ? <Moment format="YYYY/MM">{to}</Moment> : ' Now'}
            </p>
            <p>
              <strong>Position: </strong>
              {title}
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
      <h4>User have no experience</h4>
    )}
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
