import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute'
import BubblePage from './components/BubblePage'

import Login from "./components/Login";
import "./styles.scss";

import axiosWithAuth from './helpers/axiosWithAuth'

function App() {

  const logout = () => {
    const token = localStorage.getItem('token')
    //Normally we would put our post request here, but not for this project!!
    localStorage.removeItem('token')
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#" onClick={logout}>logout</a>
        </header> 

        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubblePage" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.