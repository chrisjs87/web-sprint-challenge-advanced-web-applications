import React, { useEffect, useState } from "react";

import axios from 'axios';

const initialCredentials = {
  // username: 'Lambda School',
  // password: 'i<3Lambd4'
  username: 'Lambda',
  password: 'School'
}
const initialError = ''

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  // const error = "";
  //replace with error state

  const [error, setError] = useState(initialError)

  const [credentials, setCredentials] = useState(initialCredentials)

  const handleChange = e => {
    setCredentials({
      credentials: {
        ...credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  const login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.payload)
      props.history.push('/bubblePage')
    })
    .catch(err => {
      console.log(err)
      setError('Username or Password not valid')
    })
  }

    

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form onSubmit={login}>
          <input
            type='text'
            name='username'
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log In</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.