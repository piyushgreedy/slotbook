import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Form, Container, Row} from "react-bootstrap";
import './App.css';
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import axios from 'axios';

class Admin extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: "",
        myrole:"lab"
      };
    }
  
    handleSubmit = event => {
     
    }
  
    render() {
      return (
        <Container className="Login">
            <Form.Label>Admin Control</Form.Label>
            <form>
                <Form.Group controlId="myrole">
                {/* <Form.Label>Select Role</Form.Label> */}
                    <Form.Control as="select" onChange={this.handleChange}>
                        <option>employee</option>
                        <option>lab</option>
                        <option>Admi</option>
                    </Form.Control>
                </Form.Group>
            </form>
        </Container>
      );
    }
  }

  export default (withRouter)(Admin)