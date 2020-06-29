import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import Pagination from 'react-js-pagination';

class DashboardPenilaian_LamaranKerjaDetailStaff extends React.Component {
  constructor() {
    super()
    // data provinsi disimpan di state.provinces
    this.state = {
      tr_penilaian_lamaran: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3
    }
  }

  componentDidMount() {
    // ajax call

    const id = this.props.match.params.id;
    axios.get(`http://127.0.0.1:8000/api/tr_penilaian_lamaran/detail/${id}`)
      .then(response => {
        this.setState({
          tr_penilaian_lamaran: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="content-wrapper">

        <section className="content">

          <div class="row">
            {this.state.tr_penilaian_lamaran !== undefined
              ? this.state.tr_penilaian_lamaran.map((tr_penilaian_lamarans) => (
                <div class="col-md-6">
                  <div class="box box-solid">
                    <div class="box-header with-border">
                      <i class="fa fa-text-width"></i>
                      <h3 class="box-title">Data Pelamar</h3>
                    </div>
                    <div class="box-body">
                      <dl class="dl-horizontal">
                        <dt>Tahapan Wawancara</dt>
                        <dd>{tr_penilaian_lamarans.pn_tahapan_wawancara}</dd>
                        <dt>Tanggal</dt>
                        <dd>{tr_penilaian_lamarans.pn_tanggal}</dd>
                        <dt>Tujuan</dt>
                        <dd>{tr_penilaian_lamarans.pn_tujuan}</dd>
                        <dt>Penampilan dan Sikap</dt>
                        <dd>{tr_penilaian_lamarans.pn_penampilan_sikap}</dd>
                        <dt>Pengetahuan dan Penguasaan Bidang Pekerjaan</dt>
                        <dd>{tr_penilaian_lamarans.pn_pengetahuan_penguasaan}</dd>
                        <dt>Percaya Diri</dt>
                        <dd>{tr_penilaian_lamarans.pn_percaya_diri}</dd>
                        <dt>Motivasi dan Ambisi</dt>
                        <dd>{tr_penilaian_lamarans.pn_motivasi_ambisi}</dd>
                        <dt>Inisiatif dan Kreatifitas</dt>
                        <dd>{tr_penilaian_lamarans.pn_inisiatif_kreatifitas}</dd>
                        <dt>Kerjasama</dt>
                        <dd>{tr_penilaian_lamarans.pn_kerjasama}</dd>
                        <dt>Komunikasi</dt>
                        <dd>{tr_penilaian_lamarans.pn_komunikasi}</dd>
                        <dt>Kekuatan</dt>
                        <dd>{tr_penilaian_lamarans.pn_kekuatan}</dd>
                        <dt>Kelemahan</dt>
                        <dd>{tr_penilaian_lamarans.pn_kelemahan}</dd>
                        <dt>Kesimpulan</dt>
                        <dd>{tr_penilaian_lamarans.pn_kesimpulan}</dd>
                        <dt>Total Nilai</dt>
                        <dd>{tr_penilaian_lamarans.pn_total_nilai}</dd>
                      </dl>
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

export default DashboardPenilaian_LamaranKerjaDetailStaff;