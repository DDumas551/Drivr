import React, { Component } from "react";
import { Link } from "react-router-dom";
import TopDayCard from "../TopDayCard/TopDayCard";
import "../TopDays/TopDays.css";

class TopDays extends Component {
  componentDidMount() {
    fetch("/api/topDays", {
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
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <TopDayCard />
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
