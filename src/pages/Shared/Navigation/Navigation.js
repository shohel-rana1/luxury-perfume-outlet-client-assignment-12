import React from 'react';
import './Navigation.css'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/luxury-perfume-logo.png'
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="white">
            <div className="container mx-auto">
                <Link className="navbar-brand" to="/home"><img className="logo" src={logo} alt="" /><span className="logo-text">Luxury Perfume Outlet</span></Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="nav-bar">
                        <Nav.Item>
                            <Nav.Link className="nav-text" eventKey="1" as={Link} to="/Home">
                                <span className="nav-text">Home</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-text" eventKey="2" as={Link} to="/explore">
                                <span className="nav-text">Explore</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {user?.email &&
                                <Nav.Link className="nav-text" eventKey="3" as={Link} to="/dashboard">
                                    <span className="nav-text">Dashboard</span>
                                </Nav.Link>

                            }
                        </Nav.Item>
                        <span className="userName"> {user?.displayName} </span>
                        <Nav.Item>
                            {user?.email ?
                                <Nav.Link onClick={logout}> <span className="logout-btn">Log Out</span> </Nav.Link>
                                :
                                <Nav.Link eventKey="4" as={Link} to="/login">
                                    <span className="nav-text login-btn">Login</span>
                                </Nav.Link>}
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Navigation;