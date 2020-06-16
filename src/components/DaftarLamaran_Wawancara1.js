import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button, Alert } from "react-bootstrap";
import Pagination from "react-js-pagination";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

class DaftarLamaran_Wawancara1 extends React.Component {
  constructor() {
    super();

    // data provinsi disimpan di state.provinces
    this.state = {
      tr_lamaran_kerja: [],
      ms_pelamar: "",
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3,
      lk_lowongan: "",
      lk_pelamar: "",
      id: "",
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(
        `http://127.0.0.1:8000/api/tr_lamaran_kerja/viewStatusWawancara1/${id}`
      )
      .then((response) => {
        this.setState({
          tr_lamaran_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });
  }

  handlePageChange(pageNumber) {
    const id = this.props.match.params.id;
    console.log(`active page is ${pageNumber}`);
    axios
      .get(
        `http://127.0.0.1:8000/api/tr_lamaran_kerja/viewStatusWawancara1/${id}?page=` +
          pageNumber
      )
      .then((response) => {
        this.setState({
          tr_lamaran_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });
  }

  cari = () => {
    const id = this.props.match.params.id;
    axios
      .get(
        `http://localhost:8000/api/tr_lamaran_kerja/searchViewStatusWawancara1/${id}?cari=` +
          this.state.cari
      )
      .then((response) => {
        this.setState({
          tr_lamaran_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });
  };

  fetchData() {
    axios
      .get(
        `http://localhost:8000/api/tr_lamaran_kerja/dataUndangan?lk_lowongan=` +
          this.state.lk_lowongan +
          `&lk_pelamar=` +
          this.state.lk_pelamar +
          `&id=` +
          this.state.id
      )
      .then((response) => {
        this.setState({
          ms_pelamar: response.data.data,
        });
      })
      .catch((err) => console.log(err));
  }

  onChangeText = (event) => {
    // this.cari(event.target.value); / For live search
    this.setState({
      cari: event.target.value,
    });
  };

  pindahTidakSesuai(id) {
    axios
      .delete(
        "http://127.0.0.1:8000/api/tr_lamaran_kerja/ubahStatusTidakSesuai/" + id
      )
      .then((response) => {
        var tr_lamaran_kerjass = this.state.tr_lamaran_kerja;
        for (var i = 0; i < tr_lamaran_kerjass.length; i++) {
          if (tr_lamaran_kerjass[i].id == id) {
            tr_lamaran_kerjass.splice(i, 1);
            this.setState({ tr_lamaran_kerja: tr_lamaran_kerjass });
          }
        }
      });
  }

  pindahWawancara2(id) {
    axios
      .delete(
        "http://127.0.0.1:8000/api/tr_lamaran_kerja/ubahStatusWawancara2/" + id
      )
      .then((response) => {
        var tr_lamaran_kerjass = this.state.tr_lamaran_kerja;
        for (var i = 0; i < tr_lamaran_kerjass.length; i++) {
          if (tr_lamaran_kerjass[i].id == id) {
            tr_lamaran_kerjass.splice(i, 1);
            this.setState({ tr_lamaran_kerja: tr_lamaran_kerjass });
          }
        }
      });
  }

  pindahWawancaraHR(id) {
    axios
      .delete(
        "http://127.0.0.1:8000/api/tr_lamaran_kerja/ubahStatusWawancaraHR/" + id
      )
      .then((response) => {
        var tr_lamaran_kerjass = this.state.tr_lamaran_kerja;
        for (var i = 0; i < tr_lamaran_kerjass.length; i++) {
          if (tr_lamaran_kerjass[i].id == id) {
            tr_lamaran_kerjass.splice(i, 1);
            this.setState({ tr_lamaran_kerja: tr_lamaran_kerjass });
          }
        }
      });
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Daftar Lamaran Pekerjaan</h1>
          <ol className="breadcrumb">
            <li className="active">Daftar Lamaran Pekerjaan</li>
          </ol>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/* /.box-header */}
                <div className="box-body">
                  <input
                    type="text"
                    value={this.state.cari}
                    onChange={this.onChangeText}
                    //onChange={this.searchChanged}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        this.cari();
                      }
                    }}
                    style={{ marginRight: 8 }}
                  />

                  <button onClick={this.cari}>Cari Lamaran Pekerjaan</button>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
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
                          <dt>ID</dt>
                          <dd>
                            {tr_lamaran_kerjas.id}
                            <input
                              type="hidden"
                              name="id"
                              value={tr_lamaran_kerjas.id}
                            />
                          </dd>
                          <dt>Nama Lengkap</dt>
                          <dd>{tr_lamaran_kerjas.pel_nama_lengkap}</dd>
                          <dt>Pendidikan Terakhir</dt>
                          <dd>{tr_lamaran_kerjas.pel_pendidikan_terakhir}</dd>
                          <dt>Gaji yang diharapkan</dt>
                          <dd>
                            Rp.{" "}
                            {tr_lamaran_kerjas.pel_gaji_diharapkan.toLocaleString()}
                          </dd>
                          <dt>Jabatan Terakhir</dt>
                          <dd>
                            {tr_lamaran_kerjas.pel_posisi}
                            <input
                              type="hidden"
                              name="lk_pelamar"
                              value={tr_lamaran_kerjas.lk_pelamar}
                            />
                          </dd>
                          <dt>Jabatan Terakhir</dt>
                          <dd>
                            {tr_lamaran_kerjas.lk_lowongan}
                            <input
                              type="hidden"
                              name="lk_lowongan"
                              value={tr_lamaran_kerjas.lk_lowongan}
                            />
                          </dd>
                        </dl>
                      </div>
                      <div class="box-footer" align="right">
                        <div class="marginRight">
                          <div class="btn-group" align="right">
                            <Link
                              className="btn btn-danger btn-flat"
                              onClick={this.pindahTidakSesuai.bind(
                                this,
                                tr_lamaran_kerjas.id
                              )}
                            >
                              Tidak Sesuai
                            </Link>
                            &nbsp;&nbsp;
                            <Link
                              className="btn btn-info btn-flat"
                              onClick={this.pindahWawancara2.bind(
                                this,
                                tr_lamaran_kerjas.id
                              )}
                            >
                              Wawancara 2
                            </Link>
                            &nbsp;&nbsp;
                            <Link
                              className="btn btn-info btn-flat"
                              onClick={this.pindahWawancaraHR.bind(
                                this,
                                tr_lamaran_kerjas.id
                              )}
                            >
                              Wawancara HR
                            </Link>
                            &nbsp;&nbsp;
                            <Link
                              to={`/${tr_lamaran_kerjas.id}/Undang_Wawancara1`}
                              className="btn btn-success btn-flat"
                            >
                              Undang Wawancara
                            </Link>
                            <button
                              type="button"
                              class="btn btn-default"
                              data-toggle="modal"
                              data-target="#modal-default"
                            >
                              Launch Default Modal
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>

          <div class="modal fade" id="modal-default">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 class="modal-title">
                    <b>Undangan kepada Kandidat</b>
                  </h4>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        rows="10"
                        name="pesan_undangan"
                      >
                        Dear ,&#13;&#10;Terima kasih atas ketertarikan Anda
                        untuk bergabung dengan ... . Kami menghargai waktu yang
                        Anda tuangkan untuk melamar pada posisi ... . Setelah
                        meninjau profil Anda, kami mengundang Anda untuk
                        wawancara sehingga dapat berdiskusi lebih lanjut
                        mengenai kesempatan di atas. Kami tunggu kabar dari
                        Anda. Hormat kami,
                      </textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-default pull-left"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /.content */}
      </div>
    );
  }
}

export default DaftarLamaran_Wawancara1;
