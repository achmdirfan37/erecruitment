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
        this.handleNamaLembagaPendidikanUpdateChange = this.handleNamaLembagaPendidikanUpdateChange.bind(this);
        this.handleTanggalLulusUpdateChange = this.handleTanggalLulusUpdateChange.bind(this);
        this.handleKualifikasiUpdateChange = this.handleKualifikasiUpdateChange.bind(this);
        this.handleLokasiUpdateChange = this.handleLokasiUpdateChange.bind(this);
        this.handleJurusanUpdateChange = this.handleJurusanUpdateChange.bind(this);
        this.handleKeteranganPrestasiUpdateChange = this.handleKeteranganPrestasiUpdateChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/ms_riwayat_pendidikan/${id}/edit`)
        .then(response => {
            this.setState({
                rpd_nama_lembaga_pendidikan : response.data.rpd_nama_lembaga_pendidikan,
                rpd_tanggal_lulus : response.data.rpd_tanggal_lulus,
                rpd_kualifikasi : response.data.rpd_kualifikasi,
                rpd_lokasi : response.data.rpd_lokasi,
                rpd_jurusan : response.data.rpd_jurusan,
                rpd_keterangan_prestasi : response.data.rpd_keterangan_prestasi
            })
        }).catch(err => console.log(err));
    }

    handleNamaLembagaPendidikanUpdateChange(event){
        this.setState({
            rpd_nama_lembaga_pendidikan : event.target.value
        })
    }

    handleTanggalLulusUpdateChange(event){
        this.setState({
            rpd_tanggal_lulus : event.target.value
        })
    }

    handleKualifikasiUpdateChange(event){
        this.setState({
            rpd_kualifikasi : event.target.value
        })
    }

    handleLokasiUpdateChange(event){
        this.setState({
            rpd_lokasi : event.target.value
        })
    }

    handleJurusanUpdateChange(event){
        this.setState({
            rpd_jurusan : event.target.value
        })
    }

    handleKeteranganPrestasiUpdateChange(event){
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
                                        onChange={this.handleNamaLembagaPendidikanUpdateChange}
                                        value={this.state.rpd_nama_lembaga_pendidikan}
                                        className="form-control" 
                                        placeholder="Enter Nama Lembaga Pendidikan"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="date" 
                                        required
                                        name="rpd_tanggal_lulus"
                                        onChange={this.handleTanggalLulusUpdateChange}
                                        value={this.state.rpd_tanggal_lulus}
                                        className="form-control" 
                                        placeholder="Enter Tanggal Lulus"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="date"
                                        required
                                        name="rpd_kualifikasi"
                                        onChange={this.handleKualifikasiUpdateChange}
                                        value={this.state.rpd_kualifikasi}
                                        className="form-control"
                                        placeholder="Enter Kualifikasi"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        required
                                        name="rpd_lokasi"
                                        onChange={this.handleLokasiUpdateChange}
                                        value={this.state.rpd_lokasi}
                                        className="form-control"
                                        placeholder="Enter Lokasi"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="rpd_jurusan"
                                        onChange={this.handleJurusanUpdateChange}
                                        value={this.state.rpd_jurusan}
                                        className="form-control"
                                        placeholder="Enter Jurusan"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="textarea"
                                        required
                                        name="rpd_keterangan_prestasi"
                                        onChange={this.handleKeteranganPrestasiUpdateChange}
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