import React from 'react';
import AuthContext from '../../context/auth/AuthContext';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        There are two apps available on this website at the moment - Github
        Finder and Contact Keep.
      </p>
      <p>
        For Contact Keeper, in order to seperate users' contacts, you have to
        register an account before using it.
      </p>
    </div>
  );
};

export default Home;
