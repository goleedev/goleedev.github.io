import React from 'react';
import styled from "@emotion/styled";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import {color} from "../theme";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100vw;
  height: 100vh;
`

const NotFoundTitle = styled.h1`
  color: ${color.appleBlue}
`

const NotFoundBack = styled.p`
  padding: 30px 0;
  
  :hover {
    color: ${color.appleBlue}
  }
`

const NotFound = () => {
  const history = useHistory();
  return (
    <Container>
      <NotFoundTitle>404 Not Found</NotFoundTitle>
        <NotFoundBack onClick={() => history.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
        </NotFoundBack>
    </Container>
  );
};

export default NotFound;
