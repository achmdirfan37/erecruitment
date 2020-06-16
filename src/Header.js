import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="main-header">
                    {/* Logo */}
                    <a href="index2.html" className="logo">
                        {/* mini logo for sidebar mini 50x50 pixels */}
                        <span className="logo-mini"><b>E-</b>R</span>
                        {/* logo for regular state and mobile devices */}
                        <span className="logo-lg"><b>E-</b>RECRUITMENT KAI</span>
                    </a>
                    {/* Header Navbar: style can be found in header.less */}
                    <nav className="navbar navbar-static-top">
                        {/* Sidebar toggle button*/}
                        <a href="fake-url" className="sidebar-toggle" data-toggle="push-menu" role="button">
                            <span className="sr-only"></span>
                        </a>
                        {/* Navbar Right Menu */}
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                {/* Messages: style can be found in dropdown.less*/}
                                
                                {/* Notifications: style can be found in dropdown.less */}
                                
                                {/* Tasks: style can be found in dropdown.less */}
                                
                                {/* User Account: style can be found in dropdown.less */}
                                <li className="dropdown user user-menu">
                                    <a href="fake-url" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User" />
                                        <span className="hidden-xs">Salshabilla Herdianti</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        {/* User image */}
                                        <li className="user-header">
                                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
                                            <p>
                                                Salshabilla Herdianti - Pelamar
                                            </p>
                                        </li>
                                        {/* Menu Body */}
                                        
                                        {/* Menu Footer*/}
                                        <li className="user-footer">
                                            <div className="pull-left">
                                                <a href="fake-url" className="btn btn-default btn-flat">Profile</a>
                                            </div>
                                            <div className="pull-right">
                                                <a href="fake-url" className="btn btn-default btn-flat">Sign out</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                {/* Control Sidebar Toggle Button */}
                                <li>
                                    <a href="fake-url" data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>

        )
    }
}
