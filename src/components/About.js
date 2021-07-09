import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import me from '../images/dev pic.jpeg';
import './About.css';

const About = () => {
  return (
    <div id="about" className="about-container col-lg-12">
      <div className="about-bg"></div>
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="about-content container row"
      >
        <div className="about-left col-lg-6">
          <img
            data-aos="fade-right"
            data-aos-delay="200"
            src={me}
            alt="dev-pic"
          />
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="about-right-shadow"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="about-right col-lg-6"
        >
          <h4>01.</h4>
          <h2>About Me</h2>
          <p>
            Hi 👋 I'm Goeun Lee, but I go by <b>GO 🏃</b>, a frontend engineer
            based in Seoul, S. Korea. <br />
            I enjoy creating things that live on/off the internet -- which
            explains my pottery hobby🍶. <br />
            My ultimate goal as a developer is to build on{' '}
            <b>quality components and performant web applications</b> for both
            users and fellow team mates.
            <br />
            <br />
            Here are a few technologies I've been working with recently 👇
          </p>
          <div className="row">
            <ul>
              <li>
                <FontAwesomeIcon icon={faPlay} /> TypeScript
              </li>
              <li>
                <FontAwesomeIcon icon={faPlay} /> React.js
              </li>
              <li>
                <FontAwesomeIcon icon={faPlay} /> JavaScript (ES6 +)
              </li>
              <li>
                <FontAwesomeIcon icon={faPlay} /> HTML5 & CSS3
              </li>
            </ul>
            <ul>
              <li>
                <FontAwesomeIcon icon={faPlay} /> Firebase
              </li>
              <li>
                <FontAwesomeIcon icon={faPlay} /> GraphQL & Apollo
              </li>
              <li>
                <FontAwesomeIcon icon={faPlay} /> Node.js
              </li>
              <li>
                <FontAwesomeIcon icon={faPlay} /> Git/Github
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
