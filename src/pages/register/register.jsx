import React from 'react';
import './register.scss';

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello Word</h1>
          <p>Lorem ipsum dolor sipe asperiores alias.</p>
          <span>Do you have an accound?</span>
          <button>Login</button>
        </div>
        <div className="right">
        <h1>Register</h1>
        <form>
        <input type="password" placeholder='Name' />
        <input type="text" placeholder='Username' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>Register</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Register;