import React from "react";
import "../LoggedIn/LoggedIn.css";
import { Link } from "react-router-dom";

const LoggedIn = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Link to="/OverallStats">
            <div className="regText text-center buttons">Overall Stats</div>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Link to="/TopDays">
            <div className="regText search text-center buttons">Top Days</div>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Link to="/Averages">
            <div className="regText search text-center buttons">Averages</div>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Link to="/AddDay">
            <div className="regText addDay text-center buttons">Add day</div>
          </Link>
        </div>
        {/* <div className="col-6">
          <Link to="/AddGas">
            <div className={`text-center buttons`}>Add Gas</div>
          </Link>
        </div> */}
      </div>
      <div className="row">
        <div className="col-6 offset-6">
          <Link to="/LoginPage">
            <div className="regText text-center logout">Log Out</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;
