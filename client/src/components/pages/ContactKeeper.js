import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';

const ContactKeeper = () => {
  return (
    <div className='row'>
      <div className='col-sm-6'>
        <ContactForm />
      </div>
      <div className='col-sm-6'>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default ContactKeeper;
