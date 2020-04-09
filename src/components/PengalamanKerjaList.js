import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
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
        this.handlePageChange=this.handlePageChange.bind(this);
      }
    
      componentDidMount() {
        // ajax call
        axios.get('http://127.0.0.1:8000/api/ms_pengalaman_kerja/view')
        .then(response=>{
          this.setState({
            ms_pengalaman_kerja:response.data.data,
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
        axios.get('http://127.0.0.1:8000/api/ms_pengalaman_kerja/view?page='+pageNumber)
        .then(response=>{
          this.setState({
            ms_pengalaman_kerja:response.data.data,
            itemsCountPerPage:response.data.per_page,
            totalItemsCount:response.data.total,
            activePage:response.data.current_page
          });
        });
      }

      cari = () => {
        axios.get('http://localhost:8000/api/ms_pengalaman_kerja/search?cari=' + this.state.cari)
        .then(response=>{
          this.setState({
            ms_pengalaman_kerja:response.data.data,
            itemsCountPerPage:response.data.per_page,
            totalItemsCount:response.data.total,
            activePage:response.data.current_page
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
                            <th>Nama Perusahaan</th>
                            <th>Tanggal Mulai</th>
                            <th>Tanggal Selesai</th>
                            <th>Lokasi</th>
                            <th>Industri</th>
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
                                          <Link to={`/${ms_pengalaman_kerjas.id}/PengalamanKerjaEdit`} className="btn btn-warning btn-sm mr-2">Update</Link>
                                          <Link href="#" className="btn btn-warning btn-sm mr-2" onClick={this.deleteRiwayatPendidikan.bind(this, ms_pengalaman_kerjas.id)}>Delete</Link>
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

export default PengalamanKerjaList;