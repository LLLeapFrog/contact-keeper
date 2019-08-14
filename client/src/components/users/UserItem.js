import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card p-3 mb-4 bg-white rounded text-center'>
      <img
        src={avatar_url}
        alt=''
        className='rounded-circle align-self-center mt-2'
        style={{ width: '60px' }}
      />
      <h5>{login}</h5>

      <div
        style={{
          margin: '0.5rem'
        }}
      >
        <Link to={`/user/${login}`} className='btn btn-dark my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
