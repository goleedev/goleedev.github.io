import React, { useState, useEffect } from "react";
import Loading from "components/Loading";
import Navigation from "components/Navigation";
import About from "components/About";
import Work from "components/Work";
import Contact from "components/Contact";
import Footer from "components/Footer";
import me from "../images/me.png";
import "./Main.css";

//https://codepen.io/syed_n_sakib/pen/rNNNKpr
const Main = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <>
      {isLoaded ? (
        <div className="main">
          <Navigation />
          <div className="header-container container row">
            <div className="header-left col-lg-7">
              <h1 data-aos="fade-up" data-aos-delay="400">
                Hi, I’m GO.
              </h1>
              <h1 data-aos="fade-up" data-aos-delay="600">
                A Developer
              </h1>
              <p data-aos="fade-up" data-aos-delay="200">
                working with modern technologies to build on quality components
                and performant web apps.
              </p>
              <a
                data-aos="fade-up"
                data-aos-delay="400"
                className="btn btn-md work-btn"
                href="#work"
              >
                Recent Work
              </a>
            </div>
            <div className="header-right col-lg-5">
              <svg
                data-aos="fade-left"
                data-aos-delay="400"
                className="my-line"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 246.859 227.266"
              >
                <path
                  fill="none"
                  stroke="#ffce79"
                  strokeMiterlimit="10"
                  strokeWidth="4"
                  d="M1.958 146.57s19.975 95.98 76.424 75.8 33.124-153.434-6.91-138.526 70.812 138.191 111.223 44.472-68.09-149.921-81.993-116.671 81.7 92.127 144.64 18.886"
                ></path>
              </svg>
              <img
                data-aos="fade-left"
                data-aos-delay="200"
                className="my-pic"
                src={me}
                alt="my-pic"
              />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default Main;
