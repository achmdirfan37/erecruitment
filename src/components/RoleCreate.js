import React, { Component } from "react";
import axios from 'axios'
//import PelamarList from './pelamar-listing.component';

export default class RoleCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rol_nama_lengkap: '',
            rol_email: '',
            rol_perusahaan: '',
            ms_perusahaan: []
        }

        this.handleNamaLengkapInputChange = this.handleNamaLengkapInputChange.bind(this);
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
        this.handlePerusahaanInputChange = this.handlePerusahaanInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/ms_role/showPerusahaan')
            .then(response => {
                this.setState({
                    ms_perusahaan: response.data.data
                });
            });
    }

    handleNamaLengkapInputChange(event) {
        this.setState({
            rol_nama_lengkap: event.target.value
        })
    }

    handleEmailInputChange(event) {
        this.setState({
            rol_email: event.target.value
        })
    }

    handlePerusahaanInputChange(event) {
        this.setState({
            rol_perusahaan: event.target.value
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/ms_role/create', {
            rol_nama_lengkap: this.state.rol_nama_lengkap,
            rol_email: this.state.rol_email,
            rol_perusahaan: this.state.rol_perusahaan
        }).then(response => {
            this.setState({
                rol_nama_lengkap: '',
                rol_email: '',
                rol_perusahaan: ''
            })
            this.props.history.push('/RoleList');
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Role Data
                    </h1>
                    <ol className="breadcrumb">
                        <li className="active">Role Data</li>
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
                                            <label htmlFor="">Company</label>
                                            <select className="form-control select2" value={this.state.rol_perusahaan}
                                                onChange={(event) => this.setState({ rol_perusahaan: event.target.value })}>
                                                {this.state.ms_perusahaan.map(perusahaans => (
                                                    <option key={perusahaans.id} value={perusahaans.id}>
                                                        {perusahaans.per_nama}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Role Name</label>
                                            <input type="text"
                                                required
                                                name="rol_nama_lengkap"
                                                onChange={this.handleNamaLengkapInputChange}
                                                value={this.state.rol_nama_lengkap}
                                                className="form-control"
                                                placeholder="Enter Role Name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email</label>
                                            <input type="text"
                                                required
                                                name="rol_email"
                                                onChange={this.handleEmailInputChange}
                                                value={this.state.rol_email}
                                                className="form-control"
                                                placeholder="Enter Email" />
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