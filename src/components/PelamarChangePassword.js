import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Alert } from 'react-alert';
class PelamarChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pel_password: '',
            pel_old_pass: '',
            pel_new_pass: '',
            pel_con_pass: ''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handlePasswordUpdateChange = this.handlePasswordUpdateChange.bind(this);
        this.handleOldPasswordUpdateChange = this.handleOldPasswordUpdateChange.bind(this);
        this.handleNewPasswordUpdateChange = this.handleNewPasswordUpdateChange.bind(this);
        this.handleConfirmationPasswordUpdateChange = this.handleConfirmationPasswordUpdateChange.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/ms_pelamar/viewDetail/${id}`)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    pel_password: response.data.pel_password
                })
            }).catch(err => console.log(err));
    }

    handlePasswordUpdateChange(event) {
        this.setState({
            pel_password: event.target.value
        })
    }

    handleOldPasswordUpdateChange(event) {
        this.setState({
            pel_old_pass: event.target.value
        })
    }

    handleNewPasswordUpdateChange(event) {
        this.setState({
            pel_new_pass: event.target.value
        })
    }

    handleConfirmationPasswordUpdateChange(event) {
        this.setState({
            pel_con_pass: event.target.value
        })
    }

    handleFormSubmit(event) {
        alert("Your Password is Change!");
        event.preventDefault();
        const id = this.props.match.params.id;
        axios.put(`http://127.0.0.1:8000/api/ms_pelamar/${id}/changePassword`, {
            pel_password: this.state.pel_password,
            pel_old_pass: this.state.pel_old_pass,
            pel_new_pass: this.state.pel_new_pass,
            pel_con_pass: this.state.pel_con_pass
        }).then(response => {
            this.setState({
                pel_password: '',
                pel_old_pass: '',
                pel_new_pass: '',
                pel_con_pass: ''
            })
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>
                        Change Password
                    </h1>
                    <ol className="breadcrumb">
                        <li className="active">Change Password</li>
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
                                        <input type="text"
                                            required
                                            name="pel_nama_lengkap"
                                            readOnly
                                            onChange={this.handlePasswordUpdateChange}
                                            value={this.state.pel_password}
                                            className="form-control" />
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Old Password</label>
                                            <input type="text"
                                                required
                                                name="pel_nama_lengkap"
                                                onChange={this.handleOldPasswordUpdateChange}
                                                value={this.state.pel_old_pass}
                                                className="form-control"
                                                placeholder="Enter Old Password" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">New Password</label>
                                            <input type="text"
                                                required
                                                name="pel_email"
                                                onChange={this.handleNewPasswordUpdateChange}
                                                value={this.state.pel_new_pass}
                                                className="form-control"
                                                placeholder="Enter New Password" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Confirmation Password</label>
                                            <input type="text"
                                                required
                                                name="pel_email"
                                                onChange={this.handleConfirmationPasswordUpdateChange}
                                                value={this.state.pel_con_pass}
                                                className="form-control"
                                                placeholder="Enter Confirmation Password" />
                                        </div>
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-primary">Change Password</button>
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

export default PelamarChangePassword;