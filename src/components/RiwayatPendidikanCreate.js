import React, { Component } from "react";
import axios from 'axios'
//import PelamarList from './pelamar-listing.component';

export default class PengalamanKerjaCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            rpd_nama_lembaga_pendidikan : '',
            rpd_tanggal_lulus : '',
            rpd_kualifikasi : '',
            rpd_lokasi : '',
            rpd_jurusan : '',
            rpd_keterangan_prestasi : ''
        }
        this.handleNamaLembagaPendidikanInputChange = this.handleNamaLembagaPendidikanInputChange.bind(this);
        this.handleTanggalLulusInputChange = this.handleTanggalLulusInputChange.bind(this);
        this.handleKualifikasiInputChange = this.handleKualifikasiInputChange.bind(this);
        this.handleLokasiInputChange = this.handleLokasiInputChange.bind(this);
        this.handleJurusanInputChange = this.handleJurusanInputChange.bind(this);
        this.handleKeteranganPrestasiInputChange = this.handleKeteranganPrestasiInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleNamaLembagaPendidikanInputChange(event){
        this.setState({
            rpd_nama_lembaga_pendidikan : event.target.value
        })
    }

    handleTanggalLulusInputChange(event){
        this.setState({
            rpd_tanggal_lulus : event.target.value
        })
    }

    handleKualifikasiInputChange(event){
        this.setState({
            rpd_kualifikasi : event.target.value
        })
    }

    handleLokasiInputChange(event){
        this.setState({
            rpd_lokasi : event.target.value
        })
    }

    handleJurusanInputChange(event){
        this.setState({
            rpd_jurusan : event.target.value
        })
    }

    handleKeteranganPrestasiInputChange(event){
        this.setState({
            rpd_keterangan_prestasi : event.target.value
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/ms_riwayat_pendidikan/create',{
            rpd_nama_lembaga_pendidikan : this.state.rpd_nama_lembaga_pendidikan,
            rpd_tanggal_lulus : this.state.rpd_tanggal_lulus,
            rpd_kualifikasi : this.state.rpd_kualifikasi,
            rpd_lokasi : this.state.rpd_lokasi,
            rpd_jurusan : this.state.rpd_jurusan,
            rpd_keterangan_prestasi : this.state.rpd_keterangan_prestasi
        }).then(response => {
            this.setState({
                rpd_nama_lembaga_pendidikan : '',
                rpd_tanggal_lulus : '',
                rpd_kualifikasi : '',
                rpd_lokasi : '',
                rpd_jurusan : '',
                rpd_keterangan_prestasi : ''
            })
            this.props.history.push('/RiwayatPendidikanList');
        }).catch(err => console.log(err));
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Tambah Riwayat Pendidikan</div>

                            <div className="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="rpd_nama_lembaga_pendidikan"
                                        onChange={this.handleNamaLembagaPendidikanInputChange}
                                        value={this.state.rpd_nama_lembaga_pendidikan}
                                        className="form-control" 
                                        placeholder="Enter Nama Lembaga Pendidikan"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="date" 
                                        required
                                        name="rpd_tanggal_lulus"
                                        onChange={this.handleTanggalLulusInputChange}
                                        value={this.state.rpd_tanggal_lulus}
                                        className="form-control" 
                                        placeholder="Enter Tanggal Lulus"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="rpd_kualifikasi"
                                        onChange={this.handleKualifikasiInputChange}
                                        value={this.state.rpd_kualifikasi}
                                        className="form-control"
                                        placeholder="Enter Kualifikasi"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        required
                                        name="rpd_lokasi"
                                        onChange={this.handleLokasiInputChange}
                                        value={this.state.rpd_lokasi}
                                        className="form-control"
                                        placeholder="Enter Lokasi"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="rpd_jurusan"
                                        onChange={this.handleJurusanInputChange}
                                        value={this.state.rpd_jurusan}
                                        className="form-control"
                                        placeholder="Enter Jurusan"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="textarea"
                                        required
                                        name="rpd_keterangan_prestasi"
                                        onChange={this.handleKeteranganPrestasiInputChange}
                                        value={this.state.rpd_keterangan_prestasi}
                                        className="form-control"
                                        placeholder="Enter Keterangan Prestasi"/>
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