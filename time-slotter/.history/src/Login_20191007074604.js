import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Form, Container} from "react-bootstrap";
import './App.css';
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import axios from 'axios';

class Login extends Component {
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
      if(this.state.email && this.state.password){
        axios.get("http://localhost:3000/userSignIn?bookids="+this.state.email+":::"+this.state.password+":::1")
          .then((response) => {
            debugger
              localStorage.setItem('userId', response.data.a);
              localStorage.setItem('userame', response.data.b);
              alert("SIGN IN DONE SUCCESSFULLY");
              // this.props.history.push(`/timeslot`)
          });
      }else{
        alert("Please Enter Username and Password for Signup")
      }
    }
  
    render() {
      return (
        <div className="Login">
          <Form.Label><b>Samsung Login</b></Form.Label>
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

  export default (withRouter)(Login)