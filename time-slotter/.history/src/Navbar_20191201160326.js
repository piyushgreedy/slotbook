
import React, { Component } from 'react';
import {Navbar,NavDropdown,Form,Button,FormControl,Nav} from 'react-bootstrap'
import logo from './logo.jpg'

export default class NavBar extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      this.isLoggedIn=localStorage.getItem("userId");
      return (
        <div className="border-nav">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img style={{width:"100px"}} src={logo}></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" pullRight>
                    <Nav className="mr-auto">
                      <Nav.Link href="/timeslot">Home</Nav.Link>
                      <Nav.Link href="/Admin">Admin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end" style={{color:"white"}}>

                    <Nav.Link style={{color:"white"}} className="hidem" href="/">Login</Nav.Link>
                    <Nav.Link style={{color:"white"}} className="hidem" href="/signup">Sign Up</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
      );
    }
  }

  
