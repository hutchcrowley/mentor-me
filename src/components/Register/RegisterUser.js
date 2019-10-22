import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { connect } from "react-redux";
import { register } from "../../actions/index";

const RegisterUser = props => {
  const [payload, setPayload] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });
  const handleMentor = e => {
    // let isActive = payload.isMentor;
    // setPayload({
    //   ...payload,
    //   isMentor: !isActive
    // });
    // console.log(`changing status master...  ${payload.isMentor.value}`);
  };

  const handleChange = e => {
    e.preventDefault();
    setPayload({
      ...payload,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.register(payload);
    console.log('PL::', payload)
    props.history.push('/signin')
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
        <label className="label" htmlFor="isMentor">I am registering as mentor</label>

        <input type="checkbox" name="isMentor" onChange={handleMentor}></input>
        <button type="submit">Submit</button>
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
