import React from 'react';
import Cocktails from './component/Cocktails';
// import LoginButton from './component/LoginButton';
// import LogoutButton from './component/LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
// import AboutUs from './component/AboutUs';
import Welcome from './component/Welcome';
import Profile from './component/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <>
        <Router>

          {this.props.auth0.isAuthenticated ?

            <Routes>
              <Route
                exact path="/"
                element={<Cocktails />}
              >
              </Route>

              {/* <Route
                exact path="/about"
                element={<AboutUs />}
              >
              </Route> */}

              <Route
                exact path="/profile"
                element={<Profile />}
              >
              </Route>
            </Routes>
            : <Routes>
              <Route
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
