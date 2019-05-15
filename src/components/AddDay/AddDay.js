import React, { Component } from "react";
import "../AddDay/AddDay.css";
import { Link } from "react-router-dom";

class AddDay extends Component {
  state = {
    date: "",
    milesDriven: "",
    moneyEarned: "",
    onlineHours: "",
    trips: ""
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
        return response.json();
      })
      .then(data => {
        console.log("data", data);
      });
  };

  render() {
    return (
      <div>
        <form>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Today is:</label>
            <input
              type="date"
              class="form-control"
              id="exampleFormControlInput1"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Miles driven"
              name="milesDriven"
              value={this.state.milesDriven}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Money earned"
              name="moneyEarned"
              value={this.state.moneyEarned}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Online hours (XX.YY)"
              name="onlineHours"
              value={this.state.onlineHours}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <input
              type="number"
              class="form-control"
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
              <button className="subBtn link" onClick={this.handleSubmit}>
                Submit Data
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddDay;
