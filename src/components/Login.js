import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Login.module.css';

function Login() {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Welcome!</h1>
        <div className={styles.inputFieldContainer}>
          <div className={styles.usernameField + ' ui input'}>
            <input id='usernameField' type='text' placeholder='Your name' />
          </div>
          <div className={styles.passwordField + ' ui input'}>
            <input id='passwordField' type='password' placeholder='Your password' />
          </div>
        </div>
        
        <Link to="/posts">
          <button id='loginButton' className={styles.button + ' ui primary button'}>Log in</button>
        </Link>
    </div>
  );
};

export default Login;