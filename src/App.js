import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
// import { withRouter } from "react-router-dom";
import myLogo from './images/myLogo.png'
import backgroundImage from './images/backgroundImage.jpg'


import {
  validate,
  fetchUserInfo
} from "./services/api";


class App extends Component {
  
  componentDidMount() {
    if (localStorage.token) {
      validate().then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          this.signinAndSetToken(data);
        }
      });
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={myLogo} className="App-logo" alt="logo" />

          <button className="signup-in-btn">Sign Up</button>
          <button className="signup-in-btn">Sign In</button>
      

         
        </header>
        <img src={backgroundImage} className="background-img" alt="background-image" />
      </div>
    );
  }
  
}

export default App;
