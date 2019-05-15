import React from "react";
import "../AddGas/AddGas.css";
import { Link } from "react-router-dom";
import BackBtn from "../BackBtn/BackBtn";

const AddGas = () => {
  return (
    <div>
      <form>
        <div class="form-group">
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Gallons pumped"
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Price/gal"
          />
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <Link to="/LoggedIn">
            <div className="text-center home">&#127968;</div>
          </Link>
        </div>
        <div className="col-6">
          <Link to="/OverallStats">
            <div className="addGas text-center">Submit Gas</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddGas;
