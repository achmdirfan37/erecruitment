import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button, Alert } from "react-bootstrap";
import Pagination from "react-js-pagination";

class DashboardPelamar_LowonganList extends React.Component {
  constructor() {
    super();
    // data provinsi disimpan di state.provinces
    this.state = {
      ms_lowongan: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    // ajax call

    const id = this.props.match.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/ms_lowongan/lowonganbyperusahaan/${id}`)
      .then((response) => {
        this.setState({
          ms_lowongan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://127.0.0.1:8000/api/ms_perusahaan/viewDetail/${id}`)
      .then((response) => {
        this.setState({
          per_nama: response.data.per_nama,
          per_deskripsi: response.data.per_deskripsi,
          per_email: response.data.per_email,
          per_no_telepon: response.data.per_no_telepon,
          per_alamat_website: response.data.per_alamat_website,
          per_alamat: response.data.per_alamat,
        });
      })
      .catch((err) => console.log(err));
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    const id = this.props.match.params.id;
    //this.setState({activePage: pageNumber});
    //"http://127.0.0.1:8000/api/ms_pelamar/view?page=1"
    axios
      .get(
        `http://127.0.0.1:8000/api/ms_lowongan/lowonganbyperusahaan/${id}?page=` +
          pageNumber
      )
      .then((response) => {
        this.setState({
          ms_lowongan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });
  }

  cari = () => {
    axios
      .get(
        "http://localhost:8000/api/ms_lowongan/search/?cari=" + this.state.cari
      )
      .then((response) => {
        this.setState({
          ms_lowongan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });
  };

  onChangeText = (event) => {
    this.setState({
      cari: event.target.value,
    });
  };

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Job Vacancy</h1>
          <ol className="breadcrumb">
            <li className="active">Job Vacancy</li>
          </ol>
        </section>

        <section className="content">
          <div className="row">
            {/* left column */}
            <div className="col-md-12">
              {/* general form elements */}
              <div className="box box-primary">
                <form
                  role="form"
                  onSubmit={this.onFormSubmit}
                  encType="multipart/form-data"
                >
                  <div className="box-body">
                    <div className="form-group">
                      <label>Company Name</label>
                      <input
                        type="text"
                        required
                        name="low_judul"
                        readOnly="true"
                        value={this.state.per_nama}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        type="text"
                        required
                        name="low_deskripsi"
                        readOnly="true"
                        value={this.state.per_deskripsi}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="text"
                        required
                        name="low_tanggal_ditutup"
                        readOnly="true"
                        value={this.state.per_email}
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
                        value={this.state.per_no_telepon}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Website Address</label>
                      <input
                        type="text"
                        required
                        name="low_jabatan"
                        readOnly="true"
                        value={this.state.per_alamat_website}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Location</label>
                      <textarea
                        type="text"
                        required
                        name="low_deskripsi"
                        readOnly="true"
                        value={this.state.per_alamat}
                        className="form-control"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="content-header">
          <h1>Job Vacancy</h1>
          <ol className="breadcrumb">
            <li className="active">Job Vacancy</li>
          </ol>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/* /.box-header */}
                <div className="box-body">
                  <input
                    type="text"
                    value={this.state.cari}
                    onChange={this.onChangeText}
                    //onChange={this.searchChanged}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        this.cari();
                      }
                    }}
                    style={{ marginRight: 8 }}
                  />
                  <button onClick={this.cari}>Search for Job Vacancy</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;
                  <br />
                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Job Vacancy</th>
                        <th>Date Closed</th>
                        <th>Position</th>
                        <th>Field of Work</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.ms_lowongan !== null
                        ? this.state.ms_lowongan.map((ms_lowongans) => (
                            <tr key={ms_lowongans.id}>
                              <td>{ms_lowongans.id}</td>
                              <td>{ms_lowongans.low_judul}</td>
                              <td>{ms_lowongans.low_tanggal_ditutup}</td>
                              <td>{ms_lowongans.low_jabatan}</td>
                              <td>{ms_lowongans.low_bidang_kerja}</td>
                              <td>
                                <Link
                                  to={`/${ms_lowongans.id}/DashboardPelamar_LamarPekerjaan`}
                                  className="btn btn-warning btn-sm mr-2"
                                >
                                  Lamar Pekerjaan
                                </Link>
                              </td>
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
        {/* /.content */}
      </div>
    );
  }
}

export default DashboardPelamar_LowonganList;
