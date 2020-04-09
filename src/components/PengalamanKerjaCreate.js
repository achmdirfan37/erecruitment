import React, { Component } from "react";
import axios from 'axios'
//import PelamarList from './pelamar-listing.component';

export default class PengalamanKerjaCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            pkj_nama_perusahaan : '',
            pkj_tanggal_mulai : '',
            pkj_tanggal_selesai : '',
            pkj_lokasi : '',
            pkj_industri : '',
            pkj_gambaran_pekerjaan : '',
            pkj_spesialisasi : '',
            pkj_bidang_kerja : ''
        }
        this.handleNamaPerusahaanInputChange = this.handleNamaPerusahaanInputChange.bind(this);
        this.handleTanggalMulaiInputChange = this.handleTanggalMulaiInputChange.bind(this);
        this.handleTanggalSelesaiInputChange = this.handleTanggalSelesaiInputChange.bind(this);
        this.handleLokasiInputChange = this.handleLokasiInputChange.bind(this);
        this.handleIndustriInputChange = this.handleIndustriInputChange.bind(this);
        this.handleGambarPekerjaanInputChange = this.handleGambarPekerjaanInputChange.bind(this);
        this.handleSpesialisasiInputChange = this.handleSpesialisasiInputChange.bind(this);
        this.handleBidangPekerjaanInputChange = this.handleBidangPekerjaanInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleNamaPerusahaanInputChange(event){
        this.setState({
            pkj_nama_perusahaan : event.target.value
        })
    }

    handleTanggalMulaiInputChange(event){
        this.setState({
            pkj_tanggal_mulai : event.target.value
        })
    }

    handleTanggalSelesaiInputChange(event){
        this.setState({
            pkj_tanggal_selesai : event.target.value
        })
    }

    handleLokasiInputChange(event){
        this.setState({
            pkj_lokasi : event.target.value
        })
    }

    handleIndustriInputChange(event){
        this.setState({
            pkj_industri : event.target.value
        })
    }

    handleSpesialisasiInputChange(event){
        this.setState({
            pkj_spesialisasi : event.target.value
        })
    }

    handleGambarPekerjaanInputChange(event){
        this.setState({
            pkj_gambaran_pekerjaan : event.target.value
        })
    }

    handleBidangPekerjaanInputChange(event){
        this.setState({
            pkj_bidang_kerja : event.target.value
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/ms_pengalaman_kerja/create',{
            pkj_nama_perusahaan : this.state.pkj_nama_perusahaan,
            pkj_tanggal_mulai : this.state.pkj_tanggal_mulai,
            pkj_tanggal_selesai : this.state.pkj_tanggal_selesai,
            pkj_lokasi : this.state.pkj_lokasi,
            pkj_industri : this.state.pkj_industri,
            pkj_gambaran_pekerjaan : this.state.pkj_gambaran_pekerjaan,
            pkj_bidang_kerja : this.state.pkj_bidang_kerja,
            pkj_spesialisasi : this.state.pkj_spesialisasi
        }).then(response => {
            this.setState({
                pkj_nama_perusahaan : '',
                pkj_tanggal_mulai : '',
                pkj_tanggal_selesai : '',
                pkj_lokasi : '',
                pkj_industri : '',
                pkj_gambaran_pekerjaan : '',
                pkj_spesialisasi : '',
                pkj_bidang_kerja : ''
            })
            this.props.history.push('/PengalamanKerjaList');
        }).catch(err => console.log(err));
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Tambah Pengalaman Kerja</div>

                            <div className="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="pkj_nama_perusahaan"
                                        onChange={this.handleNamaPerusahaanInputChange}
                                        value={this.state.pkj_nama_perusahaan}
                                        className="form-control" 
                                        placeholder="Enter Nama Perusahaan"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="date" 
                                        required
                                        name="pkj_tanggal_mulai"
                                        onChange={this.handleTanggalMulaiInputChange}
                                        value={this.state.pkj_tanggal_mulai}
                                        className="form-control" 
                                        placeholder="Enter Tanggal Mulai"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="date"
                                        required
                                        name="pkj_tanggal_selesai"
                                        onChange={this.handleTanggalSelesaiInputChange}
                                        value={this.state.pkj_tanggal_selesai}
                                        className="form-control"
                                        placeholder="Enter Tanggal Selesai"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        required
                                        name="pkj_lokasi"
                                        onChange={this.handleLokasiInputChange}
                                        value={this.state.pkj_lokasi}
                                        className="form-control"
                                        placeholder="Enter Lokasi"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="pkj_industri"
                                        onChange={this.handleIndustriInputChange}
                                        value={this.state.pkj_industri}
                                        className="form-control"
                                        placeholder="Enter Industri"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="textarea"
                                        required
                                        name="pkj_gambaran_pekerjaan"
                                        onChange={this.handleGambarPekerjaanInputChange}
                                        value={this.state.pkj_gambaran_pekerjaan}
                                        className="form-control"
                                        placeholder="Enter Gambaran Pekerjaan"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="pkj_spesialisasi"
                                        onChange={this.handleSpesialisasiInputChange}
                                        value={this.state.pkj_spesialisasi}
                                        className="form-control"
                                        placeholder="Enter Spesialisasi"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="pkj_bidang_kerja"
                                        onChange={this.handleBidangPekerjaanInputChange}
                                        value={this.state.pkj_bidang_kerja}
                                        className="form-control"
                                        placeholder="Enter Bidang Pekerjaan"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Simpan Data Perusahaan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}