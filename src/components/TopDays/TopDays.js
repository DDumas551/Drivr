import React, { Component } from "react";
import { Link } from "react-router-dom";
import TopDayCard from "../TopDayCard/TopDayCard";
import "../TopDays/TopDays.css";

class TopDays extends Component {
  state = {
    data: [],
    hours: {},
    moneyEarned: {},
    monday: [],
    mondayCash: 0,
    mondayHours: 0,
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
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
        this.setState({
          data: res
        });
      })
      .then()
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].dayOtW === "Monday") {
        this.state.monday.push(this.state.data[i]);
      } else if (this.state.data[i].dayOtW === "Tuesday") {
        this.state.tuesday.push(this.state.data[i]);
      } else if (this.state.data[i].dayOtW === "Wednesday") {
        this.state.wednesday.push(this.state.data[i]);
      } else if (this.state.data[i].dayOtW === "Thursday") {
        this.state.thursday.push(this.state.data[i]);
      } else if (this.state.data[i].dayOtW === "Friday") {
        this.state.friday.push(this.state.data[i]);
      } else if (this.state.data[i].dayOtW === "Saturday") {
        this.state.saturday.push(this.state.data[i]);
      } else if (this.state.data[i].dayOtW === "Sunday") {
        this.state.sunday.push(this.state.data[i]);
      }
    }

    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">LOL</h5>
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
        {/* <TopDayCard /> */}
        <div className="row">
          <div className="col-6">
            <Link to="/LoggedIn">
              <div className="text-center home">&#127968;</div>
            </Link>
          </div>
          <button className="btn btn-large" onClick={this.handleClick}>
            TEST LAUNCH
          </button>
        </div>
        <br />
      </div>
    );
  }
}

export default TopDays;
