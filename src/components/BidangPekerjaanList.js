import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
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
        this.handlePageChange=this.handlePageChange.bind(this);
      }
    
      componentDidMount() {
        // ajax call
        axios.get('http://127.0.0.1:8000/api/ms_bidang_pekerjaan/view')
        .then(response=>{
          this.setState({
            ms_bidang_pekerjaan:response.data.data,
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
        axios.get('http://127.0.0.1:8000/api/ms_bidang_pekerjaan/view?page='+pageNumber)
        .then(response=>{
          this.setState({
            ms_bidang_pekerjaan:response.data.data,
            itemsCountPerPage:response.data.per_page,
            totalItemsCount:response.data.total,
            activePage:response.data.current_page
          });
        });
      }

      cari = () => {
        axios.get('http://localhost:8000/api/ms_bidang_pekerjaan/search?cari=' + this.state.cari)
        .then(response=>{
          this.setState({
            ms_bidang_pekerjaan:response.data.data,
            itemsCountPerPage:response.data.per_page,
            totalItemsCount:response.data.total,
            activePage:response.data.current_page
          });
        });
      }
      
      deleteBidangPekerjaan(bid_id){
        axios.delete('http://127.0.0.1:8000/api/ms_bidang_pekerjaan/delete/'+bid_id)
        .then(response=>{
            var bid = this.state.bid;
            for(var i =0; i < bid.length; i++)
            {
                if(bid[i].id==bid_id)
                {
                    bid.splice(i,1);
                    this.setState({bid:bid});
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
    
      renderMsBidangPekerjaan(item, index) {
        //var del = this.deleteUser;
        
        return <tr key={index}>
          <td>{item.id}</td>
          <td>{item.bid_nama}</td>
          <td>
              <Link to={`/${item.id}/BidangPekerjaanEdit`} className="btn btn-warning btn-sm mr-2">Ubah Data Bidang Pekerjaan</Link>
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

            <button onClick={this.cari}>Cari Bidang Pekerjaan</button>
            <br/><br/>
            <div style={{display: 'flex', justifyContent: 'center', textAlign: 'left'}}>
                <Table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Bidang Pekerjaan</th>
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
                                          <Link href="#" className="btn btn-warning btn-sm mr-2" onClick={this.deleteBidangPekerjaan.bind(this, ms_bidang_pekerjaans.id)}>Delete</Link>
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

export default BidangPekerjaanList;