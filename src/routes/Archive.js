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
                <h1><img src={logo} alt="logo" />Archive<span>.</span></h1>
            </a> 
            <p className="nav-goback" onClick={onGoBack}>
                <FontAwesomeIcon icon={faArrowLeft} /> Back
            </p> 
            <table className="table table-borderless">
            <thead>
                <tr>
                    <th scope="col">Year</th>
                    <th colSpan="3" scope="col">Title</th>
                    <th colSpan="3" scope="col">Built with</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">2020</th>
                    <td colSpan="3">Mark</td>
                    <td colSpan="3">Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2020</th>
                    <td colSpan="3">Jacob</td>
                    <td colSpan="3">Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">2020</th>
                    <td colSpan="3">Larry the Bird</td>
                    <td colSpan="3">@twitter</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
            </table>
        </div>
        </>
    );
};

export default Archive;
