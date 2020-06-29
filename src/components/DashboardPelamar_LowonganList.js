import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import Image from 'react-bootstrap/Image'
import { Col } from 'react-bootstrap';

class DashboardPelamar_LowonganList extends React.Component {
  constructor() {
    super()
    // data provinsi disimpan di state.provinces
    this.state = {
      ms_lowongan: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    // ajax call

    const id = this.props.match.params.id;
    axios.get(`http://127.0.0.1:8000/api/ms_lowongan/lowonganbyperusahaan/${id}`)
      .then(response => {
        this.setState({
          ms_lowongan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      }).catch(err => console.log(err));

    axios.get(`http://127.0.0.1:8000/api/ms_perusahaan/viewDetail/${id}`)
      .then(response => {
        this.setState({
          per_foto: response.data.per_foto,
          per_nama: response.data.per_nama,
          per_deskripsi: response.data.per_deskripsi,
          per_email: response.data.per_email,
          per_no_telepon: response.data.per_no_telepon,
          per_alamat_website: response.data.per_alamat_website,
          per_alamat: response.data.per_alamat
        })
      }).catch(err => console.log(err));
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    const id = this.props.match.params.id;
    //this.setState({activePage: pageNumber});
    //"http://127.0.0.1:8000/api/ms_pelamar/view?page=1"
    axios.get(`http://127.0.0.1:8000/api/ms_lowongan/lowonganbyperusahaan/${id}?page=` + pageNumber)
      .then(response => {
        this.setState({
          ms_lowongan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  cari = () => {
    axios.get('http://localhost:8000/api/ms_lowongan/search/?cari=' + this.state.cari)
      .then(response => {
        this.setState({
          ms_lowongan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  onChangeText = (event) => {
    this.setState({
      cari: event.target.value
    })
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content" >

          <div class="row">
            <div class="col-md-3">
              <div class="box box-solid">
                <div class="box-body">
                  <dl class="dl-vertical">
                    <dt>Foto</dt>
                    <Col xs={6} md={4}>
                      <dd><Image src={this.state.per_foto} rounded /></dd>
                    </Col>
                  </dl>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="box box-solid">
                <div class="box-body">
                  <dl class="dl-vertical">
                    <dt>Perusahaan</dt>
                    <dd>{this.state.per_nama}</dd>
                    <dt>Deskripsi</dt>
                    <dd>{this.state.per_deskripsi}</dd>
                    <dt>Email</dt>
                    <dd>{this.state.per_email}</dd>
                    <dt>No Telepon</dt>
                    <dd>{this.state.per_no_telepon}</dd>
                    <dt>Situs Web</dt>
                    <dd>{this.state.per_alamat_website}</dd>
                    <dt>Alamat</dt>
                    <dd>{this.state.per_alamat}</dd>
                  </dl>
                </div>
              </div>
            </div>

          </div>

          <div class="row">
            {this.state.ms_lowongan !== undefined
              ? this.state.ms_lowongan.map((ms_lowongans) => (
                <div class="col-md-12">
                  <div class="box box-solid">
                    <div class="box-header with-border">
                      <i class="fa fa-text-width"></i>
                      <h3 class="box-title">Data Lowongan</h3>
                    </div>
                    <div class="box-body">
                      <dl class="dl-horizontal">
                        <dt>Lowongan</dt>
                        <dd>{ms_lowongans.low_judul}</dd>
                        <dt>Posisi</dt>
                        <dd>{ms_lowongans.pos_nama}</dd>
                        <dt>Pendidikan</dt>
                        <dd>{ms_lowongans.low_kualifikasi}</dd>
                        <dt>Gaji</dt>
                        <dd>
                          Rp.{" "}
                          {ms_lowongans.low_gaji.toLocaleString()}</dd>
                        <dt>Tanggal Kadaluarsa</dt>
                        <dd>{ms_lowongans.low_tanggal_ditutup}</dd>
                      </dl>
                    </div>
                    
                    <div class="box-footer" align="right">
                      <div class="marginRight">
                        <div class="btn-group" align="right">
                          <Link
                            to={`/${ms_lowongans.id}/DashboardPelamar_LamarPekerjaan`}
                            className="btn btn-warning btn-sm mr-2"
                          >
                            Lamar Pekerjaan
                            </Link>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              ))
              : null}
          </div>
        </section>
      </div>
    );
  }
}

export default DashboardPelamar_LowonganList;