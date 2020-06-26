import React, { Component } from "react";
import axios from "axios";
//import PelamarList from './pelamar-listing.component';

export default class LowonganEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ms_perusahaan: [],
      ms_bidang_pekerjaan: [],
      ms_posisi: [],
      low_judul: "",
      low_deskripsi: "",
      low_gaji: "",
      low_tanggal_ditutup: "",
      low_kualifikasi: "",
      low_posisi: "",
      low_perusahaan: "",
      low_bidang_kerja: "",
      low_spesialisasi: "",
    };
    this.handleJudulUpdateChange = this.handleJudulUpdateChange.bind(this);
    this.handleDeskripsiUpdateChange = this.handleDeskripsiUpdateChange.bind(
      this
    );
    this.handleGajiUpdateChange = this.handleGajiUpdateChange.bind(this);
    this.handleTanggalDitutupUpdateChange = this.handleTanggalDitutupUpdateChange.bind(
      this
    );
    this.handleKualifikasiUpdateChange = this.handleKualifikasiUpdateChange.bind(
      this
    );
    this.handlePosisiUpdateChange = this.handlePosisiUpdateChange.bind(this);
    this.handlePerusahaanUpdateChange = this.handlePerusahaanUpdateChange.bind(
      this
    );
    this.handleBidangKerjaUpdateChange = this.handleBidangKerjaUpdateChange.bind(
      this
    );
    this.handleSpesialisasiUpdateChange = this.handleSpesialisasiUpdateChange.bind(
      this
    );
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/ms_lowongan/edit/${id}`)
      .then((response) => {
        this.setState({
          low_judul: response.data.low_judul,
          low_deskripsi: response.data.low_deskripsi,
          low_gaji: response.data.low_gaji,
          low_tanggal_ditutup: response.data.low_tanggal_ditutup,
          low_kualifikasi: response.data.low_kualifikasi,
          low_posisi: response.data.low_posisi,
          low_perusahaan: response.data.low_perusahaan,
          low_bidang_kerja: response.data.low_bidang_kerja,
          low_spesialisasi: response.data.low_spesialisasi,
        });
      })
      .catch((err) => console.log(err));

    axios
      .get("http://127.0.0.1:8000/api/ms_perusahaan/ddl")
      .then((response) => {
        this.setState({
          ms_perusahaan: response.data.data,
        });
      });

    axios
      .get("http://127.0.0.1:8000/api/ms_bidang_pekerjaan/ddl")
      .then((response) => {
        this.setState({
          ms_bidang_pekerjaan: response.data.data,
        });
      });
    axios.get("http://127.0.0.1:8000/api/ms_posisi/ddl").then((response) => {
      this.setState({
        ms_posisi: response.data.data,
      });
    });
  }

  handleJudulUpdateChange(event) {
    this.setState({
      low_judul: event.target.value,
    });
  }

  handleDeskripsiUpdateChange(event) {
    this.setState({
      low_deskripsi: event.target.value,
    });
  }

  handleGajiUpdateChange(event) {
    this.setState({
      low_gaji: event.target.value,
    });
  }

  handleTanggalDitutupUpdateChange(event) {
    this.setState({
      low_tanggal_ditutup: event.target.value,
    });
  }

  handleKualifikasiUpdateChange(event) {
    this.setState({
      low_kualifikasi: event.target.value,
    });
  }

  handlePosisiUpdateChange(event) {
    this.setState({
      low_posisi: event.target.value,
    });
  }

  handlePerusahaanUpdateChange(event) {
    this.setState({
      low_perusahaan: event.target.value,
    });
  }

  handleBidangKerjaUpdateChange(event) {
    this.setState({
      low_bidang_kerja: event.target.value,
    });
  }

  handleSpesialisasiUpdateChange(event) {
    this.setState({
      low_spesialisasi: event.target.value,
    });
  }

  handleFormSubmit(event) {
    alert("Data Berhasil Tersimpan!");
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .put(`http://127.0.0.1:8000/api/ms_lowongan/update/${id}`, {
        low_judul: this.state.low_judul,
        low_deskripsi: this.state.low_deskripsi,
        low_gaji: this.state.low_gaji,
        low_tanggal_ditutup: this.state.rpd_tanggal_lulus,
        low_kualifikasi: this.state.low_kualifikasi,
        low_posisi: this.state.low_posisi,
        low_perusahaan: this.state.low_perusahaan,
        low_bidang_kerja: this.state.low_bidang_kerja,
        low_spesialisasi: this.state.low_spesialisasi,
      })
      .then((response) => {
        this.setState({
          low_judul: "",
          low_deskripsi: "",
          low_gaji: "",
          low_tanggal_ditutup: "",
          low_kualifikasi: "",
          low_posisi: "",
          low_perusahaan: "",
          low_bidang_kerja: "",
          low_spesialisasi: "",
        });
        this.props.history.push("/LowonganList");
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Data Lowongan Pekerjaan</h1>
          <ol className="breadcrumb">
            <li className="active">Data Lowongan Pekerjaan</li>
          </ol>
        </section>

        <section className="content">
          <div className="row">
            {/* left column */}
            <div className="col-md-12">
              {/* general form elements */}
              <div className="box box-primary">
                <form role="form" onSubmit={this.handleFormSubmit}>
                  <div className="box-body">
                    <div className="form-group">
                      <label>Perusahaan</label>
                      <select
                        className="form-control select2"
                        value={this.state.low_perusahaan}
                        onChange={(event) =>
                          this.setState({ low_perusahaan: event.target.value })
                        }
                      >
                        {this.state.ms_perusahaan.map((perusahaans) => (
                          <option key={perusahaans.id} value={perusahaans.id}>
                            {perusahaans.per_nama}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Lowongan Pekerjaan</label>
                      <input
                        type="text"
                        required
                        name="low_judul"
                        onChange={this.handleJudulUpdateChange}
                        value={this.state.low_judul}
                        className="form-control"
                        placeholder="Masukkan Lowongan Pekerjaan"
                      />
                    </div>
                    <div className="form-group">
                      <label>Deskripsi</label>
                      <textarea
                        type="text"
                        required
                        name="low_deskripsi"
                        onChange={this.handleDeskripsiUpdateChange}
                        value={this.state.low_deskripsi}
                        className="form-control"
                        placeholder="Masukkan Deskripsi Lowongan"
                      />
                    </div>
                    <div className="form-group">
                      <label>Gaji</label>
                      <select
                        className="form-control select2"
                        value={this.state.low_gaji}
                        onChange={(event) =>
                          this.setState({ low_gaji: event.target.value })
                        }
                      >
                        <option value="1.000.000-2.000.000">
                          1.000.000-2.000.000
                        </option>
                        <option value="2.000.000-3.000.000">
                          2.000.000-3.000.000
                        </option>
                        <option value="3.000.000-4.000.000">
                          3.000.000-4.000.000
                        </option>
                        <option value="4.000.000-5.000.000">
                          4.000.000-5.000.000
                        </option>
                        <option value="5.000.000-6.000.000">
                          5.000.000-6.000.000
                        </option>
                        <option value="6.000.000-7.000.000">
                          6.000.000-7.000.000
                        </option>
                        <option value="7.000.000-8.000.000">
                          7.000.000-8.000.000
                        </option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Tanggal Berakhir</label>
                      <input
                        type="date"
                        required
                        name="low_tanggal_ditutup"
                        onChange={this.handleTanggalDitutupUpdateChange}
                        value={this.state.low_tanggal_ditutup}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Pendidikan Terakhir</label>
                      <select
                        className="form-control select2"
                        value={this.state.low_kualifikasi}
                        onChange={(event) =>
                          this.setState({ low_kualifikasi: event.target.value })
                        }
                      >
                        <option value="SMA/K">SMA/K</option>
                        <option value="D1">D1</option>
                        <option value="D3">D3</option>
                        <option value="D4">D4</option>
                        <option value="S1">S1</option>
                        <option value="S2">S2</option>
                        <option value="S3">S3</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Posisi</label>
                      <select
                        className="form-control select2"
                        value={this.state.low_posisi}
                        onChange={(event) =>
                          this.setState({
                            low_posisi: event.target.value,
                          })
                        }
                      >
                        {this.state.ms_posisi.map((posisis) => (
                          <option key={posisis.id} value={posisis.id}>
                            {posisis.pos_nama}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Bidang Pekerjaan</label>
                      <select
                        className="form-control select2"
                        value={this.state.low_bidang_kerja}
                        onChange={(event) =>
                          this.setState({
                            low_bidang_kerja: event.target.value,
                          })
                        }
                      >
                        {this.state.ms_bidang_pekerjaan.map((bidangs) => (
                          <option key={bidangs.id} value={bidangs.id}>
                            {bidangs.bid_nama}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Spesialisasi</label>
                      <input
                        type="text"
                        required
                        name="low_spesialisasi"
                        onChange={this.handleSpesialisasiUpdateChange}
                        value={this.state.low_spesialisasi}
                        className="form-control"
                        placeholder="Masukkan Spesialisasi"
                      />
                    </div>
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                      Simpan Data
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
