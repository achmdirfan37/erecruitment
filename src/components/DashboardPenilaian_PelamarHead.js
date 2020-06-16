import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

class DashboardPenilaian_PelamarHead extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lk_nama: '',
      pel_tanggal_lahir: '',
      pel_umur: '',
      lk_nama_low: '',
      lk_lamaran: '',
      lk_perusahaan: '',
      lk_lowongan: '',
      low_judul: '',
      lk_status_rekrutmen: '',
      lk_posisi: '',
      lk_pelamar: '',
      pn_tujuan: '',
      pn_tanggal: '',
      pn_interpersonal_skill: '',
      pn_analysis_judgment: '',
      pn_planning_driving_action: '',
      pn_leading_motivating: '',
      pn_team_work: '',
      pn_drive_courage: '',
      pn_kekuatan: '',
      pn_kelemahan: '',
      pn_kesimpulan: ''
    }

    this.handleStatusRekrutmenChange = this.handleStatusRekrutmenChange.bind(this);
    this.handleTanggalChange = this.handleTanggalChange.bind(this);
    this.handleTujuanChange = this.handleTujuanChange.bind(this);
    this.handleNamaChange = this.handleNamaChange.bind(this);
    this.handleNamaLowChange = this.handleNamaLowChange.bind(this);
    this.handleStatusKonfirmasiChange = this.handleStatusKonfirmasiChange.bind(this);
    this.handlePosisiChange = this.handlePosisiChange.bind(this);
    this.handleInterpersonalSkillChange = this.handleInterpersonalSkillChange.bind(this);
    this.handleAnalysisJudgmentChange = this.handleAnalysisJudgmentChange.bind(this);
    this.handlePlanningDrivingActionChange = this.handlePlanningDrivingActionChange.bind(this);
    this.handleLeadingMotivatingChange = this.handleLeadingMotivatingChange.bind(this);
    this.handleTeamWorkChange = this.handleTeamWorkChange.bind(this);
    this.handleDriveCourageChange = this.handleDriveCourageChange.bind(this);
    this.handleKekuatanChange = this.handleKekuatanChange.bind(this);
    this.handleKelemahanChange = this.handleKelemahanChange.bind(this);
    this.handleKesimpulanChange = this.handleKesimpulanChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://127.0.0.1:8000/api/tr_lamaran_kerja/statusAccept/${id}`)
      .then(response => {
        this.setState({
          lk_lamaran: response.data.id,
          lk_lowongan: response.data.lk_lowongan,
          lk_perusahaan: response.data.lk_perusahaan,
          lk_status_rekrutmen: response.data.lk_status_rekrutmen,
          lk_pelamar: response.data.lk_pelamar
        })
      }).catch(err => console.log(err));


    const pel = this.props.match.params.lk_pelamar;
    axios.get(`http://127.0.0.1:8000/api/ms_pelamar/viewDetail/${pel}`)
      .then(response => {
        this.setState({
          lk_nama: response.data.pel_nama_lengkap,
          pel_tanggal_lahir: response.data.pel_tanggal_lahir,
          pel_umur: response.data.pel_umur,
          lk_posisi: response.data.pel_posisi
        })
      }).catch(err => console.log(err));
  }

  handleInterpersonalSkillChange(event) {
    this.setState({
      pn_interpersonal_skill: event.target.value
    })
  }

  handleAnalysisJudgmentChange(event) {
    this.setState({
      pn_analysis_judgment: event.target.value
    })
  }

  handlePlanningDrivingActionChange(event) {
    this.setState({
      pn_planning_driving_action: event.target.value
    })
  }

  handleLeadingMotivatingChange(event) {
    this.setState({
      pn_leading_motivating: event.target.value
    })
  }

  handleTeamWorkChange(event) {
    this.setState({
      pn_team_work: event.target.value
    })
  }

  handleDriveCourageChange(event) {
    this.setState({
      pn_drive_courage: event.target.value
    })
  }

  handleKekuatanChange(event) {
    this.setState({
      pn_kekuatan: event.target.value
    })
  }

  handleKelemahanChange(event) {
    this.setState({
      pn_kelemahan: event.target.value
    })
  }

  handleKesimpulanChange(event) {
    this.setState({
      pn_kesimpulan: event.target.value
    })
  }

  handleStatusRekrutmenChange(event) {
    this.setState({
      lk_status_rekrutmen: event.target.value
    })
  }

  handleStatusKonfirmasiChange(event) {
    this.setState({
      lk_status_konfirmasi: event.target.value
    })
  }

  handleNamaChange(event) {
    this.setState({
      lk_nama: event.target.value
    })
  }

  handleNamaLowChange(event) {
    this.setState({
      lk_nama_low: event.target.value
    })
  }

  handlePosisiChange(event) {
    this.setState({
      lk_posisi: event.target.value
    })
  }

  handleTanggalChange(event) {
    this.setState({
      pn_tanggal: event.target.value
    })
  }

  handleTujuanChange(event) {
    this.setState({
      pn_tujuan: event.target.value
    })
  }

  handleFormSubmit(event) {
    alert("Data Penilaian Berhasil Dimasukkan!");
    event.preventDefault();
    const id = this.props.match.params.id;
    axios.post('http://127.0.0.1:8000/api/tr_penilaian_lamaran/createHead', {
      pn_pelamar: this.state.lk_pelamar,
      pn_lamaran: this.state.lk_lamaran,
      pn_lowongan: this.state.lk_lowongan,
      pn_perusahaan: this.state.lk_perusahaan,
      pn_tahapan_wawancara: this.state.lk_status_rekrutmen,
      pn_tujuan: this.state.pn_tujuan,
      pn_tanggal: this.state.pn_tanggal,
      pn_interpersonal_skill: this.state.pn_interpersonal_skill,
      pn_analysis_judgment: this.state.pn_analysis_judgment,
      pn_planning_driving_action: this.state.pn_planning_driving_action,
      pn_leading_motivating: this.state.pn_leading_motivating,
      pn_team_work: this.state.pn_team_work,
      pn_drive_courage: this.state.pn_drive_courage,
      pn_kekuatan: this.state.pn_kekuatan,
      pn_kelemahan: this.state.pn_kelemahan,
      pn_kesimpulan: this.state.pn_kesimpulan
    }).then(response => {
      this.setState({
        lk_nama: '',
        lk_nama_low: '',
        lk_status_konfirmasi: '',
        lk_status_rekrutmen: '',
        lk_posisi: '',
        pn_tujuan: '',
        pn_tanggal: '',
        pn_interpersonal_skill: '',
        pn_analysis_judgment: '',
        pn_planning_driving_action: '',
        pn_leading_motivating: '',
        pn_team_work: '',
        pn_drive_courage: '',
        pn_kekuatan: '',
        pn_kelemahan: '',
        pn_kesimpulan: ''
      })
      this.props.history.push('/DashboardPenilaian_LamaranKerja');
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Formulir Penilaian Section Head Gol 4
                </h1>
          <ol className="breadcrumb">
            <li className="active">Formulir Penilaian Section Head Gol 4</li>
          </ol>
        </section>

        <section className="content" >
          <div className="row">
            {/* left column */}
            <div className="col-md-12">
              {/* general form elements */}
              <div className="box box-primary">
                <form role="form" onSubmit={this.handleFormSubmit}>
                  <div className="box-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Nama Pelamar</label>
                      <input type="text"
                        required
                        readOnly
                        onChange={this.handleNamaChange}
                        value={this.state.lk_nama}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Tanggal Lahir</label>
                      <input type="text"
                        required
                        readOnly
                        value={this.state.pel_tanggal_lahir}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Umur</label>
                      <input type="text"
                        required
                        readOnly
                        value={this.state.pel_umur}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Posisi yang dilamar</label>
                      <input type="text"
                        required
                        readOnly
                        onChange={this.handlePosisiChange}
                        value={this.state.lk_posisi}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Tanggal</label>
                      <input type="date"
                        required
                        name="pn_tanggal"
                        onChange={this.handleTanggalChange}
                        value={this.state.pn_tanggal}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Tujuan Tes</label>
                      <input type="text"
                        required
                        name="pn_tujuan"
                        onChange={this.handleTujuanChange}
                        value={this.state.pn_tujuan}
                        className="form-control"
                        placeholder="Masukan Tujuan Tes" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"><b>INTERPERSONAL SKILL</b></label>
                      <br />
                      <p> Keterampilan komunikasi yang baik, sehingga dapat mempengaruhi orang lain, mampu membangun hubungan baik dengan berbagai orang dari berbagai tingkatan.</p>
                      <select className="form-control select2" value={this.state.pn_interpersonal_skill}
                        onChange={(event) => this.setState({ pn_interpersonal_skill: event.target.value })}>
                        <option value="1">Need Improvement 1</option>
                        <option value="2">Need Improvement 2</option>
                        <option value="3">Meet Requirement 3</option>
                        <option value="4">Highly Effective 4</option>
                        <option value="5">Highly Effective 5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"><b>ANALYSIS AND JUDGMENT</b></label>
                      <br />
                      <p> Kemampuan mengumpulkan dan menganalisa data dan informasi penting guna memahami penyebab dari suatu masalah, serta mendukungnya dalam membuat keputusan dengan cepat dan tepat.</p>
                      <select className="form-control select2" value={this.state.pn_analysis_judgment}
                        onChange={(event) => this.setState({ pn_analysis_judgment: event.target.value })}>
                        <option value="1">Need Improvement 1</option>
                        <option value="2">Need Improvement 2</option>
                        <option value="3">Meet Requirement 3</option>
                        <option value="4">Highly Effective 4</option>
                        <option value="5">Highly Effective 5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"><b>PLANNING AND DRIVING ACTION</b></label>
                      <br />
                      <p>Kemampuan menetapkan obyektif dan rencana yang jelas dan sistematis, serta memanfaatkan sumber daya guna mencapai hasil yang diinginkan.</p>
                      <select className="form-control select2" value={this.state.pn_planning_driving_action}
                        onChange={(event) => this.setState({ pn_planning_driving_action: event.target.value })}>
                        <option value="1">Need Improvement 1</option>
                        <option value="2">Need Improvement 2</option>
                        <option value="3">Meet Requirement 3</option>
                        <option value="4">Highly Effective 4</option>
                        <option value="5">Highly Effective 5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"><b>LEADING AND MOTIVATING</b></label>
                      <br />
                      <p>Kemampuan peran sebagai pemimpin dengan nyaman, menghargai kebutuhan dan perasaan orang lain (termasuk bawahan) dan menggunakan gaya memimpin dan memotivasi yang sesuai dengan kebutuhan bawahan.</p>
                      <select className="form-control select2" value={this.state.pn_leading_motivating}
                        onChange={(event) => this.setState({ pn_leading_motivating: event.target.value })}>
                        <option value="1">Need Improvement 1</option>
                        <option value="2">Need Improvement 2</option>
                        <option value="3">Meet Requirement 3</option>
                        <option value="4">Highly Effective 4</option>
                        <option value="5">Highly Effective 5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"><b>TEAM WORK</b></label>
                      <br />
                      <p>Kemampuani untuk bekerja secara bersama-sama dengan sekelompok orang untuk mencapai tujuan tertentu.</p>
                      <select className="form-control select2" value={this.state.pn_team_work}
                        onChange={(event) => this.setState({ pn_team_work: event.target.value })}>
                        <option value="1">Need Improvement 1</option>
                        <option value="2">Need Improvement 2</option>
                        <option value="3">Meet Requirement 3</option>
                        <option value="4">Highly Effective 4</option>
                        <option value="5">Highly Effective 5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"><b>DRIVE AND COURAGE</b></label>
                      <br />
                      <p>Kemauan untuk  belajar dan fokus pada unjuk kerja, tidak takut berhadapan langsung dengan hal-hal yang belum jelas, bertentangan dan memiliki resiko langsung.</p>
                      <select className="form-control select2" value={this.state.pn_drive_courage}
                        onChange={(event) => this.setState({ pn_drive_courage: event.target.value })}>
                        <option value="1">Need Improvement 1</option>
                        <option value="2">Need Improvement 2</option>
                        <option value="3">Meet Requirement 3</option>
                        <option value="4">Highly Effective 4</option>
                        <option value="5">Highly Effective 5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Kekuatan</label>
                      <textarea type="text"
                        required
                        onChange={this.handleKekuatanChange}
                        value={this.state.pn_kekuatan}
                        className="form-control"
                        placeholder="Enter Kekuatan"
                        cols={5}
                        rows={5} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Kelemahan</label>
                      <textarea type="text"
                        required
                        onChange={this.handleKelemahanChange}
                        value={this.state.pn_kelemahan}
                        className="form-control"
                        placeholder="Enter Kelemahan"
                        cols={5}
                        rows={5}  />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Kesimpulan</label>
                      <select className="form-control select2" value={this.state.pn_kesimpulan}
                        onChange={(event) => this.setState({ pn_kesimpulan: event.target.value })}>
                        <option value="Direkomendasikan">Direkomendasikan</option>
                        <option value="Dipertimbangkan">Dipertimbangkan</option>
                        <option value="Tidak Direkomendasikan">Tidak Direkomendasikan</option>
                      </select>
                    </div>
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Kirim Data Penilaian</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div >
    );
  }
}

export default DashboardPenilaian_PelamarHead;