import React, { Component } from "react";
import axios from 'axios'
//import PelamarList from './pelamar-listing.component';

export default class PelamarRegistrasi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pel_nama_lengkap: '',
            pel_email: '',
            pel_no_telepon: '',
            pel_tanggal_lahir: '',
            pel_jenis_kelamin: '',
            pel_password:''
        }
        this.handleNamaLengkapInputChange = this.handleNamaLengkapInputChange.bind(this);
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
        this.handleNoTeleponInputChange = this.handleNoTeleponInputChange.bind(this);
        this.handleJenisKelaminInputChange = this.handleJenisKelaminInputChange.bind(this);
        this.handleTanggalLahirInputChange = this.handleTanggalLahirInputChange.bind(this);
        this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        //this.handleDelete = this.handleDelete.bind(this);
    }

    handleNamaLengkapInputChange(event) {
        this.setState({
            pel_nama_lengkap: event.target.value
        })
    }

    handleEmailInputChange(event) {
        this.setState({
            pel_email: event.target.value
        })
    }

    handleNoTeleponInputChange(event) {
        this.setState({
            pel_no_telepon: event.target.value
        })
    }

    handleJenisKelaminInputChange(event) {
        this.setState({
            pel_jenis_kelamin: event.target.value
        })
    }

    handleTanggalLahirInputChange(event) {
        this.setState({
            pel_tanggal_lahir: event.target.value
        })
    }

    handlePasswordInputChange(event) {
        this.setState({
            pel_password: event.target.value
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/ms_pelamar/regis', {
            pel_nama_lengkap: this.state.pel_nama_lengkap,
            pel_email: this.state.pel_email,
            pel_no_telepon: this.state.pel_no_telepon,
            pel_jenis_kelamin: this.state.pel_jenis_kelamin,
            pel_tanggal_lahir: this.state.pel_tanggal_lahir
        }).then(response => {
            this.setState({
                pel_nama_lengkap: '',
                pel_email: '',
                pel_no_telepon: '',
                pel_jenis_kelamin: '',
                pel_tanggal_lahir: ''
            })
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Registrasi Pelamar
                    </h1>
                    <ol className="breadcrumb">
                        <li className="active">Registrasi Pelamar</li>
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
                                            <label htmlFor="exampleInputEmail1">Nama Lengkap</label>
                                            <input type="text"
                                                required
                                                name="pel_nama_lengkap"
                                                onChange={this.handleNamaLengkapInputChange}
                                                value={this.state.pel_nama_lengkap}
                                                className="form-control"
                                                placeholder="Masukkan Nama Lengkap" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Alamat Pos-el</label>
                                            <input type="text"
                                                required
                                                name="pel_email"
                                                onChange={this.handleEmailInputChange}
                                                value={this.state.pel_email}
                                                className="form-control"
                                                placeholder="Masukkan Alamat Pos-el" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">No Telepon</label>
                                            <input type="text"
                                                required
                                                name="pel_no_telepon"
                                                onChange={this.handleNoTeleponInputChange}
                                                value={this.state.pel_no_telepon}
                                                className="form-control"
                                                placeholder="Masukkan No Telepon" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Jenis Kelamin</label>
                                            <br />
                                            <div onChange={this.handleJenisKelaminInputChange.bind(this)}>
                                                <input type="radio" name="pel_jenis_kelamin" value="Wanita" />
                                                Wanita
                                                <input type="radio" name="pel_jenis_kelamin" value="Pria" />
                                                Pria
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Tanggal Lahir</label>
                                            <input type="date"
                                                required
                                                name="pel_tanggal_lahir"
                                                onChange={this.handleTanggalLahirInputChange}
                                                value={this.state.pel_tanggal_lahir}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Password</label>
                                            <input type="password"
                                                required
                                                name="pel_password"
                                                onChange={this.handlePasswordInputChange}
                                                value={this.state.pel_password}
                                                className="form-control"
                                                placeholder="Masukkan Password" />
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

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Registrasi Pelamar</div>

                            <div className="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                            required
                                            name="pel_nama_lengkap"
                                            onChange={this.handleNamaLengkapInputChange}
                                            value={this.state.pel_nama_lengkap}
                                            className="form-control"
                                            placeholder="Enter Nama Lengkap" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                            required
                                            name="pel_email"
                                            onChange={this.handleEmailInputChange}
                                            value={this.state.pel_email}
                                            className="form-control"
                                            placeholder="Enter Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                            required
                                            name="pel_no_telepon"
                                            onChange={this.handleNoTeleponInputChange}
                                            value={this.state.pel_no_telepon}
                                            className="form-control"
                                            placeholder="Enter No Telepon" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                            required
                                            name="pel_jenis_kelamin"
                                            onChange={this.handleJenisKelaminInputChange}
                                            value={this.state.pel_jenis_kelamin}
                                            className="form-control"
                                            placeholder="Enter Jenis Kelamin" />
                                    </div>
                                    <div className="form-group">
                                        <input type="date"
                                            required
                                            name="pel_tanggal_lahir"
                                            onChange={this.handleTanggalLahirInputChange}
                                            value={this.state.pel_tanggal_lahir}
                                            className="form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Simpan Data Pelamar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}