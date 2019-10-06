
import React, { Component } from 'react';
import {Navbar,NavDropdown,Form,Button,FormControl,Nav} from 'react-bootstrap'

export default class NavBar extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Samsung Time Slot Booking</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/timeslot">Home</Nav.Link>
                    <Nav.Link href="/">Login</Nav.Link>
                    <Nav.Link href="/">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
      );
    }
  }
