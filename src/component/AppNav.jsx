import React from 'react';
import logo from '../assets/image/logo.png';
import { NavLink } from 'react-router-dom';
import '../assets/css/style.css';

const AppNav = () => {
    const navItemStyle = {
        fontWeight: 'bold',
        color: 'black',
    };

    return (
        <div className='container'>
            <div className='row'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="Logo" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink
                                        style={navItemStyle}
                                        className="nav-link"
                                        to="/"
                                        exact
                                        activeClassName="active"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        style={navItemStyle}
                                        className="nav-link"
                                        to="/team"
                                        activeClassName="active"
                                    >
                                        Team
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        style={navItemStyle}
                                        className="nav-link"
                                        to="/service"
                                        activeClassName="active"
                                    >
                                        Service
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        style={navItemStyle}
                                        className="nav-link"
                                        to="/project"
                                        activeClassName="active"
                                    >
                                        Project
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        style={navItemStyle}
                                        className="nav-link"
                                        to="/Testimonials"
                                        activeClassName="active"
                                    >
                                        Testimonials
                                    </NavLink>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn btn-outline-success" type="submit">
                                    Login
                                </button>
                                <button className="btn btn-success mx-2" type="submit">
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default AppNav;
