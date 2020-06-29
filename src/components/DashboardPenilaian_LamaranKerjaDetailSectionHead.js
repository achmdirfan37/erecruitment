import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import Pagination from 'react-js-pagination';

class DashboardPenilaian_LamaranKerjaDetailSectionHead extends React.Component {
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
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Job Application Data
              </h1>
          <ol className="breadcrumb">
            <li className="active">Job Application Data</li>
          </ol>
        </section>

        {/* Main content */}
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
                        <dt>Interpersonal Skill</dt>
                        <dd>{tr_penilaian_lamarans.pn_interpersonal_skill}</dd>
                        <dt>Analysis Judgment</dt>
                        <dd>{tr_penilaian_lamarans.pn_analysis_judgment}</dd>
                        <dt>Planning and Driving Action</dt>
                        <dd>{tr_penilaian_lamarans.pn_planning_driving_action}</dd>
                        <dt>Leading and Motivating</dt>
                        <dd>{tr_penilaian_lamarans.pn_leading_motivating}</dd>
                        <dt>Team Work</dt>
                        <dd>{tr_penilaian_lamarans.pn_team_work}</dd>
                        <dt>Drive Courage</dt>
                        <dd>{tr_penilaian_lamarans.pn_drive_courage}</dd>
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

export default DashboardPenilaian_LamaranKerjaDetailSectionHead;