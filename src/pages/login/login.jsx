import React from 'react';
import './login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello Word</h1>
          <p>Lorem ipsum dolor sipe asperiores alias.</p>
          <span>Dont you have an accound?</span>
          <Link to="/register">
          <button>Registarse</button>
          </Link>
        </div>
        <div className="right">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
          <button>Login</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;