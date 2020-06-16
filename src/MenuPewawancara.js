import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LoginPewawancara from "./components/LoginPewawancara";
import DashboardPenilaian_PelamarHead from "./components/DashboardPenilaian_PelamarHead";
import DashboardPenilaian_LamaranKerjaHead from "./components/DashboardPenilaian_LamaranKerjaHead";
import DashboardPenilaian_LamaranKerja from "./components/DashboardPenilaian_LamaranKerja";
import DashboardPenilaian_LamaranKerjaDetail from "./components/DashboardPenilaian_LamaranKerjaDetail";
import DashboardPenilaian_LamaranKerjaStaff from "./components/DashboardPenilaian_LamaranKerjaStaff";
import DashboardPenilaian_PelamarStaff from "./components/DashboardPenilaian_PelamarStaff";

export default class MenuPewawancara extends Component {
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
                      to={"/DashboardPenilaian_LamaranKerjaStaff"}
                      className="fa fa-user"
                    >
                      {" "}
                    </Link>{" "}
                    <span>Daftar Lamaran Staff</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link
                      to={"/DashboardPenilaian_LamaranKerjaHead"}
                      className="fa fa-user"
                    >
                      {" "}
                    </Link>{" "}
                    <span>Daftar Lamaran Section Head</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link
                      to={"/DashboardPenilaian_LamaranKerja"}
                      className="fa fa-user"
                    >
                      {" "}
                    </Link>{" "}
                    <span>Daftar Lamaran Setelah Dinilai</span>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to={"/login_pewawancara"} className="fa fa-user">
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
              <Route path="/login_pewawancara" component={LoginPewawancara} />
              <Route
                path="/DashboardPenilaian_LamaranKerjaHead"
                component={DashboardPenilaian_LamaranKerjaHead}
              /><Route
                path="/:id/DashboardPenilaian_PelamarHead"
                component={DashboardPenilaian_PelamarHead}
              />
              <Route
                path="/DashboardPenilaian_LamaranKerjaStaff"
                component={DashboardPenilaian_LamaranKerjaStaff}
              />
              <Route
                path="/:id/DashboardPenilaian_PelamarStaff"
                component={DashboardPenilaian_PelamarStaff}
              />
              <Route
                path="/DashboardPenilaian_LamaranKerja"
                component={DashboardPenilaian_LamaranKerja}
              />
              <Route
                path="/:id/DashboardPenilaian_LamaranKerjaDetail"
                component={DashboardPenilaian_LamaranKerjaDetail}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
