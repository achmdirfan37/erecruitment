import React, {Component} from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PelamarEdit from "./components/PelamarEdit";
import PelamarList from "./components/PelamarList";
import PelamarCreate from "./components/PelamarCreate";
import BidangPekerjaanEdit from "./components/BidangPekerjaanEdit";
import BidangPekerjaanList from "./components/BidangPekerjaanList";
import BidangPekerjaanCreate from "./components/BidangPekerjaanCreate";
import KeterampilanEdit from "./components/KeterampilanEdit";
import KeterampilanList from "./components/KeterampilanList";
import KeterampilanCreate from "./components/KeterampilanCreate";
import PerusahaanEdit from "./components/PerusahaanEdit";
import PerusahaanList from "./components/PerusahaanList";
import PerusahaanCreate from "./components/PerusahaanCreate";
import PengalamanKerjaEdit from "./components/PengalamanKerjaEdit";
import PengalamanKerjaList from "./components/PengalamanKerjaList";
import PengalamanKerjaCreate from "./components/PengalamanKerjaCreate";
import RiwayatPendidikanEdit from "./components/RiwayatPendidikanEdit";
import RiwayatPendidikanList from "./components/RiwayatPendidikanList";
import RiwayatPendidikanCreate from "./components/RiwayatPendidikanCreate";
import LowonganEdit from "./components/LowonganEdit";
import LowonganList from "./components/LowonganList";
import LowonganCreate from "./components/LowonganCreate";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      response: {},
      ms_pelamar: {},
      ms_bidang_pekerjaan: {},
      ms_keterampilan: {},
      ms_perusahaan: {},
      ms_pengalaman_kerja: {},
      ms_riwayat_pendidikan: {},
      ms_lowongan: {},
    }
  }

  // const myHeaders = new Headers();
  //   myHeaders.append('Content-Type', 'application/json');

  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     myHeaders
  //   };

  //   fetch(apiUrl, options)
  //     .then(res => res.json())
  //     .then(result => {
  //       this.setState({
  //         response: result,
  //         isAddProduct: false
  //       })
  //     },
  //     (error) => {
  //       this.setState({ error });
  //     }
  //   )
  // }

  render() {
    return (<Router>
      <div className="App">
        <header>
          <Navbar bg="success" variant="success">
            <Container>

              <Navbar.Brand>
                <Link to={"/PelamarList"} className="nav-link">
                  Kelola Pelamar
                </Link>
                <Link to={"/BidangPekerjaanList"} className="nav-link">
                  Kelola Bidang Pekerjaan
                </Link>
                <Link to={"/KeterampilanList"} className="nav-link">
                  Kelola Keterampilan
                </Link>
                <Link to={"/PerusahaanList"} className="nav-link">
                  Kelola Perusahaan
                </Link>
                <Link to={"/PengalamanKerjaList"} className="nav-link">
                  Kelola Pengalaman Kerja
                </Link>
                <Link to={"/RiwayatPendidikanList"} className="nav-link">
                  Kelola Riwayat Pendidikan
                </Link>
                <Link to={"/LowonganList"} className="nav-link">
                  Kelola Lowongan
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/PelamarCreate"} className="nav-link">
                    Tambah Pelamar
                  </Link>
                  <Link to={"/BidangPekerjaanCreate"} className="nav-link">
                    Tambah Bidang Pekerjaan
                  </Link>
                  <Link to={"/KeterampilanCreate"} className="nav-link">
                    Tambah Keterampilan
                  </Link>
                  <Link to={"/PerusahaanCreate"} className="nav-link">
                    Tambah Perusahaan
                  </Link>
                  <Link to={"/PengalamanKerjaCreate"} className="nav-link">
                    Tambah Pengalaman Kerja
                  </Link>
                  <Link to={"/RiwayatPendidikanCreate"} className="nav-link">
                    Tambah Riwayat Pendidikan
                  </Link>
                  <Link to={"/LowonganCreate"} className="nav-link">
                    Tambah Lowongan
                  </Link>
                </Nav>
              </Nav>

            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path='/' component={PelamarList} />
                  <Route path='/PelamarList' component={PelamarList} />
                  <Route path='/PelamarCreate' component={PelamarCreate} />
                  <Route path="/:id/PelamarEdit" component={PelamarEdit}/>
                  <Route path='/BidangPekerjaanList' component={BidangPekerjaanList} />
                  <Route path='/BidangPekerjaanCreate' component={BidangPekerjaanCreate} />
                  <Route path="/:id/BidangPekerjaanEdit" component={BidangPekerjaanEdit}/>
                  <Route path='/KeterampilanList' component={KeterampilanList} />
                  <Route path='/KeterampilanCreate' component={KeterampilanCreate} />
                  <Route path="/:id/KeterampilanEdit" component={KeterampilanEdit}/>
                  <Route path='/PerusahaanList' component={PerusahaanList} />
                  <Route path='/PerusahaanCreate' component={PerusahaanCreate} />
                  <Route path="/:id/PerusahaanEdit" component={PerusahaanEdit}/>
                  <Route path='/PengalamanKerjaList' component={PengalamanKerjaList} />
                  <Route path='/PengalamanKerjaCreate' component={PengalamanKerjaCreate} />
                  <Route path="/:id/PengalamanKerjaEdit" component={PengalamanKerjaEdit}/>
                  <Route path='/RiwayatPendidikanList' component={RiwayatPendidikanList} />
                  <Route path='/RiwayatPendidikanCreate' component={RiwayatPendidikanCreate} />
                  <Route path="/:id/RiwayatPendidikanEdit" component={RiwayatPendidikanEdit}/>
                  <Route path='/LowonganList' component={LowonganList} />
                  <Route path='/LowonganCreate' component={LowonganCreate} />
                  <Route path="/:id/LowonganEdit" component={LowonganEdit}/>
                </Switch>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
      
    );
  }
}

export default App;
