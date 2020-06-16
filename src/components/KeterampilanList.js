import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import Pagination from 'react-js-pagination';

class KeterampilanList extends React.Component {
  constructor() {
    super()

    // data provinsi disimpan di state.provinces
    this.state = {
      ms_keterampilan: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 3
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    // ajax call
    axios.get('http://127.0.0.1:8000/api/ms_keterampilan/view')
      .then(response => {
        this.setState({
          ms_keterampilan: response.data.data,
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
    axios.get('http://127.0.0.1:8000/api/ms_keterampilan/view?page=' + pageNumber)
      .then(response => {
        this.setState({
          ms_keterampilan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  cari = () => {
    axios.get('http://localhost:8000/api/ms_keterampilan/search?cari=' + this.state.cari)
      .then(response => {
        this.setState({
          ms_keterampilan: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });

    // fetch('http://localhost:8000/api/ms_pelamar/search?cari=' + this.state.cari)
    // .then(response => response.json())
    // .then((json) => {
    //   this.setState({
    //     ms_pelamar: json.data
    //   })
    // })
  }

  deleteKeterampilan(keterampilan_id) {
    axios.delete('http://127.0.0.1:8000/api/ms_keterampilan/delete/' + keterampilan_id)
      .then(response => {
        var keterampilann = this.state.ms_keterampilan;
        for (var i = 0; i < keterampilann.length; i++) {
          if (keterampilann[i].id == keterampilan_id) {
            keterampilann.splice(i, 1);
            this.setState({ ms_keterampilan: keterampilann });
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
          Skills Data
              </h1>
          <ol className="breadcrumb">
            <li className="active">Skills Data</li>
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

                  <button onClick={this.cari}>Search Skills Data</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to={"/KeterampilanCreate"} className="btn btn-warning btn-sm mr-2">Add Skill Data</Link>
                  <br />
                  <table id="example1" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Type of Skill</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.ms_keterampilan !== undefined
                          ? this.state.ms_keterampilan
                            .map(ms_keterampilans => (
                              <tr key={ms_keterampilans.id}>
                                <td>{ms_keterampilans.id}</td>
                                <td>{ms_keterampilans.ket_nama}</td>
                                <td>
                                  <Link to={`/${ms_keterampilans.id}/KeterampilanEdit`} className="btn btn-warning btn-sm mr-2">Update</Link>
                                  <Link href="fake-url" className="btn btn-warning btn-sm mr-2" onClick={this.deleteKeterampilan.bind(this, ms_keterampilans.id)}>Delete</Link>
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

export default KeterampilanList;