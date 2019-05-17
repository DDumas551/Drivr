import React, { Component } from "react";
import "../OverallStats/OverallStats.css";
import { Link } from "react-router-dom";

class OverallStats extends Component {
  state = {
    date: "",
    milesDriven: "",
    moneyEarned: "",
    onlineHours: "",
    trips: ""
  };

  // handleData = e => {
  //   console.log("comon u piece of hshit");
  // };

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
        console.log(res);
        this.setState({
          milesDriven: res.reduce(
            (a, b) => parseInt(a) + parseInt(b.milesDriven),
            0
          ),
          moneyEarned: res.reduce(
            (a, b) => parseInt(a) + parseInt(b.moneyEarned),
            0
          ),
          onlineHours: res.reduce(
            (a, b) => parseInt(a) + parseInt(b.onlineHours),
            0
          ),
          trips: res.reduce((a, b) => parseInt(a) + parseInt(b.trips), 0)
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6 text-center">
            <p>Total Miles Driven</p>
          </div>
          <div className="col-6 text-center">
            <p>{this.state.milesDriven || 0}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 text-center">
            <p>Total Cash Earned</p>
          </div>
          <div className="col-6 text-center">
            <p>${this.state.moneyEarned || 0}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 text-center">
            <p>Total Rides Given</p>
          </div>
          <div className="col-6 text-center">
            <p>{this.state.trips || 0}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 text-center">
            <p>Total Online Hours</p>
          </div>
          <div className="col-6 text-center">
            <p>{this.state.onlineHours || 0}</p>
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
          <div className="col-6">
            <button>CLICKY</button>
          </div>
        </div>
      </div>
    );
  }
}

export default OverallStats;
