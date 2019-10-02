import React from 'react';
import logo from './logo.svg';
import './App.css';
import AvailableTimes from 'react-available-times';
import {DayPilotScheduler} from "daypilot-pro-react";
import Scheduler from './Scheduler'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar'

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
        <Route exact={true} path="/timeslot" component={Scheduler} />
      </Router>
    </div>
  );
}

export default App;
