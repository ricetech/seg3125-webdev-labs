import React from "react";

import "./_app-navbar.scss";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";

export const AppNavbar = () => {
  let location = useLocation();

  return (
    <Navbar variant="dark" expand="md" sticky="top" className="app-navbar">
      <Navbar.Brand as={Link} to="/" className="mr-2">
        SEG 3125 - Eric Chen
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="app-navbar" />
      <Navbar.Collapse id="app-navbar">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} exact to="/" activeClassName="active">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/lab1" activeClassName="active">
            Lab 1
          </Nav.Link>
          <NavDropdown
            id="lab2-dropdown"
            title="Lab 2"
            className={location.pathname.includes("/lab2") ? "active" : ""}
          >
            <NavDropdown.Item
              as={NavLink}
              to="/lab2/preferences"
              activeClassName="active"
            >
              Preferences
            </NavDropdown.Item>
            <NavDropdown.Item
              as={NavLink}
              to="/lab2/products"
              activeClassName="active"
            >
              Products
            </NavDropdown.Item>
            <NavDropdown.Item
              as={NavLink}
              to="/lab2/cart"
              activeClassName="active"
            >
              Cart
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={NavLink} to="/lab3" activeClassName="active">
            Lab 3
          </Nav.Link>
          <Nav.Link as={NavLink} to="/lab4" activeClassName="active">
            Lab 4
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
