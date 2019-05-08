import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header text-center">Drivr</header>
      <p className="subHeader text-center">Rideshare Analytics</p>
      <hr className="hr" />
      <div className="row align-items-center btnRow">
        <div className="col-4 offset-2">
          <p className="loginBtn text-center">Log In</p>
        </div>
        <div className="col-4">
          <p className="registerBtn text-center">Register</p>
        </div>
      </div>
      <div className="row">
        <div className="col-8 offset-2">
          <p className="guestBtn text-center">Continue as guest</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="footer text-center">Copyright 2019</p>
        </div>
      </div>
    </div>
  );
}

export default App;
