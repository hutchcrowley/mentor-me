import React from "react";
import { Link } from "react-router-dom";
import User from "../../img/user.png";
export default function Landing() {
  return (
 
   
    <div className="flex-column flex-bottom">
     <img className="user" src={User}/>
      <Link className="button" to="/signin">
        Sign In
      </Link>   
      <Link className="button" to="/signup">
        Sign Up
      </Link>
    </div>
  );
}
