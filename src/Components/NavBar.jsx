import React from "react";

import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse
          id="responsive-navbar-nav "
          className="d-flex   justify-content-center"
        >
          <Nav className="ml-auto ">
            <Nav.Link as={NavLink} exact to="/" activeClassName="active mx-3">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/events" activeClassName="active mx-3">
              Events
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" activeClassName="active mx-3">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeClassName="active">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
