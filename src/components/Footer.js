import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container container">
            <div className="col-lg-12">
                <Link className="footer-brand" to="/">
                    <h1><img src={logo} alt="logo" />golee<span>.</span></h1>
                </Link>
                <p className="footer-content">
                I’m available for interesting projects.
                    Contact me
                    <button type="button" id="fill-email">
                        <a id="golee-email" href="#contact">@here</a>
                        <span className="waving" role="img" aria-label="hand">👋</span>
                    </button>
                </p>
            </div>
            <p id="copy" className="col-lg-12">
                &copy; Copyright {new Date().getFullYear()} GO Lee. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
