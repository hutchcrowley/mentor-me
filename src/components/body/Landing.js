import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>This is the landing page</h1>
      <Link to="">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}
