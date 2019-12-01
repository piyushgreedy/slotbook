import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scheduler from './Scheduler'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar'
import Signup from './Signup'
import Boarding from './Boarding'



import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Router>
        <Route exact={true} path="/" component={Login} />
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/timeslot"  component={Scheduler} />
        <Route exact={true} path="/signup" component={Signup} />
        <Route exact={true} path="/boarding" component={Boarding} />
        <Route exact={true} path="/admin" component={Admin} />
      </Router>
    </div>
  );
}

export default App;
