import React from "react"
import {NavLink,Switch,Route,Redirect} from "react-router-dom"
import Registration from "./components/Registration"
import Login from "./components/Login"
import Home from "./components/Home"
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
          <ul className="navbar-nav mr-auto ml-auto">
              <li className="navbar-item">
                  <NavLink to="/register" className="btn btn-outline-success my-2 my-sm-0 mr-5">Register</NavLink>                           
              </li>
              <li className="navbar-item">
                  <NavLink to="/login" className="btn btn-outline-success my-2 my-sm-0">Login</NavLink>
              </li>
          </ul>
      </nav>
      <Switch>
          <Route exact path="/"><Redirect to="/login"/></Route>
          <Route exact path="/register" component={Registration}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/home" component={Home} />
          <Route path="/"><Redirect to="/login"/></Route>
      </Switch>
    </>
  );
}

export default App;
