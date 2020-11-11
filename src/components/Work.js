import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import './Work.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Work = () => {
    return (
        <div id="work">
            <div className="work-container container">
                <h4>02.</h4>
                <h2>Recent Work</h2>
                
                <Link to="/archive">
                    <span className="btn view-more"><FontAwesomeIcon icon={faFolderOpen} /> more projects</span>
                </Link>
            </div>
        </div>
    )
}

export default Work;
