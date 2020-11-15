import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {USERS_API_URL} from '../../Constants';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


export class RegisterForm extends React.Component {
state = {
  id:0,
  login:'',
  password:'',
  email:'',
}

handleChange = e =>{
  this.setState({[e.target.name] : e.target.value})
}
submitNew = e =>{
  e.preventDefault();
  fetch("https://localhost:44301/user/register",{
    method:'post',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify({
      login:this.state.login,
      password:this.state.password,
      email: this.state.email,

    })
  })
  .then(res =>res.json())
  .then(user=>{
    this.props.addUserToState(user);
    this.props.toggle();
  })
  .catch(err => console.log(err))
}
/*
submitEdit= e=>{
  e.preventDefault();
  fetch(`${USERS_API_URL}/${this.state.id}`,{
    method : 'put',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      name:this.state.login,
      document : this.state.password,
      email:this.state.email
    })
  })
  .then(()=>{
    this.props.toggle();
    this.props.updateUserIntoState(this.state.id)
    
  })
  .catch(err => console.log(err));
}*/
render(){
    return(
        <div class="login-page">
        <div class="form">
        <form class="register-form" onSubmit={this.props.user ? this.submitEdit : this.submitNew}>
          <input type="text" placeholder="login" name="login" onChange={this.handleChange} value={this.state.login}/>
          <input type="password" placeholder="password" name="password" onChange={this.handleChange} value={this.state.password}/>
          <input type="email" placeholder="email address" name="email" onChange={this.handleChange} value={this.state.email}/>
          <button>register</button>
          <p class="message">Already registered? <Link to="/login">Sign In</Link></p>
        </form>
        
      </div>
    </div>
    )
    }
}
export default RegisterForm;