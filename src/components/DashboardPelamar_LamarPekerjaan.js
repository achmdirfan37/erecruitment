import React, { Component } from "react";
import axios, { post } from 'axios';
//import PelamarList from './pelamar-listing.component';

export default class DashboardPelamar_LamarPekerjaan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            lk_cv: '',
            low_perusahaan: '',
            per_nama: '',
            low_deskripsi: '',
            low_spesialisasi: '',
            low_kualifikasi: '',
            low_judul: '',
            low_tanggal_ditutup: '',
            low_gaji: '',
            pos_nama: '',
            disabled: ''
        }
        this.onPressButton = this.onPressButton.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.fileUpload = this.fileUpload.bind(this)
    }

    onFormSubmit(e) {
        e.preventDefault()
        this.fileUpload(this.state.lk_cv);
    }

    onChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.createFile(files[0]);
    }

    createFile(file) {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({
                lk_cv: e.target.result
            })
        };
        reader.readAsDataURL(file);
    }

    fileUpload(lk_cv) {
        alert("Data Berhasil Diajukan!");
        this.props.history.push('/DashboardPelamar_LamaranKerja');
        const lk_pelamar = 17;
        const url = 'http://localhost:8000/api/tr_lamaran_kerja/fileupload';
        const formData = {
            file: this.state.lk_cv,
            lk_perusahaan: this.state.low_perusahaan,
            lk_pelamar: lk_pelamar,
            lk_lowongan: this.state.id
        }
        return post(url, formData)
            .then(response => console.log(response))
    }

    componentDidMount() {
        // ajax call
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/ms_lowongan/viewDetail/${id}`)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    low_kualifikasi: response.data.low_kualifikasi,
                    low_spesialisasi: response.data.low_spesialisasi,
                    low_perusahaan: response.data.low_perusahaan,
                    per_nama: response.data.per_nama,
                    low_judul: response.data.low_judul,
                    low_deskripsi: response.data.low_deskripsi,
                    low_judul: response.data.low_judul,
                    low_tanggal_ditutup: response.data.low_tanggal_ditutup,
                    low_gaji: response.data.low_gaji,
                    pos_nama: response.data.pos_nama
                })
            }).catch(err => console.log(err));

        // var low = this.state.low_perusahaan;

        // if (low !== "5") {
        //     this.setState({ disabled: false })
        // } else if (low !== "5") {
        //     this.setState({ disabled: true })
        // }else{

        // }

    }

    onPressButton() {
        const low = 5;
        if (low === '5') {
            this.setState({ disabled: false })
        }
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
                                <form role="form" onSubmit={this.onFormSubmit} encType="multipart/form-data">
                                    <div className="box-body">
                                        <div class="box box-solid">
                                            <div class="box-body">
                                                <dl class="dl-vertical">
                                                    <input
                                                        type="hidden"
                                                        name="id"
                                                        value={this.state.low_perusahaan}
                                                    />
                                                    <dt>Lowongan</dt>
                                                    <dd>{this.state.low_judul}</dd>
                                                    <dt>Deskripsi</dt>
                                                    <dd>{this.state.low_deskripsi}</dd>
                                                    <dt>Pendidikan Terakhir</dt>
                                                    <dd>{this.state.low_kualifikasi}</dd>
                                                    <dt>Spesialisasi</dt>
                                                    <dd>{this.state.low_spesialisasi}</dd>
                                                    <dt>Gaji</dt>
                                                    <dd>
                                                        Rp.{" "}
                                                        {this.state.low_gaji}</dd>
                                                    <dt>Tanggal Ditutup</dt>
                                                    <dd>{this.state.low_tanggal_ditutup}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Dokumen Pendukung <font color="#ff0000"> format file *png, jpg, jpeg</font></label>
                                            <input className="input_imagem_artigo"
                                                type="file"
                                                required
                                                name="lk_cv"
                                                onChange={this.onChange}
                                                className="form-control" />
                                        </div>
                                        {this.onPressButton()}
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-primary">Ajukan Lowongan Pekerjaan</button>
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