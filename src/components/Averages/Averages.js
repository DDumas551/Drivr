import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Averages.css";

class Search extends Component {
  state = {
    activeButton: "grey",
    sort: "Best",
    timeFrame: "day",
    oTimeFrame: "Day",
    moneyEarned: 0,
    trips: 0,
    onlineHours: 0,
    averageMoney: 0,
    cashEarned: 0,
    data: []
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
        console.log(res);
        const max = res.reduce(function(prev, current) {
          return prev.moneyEarned > current.moneyEarned ? prev : current;
        });
        console.log("bestday", max);
        this.setState({
          cashEarned: max.moneyEarned,
          onlineHours: max.onlineHours,
          trips: max.trips,
          data: res
        });

        // this.setState({
        //   milesDriven: res.reduce(
        //     (a, b) => parseInt(a) + parseInt(b.milesDriven),
        //     0
        //   ),
        //   moneyEarned: res.reduce(
        //     (a, b) => parseFloat(a) + parseFloat(b.moneyEarned),
        //     0
        //   ),
        //   onlineHours: res.reduce(
        //     (a, b) => parseFloat(a) + parseFloat(b.onlineHours),
        //     0
        //   ),
        //   trips: res.reduce((a, b) => parseInt(a) + parseInt(b.trips), 0)
        // });
      })
      .catch(err => {
        console.log(err);
      });
  }

  colors = ["grey", "white"];

  handleClick = (sort, timeFrame) => {
    // cashEarned: Math.max.apply(
    //   Math,
    //   res.map(function(o) {
    //     return o.moneyEarned;
    //   })
    // )
    const bestDay = this.state.data.reduce(function(prev, current) {
      return prev.moneyEarned > current.moneyEarned ? prev : current;
    });
    const worstDay = this.state.data.reduce(function(prev, current) {
      return prev.moneyEarned < current.moneyEarned ? prev : current;
    });
    const dataToDisplay = sort === "Best" ? bestDay : worstDay;
    this.setState({
      sort,
      cashEarned: dataToDisplay.moneyEarned,
      trips: dataToDisplay.trips,
      onlineHours: dataToDisplay.onlineHours,
      timeFrame
    });
  };

  render() {
    // let bestCashDay = res[0].moneyEarned;
    // let bestHoursDay = res[0].onlineHours;
    // let bestDay = bestCashDay / bestHoursDay;

    // for (let i = 0; i < res.length; i++) {
    //   if (res[i].moneyEarned > bestCashDay) {
    //     bestCashDay = res[i.moneyEarned];
    //   }
    // }

    const z = this.state;

    return (
      <div>
        <div className="row dataRow">
          <div className="col-12">
            <div className="row">
              <div className="col-5 text-right">
                <div>
                  {z.sort} {z.timeFrame}:
                </div>
              </div>
              <div className="col-6 offset-1">
                <div>${z.cashEarned} total</div>
              </div>
            </div>
            <div className="row">
              <div className="col-5 text-right">
                <div>$/hour:</div>
              </div>
              <div className="col-6 offset-1">
                <div>${(z.cashEarned / z.onlineHours).toFixed(2)}/hour</div>
              </div>
            </div>
            <div className="row">
              <div className="col-5 text-right">
                <div>Trips that {z.timeFrame}:</div>
              </div>
              <div className="col-6 offset-1">
                <div>{this.state.trips}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-5 text-right">
                <div>Hours/{z.timeFrame}:</div>
              </div>
              <div className="col-6 offset-1">
                <div>{this.state.onlineHours}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-5 text-right">
                <div>Avg $/trip:</div>
              </div>
              <div className="col-6 offset-1">
                <div>${(z.cashEarned / z.trips).toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <p className="text-center">Sort by:</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-6">
                <p
                  className={`searchBtn2 ${
                    z.sort === "Best" ? "grey" : "white"
                  }`}
                  onClick={() => this.handleClick("Best", z.timeFrame)}
                >
                  Best
                </p>
              </div>
              <div className="col-6">
                <p
                  className={`searchBtn2 ${
                    z.sort === "Worst" ? "grey" : "white"
                  }`}
                  onClick={() => this.handleClick("Worst", z.timeFrame)}
                >
                  Worst
                </p>
              </div>
            </div>
            <div className="row justify-content-around">
              <div className="col-4">
                <p
                  className={`searchBtn3 ${
                    z.timeFrame === "day" ? "grey" : "white"
                  }`}
                  onClick={() => this.handleClick(z.sort, "day")}
                >
                  1 Day
                </p>
              </div>
              {/* <div className="col-4">
                <p
                  className={`searchBtn3 ${
                    z.timeFrame === "week" ? "grey" : "white"
                  }`}
                  onClick={() => this.handleClick(z.sort, "week")}
                >
                  7 Days
                </p>
              </div>
              <div className="col-4">
                <p
                  className={`searchBtn3 ${
                    z.timeFrame === "month" ? "grey" : "white"
                  }`}
                  onClick={() => this.handleClick(z.sort, "month")}
                >
                  30 Days
                </p>
              </div> */}
            </div>
            <hr />
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
