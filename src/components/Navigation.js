import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.png";
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar expand="lg" className="container">
            <Navbar.Brand href="/">
                <h1><img src={logo} alt="logo" />golee<span>.</span></h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="nav-items">
                    <Nav.Item>
                        <a href="#about">about</a>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className="nav-link" to="/blog">blog</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <a href="#contact">contact</a>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
