import React, { Component } from "react";
import axios from 'axios'
//import PelamarList from './pelamar-listing.component';

export default class KeterampilanCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            ket_nama : ''
        }
        this.handleNamaInputChange = this.handleNamaInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleNamaInputChange(event){
        this.setState({
            ket_nama : event.target.value
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/ms_keterampilan/create',{
            ket_nama : this.state.ket_nama
        }).then(response => {
            this.setState({
                ket_nama : ''
            })
            this.props.history.push('/KeterampilanList');
        }).catch(err => console.log(err));
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Tambah Keterampilan</div>

                            <div className="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="ket_nama"
                                        onChange={this.handleNamaInputChange}
                                        value={this.state.ket_nama}
                                        className="form-control" 
                                        placeholder="Enter Nama Keterampilan"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Simpan Data Keterampilan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}