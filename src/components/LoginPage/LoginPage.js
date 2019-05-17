import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <div className="placeholder">Welcome Back!</div>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Username</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Password</label>
          <input
            type="password"
            class="form-control"
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
