import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Posts from './components/Posts/PostsPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      {/* todo: set defaults to Login */}
      {/* <Route exact path="/login">
        <Login />
      </Route> */}
      
      <Switch>
        
          <Route path="/posts">
            <Posts />
          </Route>

          <Route path="/">
            <Login />
          </Route>

      </Switch>
    </Router>
  );
}

export default App;
