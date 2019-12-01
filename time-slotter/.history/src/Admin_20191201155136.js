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
        usersList:[],
        email:"",
        role:""
      };
    }

    async componentDidMount(){
        await this.getAllUsers();
    }

    getAllUsers = ()=>{
        axios.get("http://localhost:3000/getAllusers")
        .then((response) => {
            debugger
            let userList = response.data.a.map((elem)=>{
                return elem.username;
            })
            setTimeout(()=>{
                this.setState({
                    usersList:userList
                });
            },10)
          
            console.log(userList);
        },(error)=>{
        });
    }

    handleChange = event => {
        debugger
        this.setState({
            [event.target.id]: event.target.value
        }); 
      }
  
    handleSubmit = event => {
        event.preventDefault(); 
        this.setState({
            [event.target.id]: event.target.value
        }); 
    }
  
    render() {
      return (
        <Container className="Login">
            <Form.Label>Admin Control</Form.Label>
            <form onSubmit={this.handleSubmit}>

                <Form.Group controlId="email">
                    <Form.Label>Select Employee</Form.Label>
                    <Form.Control as="select" onChange={this.handleChange}>
                        {this.state.usersList.map((elem)=>{
                            debugger
                            return (<option>{elem}</option>)
                        })}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="role">
                    <Form.Label>Select Role</Form.Label>
                    <Form.Control as="select" onChange={this.handleChange}>
                        <option>employee</option>
                        <option>lab</option>
                        <option>Admin</option>
                    </Form.Control>
                </Form.Group>
                <Button
                    block
                    bsSize="large"
                    type="submit"
                    >
                    Update Role
                </Button>
            </form>
        </Container>
      );
    }
  }

  export default (withRouter)(Admin)