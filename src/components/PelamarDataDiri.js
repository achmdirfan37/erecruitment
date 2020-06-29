import React, { Component } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import Image from 'react-bootstrap/Image'
import { Col } from 'react-bootstrap';

//import PelamarList from './pelamar-listing.component';

export default class PelamarDataDiri extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pel_nama_lengkap: '',
            pel_umur: '',
            pel_jenis_kelamin: '',
            pel_tempat_lahir: '',
            pel_tanggal_lahir: '',
            pel_alamat: '',
            pel_no_telepon: '',
            ms_keterampilan: [],
            ms_riwayat_pendidikan: [],
            ms_pengalaman_kerja: [],
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed: 3
        }
    }

    componentDidMount() {
        // ajax call
        const id = 17;
        axios.get(`http://127.0.0.1:8000/api/ms_pelamar/viewDetail/${id}`)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    pel_foto: response.data.pel_foto,
                    pel_password: response.data.pel_password,
                    pel_nama_lengkap: response.data.pel_nama_lengkap,
                    pel_umur: response.data.pel_umur,
                    pel_alamat: response.data.pel_alamat,
                    pel_jenis_kelamin: response.data.pel_jenis_kelamin,
                    pel_no_telepon: response.data.pel_no_telepon,
                    pel_tanggal_lahir: response.data.pel_tanggal_lahir,
                    pel_tempat_lahir: response.data.pel_tempat_lahir
                })
            }).catch(err => console.log(err));

        // ajax call
        axios.get('http://127.0.0.1:8000/api/ms_keterampilan/view')
            .then(response => {
                this.setState({
                    ms_keterampilan: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page
                });
            });

        // ajax call
        axios.get('http://127.0.0.1:8000/api/ms_riwayat_pendidikan/view')
            .then(response => {
                this.setState({
                    ms_riwayat_pendidikan: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page
                });
            });

        // ajax call
        axios.get('http://127.0.0.1:8000/api/ms_pengalaman_kerja/view')
            .then(response => {
                this.setState({
                    ms_pengalaman_kerja: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page
                });
            });
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
                                            <dd><Image src={this.state.pel_foto} rounded /></dd>
                                        </Col>
                                    </dl>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-9">
                            <div class="box box-solid">
                                <div class="box-body">
                                    <dl class="dl-vertical">
                                        <dt>Nama Lengkap</dt>
                                        <dd>{this.state.pel_nama_lengkap}</dd>
                                        <dt>Jenis Kelamin</dt>
                                        <dd>{this.state.pel_jenis_kelamin}</dd>
                                        <dt>Umur</dt>
                                        <dd>{this.state.pel_umur}</dd>
                                        <dt>Tanggal</dt>
                                        <dd>{this.state.pel_tanggal_lahir}</dd>
                                        <dt>Tempat</dt>
                                        <dd>{this.state.pel_tempat_lahir}</dd>
                                        <dt>No Telepon</dt>
                                        <dd>{this.state.pel_no_telepon}</dd>
                                        <dt>Alamat</dt>
                                        <dd>{this.state.pel_alamat}</dd>
                                    </dl>
                                </div>

                                <div class="box-footer" align="right">
                                    <div class="marginRight">
                                        <div class="btn-group" align="right">
                                            <Link
                                                to={`/${this.state.id}/PelamarChangePassword`}
                                                className="btn btn-warning btn-sm mr-2">Ubah Kata Sandi</Link>
                                            &nbsp;&nbsp;&nbsp;
                                            <Link
                                                to={`/${this.state.id}/PelamarEdit`}
                                                className="btn btn-warning btn-sm mr-2">Ubah Data Diri</Link>
                                            &nbsp;&nbsp;&nbsp;
                                            <Link
                                                to={`/${this.state.id}/PelamarFormulirLamaranKerja`}
                                                className="btn btn-warning btn-sm mr-2">Formulir Lamaran Kerja</Link>
                                        </div>
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
                                    <table id="example1" className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Jenis Keterampilan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.ms_keterampilan !== undefined
                                                    ? this.state.ms_keterampilan
                                                        .map(ms_keterampilans => (
                                                            <tr key={ms_keterampilans.id}>
                                                                <td>{ms_keterampilans.id}</td>
                                                                <td>{ms_keterampilans.ket_nama}</td>
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

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                {/* /.box-header */}
                                <div className="box-body">
                                    <table id="example1" className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Lembaga Pendidikan</th>
                                                <th>Tahun Lulus</th>
                                                <th>Jenjang Pendidikan</th>
                                                <th>Lokasi</th>
                                                <th>Jurusan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.ms_riwayat_pendidikan !== null
                                                    ? this.state.ms_riwayat_pendidikan.map(ms_riwayat_pendidikans => (
                                                        <tr key={ms_riwayat_pendidikans.id}>
                                                            <td>{ms_riwayat_pendidikans.id}</td>
                                                            <td>{ms_riwayat_pendidikans.rpd_nama_lembaga_pendidikan}</td>
                                                            <td>{ms_riwayat_pendidikans.rpd_tahun_lulus}</td>
                                                            <td>{ms_riwayat_pendidikans.rpd_kualifikasi}</td>
                                                            <td>{ms_riwayat_pendidikans.rpd_lokasi}</td>
                                                            <td>{ms_riwayat_pendidikans.rpd_jurusan}</td>
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


                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                {/* /.box-header */}
                                <div className="box-body">
                                    <table id="example1" className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Perusahaan</th>
                                                <th>Tahun Mulai Bekerja</th>
                                                <th>Tahun Selesai Bekerja</th>
                                                <th>Lokasi</th>
                                                <th>Industri</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.ms_pengalaman_kerja !== null
                                                    ? this.state.ms_pengalaman_kerja.map(ms_pengalaman_kerjas => (
                                                        <tr key={ms_pengalaman_kerjas.id}>
                                                            <td>{ms_pengalaman_kerjas.id}</td>
                                                            <td>{ms_pengalaman_kerjas.pkj_nama_perusahaan}</td>
                                                            <td>{ms_pengalaman_kerjas.pkj_tanggal_selesai}</td>
                                                            <td>{ms_pengalaman_kerjas.pkj_tanggal_selesai}</td>
                                                            <td>{ms_pengalaman_kerjas.pkj_lokasi}</td>
                                                            <td>{ms_pengalaman_kerjas.pkj_industri}</td>
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

            </div >
        );
    }
}