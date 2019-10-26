import React, { useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { register } from '../../actions/index';

const RegisterUser = props => {
  const [payload, setPayload] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    e.preventDefault();
    setPayload({
      ...payload,
      [e.target.name]: e.target.value
    });
  };
  //REMEMBER ON LOGOUT TO CLEAR STORAGE... or SET TIMEOUT FOR 5600 and clear
  const handleSubmit = e => {
    e.preventDefault();
    props.register(payload);
    setTimeout(() => {
      props.history.push('/dummy-route');
    }, 1000);
    setTimeout(() => {
      props.history.push('/user-feed');
    }, 2000);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="firstname"
          placeholder="First Name"
          value={payload.firstname}
          onChange={handleChange}
        />
        {/* {console.log(props.reg_user)} */}

        <input
          className="input"
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={payload.lastname}
          onChange={handleChange}
        />

        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          value={payload.email}
          onChange={handleChange}
        />

        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={payload.password}
          onChange={handleChange}
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
    reg_user: state.reg
  };
};

export default connect(
  mapStateToProps,
  { register }
)(RegisterUser);
