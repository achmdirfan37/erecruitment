import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import Pagination from 'react-js-pagination';

class RoleList extends React.Component {
    constructor() {
        super()
    
        // data provinsi disimpan di state.provinces
        this.state = {
          ms_role: [],
          activePage: 1,
          itemsCountPerPage: 1,
          totalItemsCount: 1,
          pageRangeDisplayed: 3  
        }
        this.handlePageChange=this.handlePageChange.bind(this);
        //this.cari=this.cari.bind(this);
      }
    
      componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/ms_role/view')
        .then(response=>{
          this.setState({
            ms_role:response.data.data,
            itemsCountPerPage:response.data.per_page,
            totalItemsCount:response.data.total,
            activePage:response.data.current_page
          });
        });
      }

      handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        axios.get('http://127.0.0.1:8000/api/ms_role/view?page='+pageNumber)
        .then(response=>{
          this.setState({
            ms_role:response.data.data,
            itemsCountPerPage:response.data.per_page,
            totalItemsCount:response.data.total,
            activePage:response.data.current_page
          });
        });
      }

      cari = () => {
        axios.get('http://localhost:8000/api/ms_role/search?cari=' + this.state.cari)
        .then(response=>{
          this.setState({
            ms_role:response.data.data,
            itemsCountPerPage:response.data.per_page,
            totalItemsCount:response.data.total,
            activePage:response.data.current_page
          });
        });
      }

      deleteUser(id) {
        axios.delete('http://localhost:8000/api/ms_role/delete/' + id)
            .then(response => {
                var role = this.state.ms_role;
                for (var i = 0; i < role.length; i++) {
                    if (role[i].id == id) {
                      role.splice(i, 1);
                        this.setState({ role: role });
                    }
                }
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

            <button onClick={this.cari}>Cari Pelamar</button>
            <br/><br/>
            <div style={{display: 'flex', justifyContent: 'center', textAlign: 'left'}}>
                <Table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Username</th>
                            <th>Nama Lengkap</th>
                            <th>Perusahaan</th>
                            <th>Email</th>
                            <th>No Telepon</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                    <tbody>
                    {
                        this.state.ms_role !== undefined
                            ? this.state.ms_role
                            .map(ms_roles => (
                                <tr key={ms_roles.id}>
                                    <td>{ms_roles.id}</td>
                                    <td>{ms_roles.rol_username}</td>
                                    <td>{ms_roles.rol_nama_lengkap}</td>
                                    <td>{ms_roles.rol_perusahaan}</td>
                                    <td>{ms_roles.rol_email}</td>
                                    <td>{ms_roles.rol_no_telepon}</td>
                                    <td>{ms_roles.rol_status_aktif}</td>
                                    <td>
                                        <Link 
                                        to={`/${ms_roles.id}/RoleEdit`} 
                                        className="btn btn-warning btn-sm mr-2">Update</Link>
                                        <Link 
                                        href="#" className="btn btn-warning btn-sm mr-2" 
                                        onClick={this.deleteUser.bind(this, ms_roles.id)}>Delete</Link>
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

export default RoleList;