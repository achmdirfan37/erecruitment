import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class KeterampilanEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
            ket_nama : ''
        }
        this.handleNamaUpdateChange = this.handleNamaUpdateChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/ms_keterampilan/${id}/edit`)
        .then(response => {
            this.setState({
                ket_nama : response.data.ket_nama
            })
        }).catch(err => console.log(err));
    }

    handleNamaUpdateChange(event){
        this.setState({
            ket_nama : event.target.value
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
        const id = this.props.match.params.id;
        axios.put(`http://127.0.0.1:8000/api/ms_keterampilan/${id}/update`,{
            ket_nama : this.state.ket_nama
        }).then(response => {
            this.setState({
                ket_nama : ''
            })
            this.props.history.push('/KeterampilanList');
        }).catch(err => console.log(err));
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Edit Keterampilan</div>
    
                            <div className="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        onChange={this.handleNamaUpdateChange}
                                        value={this.state.ket_nama}
                                        className="form-control" 
                                        placeholder="Enter Nama Keterampilan"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Ubah Data Keterampilan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default KeterampilanEdit;