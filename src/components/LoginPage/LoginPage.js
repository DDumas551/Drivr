import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <div className="placeholder">Welcome Back!</div>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
      </form>
      <br />
      <div className="row">
        <div className="col-6">
          <Link to="/">
            <div className="login text-center">Back</div>
          </Link>
        </div>
        <div className="col-6">
          <Link to="/LoggedIn">
            <div className="text-center login loginBtn">Login</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
