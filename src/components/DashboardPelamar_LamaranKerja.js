import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import Pagination from 'react-js-pagination';

class DashboardPelamar_LamaranKerja extends React.Component {
  constructor() {
    super()
    // data provinsi disimpan di state.provinces
    this.state = {
      tr_lamaran_kerja: [],
      tr_lamaran_kerjaAcceptDecline: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3
    }
    
    this.handlePageAcceptDeclineChange = this.handlePageAcceptDeclineChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    // ajax call
    //const id = this.props.match.params.id;
    const id = 17;
    axios.get(`http://127.0.0.1:8000/api/tr_lamaran_kerja/viewDetailTransaksiPelamar/${id}`)
      .then(response => {
        this.setState({
          tr_lamaran_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      }).catch(err => console.log(err));

    axios.get(`http://127.0.0.1:8000/api/tr_lamaran_kerja/viewDetailAcceptDeclinePelamar/${id}`)
      .then(response => {
        this.setState({
          tr_lamaran_kerjaAcceptDecline: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      }).catch(err => console.log(err));
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    const id = 17;
    axios.get(`http://127.0.0.1:8000/api/tr_lamaran_kerja/viewDetailTransaksiPelamar/${id}?page=` + pageNumber)
      .then(response => {
        this.setState({
          tr_lamaran_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  handlePageAcceptDeclineChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    const id = 17;
    axios.get(`http://127.0.0.1:8000/api/tr_lamaran_kerja/viewDetailAcceptDeclinePelamar/${id}?page=` + pageNumber)
      .then(response => {
        this.setState({
          tr_lamaran_kerjaAcceptDecline: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/* /.box-header */}
                <div class="box-header with-border">
                  <i class="fa fa-text-width"></i>
                  <h3 class="box-title">Daftar Lamaran yang Diajukan</h3>
                </div>

                <div className="box-body">
                  <table id="example1" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Perusahaan</th>
                        <th>Lowongan</th>
                        <th>Posisi</th>
                        <th>Status Tahapan Rekrutmen</th>
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
                              <td>{tr_lamaran_kerjas.per_nama}</td>
                              <td>{tr_lamaran_kerjas.low_judul}</td>
                              <td>{tr_lamaran_kerjas.pos_nama}</td>
                              <td>{tr_lamaran_kerjas.lk_status_rekrutmen}</td>
                              <td>
                                <Link to={`/${tr_lamaran_kerjas.id}/DashboardPelamar_LamaranKerjaTracking`} className="btn btn-warning btn-sm mr-2">View Tracking Data</Link>
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

          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div class="box-header with-border">
                  <i class="fa fa-text-width"></i>
                  <h3 class="box-title">Konfirmasi Persetujuan Undangan</h3>
                </div>
                <div className="box-body">
                  <table id="example1" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Perusahaan</th>
                        <th>Lowongan</th>
                        <th>Posisi</th>
                        <th>Status Tahapan Rekrutmen</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.tr_lamaran_kerjaAcceptDecline !== undefined
                          ? this.state.tr_lamaran_kerjaAcceptDecline.map(tr_lamaran_kerjas => (
                            <tr key={tr_lamaran_kerjas.id}>
                              <td>{tr_lamaran_kerjas.id}</td>
                              <td>{tr_lamaran_kerjas.pel_nama_lengkap}</td>
                              <td>{tr_lamaran_kerjas.per_nama}</td>
                              <td>{tr_lamaran_kerjas.low_judul}</td>
                              <td>{tr_lamaran_kerjas.pos_nama}</td>
                              <td>{tr_lamaran_kerjas.lk_status_rekrutmen}</td>
                              <td>
                                <Link to={`/${tr_lamaran_kerjas.id}/DashboardPelamar_Accept`} className="btn btn-warning btn-sm mr-2">Accept</Link>
                                <Link to={`/${tr_lamaran_kerjas.id}/DashboardPelamar_Decline`} className="btn btn-warning btn-sm mr-2">Decline</Link>
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
                      onChange={this.handlePageAcceptDeclineChange}
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

export default DashboardPelamar_LamaranKerja;