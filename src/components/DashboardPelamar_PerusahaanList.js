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
        {/* Main content */}
        <section className="content">
          {/* /.row */}
          <div class="row">
            {this.state.ms_perusahaan !== undefined
              ? this.state.ms_perusahaan.map((ms_perusahaans) => (

                <div class="col-md-12">
                  <div class="box box-solid">
                    <div class="box-header with-border">
                      <i class="fa fa-text-width"></i>
                      <h3 class="box-title">Data Pelamar</h3>
                    </div>
                    <div class="box-body">
                      <dl class="dl-horizontal">
                        <dt>Perusahaan</dt>
                        <dd>{ms_perusahaans.per_nama}</dd>
                        <dt>Deskripsi</dt>
                        <dd>{ms_perusahaans.per_deskripsi}</dd>
                        <dt>Email</dt>
                        <dd>{ms_perusahaans.per_email}</dd>
                        <dt>No Telepon</dt>
                        <dd>{ms_perusahaans.per_no_telepon}</dd>
                        <dt>Situs Web</dt>
                        <dd>{ms_perusahaans.per_alamat_website}</dd>
                        <dt>Alamat</dt>
                        <dd>{ms_perusahaans.per_alamat}</dd>
                      </dl>
                    </div>
                    <div class="box-footer" align="right">
                      <div class="marginRight">
                        <div class="btn-group" align="right">
                          <Link
                            to={`/${ms_perusahaans.id}/DashboardPelamar_LowonganList`}
                            className="btn btn-info btn-flat"
                          >
                            Lowongan Pekerjaan
                                </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
              ))
              : null}
          </div>
        </section>

      </div>
    );
  }
}

export default DashboardPelamar_PerusahaanList;
