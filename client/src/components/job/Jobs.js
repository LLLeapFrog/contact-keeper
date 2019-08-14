import React, { useContext } from 'react';
import JobItem from '../../components/job/JobItem';
import Spinner from '../layout/Spinner';
import Blank from '../layout/Blank';
import JobContext from '../../context/job/JobContext';

const Jobs = () => {
  const jobContext = useContext(JobContext);

  const { loading, jobs } = jobContext;

  if (loading) {
    return <Spinner />;
  } else if (jobs.length === 0) {
    return <Blank />;
  } else {
    return (
      <div style={grid}>
        {jobs.map(job => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
    );
  }
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Jobs;
