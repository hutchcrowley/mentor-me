import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex-column flex-bottom">
       
      <Link className="button" to="">
        Sign In
      </Link>
      <Link className="button" to="/signup">
        Sign Up
      </Link>
    </div>
  );
}
