import React, { Component } from "react";
import axios from 'axios'
//import PelamarList from './pelamar-listing.component';

export default class BidangPekerjaanCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            bid_nama : ''
        }
        this.handleNamaInputChange = this.handleNamaInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleNamaInputChange(event){
        this.setState({
            bid_nama : event.target.value
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/ms_bidang_pekerjaan/create',{
            bid_nama : this.state.bid_nama
        }).then(response => {
            this.setState({
                bid_nama : ''
            })
            this.props.history.push('/BidangPekerjaanList');
        }).catch(err => console.log(err));
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Tambah Bidang Pekerjaan</div>

                            <div className="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="bid_nama"
                                        onChange={this.handleNamaInputChange}
                                        value={this.state.bid_nama}
                                        className="form-control" 
                                        placeholder="Enter Nama Bidang Pekerjaan"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Simpan Data Bidang Pekerjaan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}