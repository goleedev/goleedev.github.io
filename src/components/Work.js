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
                {data.map((d, i) => {
                    return (
                        <div id={`${i}-data`} data-aos={ i !== 1 ? "fade-left" : "fade-right"} data-aos-delay="200" className="product-card">
                            <div className="product-details">
                                <span className="product-sub">Featured Project · {d.type}</span>
                                <h1>{d.project}</h1>
                                <p>{d.description}</p>
                                <div className="product-stack">
                                    {d.stack.map(s => {
                                        return (
                                            <span>{s}</span>
                                        )
                                    })}
                                </div>
                                <div>
                                    <a href={d.github}><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href={d.website}><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                                </div>
                            </div>
                            <div className="product-image">
                                <img src={d.image} alt={`${i}-image`}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Work;
