import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { ThemeProvider } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import { Table, Button, Alert } from 'react-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Image from 'react-bootstrap/Image'

class DetailPelamar_Lamaran extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ms_keterampilan: [],
            ms_riwayat_pendidikan: [],
            ms_pengalaman_kerja: [],
            id: '',
            pel_pendidikan_terakhir: '',
            pel_nama_lengkap: '',
            pel_tempat_lahir: '',
            pel_tanggal_lahir: '',
            pel_no_ktp: '',
            pel_kewarganegaraan: '',
            pel_alamat: '',
            pel_alamat_ortu: '',
            pel_foto: '',
            pel_posisi: '',
            pel_alasan_memilih_jurusan: '',
            pel_karya_ilmiah: '',
            pel_pendidikan_non_formal: '',
            pel_bahasa: '',
            pel_status_pernikahan: '',
            pel_tanggal_status_pernikahan: '',
            pel_susunan_keluarga: '',
            pel_detail_atasan_bawahan: '',
            pel_masalah_dihadapi: '',
            pel_kesan_kerja: '',
            pel_inovasi_kerja: '',
            pel_orang_yang_mendorong: '',
            pel_case_keputusan: '',
            pel_cita_cita: '',
            pel_hal_mendorong_bekerja: '',
            pel_alasan_ingin_bekerja: '',
            pel_gaji_diharapkan: '',
            pel_fasilitas_diharapkan: '',
            pel_kapan_mulai_kerja: '',
            pel_urutan_jenis_pekerjaan: '',
            pel_lingkungan_kerja_diminati: '',
            pel_bersedia_diluar_daerah: '',
            pel_tipe_orang_disenangi: '',
            pel_hal_sulit_mengambil_keputusan: '',
            pel_kenalan_di_perusahaan_astra: '',
            pel_referensi_perusahaan: '',
            pel_hobi: '',
            pel_cara_mengisi_waktu_luang: '',
            pel_organisasi_diikuti: '',
            pel_psikotes: '',
            pel_kekuatan: '',
            pel_kelemahan: '',
            pel_riwayat_penyakit: '',
            pel_persetujuan: '',
            pel_email: '',
            pel_no_telepon: '',
            pel_no_telepon_ortu: '',
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed: 3
        }
        this.handlePageKeterampilanChange = this.handlePageKeterampilanChange.bind(this);
        this.handlePageRiwayatPendidikanChange = this.handlePageRiwayatPendidikanChange.bind(this);
        this.handlePagePengalamanKerjaChange = this.handlePagePengalamanKerjaChange.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/ms_pelamar/${id}/edit`)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    pel_email: response.data.pel_email,
                    pel_pendidikan_terakhir: response.data.pel_pendidikan_terakhir,
                    pel_no_telepon: response.data.pel_no_telepon,
                    pel_no_telepon_ortu: response.data.pel_no_telepon_ortu,
                    pel_nama_lengkap: response.data.pel_nama_lengkap,
                    pel_tempat_lahir: response.data.pel_tempat_lahir,
                    pel_tanggal_lahir: response.data.pel_tanggal_lahir,
                    pel_no_ktp: response.data.pel_no_ktp,
                    pel_kewarganegaraan: response.data.pel_kewarganegaraan,
                    pel_alamat: response.data.pel_alamat,
                    pel_alamat_ortu: response.data.pel_alamat_ortu,
                    //pel_foto: response.data.pel_foto,
                    pel_posisi: response.data.pel_posisi,
                    pel_alasan_memilih_jurusan: response.data.pel_alasan_memilih_jurusan,
                    pel_karya_ilmiah: response.data.pel_karya_ilmiah,
                    pel_pendidikan_non_formal: response.data.pel_pendidikan_non_formal,
                    pel_bahasa: response.data.pel_bahasa,
                    pel_status_pernikahan: response.data.pel_status_pernikahan,
                    pel_tanggal_status_pernikahan: response.data.pel_tanggal_status_pernikahan,
                    pel_susunan_keluarga: response.data.pel_susunan_keluarga,
                    pel_detail_atasan_bawahan: response.data.pel_detail_atasan_bawahan,
                    pel_masalah_dihadapi: response.data.pel_masalah_dihadapi,
                    pel_kesan_kerja: response.data.pel_kesan_kerja,
                    pel_inovasi_kerja: response.data.pel_inovasi_kerja,
                    pel_orang_yang_mendorong: response.data.pel_orang_yang_mendorong,
                    pel_case_keputusan: response.data.pel_case_keputusan,
                    pel_cita_cita: response.data.pel_cita_cita,
                    pel_hal_mendorong_bekerja: response.data.pel_hal_mendorong_bekerja,
                    pel_alasan_ingin_bekerja: response.data.pel_alasan_ingin_bekerja,
                    pel_gaji_diharapkan: response.data.pel_gaji_diharapkan,
                    pel_fasilitas_diharapkan: response.data.pel_fasilitas_diharapkan,
                    pel_kapan_mulai_kerja: response.data.pel_kapan_mulai_kerja,
                    pel_urutan_jenis_pekerjaan: response.data.pel_urutan_jenis_pekerjaan,
                    pel_lingkungan_kerja_diminati: response.data.pel_lingkungan_kerja_diminati,
                    pel_bersedia_diluar_daerah: response.data.pel_bersedia_diluar_daerah,
                    pel_tipe_orang_disenangi: response.data.pel_tipe_orang_disenangi,
                    pel_hal_sulit_mengambil_keputusan: response.data.pel_hal_sulit_mengambil_keputusan,
                    pel_kenalan_di_perusahaan_astra: response.data.pel_kenalan_di_perusahaan_astra,
                    pel_referensi_perusahaan: response.data.pel_referensi_perusahaan,
                    pel_hobi: response.data.pel_hobi,
                    pel_cara_mengisi_waktu_luang: response.data.pel_cara_mengisi_waktu_luang,
                    pel_organisasi_diikuti: response.data.pel_organisasi_diikuti,
                    pel_psikotes: response.data.pel_psikotes,
                    pel_kekuatan: response.data.pel_kekuatan,
                    pel_kelemahan: response.data.pel_kelemahan,
                    pel_riwayat_penyakit: response.data.pel_riwayat_penyakit,
                    pel_persetujuan: response.data.pel_persetujuan
                })
            }).catch(err => console.log(err));


        axios.get(`http://127.0.0.1:8000/api/ms_pelamar/displayImage/${id}`)
            .then(response => {
                this.setState({
                    pel_foto: response.data.foto
                });
            });

        axios.get(`http://127.0.0.1:8000/api/ms_keterampilan/viewflk/${id}`)
            .then(response => {
                this.setState({
                    ms_keterampilan: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page
                });
            });

        // ajax call
        axios.get(`http://127.0.0.1:8000/api/ms_riwayat_pendidikan/viewflk/${id}`)
            .then(response => {
                this.setState({
                    ms_riwayat_pendidikan: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page
                });
            });

        // ajax call
        axios.get(`http://127.0.0.1:8000/api/ms_pengalaman_kerja/viewflk/${id}`)
            .then(response => {
                this.setState({
                    ms_pengalaman_kerja: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page
                });
            });
    }

    handlePageKeterampilanChange(pageNumber) {
        const id = this.props.match.params.id;
        console.log(`active page is ${pageNumber}`);
        axios.get(`http://127.0.0.1:8000/api/ms_keterampilan/viewflk/${id}?page=` + pageNumber)
            .then(response => {
                this.setState({
                    ms_keterampilan: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page
                });
            });
    }

    handlePageRiwayatPendidikanChange(pageNumber) {

        const id = this.props.match.params.id;
        console.log(`active page is ${pageNumber}`);
        axios.get(`http://127.0.0.1:8000/api/ms_riwayat_pendidikan/view?page=` + pageNumber)
            .then(response => {
                this.setState({
                    ms_riwayat_pendidikan: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page
                });
            });
    }

    handlePagePengalamanKerjaChange(pageNumber) {
        const id = this.props.match.params.id;
        console.log(`active page is ${pageNumber}`);
        axios.get(`http://127.0.0.1:8000/api/ms_pengalaman_kerja/view?page=` + pageNumber)
            .then(response => {
                this.setState({
                    ms_pengalaman_kerja: response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page
                });
            });
    }


    printDocument() {
        const input = document.getElementById('pdfdiv');
        html2canvas(input)
            .then((canvas) => {
                var imgWidth = 200;
                var pageHeight = 290;
                var imgHeight = canvas.height * imgWidth / canvas.width;
                var heightLeft = imgHeight;
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4')
                var position = 0;
                var heightLeft = imgHeight;
                pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                pdf.save("download.pdf");
            });
    }

    render() {
        return (
            <div className="content-wrapper">

                <section>
                    <Button
                        onClick={this.printDocument}
                        variant="warning"
                        color="primary">Generate Pdf</Button>
                </section>

                <section id="pdfdiv" className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="box box-solid">
                                            <div class="box-header with-border">
                                                <i class="fa fa-text-width"></i>

                                                <h3 class="box-title">Data Pribadi Pelamar</h3>
                                            </div>
                                            <div class="box-body">
                                                <dl class="dl-vertical">
                                                    <dt>Foto Pelamar</dt>
                                                    <dd><Image src={this.state.pel_foto} rounded /></dd>
                                                    <dt>No KTP</dt>
                                                    <dd>{this.state.pel_no_ktp}</dd>
                                                    <dt>Nama Lengkap</dt>
                                                    <dd>{this.state.pel_nama_lengkap}</dd>
                                                    <dt>Email</dt>
                                                    <dd>{this.state.pel_email}</dd>
                                                    <dt>Tanggal Lahir</dt>
                                                    <dd>{this.state.pel_tanggal_lahir}</dd>
                                                    <dt>Tempat Lahir</dt>
                                                    <dd>{this.state.pel_tempat_lahir}</dd>
                                                    <dt>Kewarganegaraan</dt>
                                                    <dd>{this.state.pel_kewarganegaraan}</dd>
                                                    <dt>Pendidikan Terakhir</dt>
                                                    <dd>{this.state.pel_pendidikan_terakhir}</dd>
                                                    <dt>Jabatan Terakhir</dt>
                                                    <dd>{this.state.pel_posisi}</dd>
                                                    <dt>No Telepon</dt>
                                                    <dd>{this.state.pel_no_telepon}</dd>
                                                    <dt>No Telepon Orang Tua</dt>
                                                    <dd>{this.state.pel_no_telepon_ortu}</dd>
                                                    <dt>Alamat</dt>
                                                    <dd>{this.state.pel_alamat}</dd>
                                                    <dt>Alamat Orang Tua</dt>
                                                    <dd>{this.state.pel_alamat_ortu}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="box box-solid">
                                            <div class="box-header with-border">
                                                <i class="fa fa-text-width"></i>

                                                <h3 class="box-title">Lingkungan Keluarga</h3>
                                            </div>
                                            <div class="box-body">
                                                <dl class="dl-vertical">
                                                    <dt>Status Hubungan :</dt>
                                                    <dd>{this.state.pel_status_pernikahan}</dd>
                                                    <dt>Tanggal Status Hubungan :</dt>
                                                    <dd>{this.state.pel_tanggal_status_pernikahan}</dd>
                                                    <dt>Susunan Anggota Keluarga :</dt>
                                                    <dd>{this.state.pel_susunan_keluarga}</dd>
                                                </dl>
                                            </div>
                                        </div>

                                        <div className="box">
                                            <div class="box-header with-border">
                                                <i class="fa fa-text-width"></i>

                                                <h3 class="box-title">Keterampilan</h3>
                                            </div>
                                            <div className="box-body">
                                                <table id="example1" className="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>No</th>
                                                            <th>Keterampilan</th>
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
                                                <div class="center">
                                                    <Pagination
                                                        activePage={this.state.activePage}
                                                        itemsCountPerPage={this.state.itemsCountPerPage}
                                                        totalItemsCount={this.state.totalItemsCount}
                                                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                                                        onChange={this.handlePageKeterampilanChange}
                                                        itemClass='page-item'
                                                        linkClass='page-link'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div class="col-md-6">
                                        <div className="box">
                                            <div class="box-header with-border">
                                                <i class="fa fa-text-width"></i>
                                                <h3 class="box-title">Pendidikan</h3>
                                            </div>
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
                                                <div class="center">
                                                    <Pagination
                                                        activePage={this.state.activePage}
                                                        itemsCountPerPage={this.state.itemsCountPerPage}
                                                        totalItemsCount={this.state.totalItemsCount}
                                                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                                                        onChange={this.handlePageRiwayatPendidikanChange}
                                                        itemClass='page-item'
                                                        linkClass='page-link'
                                                    />
                                                </div>
                                                <dl class="dl-vertical">
                                                    <dt>Alasan Memilih Jurusan :</dt>
                                                    <dd>{this.state.pel_alasan_memilih_jurusan}</dd>
                                                    <dt>Karya Ilmiah yang Pernah Dibuat :</dt>
                                                    <dd>{this.state.pel_karya_ilmiah}</dd>
                                                    <dt>Pendidikan Non-Formal :</dt>
                                                    <dd>{this.state.pel_pendidikan_non_formal}</dd>
                                                    <dt>Bahasa Asing yang Dikuasai :</dt>
                                                    <dd>{this.state.pel_bahasa}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div className="box">
                                            <div class="box-header with-border">
                                                <i class="fa fa-text-width"></i>
                                                <h3 class="box-title">Pengalaman Kerja</h3>
                                            </div>
                                            <div className="box-body">
                                                <table id="example1" className="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th>No</th>
                                                            <th>Nama Perusahaan</th>
                                                            <th>Tahun Mulai Bekerja</th>
                                                            <th>Tahun Selesai Bekerja</th>
                                                            <th>Lokasi</th>
                                                            <th>Gambaran Pekerjaan</th>
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
                                                                        <td>{ms_pengalaman_kerjas.pkj_gambaran_pekerjaan}</td>
                                                                    </tr>
                                                                ))
                                                                :
                                                                null
                                                        }
                                                    </tbody>
                                                </table>
                                                <div class="center">
                                                    <Pagination
                                                        activePage={this.state.activePage}
                                                        itemsCountPerPage={this.state.itemsCountPerPage}
                                                        totalItemsCount={this.state.totalItemsCount}
                                                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                                                        onChange={this.handlePagePengalamanKerjaChange}
                                                        itemClass='page-item'
                                                        linkClass='page-link'
                                                    />
                                                </div>
                                                <dl class="dl-vertical">
                                                    <dt>Orang yang Pernah Menjadi Atasan :</dt>
                                                    <dd>{this.state.pel_detail_atasan_bawahan}</dd>
                                                    <dt>Masalah yang Pernah Dihadapi dan Cara Mengatasinya :</dt>
                                                    <dd>{this.state.pel_masalah_dihadapi}</dd>
                                                    <dt>Pandangan/Kesan Terhadap Perusahaan yang Pernah Ditempati :</dt>
                                                    <dd>{this.state.pel_kesan_kerja}</dd>
                                                    <dt>Pembaharuan/Perubahan yang Pernah Dilakukan :</dt>
                                                    <dd>{this.state.pel_inovasi_kerja}</dd>
                                                    <dt>Orang yang Mendorong Hingga Taraf Kemajuan Saat Ini :</dt>
                                                    <dd>{this.state.pel_orang_yang_mendorong}</dd>
                                                    <dt>Cara Menghadapi Persoalan dalam Pekerjaan dan Mengambil Keputusan :</dt>
                                                    <dd>{this.state.pel_case_keputusan}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="box box-solid">
                                            <div class="box-header with-border">
                                                <i class="fa fa-text-width"></i>

                                                <h3 class="box-title">Minat dan Konsep Pribadi</h3>
                                            </div>
                                            <div class="box-body">
                                                <dl class="dl-vertical">
                                                    <dt>Cita-Cita :</dt>
                                                    <dd>{this.state.pel_cita_cita}</dd>
                                                    <dt>Hal yang Mendorong untuk Bekerja :</dt>
                                                    <dd>{this.state.pel_hal_mendorong_bekerja}</dd>
                                                    <dt>Alasan Ingin Bekerja di Perusahaan :</dt>
                                                    <dd>{this.state.pel_alasan_ingin_bekerja}</dd>
                                                    <dt>Gaji yang Diharapkan :</dt>
                                                    <dd>{this.state.pel_gaji_diharapkan}</dd>
                                                    <dt>Fasilitas yang Diharapkan :</dt>
                                                    <dd>{this.state.pel_fasilitas_diharapkan}</dd>
                                                    <dt>Waktu Dapat Mulai Bekerja :</dt>
                                                    <dd>{this.state.pel_kapan_mulai_kerja}</dd>
                                                    <dt>Tipe Orang yang Disenangi</dt>
                                                    <dd>{this.state.pel_tipe_orang_disenangi}</dd>
                                                    <dt>Hal Tersulit Dalam Mengambil Keputusan</dt>
                                                    <dd>{this.state.pel_hal_sulit_mengambil_keputusan}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="box box-solid">
                                            <div class="box-header with-border">
                                                <i class="fa fa-text-width"></i>
                                                <h3 class="box-title">Minat dan Konsep Pribadi</h3>
                                            </div>
                                            <div class="box-body">
                                                <div class="box">
                                                    <div class="box-body">
                                                        <table id="example2" class="table table-bordered table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th>No</th>
                                                                    <th>Jenis Pekerjaan</th>
                                                                    <th>No</th>
                                                                    <th>Jenis Pekerjaan</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Marketing</td>
                                                                    <td>6</td>
                                                                    <td>HRD</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Finance</td>
                                                                    <td>7</td>
                                                                    <td>Administrasi</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Accounting</td>
                                                                    <td>8</td>
                                                                    <td>Management Trainee</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>Audit</td>
                                                                    <td>9</td>
                                                                    <td>Legal</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td>Lain-lain</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <dl class="dl-vertical">
                                                    <dt>Jenis Pekerjaan yang Dipilih :</dt>
                                                    <dd>{this.state.pel_urutan_jenis_pekerjaan}</dd>
                                                    <dt>Lingkungan Kerja yang Disenangi :</dt>
                                                    <dd>{this.state.pel_lingkungan_kerja_diminati}</dd>
                                                    <dt>Ketersediaan Ditempatkan Di Luar Daerah</dt>
                                                    <dd>{this.state.pel_bersedia_diluar_daerah}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="box box-solid">
                                            <div class="box-header with-border">
                                                <i class="fa fa-text-width"></i>

                                                <h3 class="box-title">Aktivitas Sosial</h3>
                                            </div>
                                            <div class="box-body">
                                                <dl class="dl-vertical">
                                                    <dt>Kenalan Dalam Perusahaan Astra :</dt>
                                                    <dd>{this.state.pel_kenalan_di_perusahaan_astra}</dd>
                                                    <dt>Referensi Perusahaan Lain :</dt>
                                                    <dd>{this.state.pel_referensi_perusahaan}</dd>
                                                    <dt>Hobby/Kegemaran</dt>
                                                    <dd>{this.state.pel_hobi}</dd>
                                                    <dt>Cara Mengisi Waktu Luang :</dt>
                                                    <dd>{this.state.pel_cara_mengisi_waktu_luang}</dd>
                                                    <dt>Organisasi yang Pernah Diikuti :</dt>
                                                    <dd>{this.state.pel_organisasi_diikuti}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="box box-solid">
                                            <div class="box-header with-border">
                                                <i class="fa fa-text-width"></i>

                                                <h3 class="box-title">Lain-Lain</h3>
                                            </div>
                                            <div class="box-body">
                                                <dl class="dl-vertical">
                                                    <dt>Psikotes yang Pernah Diikuti :</dt>
                                                    <dd>{this.state.pel_psikotes}</dd>
                                                    <dt>Kekuatan :</dt>
                                                    <dd>{this.state.pel_kekuatan}</dd>
                                                    <dt>Kelemahan :</dt>
                                                    <dd>{this.state.pel_kelemahan}</dd>
                                                    <dt>Riwayat Penyakit :</dt>
                                                    <dd>{this.state.pel_riwayat_penyakit}</dd>
                                                    <dt>Persetujuan :</dt>
                                                    <dd>{this.state.pel_persetujuan}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        );
    }
}

export default DetailPelamar_Lamaran;