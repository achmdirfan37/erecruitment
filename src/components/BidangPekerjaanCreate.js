import React, { Component } from "react";
import axios from 'axios'
//import PelamarList from './pelamar-listing.component';

export default class BidangPekerjaanCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bid_nama: ''
        }
        this.handleNamaInputChange = this.handleNamaInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleNamaInputChange(event) {
        this.setState({
            bid_nama: event.target.value
        })
    }

    handleFormSubmit(event) {
        alert("Data Berhasil Tersimpan!");
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/ms_bidang_pekerjaan/create', {
            bid_nama: this.state.bid_nama
        }).then(response => {
            this.setState({
                bid_nama: ''
            })
            this.props.history.push('/BidangPekerjaanList');
        }).catch(err => console.log(err));
    }

    render() {

        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Data Bidang Pekerjaan
                    </h1>
                    <ol className="breadcrumb">
                        <li className="active">Data Bidang Pekerjaan</li>
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
                                            <label htmlFor="exampleInputEmail1">Bidang Pekerjaan</label>
                                            <input type="text"
                                                required
                                                name="bid_nama"
                                                onChange={this.handleNamaInputChange}
                                                value={this.state.bid_nama}
                                                className="form-control"
                                                placeholder="Masukkan Nama Bidang Pekerjaan" />
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