import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { avatar, name },
  },
}) => {
  const checkLink = link => link.includes('http');

  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={avatar} alt="" />
      <h1 className="large">{name}</h1>
      <p className="lead">
        {status} {company && <span>at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div className="icons my-1">
        {website && (
          <a
            href={checkLink(website) ? website : `https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-globe fa-2x" />
          </a>
        )}
        {social && social.twitter && (
          <a
            href={
              checkLink(social.twitter)
                ? social.twitter
                : `https://${social.twitter}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-2x" />
          </a>
        )}

        {social && social.facebook && (
          <a
            href={
              checkLink(social.facebook)
                ? social.facebook
                : `https://${social.facebook}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-2x" />
          </a>
        )}

        {social && social.linkedin && (
          <a
            href={
              checkLink(social.linkedin)
                ? social.linkedin
                : `https://${social.linkedin}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
        )}

        {social && social.youtube && (
          <a
            href={
              checkLink(social.youtube)
                ? social.youtube
                : `https://${social.youtube}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube fa-2x" />
          </a>
        )}

        {social && social.instagram && (
          <a
            href={
              checkLink(social.instagram)
                ? social.instagram
                : `https://${social.instagram}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-2x" />
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
