import React, { Component } from "react";
import axios from 'axios'
//import PelamarList from './pelamar-listing.component';

export default class PelamarCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            pel_nama_lengkap : '',
            pel_email : '',
            pel_no_telepon : '',
            pel_umur : '',
            pel_jenis_kelamin : '',
            pel_alamat : ''
        }
        this.handleNamaLengkapInputChange = this.handleNamaLengkapInputChange.bind(this);
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
        this.handleNoTeleponInputChange = this.handleNoTeleponInputChange.bind(this);
        this.handleUmurInputChange = this.handleUmurInputChange.bind(this);
        this.handleJenisKelaminInputChange = this.handleJenisKelaminInputChange.bind(this);
        this.handleAlamatInputChange = this.handleAlamatInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        //this.handleDelete = this.handleDelete.bind(this);
    }

    handleNamaLengkapInputChange(event){
        this.setState({
            pel_nama_lengkap : event.target.value
        })
    }

    handleEmailInputChange(event){
        this.setState({
            pel_email : event.target.value
        })
    }

    handleNoTeleponInputChange(event){
        this.setState({
            pel_no_telepon : event.target.value
        })
    }

    handleUmurInputChange(event){
        this.setState({
            pel_umur : event.target.value
        })
    }

    handleJenisKelaminInputChange(event){
        this.setState({
            pel_jenis_kelamin : event.target.value
        })
    }

    handleAlamatInputChange(event){
        this.setState({
            pel_alamat : event.target.value
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/ms_pelamar/create',{
            pel_nama_lengkap : this.state.pel_nama_lengkap,
            pel_email : this.state.pel_email,
            pel_umur : this.state.pel_umur,
            pel_no_telepon : this.state.pel_no_telepon,
            pel_jenis_kelamin : this.state.pel_jenis_kelamin,
            pel_alamat : this.state.pel_alamat
        }).then(response => {
            this.setState({
                pel_nama_lengkap : '',
                pel_email : '',
                pel_umur : '',
                pel_no_telepon : '',
                pel_jenis_kelamin : '',
                pel_alamat : ''
            })
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Tambah Pelamar</div>

                            <div className="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="pel_nama_lengkap"
                                        onChange={this.handleNamaLengkapInputChange}
                                        value={this.state.pel_nama_lengkap}
                                        className="form-control" 
                                        placeholder="Enter Nama Lengkap"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        required
                                        name="pel_email"
                                        onChange={this.handleEmailInputChange}
                                        value={this.state.pel_email}
                                        className="form-control" 
                                        placeholder="Enter Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="pel_umur"
                                        onChange={this.handleUmurInputChange}
                                        value={this.state.pel_umur}
                                        className="form-control"
                                        placeholder="Enter Umur"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        required
                                        name="pel_no_telepon"
                                        onChange={this.handleNoTeleponInputChange}
                                        value={this.state.pel_no_telepon}
                                        className="form-control"
                                        placeholder="Enter No Telepon"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="pel_jenis_kelamin"
                                        onChange={this.handleJenisKelaminInputChange}
                                        value={this.state.pel_jenis_kelamin}
                                        className="form-control"
                                        placeholder="Enter Jenis Kelamin"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="textarea"
                                        required
                                        name="pel_alamat"
                                        onChange={this.handleAlamatInputChange}
                                        value={this.state.pel_alamat}
                                        className="form-control"
                                        placeholder="Enter Alamat"/>
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