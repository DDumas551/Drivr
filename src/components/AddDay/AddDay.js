import React from "react";
import "../AddDay/AddDay.css";
import { Link } from "react-router-dom";

const AddDay = () => {
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Today is:</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
        </div>
        <div class="form-group">
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Miles driven"
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Money earned"
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Online hours (XX.YY)"
          />
        </div>
        <div class="form-group">
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Number of trips"
          />
        </div>
        <div className="row">
          <div className="col-6">
            <Link to="/LoggedIn">
              <div className="home text-center">&#127968;</div>
            </Link>
          </div>
          <div className="col-6">
            <Link to="/OverallStats">
              <div className="submit link">Submit Data</div>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDay;
