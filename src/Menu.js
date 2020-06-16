import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PelamarEdit from "./components/PelamarEdit";
import PelamarList from "./components/PelamarList";
import PelamarCreate from "./components/PelamarCreate";
import PelamarRegistrasi from "./components/PelamarRegistrasi";
import PelamarLogin from "./components/PelamarLogin";
import Landing from "./components/Landing";
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
import RoleEdit from "./components/RoleEdit";
import RoleList from "./components/RoleList";
import RoleCreate from "./components/RoleCreate";
import DashboardPelamar_PerusahaanList from "./components/DashboardPelamar_PerusahaanList";
import DashboardPelamar_LowonganList from "./components/DashboardPelamar_LowonganList";
import DashboardPelamar_LamarPekerjaan from "./components/DashboardPelamar_LamarPekerjaan";
import DashboardPelamar_LamaranKerja from "./components/DashboardPelamar_LamaranKerja";
import PelamarDataDiri from "./components/PelamarDataDiri";
import PelamarChangePassword from "./components/PelamarChangePassword";
import PelamarFormulirLamaranKerja from "./components/PelamarFormulirLamaranKerja";
import DashboardPelamar_LamaranKerjaAcceptDecline from "./components/DashboardPelamar_LamaranKerjaAcceptDecline";
import DashboardPelamar_Accept from "./components/DashboardPelamar_Accept";
import DashboardPelamar_Decline from "./components/DashboardPelamar_Decline";
import PelamarList_InvitationInterview from "./components/PelamarList_InvitationInterview";
import PelamarList_InvitationPsikotes from "./components/PelamarList_InvitationPsikotes";
import PelamarList_InvitationMCU from "./components/PelamarList_InvitationMCU";
import Undang_Wawancara1 from "./components/Undang_Wawancara1";
import Undang_Psikotes from "./components/Undang_Psikotes";
import Undang_MCU from "./components/Undang_MCU";
import Login from "./components/Login";

