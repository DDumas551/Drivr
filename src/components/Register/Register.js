import React from "react";
import "../Register/Register.css";
import { Link } from "react-router-dom";
import BackBtn from "../BackBtn/BackBtn";

const Register = () => {
  const btnSpace = { style: "marginLeft: 40" };
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Username</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Create Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Re-enter Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <Link to="/">
            <div className="text-center regButtons">Back</div>
          </Link>
        </div>
        <div className="col-6">
          <Link to="/LoginPage">
            <div className="regButtons text-center">Submit</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
