import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='card mb-2 p-1 pl-3'>
      <h4>
        <a className='text-dark align-middle' href={repo.html_url}>
          {repo.name}
        </a>
      </h4>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
