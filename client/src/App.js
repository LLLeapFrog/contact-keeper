import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import ContactKeeper from './components/pages/ContactKeeper';
import About from './components/pages/About';

import ContactState from './context/contact/ContactState';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Switch>
            // It contains contents going to be changed.
            <Route exact path='/' component={Home} />
            <ContactState>
              <Route exact path='/ContactKeeper' component={ContactKeeper} />
            </ContactState>
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
