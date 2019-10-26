import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions';
const Login = props => {
  const [payload, setPayload] = useState({
    email: '',
    password: ''
  });
  const handleSubmit = e => {
    e.preventDefault();
    window.localStorage.clear();
    props.login(payload);
    setTimeout(() => {
      props.history.push('/user-feed');
    }, 1000);
  };
  const handleClick = e => {
    e.preventDefault();
    setPayload({
      ...payload,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          value={payload.email}
          onChange={handleClick}
        />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={payload.password}
          onChange={handleClick}
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    log: state.log
  };
};
export default connect(
  mapStateToProps,
  {
    login
  }
)(Login);
