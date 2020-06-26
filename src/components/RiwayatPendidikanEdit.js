import React, { Component } from "react";
import axios from "axios";
import { Alert } from "react-alert";
//import PelamarList from './pelamar-listing.component';

export default class RiwayatPendidikanEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rpd_nama_lembaga_pendidikan: "",
      rpd_tahun_lulus: "",
      rpd_kualifikasi: "",
      rpd_lokasi: "",
      rpd_jurusan: "",
      rpd_keterangan_prestasi: "",
    };
    this.handleNamaLembagaPendidikanUpdateChange = this.handleNamaLembagaPendidikanUpdateChange.bind(
      this
    );
    this.handleTahunLulusUpdateChange = this.handleTahunLulusUpdateChange.bind(
      this
    );
    this.handleKualifikasiUpdateChange = this.handleKualifikasiUpdateChange.bind(
      this
    );
    this.handleLokasiUpdateChange = this.handleLokasiUpdateChange.bind(this);
    this.handleJurusanUpdateChange = this.handleJurusanUpdateChange.bind(this);
    this.handleKeteranganPrestasiUpdateChange = this.handleKeteranganPrestasiUpdateChange.bind(
      this
    );
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/ms_riwayat_pendidikan/edit/${id}`)
      .then((response) => {
        this.setState({
          rpd_nama_lembaga_pendidikan:
            response.data.rpd_nama_lembaga_pendidikan,
          rpd_tahun_lulus: response.data.rpd_tahun_lulus,
          rpd_kualifikasi: response.data.rpd_kualifikasi,
          rpd_lokasi: response.data.rpd_lokasi,
          rpd_jurusan: response.data.rpd_jurusan,
          rpd_keterangan_prestasi: response.data.rpd_keterangan_prestasi,
        });
      })
      .catch((err) => console.log(err));
  }

  handleNamaLembagaPendidikanUpdateChange(event) {
    this.setState({
      rpd_nama_lembaga_pendidikan: event.target.value,
    });
  }

  handleTahunLulusUpdateChange(event) {
    this.setState({
      rpd_tahun_lulus: event.target.value,
    });
  }

  handleKualifikasiUpdateChange(event) {
    this.setState({
      rpd_kualifikasi: event.target.value,
    });
  }

  handleLokasiUpdateChange(event) {
    this.setState({
      rpd_lokasi: event.target.value,
    });
  }

  handleJurusanUpdateChange(event) {
    this.setState({
      rpd_jurusan: event.target.value,
    });
  }

  handleKeteranganPrestasiUpdateChange(event) {
    this.setState({
      rpd_keterangan_prestasi: event.target.value,
    });
  }

  handleFormSubmit(event) {
    alert("Your Data is Updated!");
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .put(`http://127.0.0.1:8000/api/ms_riwayat_pendidikan/update/${id}`, {
        rpd_nama_lembaga_pendidikan: this.state.rpd_nama_lembaga_pendidikan,
        rpd_tahun_lulus: this.state.rpd_tahun_lulus,
        rpd_kualifikasi: this.state.rpd_kualifikasi,
        rpd_lokasi: this.state.rpd_lokasi,
        rpd_jurusan: this.state.rpd_jurusan,
        rpd_keterangan_prestasi: this.state.rpd_keterangan_prestasi,
      })
      .then((response) => {
        this.setState({
          rpd_nama_lembaga_pendidikan: "",
          rpd_tahun_lulus: "",
          rpd_kualifikasi: "",
          rpd_lokasi: "",
          rpd_jurusan: "",
          rpd_keterangan_prestasi: "",
        });
        this.props.history.push("/RiwayatPendidikanList");
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Educational Background Data</h1>
          <ol className="breadcrumb">
            <li className="active">Educational Background Data</li>
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
                      <label>Name of Educational Institution</label>
                      <input
                        type="text"
                        required
                        name="rpd_nama_lembaga_pendidikan"
                        onChange={this.handleNamaLembagaPendidikanUpdateChange}
                        value={this.state.rpd_nama_lembaga_pendidikan}
                        className="form-control"
                        placeholder="Enter Name of Educational Institution"
                      />
                    </div>
                    <div className="form-group">
                      <label>Graduation Year</label>
                      <input
                        type="text"
                        required
                        name="rpd_tahun_lulus"
                        onChange={this.handleTahunLulusUpdateChange}
                        value={this.state.rpd_tahun_lulus}
                        className="form-control"
                        placeholder="Enter Graduation Year"
                      />
                    </div>
                    <div className="form-group">
                      <label>Educational Stage</label>
                      <select
                        className="form-control select2"
                        value={this.state.rpd_kualifikasi}
                        onChange={(event) =>
                          this.setState({ rpd_kualifikasi: event.target.value })
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
                      <label>Location</label>
                      <input
                        type="text"
                        required
                        name="rpd_lokasi"
                        onChange={this.handleLokasiUpdateChange}
                        value={this.state.rpd_lokasi}
                        className="form-control"
                        placeholder="Enter Location"
                      />
                    </div>
                    <div className="form-group">
                      <label>Majors</label>
                      <input
                        type="text"
                        required
                        name="rpd_jurusan"
                        onChange={this.handleJurusanUpdateChange}
                        value={this.state.rpd_jurusan}
                        className="form-control"
                        placeholder="Enter Majors"
                      />
                    </div>
                    <div className="form-group">
                      <label>Description of Achievement</label>
                      <textarea
                        type="text"
                        required
                        name="rpd_keterangan_prestasi"
                        onChange={this.handleKeteranganPrestasiUpdateChange}
                        value={this.state.rpd_keterangan_prestasi}
                        className="form-control"
                        placeholder="Enter Description of Achievement"
                        rows={5}
                        cols={5}
                      />
                    </div>
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                      Update Data
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
