import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Form, Container} from "react-bootstrap";
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
  
    validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }
  
    handleChange = event => {
      debugger
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  
    handleSubmit = event => {
      event.preventDefault();  
      debugger
      if(this.state.email && this.state.password){
        axios.get("http://localhost:3000/userSignUp?bookids="+this.state.email+":::"+this.state.password+":::"+this.state.myrole)
          .then((response) => {
              alert("SIGN UP DONE SUCCESSFULLY!"+"Please do Sign In");
              localStorage.setItem('userId', response.data.a);
              localStorage.setItem('userame', response.data.b);
              this.props.history.push(`/login`)
          });
      }else{
        alert("Please Enter Username and Password for Signup")
      }
    }
  
    render() {
      return (
        <div className="Login">
         
        </div>
      );
    }
  }

  export default (withRouter)(Admin)