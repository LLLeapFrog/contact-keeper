import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'JJ',
        email: 'jj@gmail.com',
        phone: '111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'SW',
        email: 's@gmail.com',
        phone: '222',
        type: 'personal'
      },
      {
        id: 3,
        name: 'HW',
        email: 'h@gmail.com',
        phone: '333',
        type: 'professional'
      }
    ]
  };

  // useReducer参数顺序不能颠倒
  // p1: 所使用的reducer  p2: 初始值
  // 第一个返回state, 第二个返回dispatch（一个分发函数指向contactReducer, 默认第一个参数为state）
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    // dispatch an action. Here, action is an object
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    // state为component提供context, component调用context（object value）里的properties
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
