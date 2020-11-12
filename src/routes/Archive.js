import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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
                    <td colSpan="3">Twitter Clone</td>
                    <td className="built" colSpan="3">Firebase · React · JavaScript · Github</td>
                    <td>
                        <a href="https://github.com/goleedev/nwitter"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://goleedev.github.io/nwitter/#/"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2020</th>
                    <td colSpan="3">Ceramic Oh</td>
                    <td className="built" colSpan="3">Firebase · React · JavaScript · CSS</td>
                    <td>
                        <a href="https://github.com/goleedev/ohsujin-ceramic"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://ohsujin-ceramic.web.app/"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2020</th>
                    <td colSpan="3">Portfolio v2</td>
                    <td className="built" colSpan="3">React · JavaScript · Github</td>
                    <td>
                        <a href="https://github.com/goleedev/golee"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href=""><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2020</th>
                    <td colSpan="3">Portfolio v1</td>
                    <td className="built" colSpan="3">HTML · CSS · JavaScript · Github</td>
                    <td>
                        <a href="https://github.com/goleedev/goleedev.github.io"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://goleedev.github.io/"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2020</th>
                    <td colSpan="3">Watchin'</td>
                    <td className="built" colSpan="3">MongoDB · Express · React · Node · Movie DB API · Heroku</td>
                    <td>
                        <a href="https://github.com/goleedev/movie-app"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://watchin-app.herokuapp.com/"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2020</th>
                    <td colSpan="3">Just Browsin'</td>
                    <td className="built" colSpan="3">MongoDB · Express · React · Node · Movie DB API</td>
                    <td>
                        <a href="https://github.com/goleedev/justbrowsin"><FontAwesomeIcon icon={faGithub} /></a>
                   </td>
                </tr>
                <tr>
                    <th scope="row">2020</th>
                    <td colSpan="3">Covid-19 Tracker Clone</td>
                    <td className="built" colSpan="3">React · ChartJS · HTML · CSS · Netlify</td>
                    <td>
                        <a href="https://coronatrackergoleedev.netlify.app/"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
        </>
    );
};

export default Archive;
