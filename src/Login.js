import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Login extends Component {
  
  state = {
    userData:null,
    error:""
  } 

  Login_check = (e) => {
    e.preventDefault();
    const userName= this.refs.emailId.value;
    const password= this.refs.password.value;

    console.log(this.state.userData);

    fetch('http://localhost:9000/login',{
    method:'POST',
    headers : {
    'Accept' : 'application/json',
    'Content-Type':'application/json'
    },
    body:JSON.stringify({
      userName:userName,
      password:password
    })
    })
    .then(response => response.json())
    .then(data =>this.setState({userData:data}))
  } 

  render() {
    return (
      <div className="Login">
      	<h2> This is login page </h2>
        <form>
        	Username: <input type="text" placeholder="Username" ref="emailId"></input><br/>
        	Passward: <input type="password" name="passward" ref="password"></input><br/>
        	<button onClick={this.Login_check}>Login</button>
          <p> Login is {this.status}</p>
        </form>
        <p>if dont have account then sign up</p>
        <button><Link to = "/Signup">Signup</Link></button>
      </div>
    );
  }
}

export default Login;