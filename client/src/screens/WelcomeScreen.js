import React from "react";
import { Link } from "react-router-dom";
const WelcomeScreen = () => {
  return (
    <div
      className="mt-5 justify-content-center text-center"
      style={{ height: "100vh" }}
    >
      <p className="display-3">Welcome Page</p>
      <Link to='/login'>
        <button className="btn m-1 btn-warning">Login</button>
      </Link>
      <Link to='/signup'>
        <button className="btn m-1 btn-warning">Sign Up</button>
      </Link>
    </div>
  );
};

export default WelcomeScreen;
