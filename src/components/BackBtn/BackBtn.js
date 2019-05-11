import React from "react";
import { Link } from "react-router-dom";

const BackBtn = () => {
  return (
    <div>
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
    </div>
  );
};

export default BackBtn;
