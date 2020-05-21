import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendAuth from "./components/FriendAuth";
import NewFriendForm from "./components/NewFriendForm";

import { connect } from "react-redux";
//import { addFriend } from "./actions/index";

function App(props) {

 // const { addFriend } = props;

  console.log(props);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to='/protected'>Protected Page</Link>
            </li>
            <li>
              <Link to='/add'>Add</Link>
            </li>
          </ul>
          <Switch>
            <PrivateRoute exact path="/protected" component={FriendAuth} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/add" component={NewFriendForm}/>
            <Route component={Login} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return { state };
}

export default connect(mapStateToProps, {})(App);