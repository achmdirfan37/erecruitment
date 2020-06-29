import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import Pagination from 'react-js-pagination';

class DashboardPenilaian_LamaranKerjaStaff extends React.Component {
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
    // this.handlePageChangeInterview = this.handlePageChangeInterview.bind(this);
    // this.handlePageChangePsikotes = this.handlePageChangePsikotes.bind(this);
  }

  componentDidMount() {
    // ajax call
    const id = 1;
    axios.get(`http://127.0.0.1:8000/api/tr_lamaran_kerja/showLamaranPewawancaraStaff/${id}`)
      .then(response => {
        this.setState({
          tr_lamaran_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      }).catch(err => console.log(err));
  }

  handlePageChange(pageNumber) {
    const id = 1;
    console.log(`active page is ${pageNumber}`);
    axios.get(`http://127.0.0.1:8000/api/tr_lamaran_kerja/showLamaranPewawancaraStaff/${id}?page=` + pageNumber)
      .then(response => {
        this.setState({
          tr_lamaran_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content">

          <div class="row">
            {this.state.tr_lamaran_kerja !== undefined
              ? this.state.tr_lamaran_kerja.map((tr_lamaran_kerjas) => (

                <div class="col-md-6">
                  <div class="box box-solid">
                    <div class="box-header with-border">
                      <i class="fa fa-text-width"></i>

                      <h3 class="box-title">Data Pelamar</h3>
                    </div>
                    <div class="box-body">
                      <dl class="dl-horizontal">
                        <dt>Nama Pelamar</dt>
                        <dd>{tr_lamaran_kerjas.pel_nama_lengkap}</dd>
                        <dt>Judul Lowongan</dt>
                        <dd>{tr_lamaran_kerjas.low_judul}</dd>
                        <dt>Posisi</dt>
                        <dd>{tr_lamaran_kerjas.pos_nama}</dd>
                        <dt>Status Rekrutmen</dt>
                        <dd>{tr_lamaran_kerjas.lk_status_rekrutmen}</dd>
                      </dl>
                    </div>
                    <div class="box-footer" align="right">
                      <div class="marginRight">
                        <div class="btn-group" align="right">
                          <Link
                            to={`/${tr_lamaran_kerjas.id}/DashboardPenilaian_PelamarStaff`}
                            className="btn btn-warning btn-sm mr-2">Penilaian Gol 1,2,3 (Staff)</Link>
                          <Link to={`/${tr_lamaran_kerjas.lk_pelamar}/DetailPelamar_Lamaran`} className="btn btn-warning btn-sm mr-2">Lihat Detail</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              ))
              : null}
          </div>
        
        </section>
        {/* /.content */}
      </div>
    );
  }
}

export default DashboardPenilaian_LamaranKerjaStaff;