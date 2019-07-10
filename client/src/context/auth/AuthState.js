import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAutheticated: null,
    loading: true,
    user: null,
    error: null
  };

  // useReducer参数顺序不能颠倒
  // p1: 所使用的reducer  p2: 初始值
  // 第一个返回state(其实就是p2的值), 第二个返回dispatch（一个分发函数指向contactReducer, 默认第一个参数为state）
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User

  // Register User

  // Login User

  // Logout

  // Clear Errors

  return (
    // state为component提供context, component调用context（object value）里的properties
    <AuthContext.Provider
      value={{
        token: state.token,
        isAutheticated: state.isAutheticated,
        loading: state.loading,
        user: state.user,
        error: state.error
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
