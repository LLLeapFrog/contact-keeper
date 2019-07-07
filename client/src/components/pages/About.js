import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p className='bg-dark p'>
        <strong>Version: </strong>1.0.0
      </p>
      <dev className='container'>
        <p>This is a full-stack React app using React.JS and express.</p>
        <p>To be more specific, the app includes: </p>
        <p>
          Hooks, react-router-dom, axios, concurrently, nodemon,
          express-validator, mongoose, bcryptjs, config, jsonwebtoken, uuid
        </p>
      </dev>
    </div>
  );
};

export default About;
