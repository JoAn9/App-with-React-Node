import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getGithubRepos } from '../../actions/profile';

const ProfileRepos = ({ getGithubRepos, repos, githubusername }) => {
  useEffect(() => {
    getGithubRepos(githubusername);
  }, [getGithubRepos]);
  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">Github Repos</h2>
      {repos === null ? (
        <Spinner />
      ) : repos.lenght === 0 ? (
        'User have no repos'
      ) : (
        repos.map(item => (
          <div key={item.id} className="repo bg-white p-1 my-1">
            <div>
              <h4>
                <a
                  href={item.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              </h4>
              <p>{item.description || item.full_name}</p>
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">
                  Stars: {item.stargazers_count}
                </li>
                <li className="badge badge-dark">
                  Watchers: {item.watchers_count}
                </li>
                <li className="badge badge-light">Forks: {item.forks_count}</li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

ProfileRepos.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  githubusername: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  repos: state.profile.repos,
});

export default connect(
  mapStateToProps,
  { getGithubRepos }
)(ProfileRepos);
