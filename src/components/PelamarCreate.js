import React, { Component } from "react";
import axios from "axios";
//import PelamarList from './pelamar-listing.component';

export default class PelamarCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pel_nama_lengkap: "",
      pel_email: "",
      pel_no_telepon: "",
      pel_jenis_kelamin: "",
      pel_tanggal_lahir: "",
      pel_alamat: "",
    };
    this.handleNamaLengkapInputChange = this.handleNamaLengkapInputChange.bind(
      this
    );
    this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
    this.handleNoTeleponInputChange = this.handleNoTeleponInputChange.bind(
      this
    );
    this.handleJenisKelaminInputChange = this.handleJenisKelaminInputChange.bind(
      this
    );
    this.handleAlamatInputChange = this.handleAlamatInputChange.bind(this);
    this.handleTanggalLahirInputChange = this.handleTanggalLahirInputChange.bind(
      this
    );
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNamaLengkapInputChange(event) {
    this.setState({
      pel_nama_lengkap: event.target.value,
    });
  }

  handleEmailInputChange(event) {
    this.setState({
      pel_email: event.target.value,
    });
  }

  handleNoTeleponInputChange(event) {
    this.setState({
      pel_no_telepon: event.target.value,
    });
  }

  handleTanggalLahirInputChange(event) {
    this.setState({
      pel_tanggal_lahir: event.target.value,
    });
  }
  handleJenisKelaminInputChange(event) {
    this.setState({
      pel_jenis_kelamin: event.target.value,
    });
  }

  handleAlamatInputChange(event) {
    this.setState({
      pel_alamat: event.target.value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/ms_pelamar/create", {
        pel_nama_lengkap: this.state.pel_nama_lengkap,
        pel_email: this.state.pel_email,
        pel_no_telepon: this.state.pel_no_telepon,
        pel_jenis_kelamin: this.state.pel_jenis_kelamin,
        pel_tanggal_lahir: this.state.pel_tanggal_lahir,
        pel_alamat: this.state.pel_alamat,
      })
      .then((response) => {
        this.setState({
          pel_nama_lengkap: "",
          pel_email: "",
          pel_no_telepon: "",
          pel_jenis_kelamin: "",
          pel_tanggal_lahir: "",
          pel_alamat: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Registration</h1>
          <ol className="breadcrumb">
            <li className="active">Registration</li>
          </ol>
        </section>

        <section className="content">
          <div className="row">
            {/* left column */}
            <div className="col-md-12">
              {/* general form elements */}
              <div className="box box-primary">
                <form role="form" onSubmit={this.handleFormSubmit}>
                  <div className="box-body">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        required
                        name="pel_nama_lengkap"
                        onChange={this.handleNamaLengkapInputChange}
                        value={this.state.pel_nama_lengkap}
                        className="form-control"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="text"
                        required
                        name="pel_email"
                        onChange={this.handleEmailInputChange}
                        value={this.state.pel_email}
                        className="form-control"
                        placeholder="Enter Email Address"
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        required
                        name="pel_no_telepon"
                        onChange={this.handleNoTeleponInputChange}
                        value={this.state.pel_no_telepon}
                        className="form-control"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div className="form-group">
                      <label>Gender</label>
                      <br />
                      <div
                        onChange={this.handleJenisKelaminInputChange.bind(this)}
                      >
                        <input
                          type="radio"
                          name="pel_jenis_kelamin"
                          value="Women"
                        />
                        Women
                        <input
                          type="radio"
                          name="pel_jenis_kelamin"
                          value="Man"
                        />
                        Man
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <input
                        type="date"
                        required
                        name="pel_tanggal_lahir"
                        onChange={this.handleTanggalLahirInputChange}
                        value={this.state.pel_tanggal_lahir}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <textarea
                        type="text"
                        required
                        name="pel_alamat"
                        onChange={this.handleAlamatInputChange}
                        value={this.state.pel_alamat}
                        className="form-control"
                        placeholder="Enter Address"
                        rows={5}
                        cols={5}
                      />
                    </div>
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                      Registration Data
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
