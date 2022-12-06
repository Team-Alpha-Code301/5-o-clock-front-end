import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import '../src/component/Welcome.css';

class Footer extends React.Component {
  render() {
    return (
      <Navbar className="footerNav">
        <Navbar.Brand className="footerText">&copy; 5 O' Clock Somewhere Company.
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
