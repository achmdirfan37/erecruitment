import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

class Undang_Psikotes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lk_nama: '',
      lk_nama_low: '',
      lk_email: '',
      lk_status_konfirmasi: '',
      lk_lowongan: '',
      low_judul: '',
      lk_status_rekrutmen: '',
      lk_posisi: '',
      lk_pelamar: '',
      lk_hari: '',
      lk_tanggal: '',
      lk_waktu: '',
      lk_tempat: ''
    }

    this.handleStatusRekrutmenChange = this.handleStatusRekrutmenChange.bind(this);
    this.handleHariChange = this.handleHariChange.bind(this);
    this.handleTanggalChange = this.handleTanggalChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleWaktuChange = this.handleWaktuChange.bind(this);
    this.handleTempatChange = this.handleTempatChange.bind(this);
    this.handleNamaChange = this.handleNamaChange.bind(this);
    this.handleNamaLowChange = this.handleNamaLowChange.bind(this);
    this.handleStatusKonfirmasiChange = this.handleStatusKonfirmasiChange.bind(this);
    this.handlePosisiChange = this.handlePosisiChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://127.0.0.1:8000/api/tr_lamaran_kerja/statusAccept/${id}`)
      .then(response => {
        this.setState({
          lk_lowongan: response.data.lk_lowongan,
          lk_status_rekrutmen: response.data.lk_status_rekrutmen,
          lk_pelamar: response.data.lk_pelamar
        })
      }).catch(err => console.log(err));


    const pel = this.props.match.params.lk_pelamar;
    axios.get(`http://127.0.0.1:8000/api/ms_pelamar/viewDetail/${pel}`)
      .then(response => {
        this.setState({
          lk_nama: response.data.pel_nama_lengkap,
          lk_email: response.data.pel_email,
          lk_posisi: response.data.pel_posisi
        })
      }).catch(err => console.log(err));

    const low = 1;
    axios.get(`http://127.0.0.1:8000/api/ms_lowongan/viewDetail/${low}`)
      .then(response => {
        this.setState({
          lk_nama_low: response.data.low_judul
        })
      }).catch(err => console.log(err));
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

  handleEmailChange(event) {
    this.setState({
      lk_email: event.target.value
    })
  }

  handleHariChange(event) {
    this.setState({
      lk_hari: event.target.value
    })
  }

  handleTanggalChange(event) {
    this.setState({
      lk_tanggal: event.target.value
    })
  }

  handleWaktuChange(event) {
    this.setState({
      lk_waktu: event.target.value
    })
  }

  handleTempatChange(event) {
    this.setState({
      lk_tempat: event.target.value
    })
  }

  handleFormSubmit(event) {
    alert("Undangan Psikotes Berhasil!");
    event.preventDefault();
    const id = this.props.match.params.id;
    axios.put(`http://127.0.0.1:8000/api/tr_lamaran_kerja/undangTerimaPsikotes/${id}`, {
      lk_status_konfirmasi: this.state.lk_status_konfirmasi,
      lk_status_rekrutmen: this.state.lk_status_rekrutmen,
      lk_nama: this.state.lk_nama,
      lk_email: this.state.lk_email,
      lk_posisi: this.state.lk_posisi,
      lk_hari: this.state.lk_hari,
      lk_tanggal: this.state.lk_tanggal,
      lk_waktu: this.state.lk_waktu,
      lk_tempat: this.state.lk_tempat
    }).then(response => {
      this.setState({
        lk_nama: '',
        lk_nama_low: '',
        lk_email: '',
        lk_status_konfirmasi: '',
        lk_status_rekrutmen: '',
        lk_posisi: '',
        lk_hari: '',
        lk_tanggal: '',
        lk_waktu: '',
        lk_tempat: ''
      })
      this.props.history.push('/PelamarList_InvitationPsikotes');
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Undang Psikotes
                </h1>
          <ol className="breadcrumb">
            <li className="active">Undang Psikotes</li>
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
                      <label htmlFor="exampleInputEmail1">Lowongan Pekerjaan</label>
                      <textarea type="text"
                        required
                        readOnly
                        onChange={this.handleNamaLowChange}
                        value={this.state.lk_nama_low}
                        className="form-control"
                        rows={5}
                        cols={5} />
                    </div>
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
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input type="text"
                        required
                        readOnly
                        onChange={this.handleEmailChange}
                        value={this.state.lk_email}
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
                      <label htmlFor="exampleInputEmail1">Hari</label>
                      <select className="form-control select2" value={this.state.lk_hari}
                        onChange={(event) => this.setState({ lk_hari: event.target.value })}>
                        <option value="Senin">Senin</option>
                        <option value="Selasa">Selasa</option>
                        <option value="Rabu">Rabu</option>
                        <option value="Kamis">Kamis</option>
                        <option value="Jumat">Jumat</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Tanggal</label>
                      <input type="text"
                        required
                        name="lk_tanggal"
                        onChange={this.handleTanggalChange}
                        value={this.state.lk_tanggal}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Waktu</label>
                      <select className="form-control select2" value={this.state.lk_waktu}
                        onChange={(event) => this.setState({ lk_waktu: event.target.value })}>
                        <option value="07:30 AM">07:30 AM</option>
                        <option value="08:00 AM">08:00 AM</option>
                        <option value="08:30 AM">08:30 AM</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="09:30 AM">09:30 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="10:30 AM">10:30 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="01:30 PM">01:30 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="02:30 PM">02:30 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="03:30 PM">03:30 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="04:30 PM">04:30 PM</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Tempat</label>
                      <input type="text"
                        required
                        name="lk_tempat"
                        onChange={this.handleTempatChange}
                        value={this.state.lk_tempat}
                        className="form-control"
                        placeholder="Enter Tempat" />
                    </div>
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Undang Psikotes Pelamar</button>
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


export default Undang_Psikotes;