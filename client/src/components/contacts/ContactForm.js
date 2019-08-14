import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  // The Hook mimics componentDidMount and componentDidupdate
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]); //虽然 React 在 DOM 渲染时会 diff 内容，只对改变部分进行修改，而不是整体替换，但却做不到对 Effect 的增量修改识别。因此需要开发者通过 useEffect 的第二个参数告诉 React 用到了哪些外部变量

  // useState和ContactState没有关系，它就是一个Hook
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
    // setXXXX directly make a new JSON data, So cannot to assign sth like name = value.
    setContact({
      // '...contact' get (paste) all properties of the object.
      ...contact,
      // following dynamically overwrites the value of a certain key.
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      // 返回给contactContext一个新的contacts
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <h3 className='text-dark  text-center p-4'>
          {current ? 'Edit Contact' : 'Add Contact'}
        </h3>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={onChange}
          className='form-control mb-3'
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
          className='form-control mb-3'
        />
        <input
          type='text'
          placeholder='Phone'
          name='phone'
          value={phone}
          onChange={onChange}
          className='form-control mb-3'
        />
        <h7>Contact Type</h7>
        <div className='form-group'>
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
        </div>
        <div>
          <input
            type='submit'
            value={current ? 'Update Contact' : 'Add Contact'}
            className='btn btn-primary btn-block mt-4 mb-2'
          />
        </div>
        {current && (
          <div>
            <button className='btn btn-light btn-block' onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
