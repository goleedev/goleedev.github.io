import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import './About.css';

const About = () => {
    return (
        <div id="about" className="about-container container-fluid">
            <div className="about-content container">
                <div className="about-left col-md-4">
                    <img />
                </div>
                <div className="about-left col-md-8">
                    <h4>01.</h4>
                    <h2>About Me</h2>
                    <p>
                    Hi👋 I'm Goeun Lee, but I go by GO 🏃, a software engineer based in Seoul, S. Korea.
                    I enjoy create things that live on/off the internet — which explains my pottery hoppy🍶.
                    My ultimate goal as a developer is to build on quality components and performant web applications for both users and fellow team mates.
                    
                    Here are a few technologies I've been working with recently:
                    </p>
                    <div className="row">
                        <ul>
                            <li><FontAwesomeIcon icon={faPlay} /> React.js</li>
                            <li><FontAwesomeIcon icon={faPlay} /> JavaScript (ES6 +)</li>
                            <li><FontAwesomeIcon icon={faPlay} /> HTML5 & CSS3</li>
                            <li><FontAwesomeIcon icon={faPlay} /> TypeScript<span>🚧 Studying...</span></li>
                        </ul>
                        <ul>
                            <li><FontAwesomeIcon icon={faPlay} /> Firebase</li>
                            <li><FontAwesomeIcon icon={faPlay} /> Node.js</li>
                            <li><FontAwesomeIcon icon={faPlay} /> Express.js</li>
                            <li><FontAwesomeIcon icon={faPlay} /> Git/Github</li>
                        </ul>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default About;