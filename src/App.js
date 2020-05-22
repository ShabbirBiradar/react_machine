import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./Views/Login/Login";
import Dashboard from "./Views/Dashboard/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={(props)=> (<Login {...props}/>)} />
        <Route exact path="/login" component={(props)=> (<Login {...props}/>)} />
        <Route exact path="/dashboard" component={(props)=> (<Dashboard {...props}/>)} />
      </Switch>
    </Router>
  );
}

export default App;
