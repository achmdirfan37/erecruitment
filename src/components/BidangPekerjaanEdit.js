import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class BidangPekerjaanEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
            bid_nama : ''
        }
        this.handleNamaUpdateChange = this.handleNamaUpdateChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/ms_bidang_pekerjaan/${id}/edit`)
        .then(response => {
            this.setState({
                bid_nama : response.data.bid_nama
            })
        }).catch(err => console.log(err));
    }

    handleNamaUpdateChange(event){
        this.setState({
            bid_nama : event.target.value
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
        const id = this.props.match.params.id;
        axios.put(`http://127.0.0.1:8000/api/ms_bidang_pekerjaan/${id}/update`,{
            bid_nama : this.state.bid_nama
        }).then(response => {
            this.setState({
                bid_nama : ''
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
                            <div className="card-header">Edit Bidang Pekerjaan</div>
    
                            <div className="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                        required
                                        onChange={this.handleNamaUpdateChange}
                                        value={this.state.bid_nama}
                                        className="form-control" 
                                        placeholder="Enter Nama Bidang Pekerjaan"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Ubah Data Bidang Pekerjaan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BidangPekerjaanEdit;