import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import project1 from '../images/ohsung.gif';
import project2 from '../images/github-search.gif';
import project3 from '../images/chatter-box.gif';
import './Work.css';

//Product Card: https://codepen.io/chase-marlow/details/ZbdQKZ
const Work = () => {
    const data = [
        {
            "project": "Ohsung Real Estate Agency",
            "stack": ["Firebase", "React.js", "Bootstrap"],
            "description": "A paid project for Ohsung Real Estate Agency based in Cheonan. Users can search products inside the website and admin can upload and manage products.",
            "website": "https://5sungbds.com",
            "github": "https://github.com/goleedev/ohsung-realestate",
            "type": "Paid",
            "image": project1
        },
        {
            "project": "Ur Repo: Github Search App",
            "stack": ["React.js", "Fusioncharts", "Github API"],
            "description": "A Github search app. It shows user profile and repository stats with data visualizations of the most used and the most starred languages.",
            "website": "https://ur-repo.herokuapp.com/",
            "github": "https://github.com/goleedev/ur-repo",
            "type": "Personal",
            "image": project2
        },
        {
            "project": "Real-Time Chatter Box",
            "stack": ["React.js", "Node.js", "Express.js", "socket.io"],
            "description": "A real-time chat that allows users to join a channel. Auto admin greets to the member when joined. Scroll to bottom shows up when chats stacked.",
            "website": "https://chatter-box-goleedev.netlify.app/",
            "github": "https://github.com/goleedev/chat-box",
            "type": "Personal",
            "image": project3
        },
    ]
    return (
        <div id="work">
            <div className="work-container container">
                <h4>02.</h4>
                <h2>Recent Work</h2>
                <Link to="/archive">
                    <span className="btn view-more"><FontAwesomeIcon icon={faFolderOpen} /> more projects</span>
                </Link>
                <div data-aos="fade-left" data-aos-delay="200" className="product-card">
                    <div className="product-details">
                        <span className="product-sub">Featured Project · {data[0].type}</span>
                        <h1>{data[0].project}</h1>
                        <p>{data[0].description}</p>
                        <div className="product-stack">
                            <span>{data[0].stack[0]}</span>
                            <span>{data[0].stack[1]}</span>
                            <span>{data[0].stack[2]}</span>
                        </div>
                        <div>
                            <a href={data[0].github}><FontAwesomeIcon icon={faGithub} /></a>
                            <a href={data[0].website}><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                        </div>
                    </div>
                    <div className="product-image">
                        <img src={project1} alt="project1"/>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="200" className="product-card">
                    <div className="product-details">
                        <span className="product-sub">Featured Project · {data[1].type}</span>
                        <h1>{data[1].project}</h1>
                        <p>{data[1].description}</p>
                        <div className="product-stack">
                            <span>{data[1].stack[0]}</span>
                            <span>{data[1].stack[1]}</span>
                            <span>{data[1].stack[2]}</span>
                        </div>
                        <div>
                            <a href={data[1].github}><FontAwesomeIcon icon={faGithub} /></a>
                            <a href={data[1].website}><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                        </div>
                    </div>
                    <div className="product-image">
                        <img src={project2} alt="project2"/>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="200" className="product-card">
                    <div className="product-details">
                        <span className="product-sub">Featured Project · {data[2].type}</span>
                        <h1>{data[2].project}</h1>
                        <p>{data[2].description}</p>
                        <div className="product-stack">
                            <span>{data[2].stack[0]}</span>
                            <span>{data[2].stack[1]}</span>
                            <span>{data[2].stack[2]}</span>
                        </div>
                        <div>
                            <a href={data[2].github}><FontAwesomeIcon icon={faGithub} /></a>
                            <a href={data[2].website}><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                        </div>
                    </div>
                    <div className="product-image">
                        <img src={project3} alt="project3"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
