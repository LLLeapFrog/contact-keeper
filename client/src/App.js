import React, { Fragment, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import GithubFinder from './components/pages/GithubFinder';
import User from './components/users/User';
import ContactKeeper from './components/pages/ContactKeeper';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';
import NotFound from './components/pages/NotFound';

import AuthContext from './context/auth/AuthContext';

import GithubState from './context/github/GithubState';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser } = authContext;

  useEffect(() => {
    if (isAuthenticated || localStorage.token) {
      loadUser();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <GithubState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  {/* It contains contents going to be changed. */}
                  <Route exact path='/' component={Home} />
                  <Route exact path='/GithubFinder' component={GithubFinder} />
                  <Route exact path='/user/:login' component={User} />
                  <PrivateRoute
                    exact
                    path='/ContactKeeper'
                    component={ContactKeeper}
                  />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </GithubState>
  );
};

export default App;
