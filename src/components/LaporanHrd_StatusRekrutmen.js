import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button, Alert } from "react-bootstrap";
import Pagination from "react-js-pagination";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
//import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
import Paper from "@material-ui/core/Paper";
//import Button from '@material-ui/core/Button';
import ReactToExcel from "react-html-table-to-excel";
// import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';

class LaporanHrd_StatusRekrutmen extends React.Component {
  constructor() {
    super();
    // data provinsi disimpan di state.provinces
    this.state = {
      umur1: "",
      umur2: "",
      gajiMin: "",
      gajiMax: "",
      jenisKelamin: "",
      all: "",
      status: "",
      filename: "Lamaran",
      tr_lamaran_kerja: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    //this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleUmur1Change = this.handleUmur1Change.bind(this);
    this.handleUmur2Change = this.handleUmur2Change.bind(this);
    this.handleGajiMinChange = this.handleGajiMinChange.bind(this);
    this.handleGajiMaxChange = this.handleGajiMaxChange.bind(this);
    this.handleJenisKelaminChange = this.handleJenisKelaminChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.clear = this.clear.bind(this);
    this.handleAllChange = this.handleAllChange.bind(this);
  }

  // exportToCSV = (csvData, fileName) => {
  //   const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  //   const fileExtension = '.xlsx';
  //   const ws = XLSX.utils.json_to_sheet(csvData);
  //   const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
  //   const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  //   const data = new Blob([excelBuffer], { type: fileType });
  //   FileSaver.saveAs(data, fileName + fileExtension);
  // }

  // exportFile() {
  //   let users = [["First Name", "Last Name", "Age"]]
  //   this.state.users.forEach((user) => {
  //     let userArray = [user.firstname, user.lastname, user.age]
  //     users.push(userArray)
  //   })
  //   const wb = XLSX.utils.book_new()
  //   const wsAll = XLSX.utils.aoa_to_sheet(users)
  //       XLSX.utils.book_append_sheet(wb, wsAll, "All Users")
  //       XLSX.writeFile(wb, "export-demo.xlsx")
  // }

  printDocument() {
    const input = document.getElementById("pdfdiv");
    html2canvas(input).then((canvas) => {
      var imgWidth = 200;
      var pageHeight = 290;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      var position = 0;
      var heightLeft = imgHeight;
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  }

  componentDidMount() {
    // ajax call
    //id perusahaan
    //const id = this.props.match.params.id;
    const id = 5;
    axios
      .get(`http://127.0.0.1:8000/api/tr_lamaran_kerja/viewStatusSeluruh/${id}`)
      .then((response) => {
        this.setState({
          tr_lamaran_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });
  }

  handleUmur1Change(event) {
    this.setState({
      umur1: event.target.value,
    });
  }

  handleUmur2Change(event) {
    this.setState({
      umur2: event.target.value,
    });
  }

  handleGajiMinChange(event) {
    this.setState({
      gajiMin: event.target.value,
    });
  }

  handleGajiMaxChange(event) {
    this.setState({
      gajiMax: event.target.value,
    });
  }

  handleJenisKelaminChange(event) {
    this.setState({
      jenisKelamin: event.target.value,
    });
  }

  handleStatusChange(event) {
    this.setState({
      status: event.target.value,
    });
  }

  handleAllChange(event) {
    this.setState({
      all: event.target.value,
    });
  }

  handlePageChange(pageNumber) {
    //id perusahaan
    const id = 5;
    console.log(`active page is ${pageNumber}`);
    axios
      .get(
        `http://127.0.0.1:8000/api/tr_lamaran_kerja/viewStatusSeluruh/${id}?page=` +
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
    const id = 5;
    axios
      .get(
        `http://localhost:8000/api/tr_lamaran_kerja/rangeUmur/${id}/${this.state.umur1}/${this.state.umur2}`
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

  cariGaji = () => {
    const id = 5;
    axios
      .get(
        `http://localhost:8000/api/tr_lamaran_kerja/rangeGaji/${id}/${this.state.gajiMin}/${this.state.gajiMax}`
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

  cariGender = () => {
    const id = 5;
    axios
      .get(
        `http://localhost:8000/api/tr_lamaran_kerja/gender/${id}/${this.state.jenisKelamin}`
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

  cariStatus = () => {
    const id = 5;
    axios
      .get(
        `http://localhost:8000/api/tr_lamaran_kerja/status/${id}/${this.state.status}`
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

  cariAll = () => {
    const id = 5;
    axios
      .get(
        `http://localhost:8000/api/tr_lamaran_kerja/all/${id}/${this.state.all}`
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

  clear() {
    this.setState({
      jenisKelamin: "",
      status: "",
      all: "",
      umur1: "",
      umur2: "",
      gajiMin: "",
      gajiMax: "",
    });
    this.props.history.push("/LaporanHrd_StatusRekrutmen");
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Laporan Daftar Lamaran Kerja</h1>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div class="col-md-3">
                <div class="box box-solid">
                  <div class="box-header with-border">
                    <h3 class="box-title">Cari Berdasarkan Usia</h3>
                  </div>
                  <div class="box-body">
                    <dl class="dl-vertical">
                      <dt>Usia Awal :</dt>
                      <input
                        type="text"
                        value={this.state.umur1}
                        onChange={this.handleUmur1Change}
                        style={{ marginRight: 4 }}
                      />
                      <dt>Usia Akhir :</dt>
                      <input
                        type="text"
                        value={this.state.umur2}
                        onChange={this.handleUmur2Change}
                        style={{ marginRight: 4 }}
                      />
                      <button onClick={this.cari}>Cari</button>
                    </dl>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="box box-solid">
                  <div class="box-header with-border">
                    <h3 class="box-title">Cari Berdasarkan Kisaran Gaji</h3>
                  </div>
                  <div class="box-body">
                    <dl class="dl-vertical">
                      <dt>Gaji Minimum :</dt>
                      <input
                        type="text"
                        value={this.state.gajiMin}
                        onChange={this.handleGajiMinChange}
                        style={{ marginRight: 4 }}
                      />
                      <dt>Gaji Maksimum :</dt>
                      <input
                        type="text"
                        value={this.state.gajiMax}
                        onChange={this.handleGajiMaxChange}
                        style={{ marginRight: 4 }}
                      />
                      <button onClick={this.cariGaji}>Cari</button>
                    </dl>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="box box-solid">
                  <div class="box-header with-border">
                    <h3 class="box-title">Cari Berdasarkan :</h3>
                  </div>
                  <div class="box-body">
                    <dl class="dl-vertical">
                      <dt>Jenis Kelamin :</dt>
                      <input
                        onChange={this.handleJenisKelaminChange.bind(this)}
                        type="radio"
                        value="Wanita"
                      />
                      Wanita &nbsp;
                      <input
                        onChange={this.handleJenisKelaminChange.bind(this)}
                        type="radio"
                        value="Pria"
                      />
                      Pria &nbsp;&nbsp;
                      <button onClick={this.cariGender}>Cari</button>
                      <dt>Cari Random :</dt>
                      <input
                        type="text"
                        value={this.state.all}
                        onChange={this.handleAllChange}
                        style={{ marginRight: 8 }}
                      />
                      <button onClick={this.cariAll}>Cari</button>
                    </dl>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="box box-solid">
                  <div class="box-header with-border">
                    <h3 class="box-title">Cari dan Hapus :</h3>
                  </div>
                  <div class="box-body">
                    <dl class="dl-vertical">
                      <dt>Status Rekrutmen :</dt>
                      <select
                        className="form-control select2"
                        value={this.state.status}
                        onChange={(event) =>
                          this.setState({ status: event.target.value })
                        }
                      >
                        <option value="Belum Diproses">Belum Diproses</option>
                        <option value="Terpilih">Terpilih</option>
                        <option value="Wawancara 1">Wawancara 1</option>
                        <option value="Wawancara 2">Wawancara 2</option>
                        <option value="Wawancara HR">Wawancara HR</option>
                        <option value="Psikotes">Psikotes</option>
                        <option value="MCU">MCU</option>
                        <option value="Placement">Placement</option>
                        <option value="Tidak Sesuai">Tidak Sesuai</option>
                      </select>
                      <button onClick={this.cariStatus}>Cari</button>
                      <dt>
                        Hapus Seluruh Pencarian :{" "}
                        <button onClick={this.clear}>Hapus</button>{" "}
                      </dt>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/* /.box-header */}
                <div className="box-body">
                  <br />
                  <table
                    id="pdfdiv"
                    className="table table-bordered table-striped"
                    Component={Paper}
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama Pelamar</th>
                        <th>Jenis Kelamin</th>
                        <th>Umur</th>
                        <th>Lowongan</th>
                        <th>Posisi yang Dilamar</th>
                        <th>Status Perekrutan</th>
                        <th>Pendidikan Terakhir</th>
                        <th>Gaji</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.tr_lamaran_kerja !== undefined
                        ? this.state.tr_lamaran_kerja.map(
                            (tr_lamaran_kerjas) => (
                              <tr key={tr_lamaran_kerjas.id}>
                                <td>{tr_lamaran_kerjas.id}</td>
                                <td>{tr_lamaran_kerjas.pel_nama_lengkap}</td>
                                <td>{tr_lamaran_kerjas.pel_jenis_kelamin}</td>
                                <td>{tr_lamaran_kerjas.pel_umur}</td>
                                <td>{tr_lamaran_kerjas.low_judul}</td>
                                <td>{tr_lamaran_kerjas.pos_nama}</td>
                                <td>{tr_lamaran_kerjas.lk_status_rekrutmen}</td>
                                <td>
                                  {tr_lamaran_kerjas.pel_pendidikan_terakhir}
                                </td>
                                <td>{tr_lamaran_kerjas.pel_gaji_diharapkan}</td>
                                <td>
                                  <Link
                                    to={`/${tr_lamaran_kerjas.lk_pelamar}/DetailPelamar_Lamaran`}
                                    className="btn btn-warning btn-sm mr-2"
                                  >
                                    Detail Pelamar
                                  </Link>
                                  <Link
                                    to={`/${tr_lamaran_kerjas.id}/DetailTracking_Lamaran`}
                                    className="btn btn-warning btn-sm mr-2"
                                  >
                                    Tracking Lamaran
                                  </Link>
                                </td>
                              </tr>
                            )
                          )
                        : null}
                    </tbody>
                  </table>

                  <Button
                    onClick={this.printDocument}
                    variant="warning"
                    color="primary"
                  >
                    Generate Pdf
                  </Button>
                  {/* 
                  <Button
                    variant="warning"
                    onClick={(e) => this.exportToCSV(this.state.tr_lamaran_kerja, this.state.filename)}>Export</Button> */}
                  <ReactToExcel
                    className="btn btn-info"
                    table="pdfdiv"
                    filename="excelFile"
                    sheet="Sheet"
                    buttonText="Export"
                  />

                  <div class="center">
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.totalItemsCount}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.handlePageChange}
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                  </div>
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

export default LaporanHrd_StatusRekrutmen;
