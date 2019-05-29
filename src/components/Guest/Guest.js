import React, { Component } from "react";
import "../Guest/Guest.css";
import { Link } from "react-router-dom";

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
        console.log(LD);
        this.setState({
          lastDay: LD.dayOtW,
          lastTrips: LD.trips,
          lastMoney: LD.moneyEarned,
          lastDate: LD.dayWorked,
          lastHours: LD.onloneHours
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
            <h2 className="text-center">Welcome to Drivr!</h2>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-9 offset-3">
            <p className="text-right">
              As a Rideshare driver, you've probably wanted your work driven
              data to be better organised
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <p>Below is real data from one of our users!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">Day worked: {this.state.lastDay}</div>
        </div>
        <div className="row">
          <div className="col-12">Date: {this.state.lastDate}</div>
        </div>
        <div className="col-6">
          <Link to="/">
            <p className="text-center homeButton">&#127968;</p>
          </Link>
        </div>
      </>
    );
  }
}

export default Guest;
