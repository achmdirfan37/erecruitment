import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button, Alert } from "react-bootstrap";
import Pagination from "react-js-pagination";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

class DashboardPenilaian_PelamarStaff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lk_nama: "",
      pel_tanggal_lahir: "",
      pel_umur: "",
      lk_nama_low: "",
      lk_lowongan: "",
      low_judul: "",
      lk_lamaran: "",
      lk_perusahaan: "",
      lk_status_rekrutmen: "",
      lk_posisi: "",
      lk_pelamar: "",
      pn_tujuan: "",
      pn_tanggal: "",
      pn_penampilan_sikap: "",
      pn_pengetahuan_penguasaan: "",
      pn_percaya_diri: "",
      pn_motivasi_ambisi: "",
      pn_inisiatif_kreatifitas: "",
      pn_kerjasama: "",
      pn_komunikasi: "",
      pn_kekuatan: "",
      pn_kelemahan: "",
      pn_kesimpulan: "",
    };

    this.handleStatusRekrutmenChange = this.handleStatusRekrutmenChange.bind(
      this
    );
    this.handleTanggalChange = this.handleTanggalChange.bind(this);
    this.handleTujuanChange = this.handleTujuanChange.bind(this);
    this.handleNamaChange = this.handleNamaChange.bind(this);
    this.handleNamaLowChange = this.handleNamaLowChange.bind(this);
    this.handleStatusKonfirmasiChange = this.handleStatusKonfirmasiChange.bind(
      this
    );
    this.handlePosisiChange = this.handlePosisiChange.bind(this);
    this.handlePenampilanSikapChange = this.handlePenampilanSikapChange.bind(
      this
    );
    this.handlePercayaDiriChange = this.handlePercayaDiriChange.bind(this);
    this.handlePengetahuanPenguasaanChange = this.handlePengetahuanPenguasaanChange.bind(
      this
    );
    this.handleMotivasiAmbisiChange = this.handleMotivasiAmbisiChange.bind(
      this
    );
    this.handleInisiatifKreatifitasChange = this.handleInisiatifKreatifitasChange.bind(
      this
    );
    this.handleKerjasamaChange = this.handleKerjasamaChange.bind(this);
    this.handleKomunikasiChange = this.handleKomunikasiChange.bind(this);
    this.handleKekuatanChange = this.handleKekuatanChange.bind(this);
    this.handleKelemahanChange = this.handleKelemahanChange.bind(this);
    this.handleKesimpulanChange = this.handleKesimpulanChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/tr_lamaran_kerja/statusAccept/${id}`)
      .then((response) => {
        this.setState({
          lk_lamaran: response.data.id,
          lk_lowongan: response.data.lk_lowongan,
          lk_perusahaan: response.data.lk_perusahaan,
          lk_status_rekrutmen: response.data.lk_status_rekrutmen,
          lk_pelamar: response.data.lk_pelamar,
        });
      })
      .catch((err) => console.log(err));

    const pel = this.props.match.params.lk_pelamar;
    axios
      .get(`http://127.0.0.1:8000/api/ms_pelamar/viewDetail/${pel}`)
      .then((response) => {
        this.setState({
          lk_nama: response.data.pel_nama_lengkap,
          pel_tanggal_lahir: response.data.pel_tanggal_lahir,
          pel_umur: response.data.pel_umur,
          lk_posisi: response.data.pel_posisi,
        });
      })
      .catch((err) => console.log(err));
  }

  handlePenampilanSikapChange(event) {
    this.setState({
      pn_penampilan_sikap: event.target.value,
    });
  }

  handlePercayaDiriChange(event) {
    this.setState({
      pn_percaya_diri: event.target.value,
    });
  }

  handlePengetahuanPenguasaanChange(event) {
    this.setState({
      pn_pengetahuan_penguasaan: event.target.value,
    });
  }

  handleMotivasiAmbisiChange(event) {
    this.setState({
      pn_motivasi_ambisi: event.target.value,
    });
  }

  handleInisiatifKreatifitasChange(event) {
    this.setState({
      pn_inisiatif_kreatifitas: event.target.value,
    });
  }

  handleKerjasamaChange(event) {
    this.setState({
      pn_kerjasama: event.target.value,
    });
  }

  handleKomunikasiChange(event) {
    this.setState({
      pn_komunikasi: event.target.value,
    });
  }

  handleKekuatanChange(event) {
    this.setState({
      pn_kekuatan: event.target.value,
    });
  }

  handleKelemahanChange(event) {
    this.setState({
      pn_kelemahan: event.target.value,
    });
  }

  handleKesimpulanChange(event) {
    this.setState({
      pn_kesimpulan: event.target.value,
    });
  }

  handleStatusRekrutmenChange(event) {
    this.setState({
      lk_status_rekrutmen: event.target.value,
    });
  }

  handleStatusKonfirmasiChange(event) {
    this.setState({
      lk_status_konfirmasi: event.target.value,
    });
  }

  handleNamaChange(event) {
    this.setState({
      lk_nama: event.target.value,
    });
  }

  handleNamaLowChange(event) {
    this.setState({
      lk_nama_low: event.target.value,
    });
  }

  handlePosisiChange(event) {
    this.setState({
      lk_posisi: event.target.value,
    });
  }

  handleTanggalChange(event) {
    this.setState({
      pn_tanggal: event.target.value,
    });
  }

  handleTujuanChange(event) {
    this.setState({
      pn_tujuan: event.target.value,
    });
  }

  handleFormSubmit(event) {
    alert("Data Penilaian Berhasil Dimasukkan!");
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .post("http://127.0.0.1:8000/api/tr_penilaian_lamaran/create", {
        pn_pelamar: this.state.lk_pelamar,
        pn_lamaran: this.state.lk_lamaran,
        pn_lowongan: this.state.lk_lowongan,
        pn_perusahaan: this.state.lk_perusahaan,
        pn_tahapan_wawancara: this.state.lk_status_rekrutmen,
        pn_tujuan: this.state.pn_tujuan,
        pn_tanggal: this.state.pn_tanggal,
        pn_penampilan_sikap: this.state.pn_penampilan_sikap,
        pn_pengetahuan_penguasaan: this.state.pn_pengetahuan_penguasaan,
        pn_percaya_diri: this.state.pn_percaya_diri,
        pn_motivasi_ambisi: this.state.pn_motivasi_ambisi,
        pn_inisiatif_kreatifitas: this.state.pn_inisiatif_kreatifitas,
        pn_kerjasama: this.state.pn_kerjasama,
        pn_komunikasi: this.state.pn_komunikasi,
        pn_kekuatan: this.state.pn_kekuatan,
        pn_kelemahan: this.state.pn_kelemahan,
        pn_kesimpulan: this.state.pn_kesimpulan,
      })
      .then((response) => {
        this.setState({
          lk_nama: "",
          lk_nama_low: "",
          lk_status_konfirmasi: "",
          lk_status_rekrutmen: "",
          lk_posisi: "",
          pn_tujuan: "",
          pn_tanggal: "",
          pn_penampilan_sikap: "",
          pn_pengetahuan_penguasaan: "",
          pn_percaya_diri: "",
          pn_motivasi_ambisi: "",
          pn_inisiatif_kreatifitas: "",
          pn_kerjasama: "",
          pn_komunikasi: "",
          pn_kekuatan: "",
          pn_kelemahan: "",
          pn_kesimpulan: "",
        });
        this.props.history.push("/DashboardPenilaian_LamaranKerja");
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Formulir Penilaian Staff Gol 1,2,3</h1>
          <ol className="breadcrumb">
            <li className="active">Formulir Penilaian Staff Gol 1,2,3</li>
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
                      <label>Nama Pelamar</label>
                      <input
                        type="text"
                        required
                        readOnly
                        onChange={this.handleNamaChange}
                        value={this.state.lk_nama}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Tanggal Lahir</label>
                      <input
                        type="text"
                        required
                        readOnly
                        value={this.state.pel_tanggal_lahir}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Umur</label>
                      <input
                        type="text"
                        required
                        readOnly
                        value={this.state.pel_umur}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Posisi yang dilamar</label>
                      <input
                        type="text"
                        required
                        readOnly
                        onChange={this.handlePosisiChange}
                        value={this.state.lk_posisi}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Tanggal</label>
                      <input
                        type="date"
                        required
                        name="pn_tanggal"
                        onChange={this.handleTanggalChange}
                        value={this.state.pn_tanggal}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Tujuan Tes</label>
                      <input
                        type="text"
                        required
                        name="pn_tujuan"
                        onChange={this.handleTujuanChange}
                        value={this.state.pn_tujuan}
                        className="form-control"
                        placeholder="Masukan Tujuan Tes"
                      />
                    </div>
                    {/* <div className="form-group">
                      <label  ><b>PENAMPILAN/SIKAP</b></label>
                      <br />
                      <p  >Definisi : Sopan/Rapi</p>
                      <select className="form-control select2" value={this.state.pn_penampilan_sikap}
                        onChange={(event) => this.setState({ pn_penampilan_sikap: event.target.value })}>
                        <option value="1">Need Improvement 1</option>
                        <option value="2">Need Improvement 2</option>
                        <option value="3">Meet Requirement 3</option>
                        <option value="4">Highly Effective 4</option>
                        <option value="5">Highly Effective 5</option>
                      </select>
                    </div> */}
                    <div className="form-group">
                      <label>PENAMPILAN/SIKAP</label>
                      <br />
                      <p>Definisi : Sopan/Rapi</p>
                      <div
                        onChange={this.handlePenampilanSikapChange.bind(this)}
                      >
                        <input
                          type="radio"
                          name="pn_penampilan_sikap"
                          value="1"
                        />
                        Need Improvement 1
                        <br />
                        <input
                          type="radio"
                          name="pn_penampilan_sikap"
                          value="2"
                        />
                        Need Improvement 2
                        <br />
                        <input
                          type="radio"
                          name="pn_penampilan_sikap"
                          value="3"
                        />
                        Meet Requirement 3
                        <br />
                        <input
                          type="radio"
                          name="pn_penampilan_sikap"
                          value="4"
                        />
                        Highly Effective 4
                        <br />
                        <input
                          type="radio"
                          name="pn_penampilan_sikap"
                          value="5"
                        />
                        Highly Effective 5
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        <b>PERCAYA DIRI</b>
                      </label>
                      <br />
                      <p>
                        Keyakinan atas kemampuan diri dan obyektivitas yang
                        bersangkutan dalam menilai kemampuan diri sendiri.
                      </p>
                      <select
                        className="form-control select2"
                        value={this.state.pn_percaya_diri}
                        onChange={(event) =>
                          this.setState({ pn_percaya_diri: event.target.value })
                        }
                      >
                        <option value="1">Need Improvement 1</option>
                        <option value="2">Need Improvement 2</option>
                        <option value="3">Meet Requirement 3</option>
                        <option value="4">Highly Effective 4</option>
                        <option value="5">Highly Effective 5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>
                        <b>PENGETAHUAN DAN PENGUASAAN BIDANG PENDIDIKAN</b>
                      </label>
                      <br />
                      <p>
                        - Kesesuaian pengetahuan bidang pendidikan dan jabatan
                        yang akan diisi.
                      </p>
                      <p>
                        - Kemampuan menangkap masalah dan ketepatan dalam
                        memberikan jawaban yang logis.
                      </p>
                      <select
                        className="form-control select2"
                        value={this.state.pn_pengetahuan_penguasaan}
                        onChange={(event) =>
                          this.setState({
                            pn_pengetahuan_penguasaan: event.target.value,
                          })
                        }
                      >
                        <option value="1">Need Improvement 1</option>
                        <option value="2">Need Improvement 2</option>
                        <option value="3">Meet Requirement 3</option>
                        <option value="4">Highly Effective 4</option>
                        <option value="5">Highly Effective 5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>
                        <b>MOTIVASI DAN AMBISI</b>
                      </label>
                      <br />
                      <p>- Alasan dan minat melamar pekerjaan.</p>
                      <p>
                        - Semagat, hasrat berprestasi, keuletan dalam mencapai
                        tujuan.
                      </p>
                      <select
                        className="form-control select2"
                        value={this.state.pn_motivasi_ambisi}
                        onChange={(event) =>
                          this.setState({
                            pn_motivasi_ambisi: event.target.value,
                          })
                        }
                      >
                        <option value="1">Need Improvement 1</option>
                        <option value="2">Need Improvement 2</option>
                        <option value="3">Meet Requirement 3</option>
                        <option value="4">Highly Effective 4</option>
                        <option value="5">Highly Effective 5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>
                        <b>INISIATIF DAN KREATIFITAS</b>
                      </label>
                      <br />
                      <p>
                        Kemampuan dan kemauan untuk memulai sesuatu baik yang
                        berkaitan dengan bidang pekerjaannya maupun hal baru
                      </p>
                      <select
                        className="form-control select2"
                        value={this.state.pn_inisiatif_kreatifitas}
                        onChange={(event) =>
                          this.setState({
                            pn_inisiatif_kreatifitas: event.target.value,
                          })
                        }
                      >
                        <option value="1">Need Improvement 1</option>
                        <option value="2">Need Improvement 2</option>
                        <option value="3">Meet Requirement 3</option>
                        <option value="4">Highly Effective 4</option>
                        <option value="5">Highly Effective 5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>
                        <b>KERJASAMA</b>
                      </label>
                      <br />
                      <p>
                        Mampu menjalin kerjasama dalam kelompok serta peka
                        terhadap kebutuhan orang lain dan memberikan kontribusi
                        dalam aktivitas kelompok
                      </p>
                      <select
                        className="form-control select2"
                        value={this.state.pn_kerjasama}
                        onChange={(event) =>
                          this.setState({ pn_kerjasama: event.target.value })
                        }
                      >
                        <option value="1">Need Improvement 1</option>
                        <option value="2">Need Improvement 2</option>
                        <option value="3">Meet Requirement 3</option>
                        <option value="4">Highly Effective 4</option>
                        <option value="5">Highly Effective 5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>
                        <b>KOMUNIKASI</b>
                      </label>
                      <br />
                      <p>
                        Kemampuan menerima dan memberikan informasi secara
                        efektif
                      </p>
                      <select
                        className="form-control select2"
                        value={this.state.pn_komunikasi}
                        onChange={(event) =>
                          this.setState({ pn_komunikasi: event.target.value })
                        }
                      >
                        <option value="1">Need Improvement 1</option>
                        <option value="2">Need Improvement 2</option>
                        <option value="3">Meet Requirement 3</option>
                        <option value="4">Highly Effective 4</option>
                        <option value="5">Highly Effective 5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Kekuatan</label>
                      <textarea
                        type="text"
                        required
                        onChange={this.handleKekuatanChange}
                        value={this.state.pn_kekuatan}
                        className="form-control"
                        placeholder="Enter Kekuatan"
                        cols={5}
                        rows={5}
                      />
                    </div>
                    <div className="form-group">
                      <label>Kelemahan</label>
                      <textarea
                        type="text"
                        required
                        onChange={this.handleKelemahanChange}
                        value={this.state.pn_kelemahan}
                        className="form-control"
                        placeholder="Enter Kelemahan"
                        cols={5}
                        rows={5}
                      />
                    </div>
                    <div className="form-group">
                      <label>Kesimpulan</label>
                      <select
                        className="form-control select2"
                        value={this.state.pn_kesimpulan}
                        onChange={(event) =>
                          this.setState({ pn_kesimpulan: event.target.value })
                        }
                      >
                        <option value="Direkomendasikan Untuk Mengikuti Test Berikutnya">
                          Direkomendasikan Untuk Mengikuti Test Berikutnya
                        </option>
                        <option value="Ragu-Ragu">Ragu-Ragu</option>
                        <option value="Tidak Direkomendasikan">
                          Tidak Direkomendasikan
                        </option>
                      </select>
                    </div>
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                      Kirim Data Penilaian
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

export default DashboardPenilaian_PelamarStaff;
