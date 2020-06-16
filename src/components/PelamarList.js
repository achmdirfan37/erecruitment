import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

class PelamarList extends React.Component {
  constructor() {
    super()

    // data provinsi disimpan di state.provinces
    this.state = {
      ms_pelamar: [],
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
    axios.get('http://127.0.0.1:8000/api/ms_pelamar/view')
      .then(response => {
        this.setState({
          ms_pelamar: response.data.data,
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
    axios.get('http://127.0.0.1:8000/api/ms_pelamar/view?page=' + pageNumber)
      .then(response => {
        this.setState({
          ms_pelamar: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
      });
  }

  cari = () => {
    axios.get('http://localhost:8000/api/ms_pelamar/search?cari=' + this.state.cari)
      .then(response => {
        this.setState({
          ms_pelamar: response.data.data,
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

  deleteUser(id) {
    axios.delete('http://localhost:8000/api/ms_pelamar/delete/' + id)
      .then(response => {
        var pelamar = this.state.ms_pelamar;
        for (var i = 0; i < pelamar.length; i++) {
          if (pelamar[i].id == id) {
            pelamar.splice(i, 1);
            this.setState({ pelamar: pelamar });
          }
        }
        this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  onChangeText = (event) => {
    // this.cari(event.target.value); / For live search 
    this.setState({
      cari: event.target.value
    })
  }


  renderMsPelamar(item, index) {
    return <tr key={index}>
      <td>{item.id}</td>
      <td>{item.pel_nama_lengkap}</td>
      <td>{item.pel_jenis_kelamin}</td>
      <td>{item.pel_email}</td>
      <td>{item.pel_no_telepon}</td>
      <td>{item.pel_alamat}</td>
      <td>{item.pel_umur}</td>
    </tr>
  };

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Data Pelamar
          </h1>
          <ol className="breadcrumb">
            <li className="active">Data Pelamar</li>
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

                  <button onClick={this.cari}>Cari Pelamar</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;
                  <Link to={"/PelamarCreate"} className="btn btn-warning btn-sm mr-2">Tambah Data Pelamar</Link>
                  <br />
                  <table id="example1" className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Jenis Kelamin</th>
                        <th>Alamat Pos-el</th>
                        <th>No HP</th>
                        <th>Alamat</th>
                        <th>Umur</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.ms_pelamar !== undefined
                          ? this.state.ms_pelamar
                            .map(ms_pelamars => (
                              <tr key={ms_pelamars.id}>
                                <td>{ms_pelamars.id}</td>
                                <td>{ms_pelamars.pel_nama_lengkap}</td>
                                <td>{ms_pelamars.pel_jenis_kelamin}</td>
                                <td>{ms_pelamars.pel_email}</td>
                                <td>{ms_pelamars.pel_no_telepon}</td>
                                <td>{ms_pelamars.pel_alamat}</td>
                                <td>{ms_pelamars.pel_umur}</td>
                                <td>
                                  <Link
                                    to={`/${ms_pelamars.id}/PelamarEdit`}
                                    className="btn btn-warning btn-sm mr-2">Update</Link>
                                  <Link
                                    href="fake-url" className="btn btn-warning btn-sm mr-2"
                                    onClick={this.deleteUser.bind(this, ms_pelamars.id)}>Delete</Link>
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

export default PelamarList;