import React, { Component } from "react";
import "../AddDay/AddDay.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class AddDay extends Component {
  state = {
    date: "",
    dayOtW: "",
    milesDriven: "",
    moneyEarned: "",
    onlineHours: "",
    trips: "",
    dataEntered: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("/api/addDay", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        console.log("response", response);
        return response.json();
      })
      .then(data => {
        this.setState({ dataEntered: true });
        console.log("data", data);
      });
  };

  render() {
    if (this.state.dataEntered) {
      return <Redirect to="/OverallStats" />;
    } else {
      return (
        <div>
          <form>
            <div>
              Today is:
              <br />
            </div>
            <div className="form-group">
              <select onChange={this.handleChange} name="daysOtW">
                <option value={this.state.dayOtW} onChange={this.handleChange}>
                  Monday
                </option>
                <option value={this.state.dayOtW} onChange={this.handleChange}>
                  Tuesday
                </option>
                <option value={this.state.dayOtW} onChange={this.handleChange}>
                  Wednesday
                </option>
                <option value={this.state.dayOtW} onChange={this.handleChange}>
                  Thursday
                </option>
                <option value={this.state.dayOtW} onChange={this.handleChange}>
                  Friday
                </option>
                <option value={this.state.dayOtW} onChange={this.handleChange}>
                  Saturday
                </option>
                <option value={this.state.dayOtW} onChange={this.handleChange}>
                  Sunday
                </option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Money earned"
                name="moneyEarned"
                value={parseFloat(this.state.moneyEarned)}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Online hours (XX.YY)"
                name="onlineHours"
                value={this.state.onlineHours}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Number of trips"
                name="trips"
                value={this.state.trips}
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <Link to="/LoggedIn">
                  <div className="home text-center">&#127968;</div>
                </Link>
              </div>
              <div className="col-6">
                <button
                  className="subBtn link"
                  disabled={
                    !this.state.date ||
                    !this.state.moneyEarned ||
                    !this.state.onlineHours ||
                    !this.state.trips
                      ? true
                      : false
                  }
                  onClick={this.handleSubmit}
                >
                  Submit Data
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default AddDay;
