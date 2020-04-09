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
          ms_riwayat_pendidikan: [],
          activePage: 1,
          itemsCountPerPage: 1,
          totalItemsCount: 1,
          pageRangeDisplayed: 3  
        }
        this.handlePageChange=this.handlePageChange.bind(this);
      }
    
      componentDidMount() {
        // ajax call
        axios.get('http://127.0.0.1:8000/api/ms_riwayat_pendidikan/view')
        .then(response=>{
          this.setState({
            ms_riwayat_pendidikan:response.data.data,
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
        axios.get('http://127.0.0.1:8000/api/ms_riwayat_pendidikan/view?page='+pageNumber)
        .then(response=>{
          this.setState({
            ms_riwayat_pendidikan:response.data.data,
            itemsCountPerPage:response.data.per_page,
            totalItemsCount:response.data.total,
            activePage:response.data.current_page
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
                            <th>Nama Lembaga Pendidikan</th>
                            <th>Tanggal Lulus</th>
                            <th>Kualifikasi</th>
                            <th>Lokasi</th>
                            <th>Jurusan</th>
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
                                  <td>{ms_riwayat_pendidikans.rpd_tanggal_lulus}</td>
                                  <td>{ms_riwayat_pendidikans.rpd_kualifikasi}</td>
                                  <td>{ms_riwayat_pendidikans.rpd_lokasi}</td>
                                  <td>{ms_riwayat_pendidikans.rpd_jurusan}</td>
                                      <td>
                                          <Link to={`/${ms_riwayat_pendidikans.id}/RiwayatPendidikanEdit`} className="btn btn-warning btn-sm mr-2">Update</Link>
                                          <Link href="#" className="btn btn-warning btn-sm mr-2" onClick={this.deleteRiwayatPendidikan.bind(this, ms_riwayat_pendidikans.id)}>Delete</Link>
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