import React, { Component } from "react";
import axios from 'axios'
//import PelamarList from './pelamar-listing.component';

export default class PerusahaanCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            per_nama : '',
            per_deskripsi : '',
            per_email : '',
            per_no_telepon : '',
            per_alamat_website : '',
            per_alamat : ''
        }
        this.handleNamaInputChange = this.handleNamaInputChange.bind(this);
        this.handleDeskripsiInputChange = this.handleDeskripsiInputChange.bind(this);
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
        this.handleNoTeleponInputChange = this.handleNoTeleponInputChange.bind(this);
        this.handleAlamatWebsiteInputChange = this.handleAlamatWebsiteInputChange.bind(this);
        this.handleAlamatInputChange = this.handleAlamatInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        //this.handleDelete = this.handleDelete.bind(this);
    }

    handleNamaInputChange(event){
        this.setState({
            per_nama : event.target.value
        })
    }

    handleDeskripsiInputChange(event){
        this.setState({
            per_deskripsi : event.target.value
        })
    }

    handleEmailInputChange(event){
        this.setState({
            per_email : event.target.value
        })
    }

    handleNoTeleponInputChange(event){
        this.setState({
            per_no_telepon : event.target.value
        })
    }

    handleAlamatWebsiteInputChange(event){
        this.setState({
            per_alamat_website : event.target.value
        })
    }

    handleAlamatInputChange(event){
        this.setState({
            per_alamat : event.target.value
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/ms_perusahaan/create',{
            per_nama : this.state.per_nama,
            per_deskripsi : this.state.per_deskripsi,
            per_email : this.state.per_email,
            per_no_telepon : this.state.per_no_telepon,
            per_alamat_website : this.state.per_alamat_website,
            per_alamat : this.state.per_alamat
        }).then(response => {
            this.setState({
                per_nama : '',
                per_deskripsi : '',
                per_email : '',
                per_no_telepon : '',
                per_alamat_website : '',
                per_alamat : ''
            })
            this.props.history.push('/PerusahaanList');
        }).catch(err => console.log(err));
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Tambah Perusahaan</div>

                            <div className="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="per_nama"
                                        onChange={this.handleNamaInputChange}
                                        value={this.state.per_nama}
                                        className="form-control" 
                                        placeholder="Enter Nama Perusahaan"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        required
                                        name="per_deskripsi"
                                        onChange={this.handleDeskripsiInputChange}
                                        value={this.state.per_deskripsi}
                                        className="form-control" 
                                        placeholder="Enter Deskripsi Perusahaan"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="per_email"
                                        onChange={this.handleEmailInputChange}
                                        value={this.state.per_email}
                                        className="form-control"
                                        placeholder="Enter Email Perusahaan"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        required
                                        name="per_no_telepon"
                                        onChange={this.handleNoTeleponInputChange}
                                        value={this.state.per_no_telepon}
                                        className="form-control"
                                        placeholder="Enter No Telepon Perusahaan"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="per_alamat_website"
                                        onChange={this.handleAlamatWebsiteInputChange}
                                        value={this.state.per_alamat_website}
                                        className="form-control"
                                        placeholder="Enter Alamat Website"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="textarea"
                                        required
                                        name="per_alamat"
                                        onChange={this.handleAlamatInputChange}
                                        value={this.state.per_alamat}
                                        className="form-control"
                                        placeholder="Enter Alamat"/>
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