import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import Pagination from 'react-js-pagination';

class PengalamanKerjaList extends React.Component {
  constructor() {
    super()
    // data provinsi disimpan di state.provinces
    this.state = {
      ms_pengalaman_kerja: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    // ajax call
    axios.get('http://127.0.0.1:8000/api/ms_pengalaman_kerja/view')
      .then(response => {
        this.setState({
          ms_pengalaman_kerja: response.data.data,
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
    axios.get('http://127.0.0.1:8000/api/ms_pengalaman_kerja/view?page=' + pageNumber)
      .then(response => {
        this.setState({
          ms_pengalaman_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  cari = () => {
    axios.get('http://localhost:8000/api/ms_pengalaman_kerja/search?cari=' + this.state.cari)
      .then(response => {
        this.setState({
          ms_pengalaman_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  deleteRiwayatPendidikan(id) {
    axios.delete('http://localhost:8000/api/ms_pengalaman_kerja/delete/' + id)
      .then(response => {
        var rpd = this.state.ms_pengalaman_kerja;
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
          Work Experience Data
              </h1>
          <ol className="breadcrumb">
            <li className="active">Work Experience Data</li>
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

                  <button onClick={this.cari}>Search for Work Experience</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to={"/PengalamanKerjaCreate"} className="btn btn-warning btn-sm mr-2">Add Work Experience Data</Link>
                  <br />
                  <table id="example1" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Company Name</th>
                        <th>Start Year of Work</th>
                        <th>Finish Year of Work</th>
                        <th>Location</th>
                        <th>Industry</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.ms_pengalaman_kerja !== null
                          ? this.state.ms_pengalaman_kerja.map(ms_pengalaman_kerjas => (
                            <tr key={ms_pengalaman_kerjas.id}>
                              <td>{ms_pengalaman_kerjas.id}</td>
                              <td>{ms_pengalaman_kerjas.pkj_nama_perusahaan}</td>
                              <td>{ms_pengalaman_kerjas.pkj_tanggal_selesai}</td>
                              <td>{ms_pengalaman_kerjas.pkj_tanggal_selesai}</td>
                              <td>{ms_pengalaman_kerjas.pkj_lokasi}</td>
                              <td>{ms_pengalaman_kerjas.pkj_industri}</td>
                              <td>
                                <Link to={`/${ms_pengalaman_kerjas.id}/PengalamanKerjaEdit`}
                                  className="btn btn-warning btn-sm mr-2">Update</Link>
                                <Link href="fake-url" className="btn btn-warning btn-sm mr-2" onClick={this.deleteRiwayatPendidikan.bind(this, ms_pengalaman_kerjas.id)}>Delete</Link>
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

export default PengalamanKerjaList;