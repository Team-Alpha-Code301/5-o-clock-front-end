import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar className="footerNav">
        <Navbar.Brand className="footerText">&copy; 5 O' Clock Company.
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
