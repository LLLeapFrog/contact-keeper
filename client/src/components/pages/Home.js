import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        There are <strong>3 apps available</strong> on this website at the
        moment - Github Finder, Contact Keeper and Job Finder.
      </p>
      <p>
        More functions are under construction such as data analysis app and JS
        games.
      </p>
      <p>
        <i className='fas fa-exclamation-triangle' /> In order to seperate
        users' contacts, you have to register an account before using{' '}
        <strong>Contact Keeper</strong>.
      </p>
    </div>
  );
};

export default Home;
