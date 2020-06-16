import React, { Component } from "react";
import axios from 'axios'
//import PelamarList from './pelamar-listing.component';

export default class PewawancaraCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pers_nama_lengkap: '',
            pers_email: '',
            pers_perusahaan: '',
            pers_no_telepon: '',
            ms_perusahaan: []
        }

        this.handleNamaLengkapInputChange = this.handleNamaLengkapInputChange.bind(this);
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
        this.handlePerusahaanInputChange = this.handlePerusahaanInputChange.bind(this);
        this.handleNoTeleponInputChange = this.handleNoTeleponInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/ms_person/showPerusahaan')
            .then(response => {
                this.setState({
                    ms_perusahaan: response.data.data
                });
            });
    }

    handleNamaLengkapInputChange(event) {
        this.setState({
            pers_nama_lengkap: event.target.value
        })
    }

    
    handleNoTeleponInputChange(event) {
        this.setState({
            pers_no_telepon: event.target.value
        })
    }

    handleEmailInputChange(event) {
        this.setState({
            pers_email: event.target.value
        })
    }

    handlePerusahaanInputChange(event) {
        this.setState({
            pers_perusahaan: event.target.value
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/ms_person/createPewawancara', {
            pers_nama_lengkap: this.state.pers_nama_lengkap,
            pers_email: this.state.pers_email,
            pers_perusahaan: this.state.pers_perusahaan,
            pers_no_telepon: this.state.pers_no_telepon
        }).then(response => {
            this.setState({
                pers_nama_lengkap: '',
                pers_email: '',
                pers_perusahaan: '',
                pers_no_telepon: ''
            })
            this.props.history.push('/PewawancaraList');
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Pewawancara Data
                    </h1>
                    <ol className="breadcrumb">
                        <li className="active">Pewawancara Data</li>
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
                                            <label htmlFor="">Nama Pewawancara</label>
                                            <input type="text"
                                                required
                                                name="pers_nama_lengkap"
                                                onChange={this.handleNamaLengkapInputChange}
                                                value={this.state.pers_nama_lengkap}
                                                className="form-control"
                                                placeholder="Masukkan Nama Pewawancara" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">No Telepon</label>
                                            <input type="text"
                                                required
                                                name="pers_no_telepon"
                                                onChange={this.handleNoTeleponInputChange}
                                                value={this.state.pers_no_telepon}
                                                className="form-control"
                                                placeholder="Masukkan No Telepon" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Perusahaan</label>
                                            <select className="form-control select2" value={this.state.pers_perusahaan}
                                                onChange={(event) => this.setState({ pers_perusahaan: event.target.value })}>
                                                {this.state.ms_perusahaan.map(perusahaans => (
                                                    <option key={perusahaans.id} value={perusahaans.id}>
                                                        {perusahaans.per_nama}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Alamat Email</label>
                                            <input type="text"
                                                required
                                                name="pers_email"
                                                onChange={this.handleEmailInputChange}
                                                value={this.state.pers_email}
                                                className="form-control"
                                                placeholder="Masukkan Alamat Email" />
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