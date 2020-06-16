import React, { Component } from "react";
import axios from 'axios'
import { Alert } from 'react-alert';
//import PelamarList from './pelamar-listing.component';

export default class RiwayatPendidikanCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rpd_nama_lembaga_pendidikan: '',
            rpd_tahun_lulus: '',
            rpd_kualifikasi: '',
            rpd_lokasi: '',
            rpd_jurusan: '',
            rpd_keterangan_prestasi: ''
        }
        this.handleNamaLembagaPendidikanInputChange = this.handleNamaLembagaPendidikanInputChange.bind(this);
        this.handleTahunLulusInputChange = this.handleTahunLulusInputChange.bind(this);
        this.handleKualifikasiInputChange = this.handleKualifikasiInputChange.bind(this);
        this.handleLokasiInputChange = this.handleLokasiInputChange.bind(this);
        this.handleJurusanInputChange = this.handleJurusanInputChange.bind(this);
        this.handleKeteranganPrestasiInputChange = this.handleKeteranganPrestasiInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleNamaLembagaPendidikanInputChange(event) {
        this.setState({
            rpd_nama_lembaga_pendidikan: event.target.value
        })
    }

    handleTahunLulusInputChange(event) {
        this.setState({
            rpd_tahun_lulus: event.target.value
        })
    }

    handleKualifikasiInputChange(event) {
        this.setState({
            rpd_kualifikasi: event.target.value
        })
    }

    handleLokasiInputChange(event) {
        this.setState({
            rpd_lokasi: event.target.value
        })
    }

    handleJurusanInputChange(event) {
        this.setState({
            rpd_jurusan: event.target.value
        })
    }

    handleKeteranganPrestasiInputChange(event) {
        this.setState({
            rpd_keterangan_prestasi: event.target.value
        })
    }

    handleFormSubmit(event) {
        alert("Your Data is Saved!");
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/ms_riwayat_pendidikan/create', {
            rpd_nama_lembaga_pendidikan: this.state.rpd_nama_lembaga_pendidikan,
            rpd_tahun_lulus: this.state.rpd_tahun_lulus,
            rpd_kualifikasi: this.state.rpd_kualifikasi,
            rpd_lokasi: this.state.rpd_lokasi,
            rpd_jurusan: this.state.rpd_jurusan,
            rpd_keterangan_prestasi: this.state.rpd_keterangan_prestasi
        }).then(response => {
            this.setState({
                rpd_nama_lembaga_pendidikan: '',
                rpd_tahun_lulus: '',
                rpd_kualifikasi: '',
                rpd_lokasi: '',
                rpd_jurusan: '',
                rpd_keterangan_prestasi: ''
            })
            this.props.history.push('/RiwayatPendidikanList');
        }).catch(err => console.log(err));
    }

    render() {

        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Educational Background Data
                    </h1>
                    <ol className="breadcrumb">
                        <li className="active">Educational Background Data</li>
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
                                            <label htmlFor="exampleInputEmail1">Name of Educational Institution</label>
                                            <input type="text"
                                                required
                                                name="rpd_nama_lembaga_pendidikan"
                                                onChange={this.handleNamaLembagaPendidikanInputChange}
                                                value={this.state.rpd_nama_lembaga_pendidikan}
                                                className="form-control"
                                                placeholder="Enter Name of Educational Institution" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Graduation Year</label>
                                            <input type="text"
                                                required
                                                name="rpd_tanggal_lulus"
                                                onChange={this.handleTahunLulusInputChange}
                                                value={this.state.rpd_tahun_lulus}
                                                className="form-control"
                                                placeholder="Enter Graduation" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Educational Stage</label>
                                            <select className="form-control select2" value={this.state.rpd_kualifikasi}
                                                onChange={(event) => this.setState({ rpd_kualifikasi: event.target.value })}>
                                                <option value="SMA/K">SMA/K</option>
                                                <option value="D1">D1</option>
                                                <option value="D3">D3</option>
                                                <option value="D4">D4</option>
                                                <option value="S1">S1</option>
                                                <option value="S2">S2</option>
                                                <option value="S3">S3</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Location</label>
                                            <input type="text"
                                                required
                                                name="rpd_lokasi"
                                                onChange={this.handleLokasiInputChange}
                                                value={this.state.rpd_lokasi}
                                                className="form-control"
                                                placeholder="Enter Loacation" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Majors</label>
                                            <input type="text"
                                                required
                                                name="rpd_jurusan"
                                                onChange={this.handleJurusanInputChange}
                                                value={this.state.rpd_jurusan}
                                                className="form-control"
                                                placeholder="Enter Majors" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Description of Achievement</label>
                                            <textarea type="text"
                                                required
                                                name="rpd_keterangan_prestasi"
                                                onChange={this.handleKeteranganPrestasiInputChange}
                                                value={this.state.rpd_keterangan_prestasi}
                                                className="form-control"
                                                placeholder="Enter Description of Achievement"
                                                rows={5}
                                                cols={5} />
                                        </div>
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-primary">Save Data</button>
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