import React, { useState } from 'react';

const Login = props => {
  return (
    <div className="form">
      <form onSubmit="">

        <label className="label" htmlFor="email">Email</label>
        <input className="input" type="email" name="email" placeholder="Email" onChange="" />
        <label  className="label" htmlFor="password">Password</label>
        <input
        className="input"
          type="password"
          name="password"
          placeholder="Password"
          value=""
          onChange=""
        />
        <button className="submit" type="submit" >Sign In</button>
      </form>
    </div>
  );
};

export default Login;
