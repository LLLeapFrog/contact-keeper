import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  // useState和ContactState没有关系，要用也是用ContactFromState.js
  // 这步用来初始化contact这个object对象
  const [contact, setContact] = useState({
    // initial values of contact form
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  // 将contact object内的具体key value pair拿出来
  const { name, email, phone, type } = contact;

  const onChange = e =>
    // setXXXX has to change each property.
    setContact({
      // '...contact' get (paste) all properties of the object.
      ...contact,
      // following dynamically overwrite the value of certain key.
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    // context需要接受一个返回值
    contactContext.addContact(contact);
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primart'>Add Contact</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <div>
        <input
          type='submit'
          value='Add Contact'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default ContactForm;
