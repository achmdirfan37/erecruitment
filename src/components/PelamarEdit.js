import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Alert } from 'react-alert';

class PelamarEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pel_nama_lengkap: '',
            pel_email: '',
            pel_no_telepon: '',
            pel_tanggal_lahir: '',
            pel_jenis_kelamin: '',
            pel_alamat: '',
            pel_foto: ''
        }
        this.onChange = this.onChange.bind(this);
        this.handleNamaLengkapUpdateChange = this.handleNamaLengkapUpdateChange.bind(this);
        this.handleEmailUpdateChange = this.handleEmailUpdateChange.bind(this);
        this.handleNoTeleponUpdateChange = this.handleNoTeleponUpdateChange.bind(this);
        this.handleTanggalLahirUpdateChange = this.handleTanggalLahirUpdateChange.bind(this);
        this.handleJenisKelaminUpdateChange = this.handleJenisKelaminUpdateChange.bind(this);
        this.handleAlamatUpdateChange = this.handleAlamatUpdateChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/ms_pelamar/${id}/edit`)
            .then(response => {
                this.setState({
                    pel_foto: response.data.pel_foto,
                    pel_nama_lengkap: response.data.pel_nama_lengkap,
                    pel_email: response.data.pel_email,
                    pel_no_telepon: response.data.pel_no_telepon,
                    pel_tanggal_lahir: response.data.pel_tanggal_lahir,
                    pel_jenis_kelamin: response.data.pel_jenis_kelamin,
                    pel_alamat: response.data.pel_alamat
                })
            }).catch(err => console.log(err));
    }

    onChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.createFile(files[0]);
    }

    createFile(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({
                pel_foto: e.target.result
            })
        };
        reader.readAsDataURL(file);
    }

    handleNamaLengkapUpdateChange(event) {
        this.setState({
            pel_nama_lengkap: event.target.value
        })
    }

    handleEmailUpdateChange(event) {
        this.setState({
            pel_email: event.target.value
        })
    }

    handleNoTeleponUpdateChange(event) {
        this.setState({
            pel_no_telepon: event.target.value
        })
    }

    handleTanggalLahirUpdateChange(event) {
        this.setState({
            pel_tanggal_lahir: event.target.value
        })
    }

    handleJenisKelaminUpdateChange(event) {
        this.setState({
            pel_jenis_kelamin: event.target.value
        })
    }

    handleAlamatUpdateChange(event) {
        this.setState({
            pel_alamat: event.target.value
        })
    }

    handleFormSubmit(event) {
        alert("Data Berhasil Diubah!");
        event.preventDefault();
        const id = this.props.match.params.id;
        axios.put(`http://127.0.0.1:8000/api/ms_pelamar/${id}/update`, {
            file: this.state.pel_foto,
            pel_nama_lengkap: this.state.pel_nama_lengkap,
            pel_email: this.state.pel_email,
            pel_no_telepon: this.state.pel_no_telepon,
            pel_tanggal_lahir: this.state.pel_tanggal_lahir,
            pel_jenis_kelamin: this.state.pel_jenis_kelamin,
            pel_alamat: this.state.pel_alamat
        }).then(response => {
            this.setState({
                pel_foto: '',
                pel_nama_lengkap: '',
                pel_email: '',
                pel_no_telepon: '',
                pel_tanggal_lahir: '',
                pel_jenis_kelamin: '',
                pel_alamat: ''
            })
            this.props.history.push('/PelamarDataDiri');
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Data Diri
                    </h1>
                    <ol className="breadcrumb">
                        <li className="active">Data Diri</li>
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
                                            <label htmlFor="exampleInputEmail1">Foto Profil <font color="#ff0000"> format file *png, jpg, jpeg</font></label>
                                            <input className="input_imagem_artigo"
                                                type="file"
                                                required
                                                name="pel_foto"
                                                onChange={this.onChange}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Nama Lengkap</label>
                                            <input type="text"
                                                required
                                                name="pel_nama_lengkap"
                                                onChange={this.handleNamaLengkapUpdateChange}
                                                value={this.state.pel_nama_lengkap}
                                                className="form-control"
                                                placeholder="Masukkan Nama Lengkap" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email </label>
                                            <input type="text"
                                                required
                                                name="pel_email"
                                                onChange={this.handleEmailUpdateChange}
                                                value={this.state.pel_email}
                                                className="form-control"
                                                placeholder="Masukkan Email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Tanggal Lahir</label>
                                            <input type="date"
                                                required
                                                name="pel_tanggal_lahir"
                                                onChange={this.handleTanggalLahirUpdateChange}
                                                value={this.state.pel_tanggal_lahir}
                                                className="form-control"
                                                placeholder="Masukkan Tanggal Lahir" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">No Telepon</label>
                                            <input type="text"
                                                required
                                                name="pel_no_telepon"
                                                onChange={this.handleNoTeleponUpdateChange}
                                                value={this.state.pel_no_telepon}
                                                className="form-control"
                                                placeholder="Masukkan No Telepon" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Jenis Kelamin</label>
                                            <br />
                                            <div onChange={this.handleJenisKelaminUpdateChange.bind(this)}>
                                                <input type="radio" name="pel_jenis_kelamin" value="Wanita" />
                                                Wanita
                                                <input type="radio" name="pel_jenis_kelamin" value="Pria" />
                                                Pria
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Alamat</label>
                                            <textarea type="text"
                                                required
                                                name="pel_alamat"
                                                onChange={this.handleAlamatUpdateChange}
                                                value={this.state.pel_alamat}
                                                className="form-control"
                                                rows={5}
                                                cols={5}
                                                placeholder="Masukkan Alamat" />
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

export default PelamarEdit;