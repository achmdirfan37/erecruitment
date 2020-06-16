import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button, Alert } from "react-bootstrap";
import Pagination from "react-js-pagination";

class DashboardPelamar_PerusahaanList extends React.Component {
  constructor() {
    super();

    // data provinsi disimpan di state.provinces
    this.state = {
      ms_perusahaan: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    // ajax call
    axios
      .get("http://127.0.0.1:8000/api/ms_perusahaan/view")
      .then((response) => {
        this.setState({
          ms_perusahaan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    //this.setState({activePage: pageNumber});
    //"http://127.0.0.1:8000/api/ms_pelamar/view?page=1"
    axios
      .get("http://127.0.0.1:8000/api/ms_perusahaan/view?page=" + pageNumber)
      .then((response) => {
        this.setState({
          ms_perusahaan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });
  }

  cari = () => {
    axios
      .get(
        "http://localhost:8000/api/ms_perusahaan/search?cari=" + this.state.cari
      )
      .then((response) => {
        this.setState({
          ms_perusahaan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });
  };

  // lowonganbyperusahaan(id) {
  //   axios.delete('http://localhost:8000/api/ms_lowongan/lowonganbyperusahaan/' + id)
  //     .then(response => {
  //       this.setState({
  //         ms_perusahaan: response.data.data,
  //         itemsCountPerPage: response.data.per_page,
  //         totalItemsCount: response.data.total,
  //         activePage: response.data.current_page
  //       });
  //     });
  // }

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
          <h6>- Status: {this.props.loggedInStatus} -</h6>
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
                  <button onClick={this.cari}>Search for Company</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Name of Company</th>
                        <th>Description</th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                        <th>Website Address</th>
                        <th>Address</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.ms_perusahaan !== undefined
                        ? this.state.ms_perusahaan.map((ms_perusahaans) => (
                            <tr key={ms_perusahaans.id}>
                              <td>{ms_perusahaans.id}</td>
                              <td>{ms_perusahaans.per_nama}</td>
                              <td>{ms_perusahaans.per_deskripsi}</td>
                              <td>{ms_perusahaans.per_email}</td>
                              <td>{ms_perusahaans.per_no_telepon}</td>
                              <td>{ms_perusahaans.per_alamat_website}</td>
                              <td>{ms_perusahaans.per_alamat}</td>
                              <td>
                                <Link
                                  to={`/${ms_perusahaans.id}/DashboardPelamar_LowonganList`}
                                  className="btn btn-warning btn-sm mr-2"
                                >
                                  View Job Openings
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

export default DashboardPelamar_PerusahaanList;