export default class Menu extends Component {
  constructor(props) {
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
      ms_role: {},
      tr_lamaran_kerja: {},
      user: [],
      loggedInStatus: this.props.loggedInStatus,
    };
  }

  render() {
    return (
      <Router>
        <div>
          <aside className="main-sidebar">
            {/* sidebar: style can be found in sidebar.less */}
            <section className="sidebar">
              {/* Sidebar user panel */}
              <div className="user-panel">
                <div className="pull-left image">
                  <img
                    src="dist/img/user2-160x160.jpg"
                    className="img-circle"
                    alt="User"
                  />
                </div>
                <div className="pull-left info">
                  <p>Salshabilla Herdianti</p>
                  <h6>- Status: {this.props.user.name} -</h6>
                </div>
              </div>
              {/* search form */}

              {/* /.search form */}

              {/* sidebar menu: : style can be found in sidebar.less */}
              <ul className="sidebar-menu" data-widget="tree">
                <li className="header">MAIN NAVIGATION</li>
                <li>
                  <a>
                    <Link
                      to={"/DashboardPelamar_PerusahaanList"}
                      className="fa fa-dashboard"
                    ></Link>{" "}
                    <span>Job Vacancy</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link
                      to={"/PelamarDataDiri"}
                      className="fa fa-folder"
                    ></Link>{" "}
                    <span>Profile Account</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to={"/KeterampilanList"} className="fa fa-edit">
                      {" "}
                    </Link>{" "}
                    <span>Skills</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to={"/RiwayatPendidikanList"} className="fa fa-table">
                      {" "}
                    </Link>{" "}
                    <span>Educational Background</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to={"/PengalamanKerjaList"} className="fa fa-folder">
                      {" "}
                    </Link>{" "}
                    <span>Work Experience</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link
                      to={"/:id/PelamarFormulirLamaranKerja"}
                      className="fa fa-folder"
                    >
                      {" "}
                    </Link>{" "}
                    <span>Job Application Form</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link
                      to={"/DashboardPelamar_LamaranKerja"}
                      className="fa fa-folder"
                    ></Link>{" "}
                    <span>Application Form Submitted</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link
                      to={"/DashboardPelamar_LamaranKerjaAcceptDecline"}
                      className="fa fa-user"
                    >
                      {" "}
                    </Link>{" "}
                    <span>Accept or Decline Job</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to={"/login"} className="fa fa-user">
                      {" "}
                    </Link>{" "}
                    <span>Log Out</span>
                  </a>
                </li>
              </ul>
            </section>
            {/* /.sidebar */}
          </aside>
          <div className="wrapper">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <DashboardPelamar_PerusahaanList
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              />
              <Route path="/login" component={Login} />
              <Route path="/PelamarList" component={PelamarList} />
              <Route path="/PelamarCreate" component={PelamarCreate} />
              <Route path="/PelamarRegistrasi" component={PelamarRegistrasi} />
              <Route path="/PelamarLogin" component={PelamarLogin} />
              <Route path="/PelamarDataDiri" component={PelamarDataDiri} />
              <Route path="/Landing" component={Landing} />
              <Route path="/:id/PelamarEdit" component={PelamarEdit} />
              <Route
                path="/:id/PelamarChangePassword"
                component={PelamarChangePassword}
              />
              <Route
                path="/:id/PelamarFormulirLamaranKerja"
                component={PelamarFormulirLamaranKerja}
              />
              <Route
                path="/BidangPekerjaanList"
                component={BidangPekerjaanList}
              />
              <Route
                path="/BidangPekerjaanCreate"
                component={BidangPekerjaanCreate}
              />
              <Route
                path="/:id/BidangPekerjaanEdit"
                component={BidangPekerjaanEdit}
              />
              <Route path="/KeterampilanList" component={KeterampilanList} />
              <Route
                path="/KeterampilanCreate"
                component={KeterampilanCreate}
              />
              <Route
                path="/:id/KeterampilanEdit"
                component={KeterampilanEdit}
              />
              <Route path="/PerusahaanList" component={PerusahaanList} />
              <Route path="/PerusahaanCreate" component={PerusahaanCreate} />
              <Route path="/:id/PerusahaanEdit" component={PerusahaanEdit} />
              <Route
                path="/PengalamanKerjaList"
                component={PengalamanKerjaList}
              />
              <Route
                path="/PengalamanKerjaCreate"
                component={PengalamanKerjaCreate}
              />
              <Route
                path="/:id/PengalamanKerjaEdit"
                component={PengalamanKerjaEdit}
              />
              <Route
                path="/RiwayatPendidikanList"
                component={RiwayatPendidikanList}
              />
              <Route
                path="/RiwayatPendidikanCreate"
                component={RiwayatPendidikanCreate}
              />
              <Route
                path="/:id/RiwayatPendidikanEdit"
                component={RiwayatPendidikanEdit}
              />
              <Route path="/LowonganList" component={LowonganList} />
              <Route path="/LowonganCreate" component={LowonganCreate} />
              <Route path="/:id/LowonganEdit" component={LowonganEdit} />
              <Route path="/RoleList" component={RoleList} />
              <Route path="/RoleCreate" component={RoleCreate} />
              <Route path="/:id/RoleEdit" component={RoleEdit} />
              <Route
                path="/DashboardPelamar_PerusahaanList"
                component={DashboardPelamar_PerusahaanList}
              />
              <Route
                path="/:id/DashboardPelamar_LowonganList"
                component={DashboardPelamar_LowonganList}
              />
              <Route
                path="/:id/DashboardPelamar_LamarPekerjaan"
                component={DashboardPelamar_LamarPekerjaan}
              />
              <Route
                path="/DashboardPelamar_LamaranKerja"
                component={DashboardPelamar_LamaranKerja}
              />
              <Route
                path="/DashboardPelamar_LamaranKerjaAcceptDecline"
                component={DashboardPelamar_LamaranKerjaAcceptDecline}
              />
              <Route
                path="/:id/DashboardPelamar_Accept"
                component={DashboardPelamar_Accept}
              />
              <Route
                path="/:id/DashboardPelamar_Decline"
                component={DashboardPelamar_Decline}
              />
              <Route
                path="/:id/Undang_Wawancara1"
                component={Undang_Wawancara1}
              />
              <Route
                path="/:id/Undang_Psikotes"
                component={Undang_Psikotes}
              />
              <Route
                path="/:id/Undang_MCU"
                component={Undang_MCU}
              />
              <Route
                path="/PelamarList_InvitationInterview"
                component={PelamarList_InvitationInterview}
              />
              <Route
                path="/PelamarList_InvitationPsikotes"
                component={PelamarList_InvitationPsikotes}
              />
              <Route
                path="/PelamarList_InvitationMCU"
                component={PelamarList_InvitationMCU}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
