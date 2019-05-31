import React, { Component } from "react";
import "../Guest/Guest.css";
import { Link } from "react-router-dom";
import moment from "moment";

class Guest extends Component {
  state = {
    lastDay: "",
    lastTrips: 0,
    lastMoney: 0,
    lastDate: "",
    lastHours: 0
  };

  componentDidMount() {
    fetch("/api/overallStats", {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        const LD = res.pop();
        console.log(LD.onlineHours);
        this.setState({
          lastDay: LD.dayOtW,
          lastTrips: LD.trips,
          lastMoney: LD.moneyEarned,
          lastDate: LD.dayWorked,
          lastHours: LD.onlineHours
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col">
            <br />
            <h2 className="regText2 text-center">Welcome to Drivr!</h2>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="regText text-center">
              As a Rideshare driver, you've probably wanted your work driven
              data to be better organised
            </p>
          </div>
        </div>
        <div className="row">
          <div className="regText col-12 text-center">
            <p>Below is real data from one of our users!</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="regText col text-center">Day worked:</div>
          <div className="regText col text-center">{this.state.lastDay}</div>
        </div>
        <div className="row">
          <div className="regText col text-center">Date:</div>
          <div className="regText col text-center">
            {moment(this.state.lastDate).format("Do MMM YY")}
          </div>
        </div>
        <div className="row">
          <div className="regText col text-center">Hours worked:</div>
          <div className="regText col text-center">{this.state.lastHours}</div>
        </div>
        <div className="row">
          <div className="regText col text-center">Number of trips:</div>
          <div className="regText col text-center">{this.state.lastTrips}</div>
        </div>
        <div className="row">
          <div className="regText col text-center">Trips per hour:</div>
          <div className="regText col text-center">
            {(this.state.lastTrips / this.state.lastHours).toFixed(2)}
          </div>
        </div>
        <div className="row">
          <div className="regText col text-center">Cash earned:</div>
          <div className="regText col text-center">${this.state.lastMoney}</div>
        </div>
        <div className="row">
          <div className="regText col text-center">Hourly Rate:</div>
          <div className="regText col text-center">
            ${(this.state.lastMoney / this.state.lastHours).toFixed(2)}
          </div>
        </div>
        <br />
        <div className="row">
          <div className="regText col text-center">
            The data above is a sample of how Drivr will organize your stats
            <br />
            There are many more features available!
          </div>
        </div>
        <div className="regText col-6">
          <Link to="/">
            <p className="text-center homeButton">&#127968;</p>
          </Link>
        </div>
      </>
    );
  }
}

export default Guest;
