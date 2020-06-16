import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Alert } from 'react-alert';

class DashboardPelamar_Decline extends Component {
    constructor(props){
        super(props);
        this.state = {
            lk_nama : '',
            lk_status_konfirmasi : '',
            lk_keterangan_konfirmasi : '',
            lk_lowongan : '',
            low_judul : '',
            lk_status_rekrutmen : '',
            lk_pelamar : ''
        }
        
        this.handleStatusRekrutmenChange = this.handleStatusRekrutmenChange.bind(this);
        this.handleNamaChange = this.handleNamaChange.bind(this);
        this.handleStatusKonfirmasiChange = this.handleStatusKonfirmasiChange.bind(this);
        this.handleKeteranganKonfirmasiChange = this.handleKeteranganKonfirmasiChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/tr_lamaran_kerja/statusDecline/${id}`)
        .then(response => {
            this.setState({
                lk_lowongan : response.data.lk_lowongan,
                lk_status_rekrutmen : response.data.lk_status_rekrutmen,
                lk_pelamar: response.data.lk_pelamar
                //low_judul : response.data.low_judul,
                //per_nama : response.data.per_nama
            })
        }).catch(err => console.log(err));

        
        const pel = this.props.match.params.lk_pelamar;
        axios.get(`http://127.0.0.1:8000/api/ms_pelamar/viewDetail/${pel}`)
          .then(response => {
            this.setState({
              lk_nama: response.data.pel_nama_lengkap
            })
          }).catch(err => console.log(err));
    
    }

    handleStatusRekrutmenChange(event){
        this.setState({
            lk_status_rekrutmen : event.target.value
        })
    }

    handleKeteranganKonfirmasiChange(event){
        this.setState({
            lk_keterangan_konfirmasi : event.target.value
        })
    }

    handleStatusKonfirmasiChange(event){
        this.setState({
            lk_status_konfirmasi : event.target.value
        })
    }

    handleNamaChange(event){
        this.setState({
            lk_nama : event.target.value
        })
    }

    handleFormSubmit(event){
        alert("Your Data is Decline!");
        event.preventDefault();
        const id = this.props.match.params.id;
        axios.put(`http://127.0.0.1:8000/api/tr_lamaran_kerja/updateStatusDecline/${id}`,{
            lk_status_konfirmasi : this.state.lk_status_konfirmasi,
            lk_status_rekrutmen : this.state.lk_status_rekrutmen,
            lk_nama : this.state.lk_nama,
            lk_keterangan_konfirmasi : this.state.lk_keterangan_konfirmasi
        }).then(response => {
            this.setState({
                lk_nama : '',
                lk_keterangan_konfirmasi : '',
                lk_status_konfirmasi : '',
                lk_status_rekrutmen : '',
                low_judul : ''
            })
            this.props.history.push('/DashboardPelamar_LamaranKerjaAcceptDecline');
        }).catch(err => console.log(err));
    }

    render(){
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                    Decline Job
                    </h1>
                    <ol className="breadcrumb">
                        <li className="active">Decline Job</li>
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
                                            <label htmlFor="exampleInputEmail1">Job Vacancy</label>
                                            <textarea type="text"
                                                required
                                                readOnly
                                                value={this.state.lk_lowongan}
                                                className="form-control"
                                                rows={5}
                                                cols={5} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Status Recruitment</label>
                                            <input type="text"
                                                required
                                                readOnly
                                                name="pel_tanggal_lahir"
                                                onChange={this.handleStatusRekrutmenChange}
                                                value={this.state.lk_status_rekrutmen}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Confirmation Accept</label>
                                            <input type="text"
                                                required
                                                readOnly
                                                name="pel_email"
                                                onChange={this.handleStatusKonfirmasiChange}
                                                value="Menolak"
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Applicants' Names Who's Decline</label>
                                            <input type="text"
                                                required
                                                readOnly
                                                onChange={this.handleNamaChange}
                                                value={this.state.lk_nama}
                                                className="form-control"
                                                placeholder="Enter Your Full Name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Statement Rejected Job Applications</label>
                                            <textarea type="text"
                                                required
                                                onChange={this.handleKeteranganKonfirmasiChange}
                                                value={this.state.lk_keterangan_konfirmasi}
                                                className="form-control"
                                                placeholder="Enter Your Statement"
                                                rows={5}
                                                cols={5} />
                                        </div>
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-primary">Decline Job</button>
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

export default DashboardPelamar_Decline;