import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class RoleEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ms_perusahaan: [],
            ms_role: [],
            rol_nama_lengkap: '',
            rol_email: '',
            rol_no_telepon: '',
            rol_username: ''
        }
        this.handleNamaLengkapUpdateChange = this.handleNamaLengkapUpdateChange.bind(this);
        this.handleEmailUpdateChange = this.handleEmailUpdateChange.bind(this);
        this.handleNoTeleponUpdateChange = this.handleNoTeleponUpdateChange.bind(this);
        this.handleUsernameUpdateChange = this.handleUsernameUpdateChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/ms_role/edit/${id}`)
            .then(response => {
                this.setState({
                    rol_nama_lengkap: response.data.rol_nama_lengkap,
                    rol_email: response.data.rol_email,
                    rol_no_telepon: response.data.rol_no_telepon,
                    rol_username: response.data.rol_username
                })
            }).catch(err => console.log(err));

        axios.get('http://127.0.0.1:8000/api/ms_perusahaan/ddl')
            .then(response => {
                this.setState({
                    ms_perusahaan: response.data.data
                });
            });

    }

    handleNamaLengkapUpdateChange(event) {
        this.setState({
            rol_nama_lengkap: event.target.value
        })
    }

    handleEmailUpdateChange(event) {
        this.setState({
            rol_email: event.target.value
        })
    }

    handleNoTeleponUpdateChange(event) {
        this.setState({
            rol_no_telepon: event.target.value
        })
    }

    handleUsernameUpdateChange(event) {
        this.setState({
            rol_username: event.target.value
        })
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const id = this.props.match.params.id;
        axios.put(`http://127.0.0.1:8000/api/ms_role/update/${id}`, {
            rol_nama_lengkap: this.state.rol_nama_lengkap,
            rol_email: this.state.rol_email,
            rol_no_telepon: this.state.rol_no_telepon,
            rol_username: this.state.rol_username
        }).then(response => {
            this.setState({
                rol_nama_lengkap: '',
                rol_email: '',
                rol_no_telepon: '',
                rol_username: ''
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
                                            <label htmlFor="exampleInputEmail1">Company</label>
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
                                            <label htmlFor="exampleInputEmail1">Role Name</label>
                                            <input type="text"
                                                required
                                                name="rol_nama_lengkap"
                                                onChange={this.handleNamaLengkapUpdateChange}
                                                value={this.state.rol_nama_lengkap}
                                                className="form-control"
                                                placeholder="Enter Role Name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email</label>
                                            <input type="text"
                                                required
                                                name="rol_email"
                                                onChange={this.handleEmailUpdateChange}
                                                value={this.state.rol_email}
                                                className="form-control"
                                                placeholder="Enter Email" />
                                        </div>
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-primary">Update Data</button>
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

export default RoleEdit;