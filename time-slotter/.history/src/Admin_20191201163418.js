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
        if(!localStorage.getItem("userId") && !localStorage.getItem("username")){
            this.props.history.push(`/login`);
        }
        if(localStorage.getItem("role").toLowerCase()!="lab"){
            this.props.history.push(`/timeslot`);
        }
        await this.getAllUsers();
        document.getElementsByClassName("hidem")[0].classList.add("hideme");
        document.getElementsByClassName("hidem")[1].classList.add("hideme")
    }

    getAllUsers = ()=>{
        axios.get("http://localhost:3000/getAllusers")
        .then((response) => {
            debugger
            let userList = response.data.users.map((elem)=>{
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
        if(this.state.role && this.state.email){
            axios.get("http://localhost:3000/updateUserRole?bookids="+this.state.email+":::"+this.state.role)
        .then((response) => {
            alert("Role Updated Successfully for "+ this.state.email);
        },(error)=>{
        });
        }else{
            alert("Please Select Email and Role to Update");
        }
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
                            if(elem==this.state.email){
                                return false
                            } 
                            return (<option>{elem}</option>)
                        })}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="role">
                    <Form.Label>Select Role</Form.Label>
                    <Form.Control as="select" onChange={this.handleChange}>
                        <option>lab</option>
                        <option>others</option>
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