import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        // id是contacts从contactContext里实时得到的，再传递给ContactItem，它再set到current里.
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        )
      };
    case DELETE_CONTACT:
      if (state.filtered === null) {
        return {
          ...state,
          contacts: state.contacts.filter(
            // 返回满足条件的对象
            contact => contact.id !== action.payload
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
    default:
      return state;
  }
};
