
import React, { Component } from 'react';
import {Navbar,NavDropdown,Form,Button,FormControl,Nav} from 'react-bootstrap'
import logo from './logo.jpg'

export default class NavBar extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img style={{width:"50px"}} src={logo}></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/timeslot">Home</Nav.Link>
                    <Nav.Link href="/">Login</Nav.Link>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
      );
    }
  }
