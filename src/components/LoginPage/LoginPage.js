import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <div className="regText2 placeholder">Welcome Back!</div>
      <form>
        <div className="form-group">
          <label className="regText">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="form-group">
          <label className="regText" for="exampleFormControlInput1">
            Password
          </label>
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
            <div className="regText login text-center">Back</div>
          </Link>
        </div>
        <div className="col-6">
          <Link to="/LoggedIn">
            <div className="regText text-center login loginBtn">Login</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
