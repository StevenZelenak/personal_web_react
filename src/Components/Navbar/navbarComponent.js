import React from 'react';
import {
  Navbar,
  Nav,
} from 'react-bootstrap';
import './navbarComponent.scss';

class NavbarComponent extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" fixed="top" className="navbarBackground">
        <Navbar.Brand href="#home" className="logoBorder">SZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#bio">Bio</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;
