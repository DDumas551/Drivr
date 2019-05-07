import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header text-center">Drivr</header>
      <p className="subHeader text-center">Rideshare Analytics</p>
      <hr className="hr" />
      <div className="row align-items-center btnRow">
        <div className="col-3 offset-3">
          <p className="loginBtn text-center">Log In</p>
        </div>
        <div className="col-3">
          <p className="registerBtn text-center">Register</p>
        </div>
      </div>
      <div className="lol" />
    </div>
  );
}

export default App;
