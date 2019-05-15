import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Averages.css";

class Search extends Component {
  state = {
    activeButton: "grey",
    sort: "best",
    timeFrame: "day"
  };

  colors = ["grey", "white"];

  handleClick = (sort, timeFrame) => {
    this.setState({
      sort,
      timeFrame
    });
  };

  render() {
    return (
      <div>
        <div className="row dataRow">
          <div className="col-12">
            <div className="row">
              <div className="col-5 text-right">
                <div>Cash earned:</div>
              </div>
              <div className="col-6 offset-1">
                <div>$$$$</div>
              </div>
            </div>
            <div className="row">
              <div className="col-5 text-right">
                <div>Miles driven:</div>
              </div>
              <div className="col-6 offset-1">
                <div>121 Miles</div>
              </div>
            </div>
            <div className="row">
              <div className="col-5 text-right">
                <div>$/mile:</div>
              </div>
              <div className="col-6 offset-1">
                <div>$1.05/mile</div>
              </div>
            </div>
            <div className="row">
              <div className="col-5 text-right">
                <div>$/trip:</div>
              </div>
              <div className="col-6 offset-1">
                <div>10.95/trip</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <p className="text-center">Averages by:</p>
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-4">
                <p
                  className={`searchBtn3 ${
                    this.state.timeFrame === "day" ? "grey" : "white"
                  }`}
                  onClick={() => this.handleClick(this.state.sort, "day")}
                >
                  Day
                </p>
              </div>
              <div className="col-4">
                <p
                  className={`searchBtn3 ${
                    this.state.timeFrame === "week" ? "grey" : "white"
                  }`}
                  onClick={() => this.handleClick(this.state.sort, "week")}
                >
                  Week
                </p>
              </div>
              <div className="col-4">
                <p
                  className={`searchBtn3 ${
                    this.state.timeFrame === "month" ? "grey" : "white"
                  }`}
                  onClick={() => this.handleClick(this.state.sort, "month")}
                >
                  Month
                </p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col">
                <p className="text-center">Sort by:</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-6">
                <p
                  className={`searchBtn2 ${
                    this.state.sort === "best" ? "grey" : "white"
                  }`}
                  onClick={() => this.handleClick("best", this.state.timeFrame)}
                >
                  Best
                </p>
              </div>
              <div className="col-6">
                <p
                  className={`searchBtn2 ${
                    this.state.sort === "worst" ? "grey" : "white"
                  }`}
                  onClick={() =>
                    this.handleClick("worst", this.state.timeFrame)
                  }
                >
                  Worst
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Link to="/LoggedIn">
              <p className="home text-center">&#127968;</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
