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
  
   
  
    handleSubmit = event => {
     
    }
  
    render() {
      return (
        <div className="Admin">
         adsads
        </div>
      );
    }
  }

  export default (withRouter)(Admin)