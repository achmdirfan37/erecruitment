import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

class PelamarList_InvitationInterview extends React.Component {
  constructor() {
    super()

    // data provinsi disimpan di state.provinces
    this.state = {
      tr_lamaran_kerja: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3
    }
    this.handlePageChange = this.handlePageChange.bind(this);
    //this.cari=this.cari.bind(this);
  }

  componentDidMount() {
    // ajax call
    // fetch('http://127.0.0.1:8000/api/ms_pelamar/view')
    // .then(response => response.json())
    // .then((json) => {
    //   this.setState({
    //     ms_pelamar: json.data
    //   })
    // })
    axios.get('http://127.0.0.1:8000/api/tr_lamaran_kerja/viewBelumDibaca')
      .then(response => {
        this.setState({
          tr_lamaran_kerja: response.data.data,
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
    axios.get('http://127.0.0.1:8000/api/tr_lamaran_kerja/viewBelumDibaca?page=' + pageNumber)
      .then(response => {
        this.setState({
          tr_lamaran_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  cari = () => {
    axios.get('http://localhost:8000/api/tr_lamaran_kerja/search?cari=' + this.state.cari)
      .then(response => {
        this.setState({
          tr_lamaran_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  onChangeText = (event) => {
    // this.cari(event.target.value); / For live search 
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
            Lamaran Pekerjaan
          </h1>
          <ol className="breadcrumb">
            <li className="active">Lamaran Pekerjaan</li>
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

                  <button onClick={this.cari}>Cari Lamaran Pekerjaan</button>
                  <table id="example1" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Lowongan Pekerjaan</th>
                        <th>Status Recruitment</th>
                        <th>Dokumen Pendukung</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.tr_lamaran_kerja !== undefined
                          ? this.state.tr_lamaran_kerja.map(tr_lamaran_kerjas => (
                            <tr key={tr_lamaran_kerjas.id}>
                              <td>{tr_lamaran_kerjas.id}</td>
                              <td>{tr_lamaran_kerjas.lk_lowongan}</td>
                              <td>{tr_lamaran_kerjas.lk_status_rekrutmen}</td>
                              <td>{tr_lamaran_kerjas.lk_cv}</td>
                              <td>
                                <Link
                                  to={`/${tr_lamaran_kerjas.id}/Undang_Wawancara1`}
                                  className="btn btn-warning btn-sm mr-2">Undang Wawancara 1</Link>
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

export default PelamarList_InvitationInterview;