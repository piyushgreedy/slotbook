import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Form, Container} from "react-bootstrap";
import './App.css';
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class Signup extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: ""
      };
    }
  
    validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }
  
    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  
    handleSubmit = event => {
      event.preventDefault();  
      alert(this.state.email);
      if(this.state.email && this.state.password){
        this.props.history.push(`/timeslot`)
      }else{
        
      }
      
    }
  
    render() {
      return (
        <div className="Login">
          <Form.Label><b>Samsung Signup</b></Form.Label>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <Form.Label>UserName</Form.Label>
              <FormControl
                autoFocus
                type="email"
                placeholder="Username"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <Form.Label>Password</Form.Label>
              <FormControl
                value={this.state.password}
                placeholder="password"
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </Button>

            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              SSO LOGIN
            </Button>
          </form>
        </div>
      );
    }
  }

  export default (withRouter)(Signup)