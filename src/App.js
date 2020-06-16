import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import MenuHRD from "./MenuHRD";
import MenuHRD2 from "./MenuHRD2";
import MenuPewawancara from "./MenuPewawancara";
import NavbarAwal from "./components/NavbarAwal";
import { Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import LoginHRD from "./components/LoginHRD";

import LoginHRD2 from "./components/LoginHRD2";
import LoginPewawancara from "./components/LoginPewawancara";
import Register from "./components/Register";
import Home from "./components/Home";
import history from "./history";
import DashboardPelamar_PerusahaanList from "./components/DashboardPelamar_PerusahaanList";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };
  }

  handleSuccessfulAuth() {
    this.props.history.push("/");
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/login_admin">
            <LoginHRD />
          </Route>
          <Route path="/login_admin2">
            <LoginHRD2 />
          </Route>
          <Route path="/login_pewawancara">
            <LoginPewawancara />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route
            path="/"
            exact
            render={(props) => <Menu {...props} user={this.state.user} />}
          />
          <Route path="/HRD" render={(props) => <MenuHRD />} />
          <Route path="/HRD2" render={(props) => <MenuHRD2 />} />
          <Route path="/Pewawancara" render={(props) => <MenuPewawancara />} />
          <Route path="/pelamar/home">
            <DashboardPelamar_PerusahaanList />
          </Route>
        </Switch>
      </Router>
    );
  }
}
