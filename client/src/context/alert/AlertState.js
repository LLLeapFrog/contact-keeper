import React, { useReducer } from 'react';
import uuid from 'uuid';
import AlertContext from './AlertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = [];

  // useReducer参数顺序不能颠倒
  // p1: 所使用的reducer  p2: 初始值
  // 第一个返回state(其实就是p2的值), 第二个返回dispatch（一个分发函数指向contactReducer, 默认第一个参数为state）
  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuid.v4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id }
    });

    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id
        }),
      timeout
    );
  };

  return (
    // state为component提供context, component调用context（object value）里的properties
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
