import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class RoleEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
            rol_nama_lengkap : '',
            rol_email : '',
            rol_no_telepon : '',
            rol_username : ''
        }
        this.handleNamaLengkapUpdateChange = this.handleNamaLengkapUpdateChange.bind(this);
        this.handleEmailUpdateChange = this.handleEmailUpdateChange.bind(this);
        this.handleNoTeleponUpdateChange = this.handleNoTeleponUpdateChange.bind(this);
        this.handleUsernameUpdateChange = this.handleUsernameUpdateChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/ms_role/${id}/edit`)
        .then(response => {
            this.setState({
                rol_nama_lengkap : response.data.rol_nama_lengkap,
                rol_email : response.data.rol_email,
                rol_no_telepon : response.data.rol_no_telepon,
                rol_username : response.data.rol_username
            })
        }).catch(err => console.log(err));
    }

    handleNamaLengkapUpdateChange(event){
        this.setState({
            rol_nama_lengkap : event.target.value
        })
    }

    handleEmailUpdateChange(event){
        this.setState({
            rol_email : event.target.value
        })
    }

    handleNoTeleponUpdateChange(event){
        this.setState({
            rol_no_telepon : event.target.value
        })
    }

    handleUsernameUpdateChange(event){
        this.setState({
            rol_username : event.target.value
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
        const id = this.props.match.params.id;
        axios.put(`http://127.0.0.1:8000/api/ms_role/${id}/update`,{
            rol_nama_lengkap : this.state.rol_nama_lengkap,
            rol_email : this.state.rol_email,
            rol_no_telepon : this.state.rol_no_telepon,
            rol_username : this.state.rol_username
        }).then(response => {
            this.setState({
                rol_nama_lengkap : '',
                rol_email : '',
                rol_no_telepon : '',
                rol_username : ''
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
                            <div className="card-header">Edit Role</div>
    
                            <div className="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        onChange={this.handleNamaLengkapUpdateChange}
                                        value={this.state.rol_nama_lengkap}
                                        className="form-control" 
                                        placeholder="Enter Nama Lengkap"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        required
                                        onChange={this.handleEmailUpdateChange}
                                        value={this.state.rol_email}
                                        className="form-control" 
                                        placeholder="Enter Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        onChange={this.handleUsernameUpdateChange}
                                        value={this.state.rol_username}
                                        className="form-control"
                                        placeholder="Enter Username"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        required
                                        onChange={this.handleNoTeleponUpdateChange}
                                        value={this.state.rol_no_telepon}
                                        className="form-control"
                                        placeholder="Enter No Telepon"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Ubah Data Role</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoleEdit;