import React, { Component } from "react";
import axios from 'axios'
import { Alert } from 'react-alert';
//import PelamarList from './pelamar-listing.component';

export default class KeterampilanCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ket_nama: ''
        }
        this.handleNamaInputChange = this.handleNamaInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleNamaInputChange(event) {
        this.setState({
            ket_nama: event.target.value
        })
    }

    handleFormSubmit(event) {
        alert("Your Data is Saved!");
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/ms_keterampilan/create', {
            ket_nama: this.state.ket_nama
        }).then(response => {
            this.setState({
                ket_nama: ''
            })
            this.props.history.push('/KeterampilanList');
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Skills Data
                    </h1>
                    <ol className="breadcrumb">
                        <li className="active">Skills Data</li>
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
                                            <label htmlFor="exampleInputEmail1">Type of Skill</label>
                                            <input type="text"
                                                required
                                                name="ket_nama"
                                                onChange={this.handleNamaInputChange}
                                                value={this.state.ket_nama}
                                                className="form-control"
                                                placeholder="Enter Type of Skill" />
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