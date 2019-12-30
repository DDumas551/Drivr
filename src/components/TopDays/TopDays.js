import React, { Component } from "react";
import { Link } from "react-router-dom";
import TopDayCard from "../TopDayCard/TopDayCard";
import "../TopDays/TopDays.css";
const daysOfWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];

class TopDays extends Component {
  state = {
    data: [],
    hours: {},
    moneyEarned: {},
    monday: 0,
    mondayCash: 0,
    mondayHours: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0,
    tripsPerDay: {
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 0,
      sunday: 0
    }
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
        this.setState(
          {
            data: res
          },
          this.calculateTotals(res)
        );
      })
      .then()
      .catch(err => {
        console.log(err);
      });
  }

  calculateTotals = res => {
    daysOfWeek.forEach(element => {
      const moneyEarned = res
        .filter(day => {
          return day.dayOtW.toLowerCase() === element.toLowerCase();
        })
        .reduce((tally, day) => {
          return (tally += day.moneyEarned);
        }, 0)
        .toFixed(2);
      const hoursOnline = res
        .filter(day => {
          return day.dayOtW.toLowerCase() === element.toLowerCase();
        })
        .reduce((tally, day) => {
          return (tally += day.onlineHours);
        }, 0)
        .toFixed(2);
      const totalTrips = res
        .filter(day => {
          return day.dayOtW.toLowerCase() === element.toLowerCase();
        })
        .reduce((tally, day) => {
          return (tally += day.trips);
        }, 0);
      const totalDays = res.filter(day => {
        return day.dayOtW.toLowerCase() === element.toLowerCase();
      });
      // console.log("total days", totalDays);
      this.setState({
        [element.toLowerCase()]: (moneyEarned / hoursOnline).toFixed(2),
        tripsPerDay: {
          ...this.state.tripsPerDay,
          [element.toLowerCase()]: (totalTrips / totalDays.length).toFixed(2)
        }
      });
    });
  };

  // bubbleSort = daysOfWeek => {
  //   let len = daysOfWeek.length;
  //   for (let i = len - 1; i >= 0; i--) {
  //     for (let j = 1; j <= i; j++) {
  //       if (daysOfWeek[j - 1] > daysOfWeek[j]) {
  //         let temp = daysOfWeek[j - 1];
  //         daysOfWeek[j - 1] = daysOfWeek[j];
  //         daysOfWeek[j] = temp;
  //       }
  //     }
  //   }
  //   console.log("Sorted?!?! ", daysOfWeek);
  //   return daysOfWeek;
  // };
  render() {
    return (
      <div>
        {daysOfWeek.map(day => (
          <TopDayCard
            key={day}
            day={day.toUpperCase()}
            rate={this.state[day]}
            avgTrips={this.state.tripsPerDay[day]}
          />
        ))}
        <div className="row">
          <div className="col-6">
            <Link to="/LoggedIn">
              <div className="text-center home">&#127968;</div>
            </Link>
          </div>
          <button className="regText btn btn-large" onClick={this.bubbleSort}>
            TEST LAUNCH
          </button>
        </div>
        <br />
      </div>
    );
  }
}

export default TopDays;
