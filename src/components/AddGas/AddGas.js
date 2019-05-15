import React, { Component } from "react";
import "../AddGas/AddGas.css";
import { Link } from "react-router-dom";

class AddGas extends Component {
  state = {
    gallons: "",
    price: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form>
          <div class="form-group">
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Gallons pumped"
              name="gallons"
              value={this.state.gallons}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Price/gal"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <Link to="/LoggedIn">
              <div className="text-center home">&#127968;</div>
            </Link>
          </div>
          <div className="col-6">
            <Link to="/OverallStats">
              <div className="addGas text-center">Submit Gas</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AddGas;
