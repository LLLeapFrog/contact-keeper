import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import JobContext from '../../context/job/JobContext';

const JobItem = ({ job }) => {
  const jobContext = useContext(JobContext);
  const {} = jobContext;

  const {
    id,
    listingDate,
    title,
    teaser,
    location,
    workType,
    salary,
    companyName,
    roleId
  } = job;

  return (
    <div
      className='card shadow p-3 mb-4 bg-white'
      style={{ borderRadius: '0.75rem', height: '22rem' }}
    >
      <h4>{title}</h4>
      <p style={line}>
        <strong>Company: </strong>
        {companyName}
      </p>
      <p style={line}>
        <strong>Type: </strong>
        {workType}
      </p>
      <p style={line}>
        <strong>Salary: </strong>
        {salary || 'Not Given'}
      </p>
      {/* location */}
      <p style={line}>
        <i className='fas fa-map-marked-alt' /> {location}
      </p>
      {/* teaser */}
      <div className='overflow-auto' style={teaserBox}>
        <p>{teaser}</p>
      </div>
      {/* buttons */}
      <div style={buttonBox}>
        <button className='btn btn-danger'>Apply</button>
        <button className='btn btn-dark'>More</button>
      </div>
    </div>
  );
};

JobItem.propTypes = {
  job: PropTypes.object.isRequired
};

// CSS
const teaserBox = {
  height: '5rem',
  background: 'rgb(245, 245, 245)',
  padding: '0.5rem',
  height: '100%',
  borderRadius: '0.5rem'
};

const buttonBox = {
  margin: '0.5rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 45%)',
  gridGap: '1rem'
};

const line = {
  margin: '0'
};

const border = {
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: 'red'
};

export default JobItem;
