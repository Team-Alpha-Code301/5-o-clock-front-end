import React from 'react';
import AuthButtons from './component/AuthButtons';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar className="links">
        <Navbar.Brand className="webName">5-O-Clock</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link" id="link">Home</Link></NavItem>
        <NavItem><Link to="/cocktails" className="nav-link" id="link">Bar Cart</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link" id="link">About us</Link></NavItem>
        <NavItem><Link to="/profile" className="nav-link" id="link">Profile</Link></NavItem>
        <AuthButtons/>
      </Navbar>
    );
  }
}

export default Header;
