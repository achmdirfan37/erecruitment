import React, { Component } from "react";
import axios from 'axios'
//import PelamarList from './pelamar-listing.component';

export default class LowonganEdit extends Component {
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
        this.handleJudulUpdateChange = this.handleJudulUpdateChange.bind(this);
        this.handleDeskripsiUpdateChange = this.handleDeskripsiUpdateChange.bind(this);
        this.handleGajiUpdateChange = this.handleGajiUpdateChange.bind(this);
        this.handleTanggalDitutupUpdateChange = this.handleTanggalDitutupUpdateChange.bind(this);
        this.handleKualifikasiUpdateChange = this.handleKualifikasiUpdateChange.bind(this);
        this.handleJabatanUpdateChange = this.handleJabatanUpdateChange.bind(this);
        this.handlePerusahaanUpdateChange = this.handlePerusahaanUpdateChange.bind(this);
        this.handleBidangKerjaUpdateChange = this.handleBidangKerjaUpdateChange.bind(this);
        this.handleSpesialisasiUpdateChange = this.handleSpesialisasiUpdateChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/ms_lowongan/${id}/edit`)
        .then(response => {
            this.setState({
                low_judul : response.data.low_judul,
                low_deskripsi : response.data.low_deskripsi,
                low_gaji : response.data.low_gaji,
                low_tanggal_ditutup : response.data.low_tanggal_ditutup,
                low_kualifikasi : response.data.low_kualifikasi,
                low_jabatan : response.data.low_jabatan,
                low_perusahaan : response.data.low_perusahaan,
                low_bidang_kerja : response.data.low_bidang_kerja,
                low_spesialisasi : response.data.low_spesialisasi
            })
        }).catch(err => console.log(err));
    }

    handleJudulUpdateChange(event){
        this.setState({
            low_judul : event.target.value
        })
    }

    handleDeskripsiUpdateChange(event){
        this.setState({
            low_deskripsi : event.target.value
        })
    }

    handleGajiUpdateChange(event){
        this.setState({
            low_gaji : event.target.value
        })
    }

    handleTanggalDitutupUpdateChange(event){
        this.setState({
            low_tanggal_ditutup : event.target.value
        })
    }

    handleKualifikasiUpdateChange(event){
        this.setState({
            low_kualifikasi : event.target.value
        })
    }

    handleJabatanUpdateChange(event){
        this.setState({
            low_jabatan : event.target.value
        })
    }

    handlePerusahaanUpdateChange(event){
        this.setState({
            low_perusahaan : event.target.value
        })
    }

    handleBidangKerjaUpdateChange(event){
        this.setState({
            low_bidang_kerja : event.target.value
        })
    }

    handleSpesialisasiUpdateChange(event){
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
                                        onChange={this.handleJudulUpdateChange}
                                        value={this.state.low_judul}
                                        className="form-control" 
                                        placeholder="Enter Judul Lowongan"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="low_deskripsi"
                                        onChange={this.handleDeskripsiUpdateChange}
                                        value={this.state.low_deskripsi}
                                        className="form-control" 
                                        placeholder="Enter Deskripsi"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="low_gaji"
                                        onChange={this.handleGajiUpdateChange}
                                        value={this.state.low_gaji}
                                        className="form-control" 
                                        placeholder="Enter Gaji"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="date" 
                                        required
                                        name="low_tanggal_ditutup"
                                        onChange={this.handleTanggalDitutupUpdateChange}
                                        value={this.state.low_tanggal_ditutup}
                                        className="form-control" 
                                        placeholder="Enter Tanggal Ditutup"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="low_kualifikasi"
                                        onChange={this.handleKualifikasiUpdateChange}
                                        value={this.state.low_kualifikasi}
                                        className="form-control"
                                        placeholder="Enter Kualifikasi"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        required
                                        name="low_jabatan"
                                        onChange={this.handleJabatanUpdateChange}
                                        value={this.state.low_jabatan}
                                        className="form-control"
                                        placeholder="Enter Jabatan"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="low_bidang_kerja"
                                        onChange={this.handleBidangKerjaUpdateChange}
                                        value={this.state.low_bidang_kerja}
                                        className="form-control"
                                        placeholder="Enter Bidang Kerja"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="low_spesialisasi"
                                        onChange={this.handleSpesialisasiUpdateChange}
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