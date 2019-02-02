import React, {Component} from 'react';
import App from './App';
import Signup from './Signup';
import Login from './Login';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Thanks from './Thanks'

class Home extends Component {
  render() {
  	return (
  	  <Router>
  	  <div>
  	  <Route exact path="/" component={App} />	
  	  <Route path ="/Signup" component={Signup} />
      <Route path ="/Login" component={Login} />
      <Route path ="/Thanks" component={Login} />
  	  </div>
  	  </Router>
  	);
  }
}

export default Home;