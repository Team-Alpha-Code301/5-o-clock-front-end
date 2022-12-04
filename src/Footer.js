import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar className="footerNav">
        <Navbar.Brand className="footerText">&copy; 5 O' Clock Company. Photo by <a href="https://unsplash.com/@weareambitious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ambitious Creative Co.  - Rick Barrett</a> on <a href="https://unsplash.com/s/photos/cocktail-bar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
