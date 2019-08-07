import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        // id是contacts从contactContext里实时得到的，再传递给ContactItem，它再set到current里.
        contacts: state.contacts.map(contact =>
          contact._id === action.payload._id ? action.payload : contact
        )
      };
    case DELETE_CONTACT:
      if (state.filtered === null) {
        return {
          ...state,
          contacts: state.contacts.filter(
            // 返回满足条件的对象
            contact => contact._id !== action.payload
          )
        };
      } else {
        return {
          ...state,
          filtered: state.filtered.filter(
            contact => contact.id !== action.payload
          ),
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload
          )
        };
      }
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null,
        filtered: null,
        error: null,
        current: null
      };
    // return {
    //   ...state,
    //   contacts: state.contacts.filter(
    //     // 返回满足条件的对象
    //     contact => contact.id !== action.payload
    //   ),
    //   filtered: state.filtered.filter(
    //     contact => contact.id !== action.payload
    //   )
    // };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter(contact => {
          const regex = new RegExp(`${action.payload}`, 'gi'); //gloabl, insensitive
          return contact.name.match(regex) || contact.email.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
