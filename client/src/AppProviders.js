import React from 'react';
import AuthState from './context/auth/AuthState';

const AppProviders = ({ children }) => {
  return <AuthState>{children}</AuthState>;
};

export default AppProviders;
