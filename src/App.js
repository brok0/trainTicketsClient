import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import {Header} from "./Components/Header";
import SearchForm from "./Components/SearchForm";
import { LoginForm } from "./Components/authorization/LoginForm"
import { RegisterForm } from "./Components/authorization/registerForm"
import {Footer} from "./Components/footer";
import {HomePage} from"./Components/HomePage";
import './App.css';
import { UserHomePage } from './Components/UserComponents/UserHomePage';

const Routes = {
  MAIN:"/",
  LOGIN: "/login",
  REGISTER: "/register",
  HOME: '/home',
  USERPAGE: '/userpage',
  SEARCH: '/search',
  ALLTICKETS : '/tickets'
};
class App extends React.Component {

  componentDidMount =() =>{
    //this.props.userLoginFetch();
  }

render(){
  return (
    <div className="app">
    <BrowserRouter>
    
    <div className="wrapper">
      <Header/>
    </div>
  <Switch>
  <Route exact path={Routes.MAIN} render={()=><UserHomePage></UserHomePage>}></Route>
  <Route exact path={Routes.ALLTICKETS} render={()=><HomePage></HomePage>}></Route>
    <Route exact path={Routes.REGISTER}
      render={()=><RegisterForm></RegisterForm>}
    ></Route>
    <Route exact path={Routes.LOGIN} render={()=><LoginForm ></LoginForm>}></Route>
    <Route exact path={Routes.USERPAGE} render={()=><UserHomePage ></UserHomePage>}></Route>
    <Route exact path={Routes.SEARCH} render={()=><SearchForm></SearchForm>}></Route>
  </Switch>
  
  </BrowserRouter>
  
  </div>
  );}
}
ReactDOM.render(<App />, document.getElementById("root"));
export default App;
