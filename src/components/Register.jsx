import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import NavbarAwal from "./NavbarAwal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pel_nama_lengkap: null,
      pel_tanggal_lahir: null,
      email: null,
      pel_jenis_kelamin: null,
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
    alert("You are registered! Please check your email to activate account");
    e.preventDefault(); //untuk mencegah reload
    console.log(this.state); //jangan lupa dihapus
    const data = this.state;
    axios.post("http://127.0.0.1:8000/api/register", data).then((res) => {
      Alert("Invitation Interview is Success!");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", res.data.user);
      // console.log(res);
      return <Redirect to="/pelamar/home"></Redirect>;
    });
  };

  handleUploadImage = (e) => {
    alert("You are registered, Please confirm your email and log in");
  };

  render() {
    const token = localStorage.getItem("token");

    return (
      <div className="hold-transition login-page">
        {}
        <div className="container">
          <div className="login-box">
            <div class="login-logo">
              <a>
                <b>E</b>-RECRUITMENT
              </a>
            </div>
            <div className="login-box-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group has-feedback">
                  <label htmlFor="exampleInputEmail1">Full Name</label>
                  <input
                    type="text"
                    required
                    name="pel_nama_lengkap"
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Enter your full name"
                  />
                </div>
                <div class="form-group has-feedback">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    required
                    name="email"
                    onChange={this.handleChange}
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group has-feedback">
                  <label htmlFor="exampleInputEmail1">Phone Number</label>
                  <input
                    type="text"
                    required
                    name="pel_no_telepon"
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group has-feedback">
                  <label htmlFor="exampleInputEmail1">Gender</label>
                  <br />
                  <div onChange={this.handleChange}>
                    <input
                      type="radio"
                      name="pel_jenis_kelamin"
                      value="Wanita"
                    />
                    Female
                    <input type="radio" name="pel_jenis_kelamin" value="Pria" />
                    Male
                  </div>
                </div>
                <div className="form-group has-feedback">
                  <label htmlFor="exampleInputEmail1">Birth Date</label>
                  <input
                    type="date"
                    required
                    name="pel_tanggal_lahir"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                </div>
                <div class="form-group has-feedback">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="pel_password"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="card-footer">
                  <button
                    onclick={this.handleUploadImage}
                    className="btn btn-block btn-success"
                  >
                    Register
                  </button>
                </div>
                <small id="emailHelp" class="form-text text-muted">
                  Already have an account? click
                </small>
                <Link class="text-center" to="/login">
                  Here
                </Link>
                <Alert color="primary" isOpen={true}>
                  Haloooo
                </Alert>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
