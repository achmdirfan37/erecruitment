import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import Pagination from 'react-js-pagination';

class RiwayatPendidikanList extends React.Component {
  constructor() {
    super()
    // data provinsi disimpan di state.provinces
    this.state = {
      ms_riwayat_pendidikan: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    // ajax call
    axios.get('http://127.0.0.1:8000/api/ms_riwayat_pendidikan/view')
      .then(response => {
        this.setState({
          ms_riwayat_pendidikan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    //this.setState({activePage: pageNumber});
    //"http://127.0.0.1:8000/api/ms_pelamar/view?page=1"
    axios.get('http://127.0.0.1:8000/api/ms_riwayat_pendidikan/view?page=' + pageNumber)
      .then(response => {
        this.setState({
          ms_riwayat_pendidikan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  // cari = () => {
  //   fetch('http://127.0.0.1:8000/api/ms_riwayat_pendidikan/search?cari=' + this.state.cari)
  //   .then(response => response.json())
  //   .then((json) => {
  //     this.setState({
  //       ms_riwayat_pendidikan: json.data
  //     })
  //   })
  // }

  deleteRiwayatPendidikan(id) {
    axios.delete('http://localhost:8000/api/ms_riwayat_pendidikan/delete/' + id)
      .then(response => {
        var rpd = this.state.ms_riwayat_pendidikan;
        for (var i = 0; i < rpd.length; i++) {
          if (rpd[i].id == id) {
            rpd.splice(i, 1);
            this.setState({ rpd: rpd });
          }
        }
      });
  }

  onChangeText = (event) => {
    this.setState({
      cari: event.target.value
    })
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
          Education Background Data
              </h1>
          <ol className="breadcrumb">
            <li className="active">Education Background Data</li>
          </ol>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/* /.box-header */}
                <div className="box-body">
                  <input type="text"
                    value={this.state.cari}
                    onChange={this.onChangeText}
                    //onChange={this.searchChanged}
                    onKeyPress={event => {
                      if (event.key === 'Enter') {
                        this.cari()
                      }
                    }}
                    style={{ marginRight: 8 }} />

                  <button onClick={this.cari}>Search Educational Background Data</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to={"/RiwayatPendidikanCreate"} className="btn btn-warning btn-sm mr-2">Add Educational Background Data</Link>
                  <br />
                  <table id="example1" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Name of Educational Institution</th>
                        <th>Graduation Year</th>
                        <th>Educational Stage</th>
                        <th>Location</th>
                        <th>Majors</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.ms_riwayat_pendidikan !== null
                          ? this.state.ms_riwayat_pendidikan.map(ms_riwayat_pendidikans => (
                            <tr key={ms_riwayat_pendidikans.id}>
                              <td>{ms_riwayat_pendidikans.id}</td>
                              <td>{ms_riwayat_pendidikans.rpd_nama_lembaga_pendidikan}</td>
                              <td>{ms_riwayat_pendidikans.rpd_tahun_lulus}</td>
                              <td>{ms_riwayat_pendidikans.rpd_kualifikasi}</td>
                              <td>{ms_riwayat_pendidikans.rpd_lokasi}</td>
                              <td>{ms_riwayat_pendidikans.rpd_jurusan}</td>
                              <td>
                                <Link to={`/${ms_riwayat_pendidikans.id}/RiwayatPendidikanEdit`} className="btn btn-warning btn-sm mr-2">Update</Link>
                                <Link href="fake-url" className="btn btn-warning btn-sm mr-2" onClick={this.deleteRiwayatPendidikan.bind(this, ms_riwayat_pendidikans.id)}>Delete</Link>
                              </td>
                            </tr>
                          ))
                          :
                          null
                      }
                    </tbody>
                  </table>
                  <div class="center">
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.totalItemsCount}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.handlePageChange}
                      itemClass='page-item'
                      linkClass='page-link'
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

export default RiwayatPendidikanList;