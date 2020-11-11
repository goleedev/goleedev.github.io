import React from 'react';
import Navigation from 'components/Navigation';
import About from 'components/About';
import Work from 'components/Work';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import me from "../images/my-pic.png";
import line from "../images/line.png";
import './Main.css';

const Main = () => {
    return (
        <div className="main">
        <Navigation />
        <div className="header-container container row">
            <div className="header-left col-lg-7">
                <h1 data-aos="fade-up" data-aos-delay="400">Hi, I’m GO.</h1>
                <h1 data-aos="fade-up" data-aos-delay="600">A Developer</h1>
                <p data-aos="fade-up" data-aos-delay="200">working with modern technologies to build on quality components and performant web apps.</p>
                <a data-aos="fade-up" data-aos-delay="400" className="btn btn-md work-btn" href="#work">Recetn Work</a>
            </div> 
            <div className="header-right col-lg-5">
                <img data-aos="fade-left" data-aos-delay="200" className="my-pic" src={me} alt="my-pic"/>
                <img data-aos="fade-left" data-aos-delay="400" className="my-line" src={line} alt="line"/>
            </div>
        </div>
        <About id="about" />  
        <Work id="work" />    
        <Contact id="contact" />    
        <Footer />    
        </div>
    )
}

export default Main;
