import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import Pagination from 'react-js-pagination';

class DashboardPelamar_LamaranKerjaAcceptDecline extends React.Component {
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
    // this.handlePageChangeInterview = this.handlePageChangeInterview.bind(this);
    // this.handlePageChangePsikotes = this.handlePageChangePsikotes.bind(this);
  }

  componentDidMount() {
    // ajax call

    //const id = this.props.match.params.id;
    const id = 4;

    axios.get(`http://127.0.0.1:8000/api/tr_lamaran_kerja/viewDetailAcceptDeclinePelamar/${id}`)
      .then(response => {
        this.setState({
          tr_lamaran_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      }).catch(err => console.log(err));
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    const id = 4;
    axios.get(`http://127.0.0.1:8000/api/tr_lamaran_kerja/viewDetailAcceptDeclinePelamar/${id}?page=` + pageNumber)
      .then(response => {
        this.setState({
          tr_lamaran_kerja: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  // ubahStatusAccept(id) {
  //   axios.delete('http://localhost:8000/api/tr_lamaran_kerja/statusAccept/' + id)
  //     .then(response => {
  //       var lamaran = this.state.tr_lamaran_kerja;
  //       for (var i = 0; i < lamaran.length; i++) {
  //         if (lamaran[i].id == id) {
  //           lamaran.splice(i, 1);
  //           this.setState({ lamaran: lamaran });
  //         }
  //       }
  //     });
  // }

  // ubahStatusDecline(id) {
  //   axios.delete('http://localhost:8000/api/tr_lamaran_kerja/statusDecline/' + id)
  //     .then(response => {
  //       var lamaran = this.state.tr_lamaran_kerja;
  //       for (var i = 0; i < lamaran.length; i++) {
  //         if (lamaran[i].id == id) {
  //           lamaran.splice(i, 1);
  //           this.setState({ lamaran: lamaran });
  //         }
  //       }
  //     });
  // }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Job Application Data
              </h1>
          <ol className="breadcrumb">
            <li className="active">Job Application Data</li>
          </ol>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                {/* /.box-header */}
                <div className="box-body">
                  <br />
                  <table id="example1" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Status Read</th>
                        <th>Status Recruitment</th>
                        <th>Supporting Documents</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.tr_lamaran_kerja !== undefined
                          ? this.state.tr_lamaran_kerja.map(tr_lamaran_kerjas => (
                            <tr key={tr_lamaran_kerjas.id}>
                              <td>{tr_lamaran_kerjas.id}</td>
                              <td>{tr_lamaran_kerjas.lk_status_baca}</td>
                              <td>{tr_lamaran_kerjas.lk_status_rekrutmen}</td>
                              <td>{tr_lamaran_kerjas.lk_cv}</td>
                              <td>
                                <Link to={`/${tr_lamaran_kerjas.id}/DashboardPelamar_Accept`} className="btn btn-warning btn-sm mr-2">Accept</Link>
                                <Link to={`/${tr_lamaran_kerjas.id}/DashboardPelamar_Decline`} className="btn btn-warning btn-sm mr-2">Decline</Link>
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

export default DashboardPelamar_LamaranKerjaAcceptDecline;