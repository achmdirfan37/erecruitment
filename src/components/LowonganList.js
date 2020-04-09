import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import Pagination from 'react-js-pagination';

class RiwayatPendidikanList extends React.Component {
    constructor() {
        super()
        // data provinsi disimpan di state.provinces
        this.state = {
          ms_lowongan: [],
          activePage: 1,
          itemsCountPerPage: 1,
          totalItemsCount: 1,
          pageRangeDisplayed: 3  
        }
        this.handlePageChange=this.handlePageChange.bind(this);
      }
    
      componentDidMount() {
        // ajax call
        axios.get('http://127.0.0.1:8000/api/ms_lowongan/view')
        .then(response=>{
          this.setState({
            ms_lowongan:response.data.data,
            itemsCountPerPage:response.data.per_page,
            totalItemsCount:response.data.total,
            activePage:response.data.current_page
          });
        });
      }
      
      handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        //this.setState({activePage: pageNumber});
        //"http://127.0.0.1:8000/api/ms_pelamar/view?page=1"
        axios.get('http://127.0.0.1:8000/api/ms_lowongan/view?page='+pageNumber)
        .then(response=>{
          this.setState({
            ms_lowongan:response.data.data,
            itemsCountPerPage:response.data.per_page,
            totalItemsCount:response.data.total,
            activePage:response.data.current_page
          });
        });
      }

      cari = () => {
        axios.get('http://localhost:8000/api/ms_lowongan/search?cari=' + this.state.cari)
        .then(response=>{
          this.setState({
            ms_lowongan:response.data.data,
            itemsCountPerPage:response.data.per_page,
            totalItemsCount:response.data.total,
            activePage:response.data.current_page
          });
        });
      }
      
      deleteLowongan(id) {
        axios.delete('http://localhost:8000/api/ms_lowongan/delete/' + id)
            .then(response => {
                var rpd = this.state.ms_lowongan;
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
          <div className="App">
            <link rel="stylesheet" href="http://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css"></link>
            <br/>
            <input type="text" value={this.state.cari} onChange={this.onChangeText} style={{marginRight: 8}}/>
            <button onClick={this.cari}>Cari</button>
            <br/><br/>
            <div style={{display: 'flex', justifyContent: 'center', textAlign: 'left'}}>
                <Table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Lowongan</th>
                            <th>Tanggal Ditutup</th>
                            <th>Jabatan</th>
                            <th>Bidang Kerja</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                          this.state.ms_lowongan !== null
                              ? this.state.ms_lowongan.map(ms_lowongans => (
                                  <tr key={ms_lowongans.id}>
                                  <td>{ms_lowongans.id}</td>
                                  <td>{ms_lowongans.low_judul}</td>
                                  <td>{ms_lowongans.low_tanggal_ditutup}</td>
                                  <td>{ms_lowongans.low_jabatan}</td>
                                  <td>{ms_lowongans.low_bidang_kerja}</td>
                                      <td>
                                          <Link to={`/${ms_lowongans.id}/LowonganEdit`} className="btn btn-warning btn-sm mr-2">Update</Link>
                                          <Link href="#" className="btn btn-warning btn-sm mr-2" onClick={this.deleteLowongan.bind(this, ms_lowongans.id)}>Delete</Link>
                                      </td>
                                  </tr>
                              ))
                              :
                              null
                        }
                        </tbody>
              </Table>
            </div>
            <div class="d-flex justify-content-center">
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
            <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
            <script></script>
          </div>
        );
      }
}

export default RiwayatPendidikanList;