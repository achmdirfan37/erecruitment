import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Button, Alert } from "react-bootstrap";
import Pagination from "react-js-pagination";

class PersonList extends React.Component {
  constructor() {
    super();

    // data provinsi disimpan di state.provinces
    this.state = {
      ms_person: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    //this.cari=this.cari.bind(this);
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/ms_person/view").then((response) => {
      this.setState({
        ms_person: response.data.data,
        itemsCountPerPage: response.data.per_page,
        totalItemsCount: response.data.total,
        activePage: response.data.current_page,
      });
    });
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    axios
      .get("http://127.0.0.1:8000/api/ms_person/view?page=" + pageNumber)
      .then((response) => {
        this.setState({
          ms_person: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });
  }

  cari = () => {
    axios
      .get("http://localhost:8000/api/ms_person/search?cari=" + this.state.cari)
      .then((response) => {
        this.setState({
          ms_person: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page,
        });
      });
  };

  deleteUser(id) {
    axios
      .delete("http://localhost:8000/api/ms_person/delete/" + id)
      .then((response) => {
        var person = this.state.ms_person;
        for (var i = 0; i < person.length; i++) {
          if (person[i].id == id) {
            person.splice(i, 1);
            this.setState({ person: person });
          }
        }
      });
  }

  ubahStatus(id) {
    axios
      .delete("http://localhost:8000/api/ms_person/status/" + id)
      .then((response) => {
        var person = this.state.ms_person;
        for (var i = 0; i < person.length; i++) {
          if (person[i].id == id) {
            person.splice(i, 1);
            this.setState({ person: person });
          }
        }
      });
  }

  onChangeText = (event) => {
    // this.cari(event.target.value); / For live search
    this.setState({
      cari: event.target.value,
    });
  };

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

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/* /.box-header */}
                <div className="box-body">
                  <input
                    type="text"
                    value={this.state.cari}
                    onChange={this.onChangeText}
                    //onChange={this.searchChanged}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        this.cari();
                      }
                    }}
                    style={{ marginRight: 8 }}
                  />
                  <button onClick={this.cari}>Cari Data</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link
                    to={"/PersonCreate"}
                    className="btn btn-warning btn-sm mr-2"
                  >
                    Tambah Data Administrator
                  </Link>
                  <br />
                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Perusahaan</th>
                        <th>Role</th>
                        <th>Status Aktif</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.ms_person !== undefined
                        ? this.state.ms_person.map((ms_persons) => (
                            <tr key={ms_persons.id}>
                              <td>{ms_persons.id}</td>
                              <td>{ms_persons.pers_nama_lengkap}</td>
                              <td>{ms_persons.pers_email}</td>
                              <td>{ms_persons.per_nama}</td>
                              <td>{ms_persons.pers_role}</td>
                              <td>{ms_persons.pers_status_aktif}</td>
                              <td>
                                <Link
                                  href="fake-url"
                                  className="btn btn-warning btn-sm mr-2"
                                  onClick={this.ubahStatus.bind(
                                    this,
                                    ms_persons.id
                                  )}
                                >
                                  Tidak Aktif
                                </Link>
                                <Link
                                  to={`/${ms_persons.id}/PersonEdit`}
                                  className="btn btn-warning btn-sm mr-2"
                                >
                                  Ubah
                                </Link>
                                <Link
                                  href="fake-url"
                                  className="btn btn-warning btn-sm mr-2"
                                  onClick={this.deleteUser.bind(
                                    this,
                                    ms_persons.id
                                  )}
                                >
                                  Hapus
                                </Link>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                  <div class="center">
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.totalItemsCount}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.handlePageChange}
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                  </div>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
        {/* /.content */}
      </div>
    );
  }
}

export default PersonList;
