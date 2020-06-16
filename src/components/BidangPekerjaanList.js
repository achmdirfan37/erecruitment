import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import Pagination from 'react-js-pagination';

class BidangPekerjaanList extends React.Component {
  constructor() {
    super()

    // data provinsi disimpan di state.provinces
    this.state = {
      ms_bidang_pekerjaan: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    // ajax call
    axios.get('http://127.0.0.1:8000/api/ms_bidang_pekerjaan/view')
      .then(response => {
        this.setState({
          ms_bidang_pekerjaan: response.data.data,
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
    axios.get('http://127.0.0.1:8000/api/ms_bidang_pekerjaan/view?page=' + pageNumber)
      .then(response => {
        this.setState({
          ms_bidang_pekerjaan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  cari = () => {
    axios.get('http://localhost:8000/api/ms_bidang_pekerjaan/search?cari=' + this.state.cari)
      .then(response => {
        this.setState({
          ms_bidang_pekerjaan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  deleteBidangPekerjaan(bid_id) {
    axios.delete('http://127.0.0.1:8000/api/ms_bidang_pekerjaan/delete/' + bid_id)
      .then(response => {
        var bid = this.state.ms_bidang_pekerjaan;
        for (var i = 0; i < bid.length; i++) {
          if (bid[i].id == bid_id) {
            bid.splice(i, 1);
            this.setState({ bid: bid });
          }
        }
        this.props.history.push('/BidangPekerjaanList');
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
            Field of Work Data
              </h1>
          <ol className="breadcrumb">
            <li className="active">Field of Work Data</li>
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

                  <button onClick={this.cari}>Search for Field of Work</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to={"/BidangPekerjaanCreate"} className="btn btn-warning btn-sm mr-2">Add Field of Work</Link>
                  <br />
                  <table id="example1" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Type Field of Work</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.ms_bidang_pekerjaan !== undefined
                          ? this.state.ms_bidang_pekerjaan.map(ms_bidang_pekerjaans => (
                            <tr key={ms_bidang_pekerjaans.id}>
                              <td>{ms_bidang_pekerjaans.id}</td>
                              <td>{ms_bidang_pekerjaans.bid_nama}</td>
                              <td>
                                <Link to={`/${ms_bidang_pekerjaans.id}/BidangPekerjaanEdit`} className="btn btn-warning btn-sm mr-2">Update</Link>
                                <Link href="fake-url" className="btn btn-warning btn-sm mr-2" onClick={this.deleteBidangPekerjaan.bind(this, ms_bidang_pekerjaans.id)}>Delete</Link>
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

export default BidangPekerjaanList;