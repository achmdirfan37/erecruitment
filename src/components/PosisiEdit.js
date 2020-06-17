import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class PosisiEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
            pos_nama : ''
        }
        this.handleNamaUpdateChange = this.handleNamaUpdateChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/ms_posisi/edit/${id}`)
        .then(response => {
            this.setState({
                pos_nama : response.data.pos_nama
            })
        }).catch(err => console.log(err));
    }

    handleNamaUpdateChange(event){
        this.setState({
            pos_nama : event.target.value
        })
    }

    handleFormSubmit(event){
        alert("Data Berhasil Tersimpan!");
        event.preventDefault();
        const id = this.props.match.params.id;
        axios.put(`http://127.0.0.1:8000/api/ms_posisi/update/${id}`,{
            pos_nama : this.state.pos_nama
        }).then(response => {
            this.setState({
                pos_nama : ''
            })
            this.props.history.push('/PosisiList');
        }).catch(err => console.log(err));
    }

    render(){
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                    Data Posisi
                    </h1>
                    <ol className="breadcrumb">
                        <li className="active">Data Posisi</li>
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
                                            <label htmlFor="exampleInputEmail1">Posisi</label>
                                            <input type="text"
                                                required
                                                name="pos_nama"
                                                onChange={this.handleNamaUpdateChange}
                                                value={this.state.pos_nama}
                                                className="form-control"
                                                placeholder="Masukkan Nama Posisi" />
                                        </div>
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-primary">Simpan Data</button>
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

export default PosisiEdit;