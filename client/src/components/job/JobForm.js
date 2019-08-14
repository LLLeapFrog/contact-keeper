import React, { useState, useContext } from 'react';
import JobContext from '../../context/job/JobContext';

const JobForm = () => {
  const jobContext = useContext(JobContext);

  const [job, setKeyword] = useState({
    keyword: '',
    location: '',
    type: 'Full Time'
  });

  const { keyword, location, type } = job;

  const onSubmit = e => {
    e.preventDefault();
    jobContext.searchJobs(job);
    setKeyword({
      keyword: '',
      location: '',
      type: 'Full Time'
    });
  };

  const onChange = e => {
    setKeyword({
      ...job,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={onSubmit}>
      {/* Title */}
      <div className='form-group'>
        <h2>Search</h2>
      </div>
      {/* Input keywords */}
      <div className='form-group'>
        <input
          type='text'
          placeholder='Enter keywords'
          name='keyword'
          value={keyword}
          onChange={onChange}
          className='form-control'
        />
      </div>
      {/* Input location */}
      <div className='form-group'>
        <input
          type='text'
          placeholder='Enter a location'
          name='location'
          value={location}
          onChange={onChange}
          className='form-control'
        />
      </div>
      {/* select type */}
      <div className='form-group'>
        <select
          name='type'
          value={type}
          onChange={onChange}
          className='form-control'
        >
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Contract/Temp</option>
          <option>Casual/Vacation</option>
        </select>
      </div>
      {/* Button submit */}
      <div className='form-group'>
        <input type='submit' className='btn btn-danger btn-block' />
      </div>
    </form>
  );
};

export default JobForm;
