import React, { useState } from 'react';

const Login = props => {
  return (
    <div>
      <form onSubmit="">
        <input type="email" name="email" placeholder="Email" onChange="" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value=""
          onChange=""
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
