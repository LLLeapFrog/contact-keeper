import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div className='container mt-4'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={text}
            onChange={onChange}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <input
            type='submit'
            value='Search'
            className='btn btn-danger btn-block'
          />
        </div>
      </form>
      {githubContext.users.length > 0 && (
        <div className='form-group'>
          <button
            className='btn btn-light btn-block'
            onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
