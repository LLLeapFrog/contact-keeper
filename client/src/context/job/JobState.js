import React, { useReducer } from 'react';
import axios from 'axios';
import JobContext from './JobContext';
import jobReducer from './jobReducer';
import { SEARCH_JOBS, SET_LOADING } from '../types';

let host;

if (process.env.NODE_ENV !== 'production') {
  host = process.env.REACT_APP_HOST;
} else {
  host = process.env.HOST;
}

const JobState = props => {
  const initialState = {
    jobs: [],
    loading: false
  };

  const config = {
    headers: null
  };

  const [state, dispatch] = useReducer(jobReducer, initialState);

  // Set Loading
  const setLoading = () =>
    dispatch({
      type: SET_LOADING
    });

  // Search jobs by a keyword
  const searchJobs = async job => {
    setLoading();
    const { keyword, location, type } = job;

    const params =
      (keyword ? '&q=' + keyword : '') +
      (location ? '&location=' + location : '') +
      (type ? '&workType=' + type : '');
    console.log(params.slice(1));

    const res = await axios.post(`${host}${params.slice(1)}`, config);

    dispatch({
      type: SEARCH_JOBS,
      payload: res.data
    });
  };

  return (
    <JobContext.Provider
      value={{
        jobs: state.jobs,
        loading: state.loading,
        searchJobs
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};

export default JobState;
