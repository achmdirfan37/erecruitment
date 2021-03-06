import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

class DaftarLamaran_TidakSesuai extends React.Component {
  constructor() {
    super()

    // data provinsi disimpan di state.provinces
    this.state = {
      tr_lamaran_kerja: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    //id lowongan
    const id = this.props.match.params.id;
    axios.get(`http://127.0.0.1:8000/api/tr_lamaran_kerja/viewStatusTidakSesuai/${id}`)
      .then(response => {
        this.setState({
          tr_lamaran_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  handlePageChange(pageNumber) {
    const id = this.props.match.params.id;
    console.log(`active page is ${pageNumber}`);
    axios.get(`http://127.0.0.1:8000/api/tr_lamaran_kerja/viewStatusTidakSesuai/${id}?page=` + pageNumber)
      .then(response => {
        this.setState({
          tr_lamaran_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  cari = () => {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8000/api/tr_lamaran_kerja/searchViewStatusTidakSesuai/${id}?cari=` + this.state.cari)
      .then(response => {
        this.setState({
          tr_lamaran_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  onChangeText = (event) => {
    // this.cari(event.target.value); / For live search 
    this.setState({
      cari: event.target.value
    })
  }

  pindahBelumDiproses(id) {
    axios.delete('http://127.0.0.1:8000/api/tr_lamaran_kerja/ubahStatusBelumDiproses/' + id)
      .then(response => {
        var tr_lamaran_kerjass = this.state.tr_lamaran_kerja;
        for (var i = 0; i < tr_lamaran_kerjass.length; i++) {
          if (tr_lamaran_kerjass[i].id == id) {
            tr_lamaran_kerjass.splice(i, 1);
            this.setState({ tr_lamaran_kerja: tr_lamaran_kerjass });
          }
        }
      });
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Daftar Lamaran Pekerjaan
          </h1>
          <ol className="breadcrumb">
            <li className="active">Daftar Lamaran Pekerjaan</li>
          </ol>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/* /.box-header */}
                <div className="box-body">
                  <input type="text"
                    value={this.state.cari}
                    onChange={this.onChangeText}
                    //onChange={this.searchChanged}
                    onKeyPress={event => {
                      if (event.key === 'Enter') {
                        this.cari()
                      }
                    }}
                    style={{ marginRight: 8 }} />

                  <button onClick={this.cari}>Cari Lamaran Pekerjaan</button>
                  <table id="example1" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Pendidikan Terakhir</th>
                        <th>Gaji</th>
                        <th>Posisi Terakhir</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.tr_lamaran_kerja !== undefined
                          ? this.state.tr_lamaran_kerja.map(tr_lamaran_kerjas => (
                            <tr key={tr_lamaran_kerjas.id}>
                              <td>{tr_lamaran_kerjas.id}</td>
                              <td>{tr_lamaran_kerjas.pel_nama_lengkap}</td>
                              <td>{tr_lamaran_kerjas.pel_pendidikan_terakhir}</td>
                              <td>{tr_lamaran_kerjas.pel_gaji_diharapkan}</td>
                              <td>{tr_lamaran_kerjas.pel_posisi}</td>
                              <td>
                                <Link
                                  className="btn btn-warning btn-sm mr-2"
                                  onClick={this.pindahBelumDiproses.bind(
                                    this,
                                    tr_lamaran_kerjas.id
                                  )}
                                >
                                  Belum Diproses
                                </Link>
                              </td>
                            </tr>
                          ))
                          :
                          null
                      }
                    </tbody>
                  </table>
                  <div class="center">
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.totalItemsCount}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.handlePageChange}
                      itemClass='page-item'
                      linkClass='page-link'
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

export default DaftarLamaran_TidakSesuai;