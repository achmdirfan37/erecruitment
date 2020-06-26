import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button, Alert } from "react-bootstrap";
import Pagination from "react-js-pagination";
import MenuHRD from "../MenuHRD";

class DashboardHrd_LowonganList extends React.Component {
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
    //id perusahaan
    const id = 4;
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
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    const id = 4;
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
    const id = 4;
    axios
      .get(
        `http://localhost:8000/api/ms_lowongan/searchlowonganbyperusahaan/${id}?cari=` +
          this.state.cari
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
          <h1>Daftar Lowongan Pekerjaan</h1>
          <ol className="breadcrumb">
            <li className="active">Daftar Lowongan Pekerjaan</li>
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
                  <button onClick={this.cari}>Cari Lowongan Pekerjaan</button>
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
                        <th>Lowongan Pekerjaan</th>
                        <th>Posisi</th>
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
                              <td>{ms_lowongans.pos_nama}</td>
                              <td>{ms_lowongans.low_kualifikasi}</td>
                              <td>{ms_lowongans.low_gaji}</td>
                              <td>{ms_lowongans.low_tanggal_ditutup}</td>
                              <td>
                                <Link
                                  to={`/${ms_lowongans.id}/DaftarLamaran_BelumDiproses`}
                                  className="btn btn-warning btn-sm mr-2"
                                >
                                  Belum Diproses
                                </Link>
                                <Link
                                  to={`/${ms_lowongans.id}/DaftarLamaran_Terpilih`}
                                  className="btn btn-warning btn-sm mr-2"
                                >
                                  Terpilih
                                </Link>
                                <Link
                                  to={`/${ms_lowongans.id}/DaftarLamaran_Wawancara1`}
                                  className="btn btn-warning btn-sm mr-2"
                                >
                                  Wawancara 1
                                </Link>
                                <Link
                                  to={`/${ms_lowongans.id}/DaftarLamaran_Wawancara2`}
                                  className="btn btn-warning btn-sm mr-2"
                                >
                                  Wawancara 2
                                </Link>
                                <Link
                                  to={`/${ms_lowongans.id}/DaftarLamaran_WawancaraHR`}
                                  className="btn btn-warning btn-sm mr-2"
                                >
                                  Wawancara HR
                                </Link>
                                <Link
                                  to={`/${ms_lowongans.id}/DaftarLamaran_Psikotes`}
                                  className="btn btn-warning btn-sm mr-2"
                                >
                                  Psikotes
                                </Link>
                                <Link
                                  to={`/${ms_lowongans.id}/DaftarLamaran_MCU`}
                                  className="btn btn-warning btn-sm mr-2"
                                >
                                  MCU
                                </Link>
                                <Link
                                  to={`/${ms_lowongans.id}/DaftarLamaran_TidakSesuai`}
                                  className="btn btn-warning btn-sm mr-2"
                                >
                                  Tidak Sesuai
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

export default DashboardHrd_LowonganList;
