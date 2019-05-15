import React from "react";
import { Link } from "react-router-dom";
import TopDayCard from "../TopDayCard/TopDayCard";
import "../TopDays/TopDays.css";

const TopDays = () => {
  return (
    <div>
      <TopDayCard />
      <TopDayCard />
      <TopDayCard />
      <TopDayCard />
      <TopDayCard />
      <TopDayCard />
      <TopDayCard />
      <div className="row">
        <div className="col-6">
          <Link to="/LoggedIn">
            <div className="text-center home">&#127968;</div>
          </Link>
        </div>
      </div>
      <br />
    </div>
  );
};

export default TopDays;
