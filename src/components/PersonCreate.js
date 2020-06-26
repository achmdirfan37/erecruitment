import React, { Component } from "react";
import axios from "axios";
//import PelamarList from './pelamar-listing.component';

export default class PersonCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pers_nama_lengkap: "",
      pers_email: "",
      pers_perusahaan: "",
      pers_role: "",
      ms_perusahaan: [],
    };

    this.handleNamaLengkapInputChange = this.handleNamaLengkapInputChange.bind(
      this
    );
    this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
    this.handlePerusahaanInputChange = this.handlePerusahaanInputChange.bind(
      this
    );
    this.handleRoleInputChange = this.handleRoleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/ms_person/showPerusahaan")
      .then((response) => {
        this.setState({
          ms_perusahaan: response.data.data,
        });
      });
  }

  handleNamaLengkapInputChange(event) {
    this.setState({
      pers_nama_lengkap: event.target.value,
    });
  }

  handleRoleInputChange(event) {
    this.setState({
      pers_role: event.target.value,
    });
  }

  handleEmailInputChange(event) {
    this.setState({
      pers_email: event.target.value,
    });
  }

  handlePerusahaanInputChange(event) {
    this.setState({
      pers_perusahaan: event.target.value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/ms_person/create", {
        pers_nama_lengkap: this.state.pers_nama_lengkap,
        pers_email: this.state.pers_email,
        pers_perusahaan: this.state.pers_perusahaan,
        pers_role: this.state.pers_role,
      })
      .then((response) => {
        this.setState({
          pers_nama_lengkap: "",
          pers_email: "",
          pers_perusahaan: "",
          pers_role: "",
        });
        this.props.history.push("/PersonList");
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Data Administrator</h1>
          <ol className="breadcrumb">
            <li className="active">Data Administrator</li>
          </ol>
        </section>

        <section className="content">
          <div className="row">
            {/* left column */}
            <div className="col-md-12">
              {/* general form elements */}
              <div className="box box-primary">
                <form role="form" onSubmit={this.handleFormSubmit}>
                  <div className="box-body">
                    <div className="form-group">
                      <label htmlFor="">Nama</label>
                      <input
                        type="text"
                        required
                        name="pers_nama_lengkap"
                        onChange={this.handleNamaLengkapInputChange}
                        value={this.state.pers_nama_lengkap}
                        className="form-control"
                        placeholder="Masukkan Nama"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Perusahaan</label>
                      <select
                        className="form-control select2"
                        value={this.state.pers_perusahaan}
                        onChange={(event) =>
                          this.setState({ pers_perusahaan: event.target.value })
                        }
                      >
                        {this.state.ms_perusahaan.map((perusahaans) => (
                          <option key={perusahaans.id} value={perusahaans.id}>
                            {perusahaans.per_nama}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Role</label>
                      <select
                        className="form-control select2"
                        value={this.state.pers_role}
                        onChange={(event) =>
                          this.setState({ pers_role: event.target.value })
                        }
                      >
                        <option value="HRD Anak Perusahaan">
                          HRD Anak Perusahaan
                        </option>
                        <option value="Pewawancara">Pewawancara</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        required
                        name="pers_email"
                        onChange={this.handleEmailInputChange}
                        value={this.state.pers_email}
                        className="form-control"
                        placeholder="Masukkan Email"
                      />
                    </div>
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                      Simpan Data
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
