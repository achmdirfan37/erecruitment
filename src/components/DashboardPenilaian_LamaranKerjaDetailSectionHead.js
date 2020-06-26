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
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/* /.box-header */}
                <div className="box-body">
                  <br />
                  <table id="example1" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Tahapan Wawancara</th>
                        <th>Tanggal</th>
                        <th>Tujuan</th>
                        <th>Interpersonal Skill</th>
                        <th>Analysis Judgment</th>
                        <th>Planning and Driving Action</th>
                        <th>Leading and Motivating</th>
                        <th>Team Work</th>
                        <th>Drive Courage</th>
                        <th>Kekuatan</th>
                        <th>Kelemahan</th>
                        <th>Kesimpulan</th>
                        <th>Total Nilai</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.tr_penilaian_lamaran !== undefined
                          ? this.state.tr_penilaian_lamaran.map(tr_penilaian_lamarans => (
                            <tr key={tr_penilaian_lamarans.id}>
                              <td>{tr_penilaian_lamarans.id}</td>
                              <td>{tr_penilaian_lamarans.pn_tahapan_wawancara}</td>
                              <td>{tr_penilaian_lamarans.pn_tanggal}</td>
                              <td>{tr_penilaian_lamarans.pn_tujuan}</td>
                              <td>{tr_penilaian_lamarans.pn_interpersonal_skill}</td>
                              <td>{tr_penilaian_lamarans.pn_analysis_judgment}</td>
                              <td>{tr_penilaian_lamarans.pn_planning_driving_action}</td>
                              <td>{tr_penilaian_lamarans.pn_leading_motivating}</td>
                              <td>{tr_penilaian_lamarans.pn_team_work}</td>
                              <td>{tr_penilaian_lamarans.pn_drive_courage}</td>
                              <td>{tr_penilaian_lamarans.pn_kekuatan}</td>
                              <td>{tr_penilaian_lamarans.pn_kelemahan}</td>
                              <td>{tr_penilaian_lamarans.pn_kesimpulan}</td>
                              <td>{tr_penilaian_lamarans.pn_total_nilai}</td>
                            </tr>
                          ))
                          :
                          null
                      }
                    </tbody>
                  </table>
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

export default DashboardPenilaian_LamaranKerjaDetailSectionHead;