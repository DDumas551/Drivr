import React from "react";
import Header from "../Header/Header";
import LoginButtons from "../LoginButtons/LoginButtons";
// import Footer from "../Footer/Footer";
import LoginPage from "../LoginPage/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Guest from "../Guest/Guest";
import Register from "../Register/Register";
import LoggedIn from "../LoggedIn/LoggedIn";
import AddDay from "../AddDay/AddDay";
import "./Container.css";

const Container = () => {
  return (
    <div>
      <div className="container-fluid">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={LoginButtons} />
            <Route exact path="/LoginPage" component={LoginPage} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Guest" component={Guest} />
            <Route exact path="/LoggedIn" component={LoggedIn} />
            <Route exact path="/AddDay" component={AddDay} />
          </Switch>
        </Router>

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Container;
