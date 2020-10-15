import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar () {
    return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <NavItem className="nav-item active">
            <NavLink href="#">Home <span class="sr-only">(current)</span></NavLink>
        </NavItem>
        <NavItem className="nav-item">
            <NavLink className="nav-link" href="#about">About</NavLink>
        </NavItem>
        <NavItem className="nav-item">
            <NavLink className="nav-link" href="#productions">Productions</NavLink>
        </NavItem>
        <NavItem className="nav-item">
            <NavLink className="nav-link" href="#footer">Contact</NavLink>
        </NavItem>
        <div className='justify-content-right'>
            <a className="social-icon" href="https://www.facebook.com/forthdimensionmusicalproductions"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
            <a className="social-icon" href="https://www.instagram.com/forthdimension79/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>  
        </div>
  </Nav>
    );
}