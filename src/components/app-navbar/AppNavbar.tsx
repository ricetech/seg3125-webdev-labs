import React from 'react';

import './_app-navbar.scss';
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export const AppNavbar = () => {
  return (
    <Navbar variant='dark' expand='md' sticky='top' className='app-navbar'>
      <Navbar.Brand as={Link} to='/' className='mr-2'>
        SEG 3125 - Eric Chen
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='app-navbar' />
      <Navbar.Collapse id='app-navbar'>
        <Nav className='mr-auto'>
          <Nav.Link as={NavLink} exact to='/' activeClassName='active'>Home</Nav.Link>
          <Nav.Link as={NavLink} to='/lab1' activeClassName='active'>Lab 1</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
