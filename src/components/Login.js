import React from 'react';
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <h1>Welcome!</h1>
        <div className='ui input'>
          <input id='usernameField' type='text' placeholder='Your name' />
          <input id='passwordField' type='password' placeholder='Your password' />
        </div>
        <br />
        
        <Link to="/posts">
          <button id='loginButton' className='ui primary button'>Log in</button>
        </Link>
    </div>
  );
};

export default Login;