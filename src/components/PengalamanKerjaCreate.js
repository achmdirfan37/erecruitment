import React, { Component } from "react";
import axios from 'axios'
import { Alert } from 'react-alert';
//import PelamarList from './pelamar-listing.component';

export default class PengalamanKerjaCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pkj_nama_perusahaan: '',
            pkj_tanggal_mulai: '',
            pkj_tanggal_selesai: '',
            pkj_lokasi: '',
            pkj_industri: '',
            pkj_gambaran_pekerjaan: '',
            pkj_spesialisasi: '',
            pkj_jabatan: '',
            ms_bidang_pekerjaan: []
        }
        this.handleNamaPerusahaanInputChange = this.handleNamaPerusahaanInputChange.bind(this);
        this.handleTanggalMulaiInputChange = this.handleTanggalMulaiInputChange.bind(this);
        this.handleTanggalSelesaiInputChange = this.handleTanggalSelesaiInputChange.bind(this);
        this.handleLokasiInputChange = this.handleLokasiInputChange.bind(this);
        this.handleIndustriInputChange = this.handleIndustriInputChange.bind(this);
        this.handleGambarPekerjaanInputChange = this.handleGambarPekerjaanInputChange.bind(this);
        this.handleSpesialisasiInputChange = this.handleSpesialisasiInputChange.bind(this);
        this.handleBidangPekerjaanInputChange = this.handleBidangPekerjaanInputChange.bind(this);
        this.handleJabatanInputChange = this.handleJabatanInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {

        axios.get('http://127.0.0.1:8000/api/ms_bidang_pekerjaan/ddl')
            .then(response => {
                this.setState({
                    ms_bidang_pekerjaan: response.data.data
                });
            });
    }

    handleNamaPerusahaanInputChange(event) {
        this.setState({
            pkj_nama_perusahaan: event.target.value
        })
    }

    handleTanggalMulaiInputChange(event) {
        this.setState({
            pkj_tanggal_mulai: event.target.value
        })
    }

    handleTanggalSelesaiInputChange(event) {
        this.setState({
            pkj_tanggal_selesai: event.target.value
        })
    }

    handleLokasiInputChange(event) {
        this.setState({
            pkj_lokasi: event.target.value
        })
    }

    handleIndustriInputChange(event) {
        this.setState({
            pkj_industri: event.target.value
        })
    }

    handleSpesialisasiInputChange(event) {
        this.setState({
            pkj_spesialisasi: event.target.value
        })
    }

    handleGambarPekerjaanInputChange(event) {
        this.setState({
            pkj_gambaran_pekerjaan: event.target.value
        })
    }

    handleBidangPekerjaanInputChange(event) {
        this.setState({
            pkj_bidang_kerja: event.target.value
        })
    }

    handleJabatanInputChange(event) {
        this.setState({
            pkj_jabatan: event.target.value
        })
    }

    handleFormSubmit(event) {
        alert("Your Data is Saved!");
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/ms_pengalaman_kerja/create', {
            pkj_nama_perusahaan: this.state.pkj_nama_perusahaan,
            pkj_tanggal_mulai: this.state.pkj_tanggal_mulai,
            pkj_tanggal_selesai: this.state.pkj_tanggal_selesai,
            pkj_lokasi: this.state.pkj_lokasi,
            pkj_industri: this.state.pkj_industri,
            pkj_gambaran_pekerjaan: this.state.pkj_gambaran_pekerjaan,
            pkj_jabatan: this.state.pkj_jabatan,
            pkj_bidang_kerja: this.state.pkj_bidang_kerja,
            pkj_spesialisasi: this.state.pkj_spesialisasi
        }).then(response => {
            this.setState({
                pkj_nama_perusahaan: '',
                pkj_tanggal_mulai: '',
                pkj_tanggal_selesai: '',
                pkj_lokasi: '',
                pkj_industri: '',
                pkj_gambaran_pekerjaan: '',
                pkj_spesialisasi: '',
                pkj_jabatan: '',
                pkj_bidang_kerja: ''
            })
            this.props.history.push('/PengalamanKerjaList');
        }).catch(err => console.log(err));
    }

    render() {

        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Work Experience Data
                    </h1>
                    <ol className="breadcrumb">
                        <li className="active">Work Experience Data</li>
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
                                            <label htmlFor="exampleInputEmail1">Company Name</label>
                                            <input type="text"
                                                required
                                                name="pkj_nama_perusahaan"
                                                onChange={this.handleNamaPerusahaanInputChange}
                                                value={this.state.pkj_nama_perusahaan}
                                                className="form-control"
                                                placeholder="Enter Company Name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Start Year of Work</label>
                                            <input type="date"
                                                required
                                                name="pkj_tanggal_mulai"
                                                onChange={this.handleTanggalMulaiInputChange}
                                                value={this.state.pkj_tanggal_mulai}
                                                className="form-control"
                                                placeholder="Enter Start Year of Work" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Finish Year of Work</label>
                                            <input type="date"
                                                required
                                                name="pkj_tanggal_selesai"
                                                onChange={this.handleTanggalSelesaiInputChange}
                                                value={this.state.pkj_tanggal_selesai}
                                                className="form-control"
                                                placeholder="Enter Finish Year of Work" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Location</label>
                                            <input type="text"
                                                required
                                                name="pkj_lokasi"
                                                onChange={this.handleLokasiInputChange}
                                                value={this.state.pkj_lokasi}
                                                className="form-control"
                                                placeholder="Enter Location" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Industry</label>
                                            <input type="text"
                                                required
                                                name="pkj_industri"
                                                onChange={this.handleIndustriInputChange}
                                                value={this.state.pkj_industri}
                                                className="form-control"
                                                placeholder="Enter Industry" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Position</label>
                                            <select className="form-control select2" value={this.state.pkj_jabatan}
                                                onChange={(event) => this.setState({ pkj_jabatan: event.target.value })}>
                                                <option value="Staff">Staff</option>
                                                <option value="Team Leader">Team Leader</option>
                                                <option value="Supervisor">Supervisor</option>
                                                <option value="Manager">Manager</option>
                                                <option value="General Manager">General Manager</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Field of Work</label>
                                            <select className="form-control select2" value={this.state.pkj_bidang_kerja}
                                                onChange={(event) => this.setState({ pkj_bidang_kerja: event.target.value })}>
                                                {this.state.ms_bidang_pekerjaan.map(bidangs => (
                                                    <option key={bidangs.id} value={bidangs.id}>
                                                        {bidangs.bid_nama}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Specialization</label>
                                            <input type="text"
                                                required
                                                name="pkj_spesialisasi"
                                                onChange={this.handleSpesialisasiInputChange}
                                                value={this.state.pkj_spesialisasi}
                                                className="form-control"
                                                placeholder="Enter Specialization" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Job Description</label>
                                            <input type="textarea"
                                                required
                                                name="pkj_gambaran_pekerjaan"
                                                onChange={this.handleGambarPekerjaanInputChange}
                                                value={this.state.pkj_gambaran_pekerjaan}
                                                className="form-control"
                                                placeholder="Enter Job Description"
                                                row={5}
                                                cols={5} />
                                        </div>
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-primary">Simpan Data</button>
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