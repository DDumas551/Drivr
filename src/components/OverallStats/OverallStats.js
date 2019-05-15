import React from "react";
import "../OverallStats/OverallStats.css";
import { Link } from "react-router-dom";

const OverallStats = () => {
  return (
    <div>
      <div className="row">
        <div className="col-6 text-center">
          <p>Total Miles Driven</p>
        </div>
        <div className="col-6 text-center">
          <p>#####</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 text-center">
          <p>Total Cash Earned</p>
        </div>
        <div className="col-6 text-center">
          <p>#####</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 text-center">
          <p>Total Rides Given</p>
        </div>
        <div className="col-6 text-center">
          <p>#####</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 text-center">
          <p>Total Gallons of Gas</p>
        </div>
        <div className="col-6 text-center">
          <p>#####gal</p>
        </div>
      </div>
      <hr className="hr" />
      <div className="row">
        <div className="col-6 text-center">
          <p>OA $/trip</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Link to="/LoggedIn">
            <p className="text-center homeButton">&#127968;</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OverallStats;
