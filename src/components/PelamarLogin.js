import React, { Component } from 'react'
import { login } from './UserFunctions'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class PelamarLogin extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
        this.props.history.push('/');
      
    })
  }

  render() {
    return (
      <body class="hold-transition login-page">
      <div class="login-box">
        <div class="login-logo">
          <a><b>E</b>-RECRUITMENT</a>
        </div>
        <div class="login-box-body">
          <p class="login-box-msg">Silahkan Masuk Untuk Memulai Lamaran Kerja</p>

          <form noValidate onSubmit={this.onSubmit}>
            <div class="form-group has-feedback">
              <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Masukkan Alamat Pos-el"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Masukkan Kata Sandi"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div class="row">
              <div class="col-xs-8">
                <div class="checkbox icheck">
                    
                </div>
              </div>
              <div class="col-xs-4">
                <button type="submit" class="btn btn-primary btn-block btn-flat">Masuk</button>
              </div>
            </div>
          </form>
          <a href="#">Lupa Kata Sandi</a><br/>
          <a href="register.html" class="text-center">Registrasi</a>

      </div>
    </div>
    </body>
    )
  }
}

export default PelamarLogin