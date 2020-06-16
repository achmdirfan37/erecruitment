import React, { Component } from "react";
import axios, { post } from 'axios';
//import PelamarList from './pelamar-listing.component';

export default class DashboardPelamar_LamarPekerjaan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lk_cv: '',
            low_perusahaan: '',
            low_deskripsi: '',
            low_judul: '',
            low_tanggal_ditutup: '',
            low_gaji: '',
            low_jabatan: '',
            lk_berat_badan: '',
            lk_tinggi_badan: '',
            disabled: ''
        }
        this.onPressButton = this.onPressButton.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.fileUpload = this.fileUpload.bind(this)
    }

    // onChange(e) {
    //     let files = e.target.files || e.dataTransfer.files;
    //     if (!files.length)
    //         return;
    //     this.createImage(files[0]);
    // }

    // createImage(file) {
    //     let reader = new FileReader();
    //     reader.onload = (e) => {
    //         this.setState({
    //             lk_cv: e.target.result
    //         })
    //     };
    //     reader.readAsDataURL(file);
    // }

    // fileUpload = async () => {
    //     const values = this.state.lk_cv
    //     var self = this;
    //     await axios.post('http://localhost:8000/api/tr_lamaran_kerja/fileupload', values, { headers: { "Authorization": `Bearer ${token}` } }).then((res) => {
    //         if (res.data === '1') {
    //             self.setState({ sucess: true });
    //             //window.location.replace("/dashboard");
    //         } else {
    //             self.setState({ errorInsert: true });
    //         }
    //     }).catch((e) => {
    //         console.log(e);
    //         /*window.sessionStorage.clear();
    //         window.location.replace('/'); */
    //     });
    // }

    // fileSelect = event => {
    //     this.setState({ lk_cv: event.target.files[0] })
    //     console.log(event.target.files[0])
    // }

    // fileUpload = () => {
    //     const fd = new FormData();
    //     fd.append('lk_cv', this.state.lk_cv, this.state.lk_cv.name);
    //     axios.post('http://localhost:8000/api/tr_lamaran_kerja/fileupload', fd
    //     ).then(res => {
    //         console.log(res);
    //     }
    //     );

    //
    // onFormSubmit(){
    //     const data = new FormData() 
    //     data.append('file', this.state.lk_cv)
    //     console.warn(this.state.lk_cv);
    //     let url = 'http://localhost:8000/api/tr_lamaran_kerja/fileupload';

    //     axios.post(url, data, { // receive two parameter endpoint url ,form data 
    //     })
    //     .then(res => { // then print response status
    //         console.warn(res);
    //     })

    // }

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
        const url = 'http://localhost:8000/api/tr_lamaran_kerja/fileupload';
        const formData = {
            file: this.state.lk_cv,
            lk_perusahaan: this.state.low_perusahaan,
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
                    low_perusahaan: response.data.low_perusahaan,
                    low_judul: response.data.low_judul,
                    low_deskripsi: response.data.low_deskripsi,
                    low_judul: response.data.low_judul,
                    low_tanggal_ditutup: response.data.low_tanggal_ditutup,
                    low_gaji: response.data.low_gaji,
                    low_jabatan: response.data.low_jabatan
                })
            }).catch(err => console.log(err));

        var low = this.state.low_perusahaan;

        if (low !== "5") {
            this.setState({ disabled: false })
        } else if (low !== "5") {
            this.setState({ disabled: true })
        }else{

        }

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
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Apply for a Job Application
                    </h1>
                    <ol className="breadcrumb">
                        <li className="active">Apply for a Job Application</li>
                    </ol>
                </section>

                <section className="content" >
                    <div className="row">
                        {/* left column */}
                        <div className="col-md-12">
                            {/* general form elements */}
                            <div className="box box-primary">
                                <form role="form" onSubmit={this.onFormSubmit} encType="multipart/form-data">
                                    <div className="box-body">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Perusahaan</label>
                                            <input type="text"
                                                required
                                                name="low_judul"
                                                readOnly="true"
                                                value={this.state.low_perusahaan}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Job Vacancy</label>
                                            <input type="text"
                                                required
                                                name="low_judul"
                                                readOnly="true"
                                                onChange={this.handleJudulUpdateChange}
                                                value={this.state.low_judul}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Description</label>
                                            <textarea type="text"
                                                required
                                                name="low_deskripsi"
                                                readOnly="true"
                                                onChange={this.handleDeskripsiUpdateChange}
                                                value={this.state.low_deskripsi}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Date Closed</label>
                                            <input type="date"
                                                required
                                                name="low_tanggal_ditutup"
                                                readOnly="true"
                                                onChange={this.handleTanggalDitutupUpdateChange}
                                                value={this.state.low_tanggal_ditutup}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Salary</label>
                                            <input type="text"
                                                required
                                                name="low_gaji"
                                                readOnly="true"
                                                onChange={this.handleJudulUpdateChange}
                                                value={this.state.low_gaji}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Position</label>
                                            <input type="text"
                                                required
                                                name="low_jabatan"
                                                readOnly="true"
                                                onChange={this.handleJudulUpdateChange}
                                                value={this.state.low_jabatan}
                                                className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Supporting Documents <font color="#ff0000"> format file *png, jpg, jpeg</font></label>
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
                                        <button type="submit" className="btn btn-primary">Apply Job Application</button>
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