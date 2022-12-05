import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

import Welcome from './component/Welcome';
import FrontPage from './component/FrontPage';
import Cocktails from './component/Cocktails';
import AboutUs from './component/AboutUs';
import Profile from './component/Profile';
import BarCart from './component/BarCart';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <>
        <Router>

          {this.props.auth0.isAuthenticated ?

            <Routes>
              <Route
                exact path="/"
                element={<FrontPage/>}
              >
              </Route>

              <Route
                exact path="/barCart"
                element={<BarCart />}
              >
              </Route>

              <Route
                exact path="/Cocktails"
                element={<Cocktails />}
              >
              </Route>
              <Route
                exact path="/about"
                element={<AboutUs />}
              >
              </Route>

              <Route
                exact path="/profile"
                element={<Profile />}
              >
              </Route>
            </Routes>
            : <Routes>
              <Route
                id="Welcome"
                exact path="/"
                element={<Welcome />}
              >
              </Route>
            </Routes>}

        </Router>
      </>
    );
  }
}

export default withAuth0(App);
