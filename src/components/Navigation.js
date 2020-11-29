import React from 'react';
import { Nav } from "react-bootstrap";
import logo from "../images/logo.png";
import './Navigation.css';

const Navigation = () => {
    function openNav() {
        document.getElementById("mySidenav").style.width = "300px";
        document.getElementById("main").style.marginLeft = "300px";
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }
    return (
        <div className="container">
            <a className="navbar-brand" href="/">
                <h1><img src={logo} alt="logo" />golee<span>.</span></h1>
            </a>
            <Nav className="nav-items">
                <Nav.Item>
                    <a className="nav-link" href="#about">about</a>		
                </Nav.Item>
                <Nav.Item>
                    <a className="nav-link" href="#work">work</a>		
                </Nav.Item>
                <Nav.Item>
                    <a className="nav-link" href="https://goleedev-blog.netlify.app/">blog</a>
                </Nav.Item>
                <Nav.Item>
                    <a className="nav-link" href="#contact">contact</a>
                </Nav.Item>
                <Nav.Item>
                    <a className="btn btn-outline-dark nav-link" href="https://www.notion.so/Goeun-Lee-ec4f8ae8c84b46b5a8f2e1322ede3374" target="_blank" rel="noopener noreferrer">resume</a>
                </Nav.Item>
            </Nav>
            <div id="mySidenav" className="sidenav">
                <a className="nav-link" href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
                <a className="nav-link" href="#about">about</a>		
                <a className="nav-link" href="#work">work</a>		
                <a className="nav-link" href="https://goleedev-blog.netlify.app/">blog</a>		
                <a className="nav-link" href="#contact">contact</a>		
                <a className="btn btn-outline-dark nav-link" href="https://www.notion.so/Goeun-Lee-ec4f8ae8c84b46b5a8f2e1322ede3374" target="_blank" rel="noopener noreferrer">resume</a>
            </div>
            <div id="main">
                <span onClick={openNav}>☰</span>
            </div>
        </div>   
    );
};

export default Navigation;
