import React from "react";
import { Link } from "react-router-dom";

import "./LoginButtons.css";

const LoginButtons = () => {
  const linkStyle = {
    color: "black"
  };
  return (
    <div>
      <div className="row align-items-center btnRow">
        <div className="col-4 offset-2">
          <Link to="/LoginPage">
            <p style={linkStyle} className="loginBtn text-center">
              Log In
            </p>
          </Link>
        </div>
        <div className="col-4">
          <Link to="/Register">
            <p style={linkStyle} className="registerBtn text-center">
              Register
            </p>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-8 offset-2">
          <Link to="/Guest">
            <p style={linkStyle} className="guestBtn text-center">
              Continue as guest
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginButtons;
