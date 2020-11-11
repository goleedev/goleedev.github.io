import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from "../images/logo.png";
import './Archive.css';

const Archive = () => {
    const history = useHistory();
    const onGoBack = () => {
        window.scrollTo(0, 0);
        history.goBack();
    }
    return (
        <>
        <div className="archive-container container row">
            <a className="navbar-brand" href="/">
                <h1><img src={logo} alt="logo" />golee<span>.</span></h1>
            </a> 
            <p className="nav-goback" onClick={onGoBack}>
                <FontAwesomeIcon icon={faArrowLeft} /> Back
            </p> 
        </div>
        </>
    );
};

export default Archive;
