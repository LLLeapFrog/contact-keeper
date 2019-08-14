import React from 'react';
import JobForm from '../job/JobForm';
import Jobs from '../job/Jobs';

const JobFinder = () => {
  return (
    <div
      className='row'
      style={{
        margin: '2rem -7rem 0'
      }}
    >
      <div className='col-sm-3' style={{ paddingRight: '1rem' }}>
        <JobForm />
      </div>
      <div className='col-sm-9' style={{ paddingLeft: '1rem' }}>
        <Jobs />
      </div>
    </div>
  );
};

export default JobFinder;
