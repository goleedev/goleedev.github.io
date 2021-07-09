import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

import logo from "../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container container">
      <div className="col-lg-12">
        <Link className="footer-brand" to="/">
          <h1>
            <img src={logo} alt="logo" />
            golee<span>.</span>
          </h1>
        </Link>
        <p className="footer-content">
          I’m available for interesting projects.
          <br />
          Contact me
          <button type="button" id="fill-email">
            <a id="golee-email" href="#contact">
              @here
            </a>
            <span className="waving" role="img" aria-label="hand">
              👋
            </span>
          </button>
        </p>
        <div className="footer-social row">
          <a
            href="https://www.linkedin.com/in/goleedev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="https://github.com/goleedev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://maily.so/1step"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faNewspaper} />
          </a>
        </div>
      </div>
      <p id="copy" className="col-lg-12">
        &copy; Copyright {new Date().getFullYear()} GO Lee. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
