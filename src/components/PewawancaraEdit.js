import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class PewawancaraEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ms_perusahaan: [],
      ms_person: [],
      pers_nama_lengkap: "",
      pers_email: "",
      pers_perusahaan: "",
      pers_no_telepon: "",
    };
    this.handleNamaLengkapUpdateChange = this.handleNamaLengkapUpdateChange.bind(
      this
    );
    this.handleEmailUpdateChange = this.handleEmailUpdateChange.bind(this);
    this.handlePerusahaanUpdateChange = this.handlePerusahaanUpdateChange.bind(
      this
    );
    this.handleNoTeleponUpdateChange = this.handleNoTeleponUpdateChange.bind(
      this
    );
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/ms_person/edit/${id}`)
      .then((response) => {
        this.setState({
          pers_nama_lengkap: response.data.pers_nama_lengkap,
          pers_email: response.data.pers_email,
          pers_perusahaan: response.data.pers_perusahaan,
          pers_no_telepon: response.data.pers_no_telepon,
        });
      })
      .catch((err) => console.log(err));

    axios
      .get("http://127.0.0.1:8000/api/ms_perusahaan/ddl")
      .then((response) => {
        this.setState({
          ms_perusahaan: response.data.data,
        });
      });
  }

  handleNamaLengkapUpdateChange(event) {
    this.setState({
      pers_nama_lengkap: event.target.value,
    });
  }

  handleEmailUpdateChange(event) {
    this.setState({
      pers_email: event.target.value,
    });
  }

  handlePerusahaanUpdateChange(event) {
    this.setState({
      pers_perusahaan: event.target.value,
    });
  }

  handleNoTeleponUpdateChange(event) {
    this.setState({
      pers_no_telepon: event.target.value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .put(`http://127.0.0.1:8000/api/ms_person/updatePewawancara/${id}`, {
        pers_nama_lengkap: this.state.pers_nama_lengkap,
        pers_email: this.state.pers_email,
        pers_perusahaan: this.state.pers_perusahaan,
        pers_no_telepon: this.state.pers_no_telepon,
      })
      .then((response) => {
        this.setState({
          pers_nama_lengkap: "",
          pers_email: "",
          pers_perusahaan: "",
          pers_no_telepon: "",
        });
        this.props.history.push("/PewawancaraList");
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Pewawancara Data</h1>
          <ol className="breadcrumb">
            <li className="active">Pewawancara Data</li>
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
                      <label>Nama Pewawancara</label>
                      <input
                        type="text"
                        required
                        name="pers_nama_lengkap"
                        onChange={this.handleNamaLengkapUpdateChange}
                        value={this.state.pers_nama_lengkap}
                        className="form-control"
                        placeholder="Masukkan Nama Pewawancara"
                      />
                    </div>
                    <div className="form-group">
                      <label>No Telepon</label>
                      <input
                        type="text"
                        required
                        name="pers_no_telepon"
                        onChange={this.handleNoTeleponUpdateChange}
                        value={this.state.pers_no_telepon}
                        className="form-control"
                        placeholder="Masukkan No Telepon"
                      />
                    </div>
                    <div className="form-group">
                      <label>Perusahaan</label>
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
                      <label>Alamat Email</label>
                      <input
                        type="text"
                        required
                        name="pers_email"
                        onChange={this.handleEmailUpdateChange}
                        value={this.state.pers_email}
                        className="form-control"
                        placeholder="Masukkan Alamat Email"
                      />
                    </div>
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                      Ubah Data
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

export default PewawancaraEdit;
