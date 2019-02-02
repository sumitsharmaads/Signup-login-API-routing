import React, {Component} from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Thanks from './Thanks';

class Signup extends Component{
    constructor(props){
	super(props);
	this.state ={details:null};
    }

    add =(e) => {
    	e.preventDefault();
    	console.log('hello');
    	const firstname = this.refs.fname.value;
    	const lastname = this.refs.lname.value;
    	const emailId = this.refs.email.value;
    	const password= this.refs.password.value;
    	const tempDetails = this.state.details;
    	
    	console.log(this.state.details);

    	fetch('http://localhost:4000/register',{
	    method:'POST',
	    headers : {
	      'Accept' : 'application/json',
	      'Content-Type':'application/json' 
	    },
	    body:JSON.stringify({
	    	firstname:firstname,
	    	lastname:lastname,
	    	emailId:emailId,
	    	password:password
	    })
	    })
	    .then(response => response.json())
	    .then(data =>this.props.history.push({
	    	pathname:"/Thanks",
	    	state:{details:data}
	    }));
	}

    


	render(){
		return(
			<div className="Signup">
			<h2>This is signup page</h2>
			<form>
				First Name* <input type="text" placeholder ="firstName" ref="fname" /><br/>
				Last Name* <input type="text" placeholder ="lastName" ref="lname" /><br/>
				Email Id* <input type="text" placeholder ="emailId" ref="email" /><br/>
				Password* <input type="password" name ="password" ref="password" /><br/>
				<button onClick={this.add}>Signup</button>
			</form>
			<p> If you already registerd then login</p>
			<button><Link to ="/Login">Login</Link></button>
			</div>
		);
	}
}

export default Signup;