import React, { Component } from "react";
import "../TopDayCard/TopDayCard.css";

class TopDayCard extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">{this.props.day}</h5>
            <div className="row">
              <div className="col">
                <p className="card-text">${this.props.rate}/hour</p>
              </div>
              <div className="col">
                <p className="card-text">{this.props.avgTrips} Trips/Day</p>
              </div>
            </div>
          </div>
        </div>
        <br />
      </>
    );
  }
}

export default TopDayCard;
