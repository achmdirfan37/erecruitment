import React, { Component } from "react";
import axios from 'axios'
//import PelamarList from './pelamar-listing.component';

class PengalamanKerjaEdit extends Component {
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
        this.handleNamaPerusahaanUpdateChange = this.handleNamaPerusahaanUpdateChange.bind(this);
        this.handleTanggalMulaiUpdateChange = this.handleTanggalMulaiUpdateChange.bind(this);
        this.handleTanggalSelesaiUpdateChange = this.handleTanggalSelesaiUpdateChange.bind(this);
        this.handleLokasiUpdateChange = this.handleLokasiUpdateChange.bind(this);
        this.handleIndustriUpdateChange = this.handleIndustriUpdateChange.bind(this);
        this.handleGambarPekerjaanUpdateChange = this.handleGambarPekerjaanUpdateChange.bind(this);
        this.handleSpesialisasiUpdateChange = this.handleSpesialisasiUpdateChange.bind(this);
        this.handleBidangPekerjaanUpdateChange = this.handleBidangPekerjaanUpdateChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        //this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/ms_pengalaman_kerja/${id}/edit`)
        .then(response => {
            this.setState({
                pkj_nama_perusahaan : response.data.pkj_nama_perusahaan,
                pkj_tanggal_mulai : response.data.pkj_tanggal_mulai,
                pkj_tanggal_selesai : response.data.pkj_tanggal_selesai,
                pkj_lokasi : response.data.pkj_lokasi,
                pkj_industri : response.data.pkj_industri,
                pkj_gambaran_pekerjaan : response.data.pkj_gambaran_pekerjaan,
                pkj_spesialisasi : response.data.pkj_spesialisasi,
                pkj_bidang_kerja : response.data.pkj_bidang_kerja
            })
        }).catch(err => console.log(err));
    }


    handleNamaPerusahaanUpdateChange(event){
        this.setState({
            pkj_nama_perusahaan : event.target.value
        })
    }

    handleTanggalMulaiUpdateChange(event){
        this.setState({
            pkj_tanggal_mulai : event.target.value
        })
    }

    handleTanggalSelesaiUpdateChange(event){
        this.setState({
            pkj_tanggal_selesai : event.target.value
        })
    }

    handleLokasiUpdateChange(event){
        this.setState({
            pkj_lokasi : event.target.value
        })
    }

    handleIndustriUpdateChange(event){
        this.setState({
            pkj_industri : event.target.value
        })
    }

    handleSpesialisasiUpdateChange(event){
        this.setState({
            pkj_spesialisasi : event.target.value
        })
    }

    handleGambarPekerjaanUpdateChange(event){
        this.setState({
            pkj_gambaran_pekerjaan : event.target.value
        })
    }

    handleBidangPekerjaanUpdateChange(event){
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
                                        onChange={this.handleNamaPerusahaanUpdateChange}
                                        value={this.state.pkj_nama_perusahaan}
                                        className="form-control" 
                                        placeholder="Enter Nama Perusahaan"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="date" 
                                        required
                                        name="pkj_tanggal_mulai"
                                        onChange={this.handleTanggalMulaiUpdateChange}
                                        value={this.state.pkj_tanggal_mulai}
                                        className="form-control" 
                                        placeholder="Enter Tanggal Mulai"
                                        data-date-format="dd/mm/yyyy"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="date"
                                        required
                                        name="pkj_tanggal_selesai"
                                        onChange={this.handleTanggalSelesaiUpdateChange}
                                        value={this.state.pkj_tanggal_selesai}
                                        className="form-control"
                                        placeholder="Enter Tanggal Selesai"
                                        data-date-format="dd/mm/yyyy"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        required
                                        name="pkj_lokasi"
                                        onChange={this.handleLokasiUpdateChange}
                                        value={this.state.pkj_lokasi}
                                        className="form-control"
                                        placeholder="Enter Lokasi"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="pkj_industri"
                                        onChange={this.handleIndustriUpdateChange}
                                        value={this.state.pkj_industri}
                                        className="form-control"
                                        placeholder="Enter Industri"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="textarea"
                                        required
                                        name="pkj_gambaran_pekerjaan"
                                        onChange={this.handleGambarPekerjaanUpdateChange}
                                        value={this.state.pkj_gambaran_pekerjaan}
                                        className="form-control"
                                        placeholder="Enter Gambaran Pekerjaan"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="pkj_spesialisasi"
                                        onChange={this.handleSpesialisasiUpdateChange}
                                        value={this.state.pkj_spesialisasi}
                                        className="form-control"
                                        placeholder="Enter Spesialisasi"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="pkj_bidang_kerja"
                                        onChange={this.handleBidangPekerjaanUpdateChange}
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

export default PengalamanKerjaEdit;