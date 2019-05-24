import React from "react";
import "../TopDayCard/TopDayCard.css";

const TopDayCard = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Day</h5>
          <div className="row">
            <div className="col">
              <p className="card-text">$/hour</p>
            </div>
            <div className="col">
              <p className="card-text">Avg trips/Day</p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default TopDayCard;
