import React from "react";
import { Link } from "react-router-dom";

const LoggedIn = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Link to="/AddDay">
            <div className="addDay text-center">Add day</div>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Link to="/Search">
            <div className="search text-center">Search</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;
