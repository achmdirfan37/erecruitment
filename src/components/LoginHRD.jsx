import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import NavbarAwal from "./NavbarAwal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import history from "../history";

export class LoginHRD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      pel_password: null,
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value); //jangan lupa dihapus
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); //untuk mencegah reload
    console.log(this.state); //jangan lupa dihapus
    const data = this.state;
    axios.post("http://127.0.0.1:8000/api/login", data).then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", res.data.user);
      // this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
      history.push("/HRD");
    });
  };

  render() {
    const token = localStorage.getItem("token");
    return (
      <div className="hold-transition login-page">
        <div className="container">
          <div className="row">
            <div className="col md 12">
              <div className="login-box">
                <div class="login-logo">
                  <a>
                    <b>E</b>-RECRUITMENT
                  </a>
                </div>
                <div className="login-box-body">
                  <form onSubmit={this.handleSubmit}>
                    <div class="form-group has-feedback">
                      <label for="exampleInputEmail1">Alamat E-mail</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Masukkan Alamat E-mail"
                        name="email"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group has-feedback">
                      <label for="exampleInputPassword1">Kata Sandi</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Masukkan Kata Sandi"
                        name="password"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className="card-footer">
                      <button className="btn btn-block btn-success">
                        Masuk
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginHRD;
