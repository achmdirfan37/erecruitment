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
import PosisiEdit from "./components/PosisiEdit";
import PosisiList from "./components/PosisiList";
import PosisiCreate from "./components/PosisiCreate";
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
import PersonEdit from "./components/PersonEdit";
import PersonList from "./components/PersonList";
import PersonCreate from "./components/PersonCreate";
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
import PelamarList_InvitationInterview2 from "./components/PelamarList_InvitationInterview2";
import PelamarList_InvitationInterviewHR from "./components/PelamarList_InvitationInterviewHR";
import PelamarList_InvitationPsikotes from "./components/PelamarList_InvitationPsikotes";
import PelamarList_InvitationMCU from "./components/PelamarList_InvitationMCU";
import Undang_Wawancara1 from "./components/Undang_Wawancara1";
import Undang_Wawancara2 from "./components/Undang_Wawancara2";
import Undang_WawancaraHR from "./components/Undang_WawancaraHR";
import Undang_Psikotes from "./components/Undang_Psikotes";
import Undang_MCU from "./components/Undang_MCU";
import LoginHRD from "./components/LoginHRD";
import DaftarLamaran_TidakSesuai from "./components/DaftarLamaran_TidakSesuai";
import DaftarLamaran_Placement from "./components/DaftarLamaran_Placement";
import DaftarLamaran_MCU from "./components/DaftarLamaran_MCU";
import DaftarLamaran_Psikotes from "./components/DaftarLamaran_Psikotes";
import DaftarLamaran_WawancaraHR from "./components/DaftarLamaran_WawancaraHR";
import DaftarLamaran_Wawancara2 from "./components/DaftarLamaran_Wawancara2";
import DaftarLamaran_Wawancara1 from "./components/DaftarLamaran_Wawancara1";
import DaftarLamaran_BelumDiproses from "./components/DaftarLamaran_BelumDiproses";
import DashboardHrd_LowonganList from "./components/DashboardHrd_LowonganList";
import TemplateList from "./components/TemplateList";
import TemplateCreate from "./components/TemplateCreate";
import TemplateEdit from "./components/TemplateEdit";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      response: {},
      ms_pelamar: {},
      ms_bidang_pekerjaan: {},
      ms_posisi: {},
      ms_keterampilan: {},
      ms_perusahaan: {},
      ms_pengalaman_kerja: {},
      ms_riwayat_pendidikan: {},
      ms_lowongan: {},
      ms_person: {},
      tr_lamaran_kerja: {},
      user: [],
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
                  <h6>- HRD -</h6>
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
                      to={"/DashboardHrd_LowonganList"}
                      className="fa fa-user"
                    >
                      {" "}
                    </Link>{" "}
                    <span>Lowongan Pekerjaan</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to={"/PerusahaanList"} className="fa fa-user">
                      {" "}
                    </Link>{" "}
                    <span>Perusahaan</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to={"/LowonganList"} className="fa fa-user">
                      {" "}
                    </Link>{" "}
                    <span>Lowongan</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to={"/PersonList"} className="fa fa-user">
                      {" "}
                    </Link>{" "}
                    <span>Administrator</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to={"/BidangPekerjaanList"} className="fa fa-user">
                      {" "}
                    </Link>{" "}
                    <span>Bidang Pekerjaan</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to={"/PosisiList"} className="fa fa-user">
                      {" "}
                    </Link>{" "}
                    <span>Posisi</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to={"/TemplateList"} className="fa fa-user">
                      {" "}
                    </Link>{" "}
                    <span>Template</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to={"/login_admin"} className="fa fa-user">
                      {" "}
                    </Link>{" "}
                    <span>Keluar</span>
                  </a>
                </li>
              </ul>
            </section>
            {/* /.sidebar */}
          </aside>
          <div className="wrapper">
            <Switch>
              <Route exact path="/" component={LowonganList} />
              <Route path="/login_admin" component={LoginHRD} />
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
              <Route path="/PosisiList" component={PosisiList} />
              <Route path="/PosisiCreate" component={PosisiCreate} />
              <Route path="/:id/PosisiEdit" component={PosisiEdit} />
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
              <Route path="/TemplateList" component={TemplateList} />
              <Route path="/TemplateCreate" component={TemplateCreate} />
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
              <Route path="/PersonList" component={PersonList} />
              <Route path="/PersonCreate" component={PersonCreate} />
              <Route path="/:id/PersonEdit" component={PersonEdit} />
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
                path="/:id/Undang_Wawancara2"
                component={Undang_Wawancara1}
              />
              <Route
                path="/:id/Undang_WawancaraHR"
                component={Undang_Wawancara1}
              />
              <Route path="/:id/Undang_Psikotes" component={Undang_Psikotes} />
              <Route path="/:id/Undang_MCU" component={Undang_MCU} />
              <Route
                path="/PelamarList_InvitationInterview"
                component={PelamarList_InvitationInterview}
              />
              <Route
                path="/PelamarList_InvitationInterview2"
                component={PelamarList_InvitationInterview2}
              />
              <Route
                path="/PelamarList_InvitationInterviewHR"
                component={PelamarList_InvitationInterviewHR}
              />
              <Route
                path="/PelamarList_InvitationPsikotes"
                component={PelamarList_InvitationPsikotes}
              />
              <Route
                path="/PelamarList_InvitationMCU"
                component={PelamarList_InvitationMCU}
              />
              <Route
                path="/DashboardHrd_LowonganList"
                component={DashboardHrd_LowonganList}
              />
              <Route
                path="/:id/DaftarLamaran_BelumDiproses"
                component={DaftarLamaran_BelumDiproses}
              />
              <Route
                path="/:id/DaftarLamaran_Wawancara1"
                component={DaftarLamaran_Wawancara1}
              />
              <Route
                path="/:id/DaftarLamaran_Wawancara2"
                component={DaftarLamaran_Wawancara2}
              />
              <Route
                path="/:id/DaftarLamaran_WawancaraHR"
                component={DaftarLamaran_WawancaraHR}
              />
              <Route
                path="/:id/DaftarLamaran_Psikotes"
                component={DaftarLamaran_Psikotes}
              />
              <Route
                path="/:id/DaftarLamaran_MCU"
                component={DaftarLamaran_MCU}
              />
              <Route
                path="/:id/DaftarLamaran_Placement"
                component={DaftarLamaran_Placement}
              />
              <Route
                path="/:id/DaftarLamaran_TidakSesuai"
                component={DaftarLamaran_TidakSesuai}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
