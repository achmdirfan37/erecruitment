import React, { Component } from "react";
import axios from 'axios'
//import PelamarList from './pelamar-listing.component';

export default class LowonganCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            low_judul : '',
            low_deskripsi : '',
            low_gaji : '',
            low_tanggal_ditutup : '',
            low_kualifikasi : '',
            low_jabatan : '',
            low_perusahaan : '',
            low_bidang_kerja : '',
            low_spesialisasi : ''
        }
        this.handleJudulInputChange = this.handleJudulInputChange.bind(this);
        this.handleDeskripsiInputChange = this.handleDeskripsiInputChange.bind(this);
        this.handleGajiInputChange = this.handleGajiInputChange.bind(this);
        this.handleTanggalDitutupInputChange = this.handleTanggalDitutupInputChange.bind(this);
        this.handleKualifikasiInputChange = this.handleKualifikasiInputChange.bind(this);
        this.handleJabatanInputChange = this.handleJabatanInputChange.bind(this);
        this.handlePerusahaanInputChange = this.handlePerusahaanInputChange.bind(this);
        this.handleBidangKerjaInputChange = this.handleBidangKerjaInputChange.bind(this);
        this.handleSpesialisasiInputChange = this.handleSpesialisasiInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleJudulInputChange(event){
        this.setState({
            low_judul : event.target.value
        })
    }

    handleDeskripsiInputChange(event){
        this.setState({
            low_deskripsi : event.target.value
        })
    }

    handleGajiInputChange(event){
        this.setState({
            low_gaji : event.target.value
        })
    }

    handleTanggalDitutupInputChange(event){
        this.setState({
            low_tanggal_ditutup : event.target.value
        })
    }

    handleKualifikasiInputChange(event){
        this.setState({
            low_kualifikasi : event.target.value
        })
    }

    handleJabatanInputChange(event){
        this.setState({
            low_jabatan : event.target.value
        })
    }

    handlePerusahaanInputChange(event){
        this.setState({
            low_perusahaan : event.target.value
        })
    }

    handleBidangKerjaInputChange(event){
        this.setState({
            low_bidang_kerja : event.target.value
        })
    }

    handleSpesialisasiInputChange(event){
        this.setState({
            low_spesialisasi : event.target.value
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/ms_lowongan/create',{
            low_judul : this.state.low_judul,
            low_deskripsi : this.state.low_deskripsi,
            low_gaji : this.state.low_gaji,
            low_tanggal_ditutup : this.state.rpd_tanggal_lulus,
            low_kualifikasi : this.state.low_kualifikasi,
            low_jabatan : this.state.low_jabatan,
            low_perusahaan : this.state.low_perusahaan,
            low_bidang_kerja : this.state.low_bidang_kerja,
            low_spesialisasi : this.state.low_spesialisasi
        }).then(response => {
            this.setState({
                low_judul : '',
                low_deskripsi : '',
                low_gaji : '',
                low_tanggal_ditutup : '',
                low_kualifikasi : '',
                low_jabatan : '',
                low_perusahaan : '',
                low_bidang_kerja : '',
                low_spesialisasi : ''
            })
            this.props.history.push('/LowonganList');
        }).catch(err => console.log(err));
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Tambah Lowongan</div>

                            <div className="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="low_judul"
                                        onChange={this.handleJudulInputChange}
                                        value={this.state.low_judul}
                                        className="form-control" 
                                        placeholder="Enter Judul Lowongan"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="low_deskripsi"
                                        onChange={this.handleDeskripsiInputChange}
                                        value={this.state.low_deskripsi}
                                        className="form-control" 
                                        placeholder="Enter Deskripsi"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="low_gaji"
                                        onChange={this.handleGajiInputChange}
                                        value={this.state.low_gaji}
                                        className="form-control" 
                                        placeholder="Enter Gaji"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="date" 
                                        required
                                        name="low_tanggal_ditutup"
                                        onChange={this.handleTanggalDitutupInputChange}
                                        value={this.state.low_tanggal_ditutup}
                                        className="form-control" 
                                        placeholder="Enter Tanggal Ditutup"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="low_kualifikasi"
                                        onChange={this.handleKualifikasiInputChange}
                                        value={this.state.low_kualifikasi}
                                        className="form-control"
                                        placeholder="Enter Kualifikasi"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        required
                                        name="low_jabatan"
                                        onChange={this.handleJabatanInputChange}
                                        value={this.state.low_jabatan}
                                        className="form-control"
                                        placeholder="Enter Jabatan"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="low_bidang_kerja"
                                        onChange={this.handleBidangKerjaInputChange}
                                        value={this.state.low_bidang_kerja}
                                        className="form-control"
                                        placeholder="Enter Bidang Kerja"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="low_spesialisasi"
                                        onChange={this.handleSpesialisasiInputChange}
                                        value={this.state.low_spesialisasi}
                                        className="form-control"
                                        placeholder="Enter Spesialisasi"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Simpan Data Riwayat Pendidikan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}