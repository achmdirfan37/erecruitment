import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Alert } from 'react-alert';

class DashboardPelamar_Accept extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tr_lamaran_kerja: [],
            lk_status_rekrutmen: ''
        }

        this.handleStatusRekrutmenChange = this.handleStatusRekrutmenChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/tr_lamaran_kerja/statusAccept/${id}`)
            .then(response => {
                this.setState({
                    tr_lamaran_kerja: response.data
                })
            }).catch(err => console.log(err));

        axios.get(`http://127.0.0.1:8000/api/tr_lamaran_kerja/statusAcceptNoQuery/${id}`)
            .then(response => {
                this.setState({
                    lk_status_rekrutmen: response.data.lk_status_rekrutmen
                })
            }).catch(err => console.log(err));
    }

    handleStatusRekrutmenChange(event) {
        this.setState({
            lk_status_rekrutmen: event.target.value
        })
    }

    handleFormSubmit(event) {
        alert("Your Data is Accept!");
        event.preventDefault();
        const id = this.props.match.params.id;
        axios.put(`http://127.0.0.1:8000/api/tr_lamaran_kerja/updateStatusAccept/${id}`, {
            lk_status_rekrutmen: this.state.lk_status_rekrutmen
        }).then(response => {
            this.setState({
                //lk_nama: '',
                lk_status_rekrutmen: ''
            })
            this.props.history.push('/DashboardPelamar_LamaranKerja');
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="content-wrapper">
                <section className="content" >
                    <div className="row">
                        {/* left column */}
                        <div className="col-md-12">
                            {/* general form elements */}
                            <div className="box box-primary">
                                <form role="form" onSubmit={this.handleFormSubmit}>

                                    {this.state.tr_lamaran_kerja !== undefined
                                        ? this.state.tr_lamaran_kerja.map((tr_lamaran_kerjas) => (
                                            <div class="col-md-12">
                                                <div class="box box-solid">
                                                    <div class="box-header with-border">
                                                        <i class="fa fa-text-width"></i>
                                                        <h3 class="box-title">Terima Lamaran</h3>
                                                    </div>
                                                    <div class="box-body">
                                                        <dl class="dl-horizontal">
                                                            <dt>Perusahaan</dt>
                                                            <dd>{tr_lamaran_kerjas.per_nama}</dd>
                                                            <dt>Lowongan</dt>
                                                            <dd>{tr_lamaran_kerjas.low_judul}</dd>
                                                            <dt>Posisi</dt>
                                                            <dd>{tr_lamaran_kerjas.pos_nama}</dd>
                                                            <dt>Deskripsi Lowongan</dt>
                                                            <dd>{tr_lamaran_kerjas.low_deskripsi}</dd>
                                                            <dt>Nama Pelamar</dt>
                                                            <dd>{tr_lamaran_kerjas.pel_nama_lengkap}</dd>
                                                            <dt>Konfirmasi</dt>
                                                            <dd>Menerima</dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        : null}

                                    < div className="box-footer" >
                                        <button type="submit" className="btn btn-primary">Terima Undangan</button>
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

export default DashboardPelamar_Accept;