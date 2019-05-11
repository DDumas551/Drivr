import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import BackBtn from "../BackBtn/BackBtn";

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
            placeholder="Username"
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
      <BackBtn />
      <Link to="/LoggedIn">
        <button className="btn btn-success">Login</button>
      </Link>
    </>
  );
};

export default LoginPage;
