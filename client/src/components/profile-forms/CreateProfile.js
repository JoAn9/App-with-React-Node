import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = props => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    bio: '',
    status: '',
    githubusername: '',
    skills: '',
    youtube: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
  });

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin,
  } = formData;

  const fields = [
    {
      name: 'company',
      placeholder: 'Company',
      value: company,
      small: 'Could be your own company or one you work for',
    },
    {
      name: 'website',
      placeholder: 'Website',
      value: website,
      small: 'Could be your own or a company website',
    },
    {
      name: 'location',
      placeholder: 'Location',
      value: location,
      small: 'City & state suggested (eg. Boston, MA)',
    },
    {
      name: 'skills',
      placeholder: '* Skills',
      value: skills,
      small: 'Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)',
    },
    {
      name: 'githubusername',
      placeholder: 'Github Username',
      value: githubusername,
      small:
        'If you want your latest repos and a Github link, include your username',
    },
  ];

  const fieldsSocial = [
    {
      name: 'twitter',
      placeholder: 'Twitter URL',
      value: twitter,
      className: 'fab fa-twitter fa-2x',
    },
    {
      name: 'facebook',
      placeholder: 'Facebook URL',
      value: facebook,
      className: 'fab fa-facebook fa-2x',
    },
    {
      name: 'youtube',
      placeholder: 'YouTube URL',
      value: youtube,
      className: 'fab fa-youtube fa-2x',
    },
    {
      name: 'linkedin',
      placeholder: 'Linkedin URL',
      value: linkedin,
      className: 'fab fa-linkedin fa-2x',
    },
    {
      name: 'instagram',
      placeholder: 'Instagram URL',
      value: instagram,
      className: 'fab fa-instagram fa-2x',
    },
  ];

  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user" /> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form">
        <div className="form-group">
          <select name="status" value={status} onChange={e => onChange(e)}>
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>

        {fields.map(item => (
          <div key={item.name} className="form-group">
            <input
              type="text"
              placeholder={item.placeholder}
              name={item.name}
              value={item.value}
              onChange={e => onChange(e)}
            />
            <small className="form-text">{item.small}</small>
          </div>
        ))}

        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={e => onChange(e)}
          />
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            {fieldsSocial.map(item => (
              <div key={item.name} className="form-group social-input">
                <i className={item.className} />
                <input
                  type="text"
                  placeholder={item.placeholder}
                  name={item.name}
                  value={item.value}
                  onChange={e => onChange(e)}
                />
              </div>
            ))}
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
