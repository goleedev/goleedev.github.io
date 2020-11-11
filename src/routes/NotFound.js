import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import './NotFound.css';

//https://codepen.io/Banny/pen/ZmXzMP
const NotFound = () => {
  const history = useHistory();
  return (
    <>
    <p className="error-goback" onClick={() => history.goBack()}>
      <FontAwesomeIcon icon={faArrowLeft} /> Back
    </p>
    <div className="page-wrapper">
      <div className="needle-wrapper">
        <div className="base"></div>
        <div className="lines">
          <div className="vertical"></div>
          <div className="horizontal"></div>
        </div>
      </div>
      <div className="disk-wrapper">
        <div className="light-left"></div>
        <div className="light-right"></div>
        <div className="disk">
          <div className="half-circle-top"></div>
          <div className="half-circle-bottom"></div>
          <div className="separator"></div>
          <div className="inner-circle">
            <span>4</span>
            <div className="dot"></div>
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
    <div className="error">Uh oh! Looks like we've skipped a beat </div>
    </>
  );
};

export default NotFound;
