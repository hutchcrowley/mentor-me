import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div>
      <h1>This is the landing page</h1>
      <Link className="button" to="">
        Sign In
      </Link>
      <Link className="button" to="/signup">
        Sign Up
      </Link>
    </div>
  );
}
