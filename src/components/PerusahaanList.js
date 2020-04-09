import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import Pagination from 'react-js-pagination';

class PerusahaanList extends React.Component {
    constructor() {
        super()
    
        // data provinsi disimpan di state.provinces
        this.state = {
          ms_perusahaan: [],
          activePage: 1,
          itemsCountPerPage: 1,
          totalItemsCount: 1,
          pageRangeDisplayed: 3  
        }
        this.handlePageChange=this.handlePageChange.bind(this);
      }
    
      componentDidMount() {
        // ajax call
        axios.get('http://127.0.0.1:8000/api/ms_perusahaan/view')
        .then(response=>{
          this.setState({
            ms_perusahaan:response.data.data,
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
        axios.get('http://127.0.0.1:8000/api/ms_perusahaan/view?page='+pageNumber)
        .then(response=>{
          this.setState({
            ms_perusahaan:response.data.data,
            itemsCountPerPage:response.data.per_page,
            totalItemsCount:response.data.total,
            activePage:response.data.current_page
          });
        });
      }
    
      cari = () => {
        axios.get('http://localhost:8000/api/ms_perusahaan/search?cari=' + this.state.cari)
        .then(response=>{
          this.setState({
            ms_perusahaan:response.data.data,
            itemsCountPerPage:response.data.per_page,
            totalItemsCount:response.data.total,
            activePage:response.data.current_page
          });
        });
      }
      
      deletePerusahaan(perusahaan_id){
        axios.delete('http://127.0.0.1:8000/api/ms_perusahaan/delete/'+perusahaan_id)
        .then(response=>{
            var perusahaann = this.state.perusahaann;
            for(var i =0; i < perusahaann.length; i++)
            {
                if(perusahaann[i].id==perusahaan_id)
                {
                    perusahaann.splice(i,1);
                    this.setState({perusahaann:perusahaann});
                }
            }
            this.props.history.push('/PerusahaanList');
          });
      }
    
      onChangeText = (event) => {
        this.setState({
          cari: event.target.value
        })
      }
    
      renderMsPerusahaan(item, index) {
        //var del = this.deleteUser;
        
        return <tr key={index}>
          <td>{item.id}</td>
          <td>{item.per_nama}</td>
          <td>{item.per_deskripsi}</td>
          <td>{item.per_email}</td>
          <td>{item.per_no_telepon}</td>
          <td>{item.per_alamat_website}</td> 
          <td>{item.per_alamat}</td>
          <td>
              <Link to={`/${item.id}/PerusahaanEdit`} className="btn btn-warning btn-sm mr-2">Ubah Data Perusahaan</Link>
          </td>
          {/* <td><Link href="#" className="btn btn-warning btn-sm mr-2" onClick={del.bind(this, item.id)}>Delete</Link></td>
           */}
          </tr>
      }
    
      render() {
        return (
          <div className="App">
            <link rel="stylesheet" href="http://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css"></link>
            <br/>
            <input type="text" 
            value={this.state.cari} 
            onChange={this.onChangeText}
            //onChange={this.searchChanged}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                this.cari()
              }
            }} 
            style={{marginRight: 8}}/>

            <button onClick={this.cari}>Cari Perusahaan</button>
            <br/><br/>
            <div style={{display: 'flex', justifyContent: 'center', textAlign: 'left'}}>
                <Table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Deskripsi</th>
                            <th>Email</th>
                            <th>No Telepon</th>
                            <th>Alamat Website</th>
                            <th>Alamat</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.ms_perusahaan !== undefined
                                ? this.state.ms_perusahaan.map(ms_perusahaans => (
                                    <tr key={ms_perusahaans.id}>
                                    <td>{ms_perusahaans.id}</td>
                                    <td>{ms_perusahaans.per_nama}</td>
                                    <td>{ms_perusahaans.per_deskripsi}</td>
                                    <td>{ms_perusahaans.per_email}</td>
                                    <td>{ms_perusahaans.per_no_telepon}</td>
                                    <td>{ms_perusahaans.per_alamat_website}</td> 
                                    <td>{ms_perusahaans.per_alamat}</td>
                                        <td>
                                            <Link to={`/${ms_perusahaans.id}/PerusahaanEdit`} className="btn btn-warning btn-sm mr-2">Update</Link>
                                            <Link href="#" className="btn btn-warning btn-sm mr-2" onClick={this.deletePerusahaan.bind(this, ms_perusahaans.id)}>Delete</Link>
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

export default PerusahaanList;