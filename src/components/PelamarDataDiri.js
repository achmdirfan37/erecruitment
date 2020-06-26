import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";

//import PelamarList from './pelamar-listing.component';

export default class PelamarDataDiri extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pel_nama_lengkap: "",
      pel_umur: "",
      pel_jenis_kelamin: "",
      pel_tanggal_lahir: "",
      pel_alamat: "",
      pel_no_telepon: "",
      ms_keterampilan: [],
      ms_riwayat_pendidikan: [],
      ms_pengalaman_kerja: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3,
    };
  }

  componentDidMount() {
    // ajax call

    const id = this.props.match.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/ms_pelamar/viewDetail/${id}`)
      .then((response) => {
        this.setState({
          id: response.data.id,
          pel_foto: response.data.pel_foto,
          pel_password: response.data.pel_password,
          pel_nama_lengkap: response.data.pel_nama_lengkap,
          pel_umur: response.data.pel_umur,
          pel_alamat: response.data.pel_alamat,
          pel_jenis_kelamin: response.data.pel_jenis_kelamin,
          pel_no_telepon: response.data.pel_no_telepon,
          pel_tanggal_lahir: response.data.pel_tanggal_lahir,
        });
      })
      .catch((err) => console.log(err));

    // ajax call
    axios
      .get("http://127.0.0.1:8000/api/ms_keterampilan/view")
      .then((response) => {
        this.setState({
          ms_keterampilan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });

    // ajax call
    axios
      .get("http://127.0.0.1:8000/api/ms_riwayat_pendidikan/view")
      .then((response) => {
        this.setState({
          ms_riwayat_pendidikan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });

    // ajax call
    axios
      .get("http://127.0.0.1:8000/api/ms_pengalaman_kerja/view")
      .then((response) => {
        this.setState({
          ms_pengalaman_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Profile</h1>
          <ol className="breadcrumb">
            <li className="active">Profile</li>
          </ol>
        </section>

        <section className="content">
          <div className="row">
            {/* left column */}
            <div className="col-md-12">
              {/* general form elements */}
              <div className="box box-primary">
                <form role="form" onSubmit={this.onFormSubmit}>
                  <div className="box-body">
                    <label>Photo</label>
                    <img src={"./6368440_preview.png"} width="150px" />
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        required
                        name="low_judul"
                        readOnly="true"
                        value={this.state.pel_nama_lengkap}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Gender</label>
                      <input
                        type="text"
                        required
                        name="low_jabatan"
                        readOnly="true"
                        value={this.state.pel_jenis_kelamin}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Age</label>
                      <textarea
                        type="text"
                        required
                        name="low_deskripsi"
                        readOnly="true"
                        value={this.state.pel_umur}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <input
                        type="date"
                        required
                        name="low_tanggal_ditutup"
                        readOnly="true"
                        value={this.state.pel_tanggal_lahir}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        required
                        name="low_gaji"
                        readOnly="true"
                        value={this.state.pel_no_telepon}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <textarea
                        type="text"
                        required
                        name="low_jabatan"
                        readOnly="true"
                        value={this.state.pel_alamat}
                        className="form-control"
                        rows={5}
                        cols={5}
                      />
                    </div>
                  </div>
                  <div className="box-footer">
                    <Link
                      to={`/${this.state.id}/PelamarChangePassword`}
                      className="btn btn-warning btn-sm mr-2"
                    >
                      Change Password
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link
                      to={`/${this.state.id}/PelamarEdit`}
                      className="btn btn-warning btn-sm mr-2"
                    >
                      Update Profile
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Skills Data</h1>
          <ol className="breadcrumb">
            <li className="active">Skills Data</li>
          </ol>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/* /.box-header */}
                <div className="box-body">
                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Type of Skill</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.ms_keterampilan !== undefined
                        ? this.state.ms_keterampilan.map((ms_keterampilans) => (
                            <tr key={ms_keterampilans.id}>
                              <td>{ms_keterampilans.id}</td>
                              <td>{ms_keterampilans.ket_nama}</td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                  <div class="center">
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.totalItemsCount}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.handlePageChange}
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                  </div>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>

        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Education Background Data</h1>
          <ol className="breadcrumb">
            <li className="active">Education Background Data</li>
          </ol>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/* /.box-header */}
                <div className="box-body">
                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Name of Educational Institution</th>
                        <th>Graduation Year</th>
                        <th>Educational Stage</th>
                        <th>Location</th>
                        <th>Majors</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.ms_riwayat_pendidikan !== null
                        ? this.state.ms_riwayat_pendidikan.map(
                            (ms_riwayat_pendidikans) => (
                              <tr key={ms_riwayat_pendidikans.id}>
                                <td>{ms_riwayat_pendidikans.id}</td>
                                <td>
                                  {
                                    ms_riwayat_pendidikans.rpd_nama_lembaga_pendidikan
                                  }
                                </td>
                                <td>
                                  {ms_riwayat_pendidikans.rpd_tahun_lulus}
                                </td>
                                <td>
                                  {ms_riwayat_pendidikans.rpd_kualifikasi}
                                </td>
                                <td>{ms_riwayat_pendidikans.rpd_lokasi}</td>
                                <td>{ms_riwayat_pendidikans.rpd_jurusan}</td>
                              </tr>
                            )
                          )
                        : null}
                    </tbody>
                  </table>
                  <div class="center">
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.totalItemsCount}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.handlePageChange}
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                  </div>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
        {/* /.content */}

        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Work Experience Data</h1>
          <ol className="breadcrumb">
            <li className="active">Work Experience Data</li>
          </ol>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/* /.box-header */}
                <div className="box-body">
                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Company Name</th>
                        <th>Start Year of Work</th>
                        <th>Finish Year of Work</th>
                        <th>Location</th>
                        <th>Industry</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.ms_pengalaman_kerja !== null
                        ? this.state.ms_pengalaman_kerja.map(
                            (ms_pengalaman_kerjas) => (
                              <tr key={ms_pengalaman_kerjas.id}>
                                <td>{ms_pengalaman_kerjas.id}</td>
                                <td>
                                  {ms_pengalaman_kerjas.pkj_nama_perusahaan}
                                </td>
                                <td>
                                  {ms_pengalaman_kerjas.pkj_tanggal_selesai}
                                </td>
                                <td>
                                  {ms_pengalaman_kerjas.pkj_tanggal_selesai}
                                </td>
                                <td>{ms_pengalaman_kerjas.pkj_lokasi}</td>
                                <td>{ms_pengalaman_kerjas.pkj_industri}</td>
                              </tr>
                            )
                          )
                        : null}
                    </tbody>
                  </table>
                  <div class="center">
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.totalItemsCount}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.handlePageChange}
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                  </div>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
        {/* /.content */}
      </div>
    );
  }
}
