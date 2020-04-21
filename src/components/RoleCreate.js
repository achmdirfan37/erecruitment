import React, { Component } from "react";
import axios from 'axios'
//import PelamarList from './pelamar-listing.component';

export default class RoleCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            rol_username : '',
            rol_nama_lengkap : '',
            rol_email : '',
            rol_no_telepon : ''
        }

        this.handleNamaLengkapInputChange = this.handleNamaLengkapInputChange.bind(this);
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
        this.handleNoTeleponInputChange = this.handleNoTeleponInputChange.bind(this);
        this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleNamaLengkapInputChange(event){
        this.setState({
            rol_nama_lengkap : event.target.value
        })
    }

    handleEmailInputChange(event){
        this.setState({
            rol_email : event.target.value
        })
    }

    handleNoTeleponInputChange(event){
        this.setState({
            rol_no_telepon : event.target.value
        })
    }

    handleUsernameInputChange(event){
        this.setState({
            rol_username : event.target.value
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/ms_role/create',{
            rol_username : this.state.rol_username,
            rol_nama_lengkap : this.state.rol_nama_lengkap,
            rol_email : this.state.rol_email,
            rol_no_telepon : this.state.rol_no_telepon
        }).then(response => {
            this.setState({
                rol_nama_lengkap : '',
                rol_email : '',
                rol_username : '',
                rol_no_telepon : ''
            })
            this.props.history.push('/RoleList');
        }).catch(err => console.log(err));
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Tambah Role</div>

                            <div className="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="rol_nama_lengkap"
                                        onChange={this.handleNamaLengkapInputChange}
                                        value={this.state.rol_nama_lengkap}
                                        className="form-control" 
                                        placeholder="Enter Nama Lengkap"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        required
                                        name="rol_email"
                                        onChange={this.handleEmailInputChange}
                                        value={this.state.rol_email}
                                        className="form-control" 
                                        placeholder="Enter Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        name="rol_username"
                                        onChange={this.handleUsernameInputChange}
                                        value={this.state.rol_username}
                                        className="form-control"
                                        placeholder="Enter Username"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        required
                                        name="rol_no_telepon"
                                        onChange={this.handleNoTeleponInputChange}
                                        value={this.state.rol_no_telepon}
                                        className="form-control"
                                        placeholder="Enter No Telepon"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Simpan Data Role</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}