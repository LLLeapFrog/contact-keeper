import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import ContactContext from '../../context/contact/ContactContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li
        className='nav-item'
        style={{
          padding: '0.5rem 1rem',
          color: 'white'
        }}
      >
        Hello! {user && user.name}
      </li>
      <li className='nav-item'>
        <a className='nav-link' onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' /> <span>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLniks = (
    <Fragment>
      <li className='nav-item'>
        <Link className='nav-link' to='/register'>
          Register
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/login'>
          Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <nav
      className='navbar navbar-expand-sm bg-dark navbar-dark'
      style={{
        justifyContent: 'space-between'
      }}
    >
      <h4 className='text-white'>
        <i className={icon} /> {title}
      </h4>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/GithubFinder'>
            Github Finder
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/ContactKeeper'>
            Contact Keeper
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/about'>
            About
          </Link>
        </li>
        {isAuthenticated ? authLinks : guestLniks}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Thomas the great'
  // icon: 'far fa-smile-wink'
  // icon: 'fas fa-id-card-alt'
};

export default Navbar;
