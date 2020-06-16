import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavbarAwal extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand" to="/">
            Home
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-item nav-link active" to="/login">
                Login <span class="sr-only">(current)</span>
              </Link>
              <Link class="nav-item nav-link" to="/register">
                Register
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarAwal;
