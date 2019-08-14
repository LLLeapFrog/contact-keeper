import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/GithubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/GithubFinder' className='btn btn-light'>
        Back to Search
      </Link>
      <span className='align-middle'>Hireable: </span>
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}

      <div className='card p-3 mt-1 mb-2 bg-white'>
        <div className='row'>
          <div className='col-sm-6 text-center pt-3'>
            <img
              src={avatar_url}
              className='rounded-circle'
              alt=''
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div className='col-sm-6'>
            {bio && (
              <Fragment>
                <h4>Biography:</h4>
                <p style={{ margin: '0rem' }}>{bio}</p>
              </Fragment>
            )}
            <div style={{ margin: '1rem 0rem' }}>
              <a href={html_url} className='btn btn-dark my-1'>
                Visit Github Profile
              </a>
            </div>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {login && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>

              <li>
                {login && (
                  <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='card p-3 mb-2 bg-white'>
        <div className='row' style={{ margin: '0 auto' }}>
          <div className='badge badge-danger' style={badgeStyle}>
            Followers: {followers}
          </div>
          <div className='badge badge-success' style={badgeStyle}>
            Following: {following}
          </div>
          <div className='badge badge-warning' style={badgeStyle}>
            Public Repos: {public_repos}
          </div>
          <div className='badge badge-primary' style={badgeStyle}>
            Public Gists: {public_gists}
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

const badgeStyle = {
  alignSelf: 'center',
  padding: '0.5rem',
  margin: '0 0.5rem'
};

export default User;
