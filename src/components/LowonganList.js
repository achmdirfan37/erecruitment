import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button, Alert } from "react-bootstrap";
import Pagination from "react-js-pagination";

class RiwayatPendidikanList extends React.Component {
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
    axios.get("http://127.0.0.1:8000/api/ms_lowongan/view").then((response) => {
      this.setState({
        ms_lowongan: response.data.data,
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
      .get("http://127.0.0.1:8000/api/ms_lowongan/view?page=" + pageNumber)
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
        "http://localhost:8000/api/ms_lowongan/search?cari=" + this.state.cari
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

  deleteLowongan(lowongan_id) {
    axios
      .delete("http://127.0.0.1:8000/api/ms_lowongan/delete/" + lowongan_id)
      .then((response) => {
        var lowongann = this.state.ms_lowongan;
        for (var i = 0; i < lowongann.length; i++) {
          if (lowongann[i].id == lowongan_id) {
            lowongann.splice(i, 1);
            this.setState({ lowongann: lowongann });
          }
        }
        this.props.history.push("/LowonganList");
      });
  }

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
          <h1>Daftar Lowongan Pekerjaan</h1>
          <ol className="breadcrumb">
            <li className="active"></li>
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
                  <button onClick={this.cari}>Cari Lowongan</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;
                  <Link
                    to={"/LowonganCreate"}
                    className="btn btn-warning btn-sm mr-2"
                  >
                    Tambah Lowongan
                  </Link>
                  <br />
                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Lowongan Pekerjaan</th>
                        <th>Level Jabatan</th>
                        <th>Pendidikan</th>
                        <th>Gaji</th>
                        <th>Tanggal Kadaluarsa</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.ms_lowongan !== null
                        ? this.state.ms_lowongan.map((ms_lowongans) => (
                            <tr key={ms_lowongans.id}>
                              <td>{ms_lowongans.id}</td>
                              <td>{ms_lowongans.low_judul}</td>
                              <td>{ms_lowongans.low_jabatan}</td>
                              <td>{ms_lowongans.low_kualifikasi}</td>
                              <td>{ms_lowongans.low_gaji}</td>
                              <td>{ms_lowongans.low_tanggal_ditutup}</td>
                              <td>
                                <Link
                                  to={`/${ms_lowongans.id}/LowonganEdit`}
                                  className="btn btn-warning btn-sm mr-2"
                                >
                                  Ubah
                                </Link>
                                &nbsp;&nbsp;
                                <Link
                                  to={`/${ms_lowongans.id}/LowonganEdit`}
                                  className="btn btn-warning btn-sm mr-2"
                                >
                                  Tayangkan Kembali
                                </Link>
                                &nbsp;&nbsp;
                                <Link
                                  href="fake-url"
                                  className="btn btn-warning btn-sm mr-2"
                                  onClick={this.deleteLowongan.bind(
                                    this,
                                    ms_lowongans.id
                                  )}
                                >
                                  Hapus
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

export default RiwayatPendidikanList;
