import React, { Component } from "react";
import axios from 'axios'
//import PelamarList from './pelamar-listing.component';

export default class PerusahaanCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            per_nama: '',
            per_deskripsi: '',
            per_email: '',
            per_no_telepon: '',
            per_alamat_website: '',
            per_alamat: '',
            per_foto: ''
        }
        this.onChange = this.onChange.bind(this);
        this.handleNamaInputChange = this.handleNamaInputChange.bind(this);
        this.handleDeskripsiInputChange = this.handleDeskripsiInputChange.bind(this);
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
        this.handleNoTeleponInputChange = this.handleNoTeleponInputChange.bind(this);
        this.handleAlamatWebsiteInputChange = this.handleAlamatWebsiteInputChange.bind(this);
        this.handleAlamatInputChange = this.handleAlamatInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        //this.handleDelete = this.handleDelete.bind(this);
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
                per_foto: e.target.result
            })
        };
        reader.readAsDataURL(file);
    }

    handleNamaInputChange(event) {
        this.setState({
            per_nama: event.target.value
        })
    }

    handleDeskripsiInputChange(event) {
        this.setState({
            per_deskripsi: event.target.value
        })
    }

    handleEmailInputChange(event) {
        this.setState({
            per_email: event.target.value
        })
    }

    handleNoTeleponInputChange(event) {
        this.setState({
            per_no_telepon: event.target.value
        })
    }

    handleAlamatWebsiteInputChange(event) {
        this.setState({
            per_alamat_website: event.target.value
        })
    }

    handleAlamatInputChange(event) {
        this.setState({
            per_alamat: event.target.value
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/ms_perusahaan/create', {
            file: this.state.per_foto,
            per_nama: this.state.per_nama,
            per_deskripsi: this.state.per_deskripsi,
            per_email: this.state.per_email,
            per_no_telepon: this.state.per_no_telepon,
            per_alamat_website: this.state.per_alamat_website,
            per_alamat: this.state.per_alamat
        }).then(response => {
            this.setState({
                per_foto: '',
                per_nama: '',
                per_deskripsi: '',
                per_email: '',
                per_no_telepon: '',
                per_alamat_website: '',
                per_alamat: ''
            })
            this.props.history.push('/PerusahaanList');
        }).catch(err => console.log(err));
    }

    render() {

        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Company Data
                    </h1>
                    <ol className="breadcrumb">
                        <li className="active">Company Data</li>
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
                                            <label htmlFor="exampleInputEmail1">Company Picture <font color="#ff0000"> format file *png, jpg, jpeg</font></label>
                                            <input className="input_imagem_artigo"
                                                type="file"
                                                required
                                                name="pel_foto"
                                                onChange={this.onChange}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Company Name</label>
                                            <input type="text"
                                                required
                                                name="per_nama"
                                                onChange={this.handleNamaInputChange}
                                                value={this.state.per_nama}
                                                className="form-control"
                                                placeholder="Enter Company Name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Description</label>
                                            <textarea type="text"
                                                required
                                                name="per_deskripsi"
                                                onChange={this.handleDeskripsiInputChange}
                                                value={this.state.per_deskripsi}
                                                className="form-control"
                                                placeholder="Enter Description" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email</label>
                                            <input type="text"
                                                required
                                                name="per_email"
                                                onChange={this.handleEmailInputChange}
                                                value={this.state.per_email}
                                                className="form-control"
                                                placeholder="Enter Email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Phone Number</label>
                                            <input type="text"
                                                required
                                                name="per_no_telepon"
                                                onChange={this.handleNoTeleponInputChange}
                                                value={this.state.per_no_telepon}
                                                className="form-control"
                                                placeholder="Enter Phone Number" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Website Address</label>
                                            <input type="text"
                                                required
                                                name="per_alamat_website"
                                                onChange={this.handleAlamatWebsiteInputChange}
                                                value={this.state.per_alamat_website}
                                                className="form-control"
                                                placeholder="Enter Website Address" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Company Address</label>
                                            <textarea type="text"
                                                required
                                                name="per_alamat"
                                                onChange={this.handleAlamatInputChange}
                                                value={this.state.per_alamat}
                                                className="form-control"
                                                placeholder="Enter Company Address"
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