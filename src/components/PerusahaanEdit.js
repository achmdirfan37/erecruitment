import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class PelamarEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
            pel_nama_lengkap : '',
            pel_email : '',
            pel_no_telepon : '',
            pel_umur : '',
            pel_jenis_kelamin : '',
            pel_alamat : ''
        }
        this.handleNamaLengkapUpdateChange = this.handleNamaLengkapUpdateChange.bind(this);
        this.handleEmailUpdateChange = this.handleEmailUpdateChange.bind(this);
        this.handleNoTeleponUpdateChange = this.handleNoTeleponUpdateChange.bind(this);
        this.handleUmurUpdateChange = this.handleUmurUpdateChange.bind(this);
        this.handleJenisKelaminUpdateChange = this.handleJenisKelaminUpdateChange.bind(this);
        this.handleAlamatUpdateChange = this.handleAlamatUpdateChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/ms_pelamar/${id}/edit`)
        .then(response => {
            this.setState({
                pel_nama_lengkap : response.data.pel_nama_lengkap,
                pel_email : response.data.pel_email,
                pel_no_telepon : response.data.pel_no_telepon,
                pel_umur : response.data.pel_umur,
                pel_jenis_kelamin : response.data.pel_jenis_kelamin,
                pel_alamat : response.data.pel_alamat
            })
        }).catch(err => console.log(err));
    }

    handleNamaLengkapUpdateChange(event){
        this.setState({
            pel_nama_lengkap : event.target.value
        })
    }

    handleEmailUpdateChange(event){
        this.setState({
            pel_email : event.target.value
        })
    }

    handleNoTeleponUpdateChange(event){
        this.setState({
            pel_no_telepon : event.target.value
        })
    }

    handleUmurUpdateChange(event){
        this.setState({
            pel_umur : event.target.value
        })
    }

    handleJenisKelaminUpdateChange(event){
        this.setState({
            pel_jenis_kelamin : event.target.value
        })
    }

    handleAlamatUpdateChange(event){
        this.setState({
            pel_alamat : event.target.value
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
        const id = this.props.match.params.id;
        axios.put(`http://127.0.0.1:8000/api/ms_pelamar/${id}/update`,{
            pel_nama_lengkap : this.state.pel_nama_lengkap,
            pel_email : this.state.pel_email,
            pel_no_telepon : this.state.pel_no_telepon,
            pel_umur : this.state.pel_umur,
            pel_jenis_kelamin : this.state.pel_jenis_kelamin,
            pel_alamat : this.state.pel_alamat
        }).then(response => {
            this.setState({
                pel_nama_lengkap : '',
                pel_email : '',
                pel_no_telepon : '',
                pel_umur : '',
                pel_jenis_kelamin : '',
                pel_alamat : ''
            })
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Edit Pelamar</div>
    
                            <div className="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        onChange={this.handleNamaLengkapUpdateChange}
                                        value={this.state.pel_nama_lengkap}
                                        className="form-control" 
                                        placeholder="Enter Nama Lengkap"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        required
                                        onChange={this.handleEmailUpdateChange}
                                        value={this.state.pel_email}
                                        className="form-control" 
                                        placeholder="Enter Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        onChange={this.handleUmurUpdateChange}
                                        value={this.state.pel_umur}
                                        className="form-control"
                                        placeholder="Enter Umur"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                        required
                                        onChange={this.handleNoTeleponUpdateChange}
                                        value={this.state.pel_no_telepon}
                                        className="form-control"
                                        placeholder="Enter No Telepon"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        onChange={this.handleJenisKelaminUpdateChange}
                                        value={this.state.pel_jenis_kelamin}
                                        className="form-control"
                                        placeholder="Enter Jenis Kelamin"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        onChange={this.handleAlamatUpdateChange}
                                        value={this.state.pel_alamat}
                                        className="form-control"
                                        placeholder="Enter Alamat"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Ubah Data Pelamar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PelamarEdit;