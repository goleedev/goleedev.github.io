import React from 'react';
import styled from '@emotion/styled';

import { color } from '../theme';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  height: 100vh;
  margin: 0;

  background: ${color.white};
  font-weight: 300;
  font-style: normal;
  font-size: 28px;
  color: ${color.deepGrey};
`;

const ProgressBar = styled.div`
  width: 300px;
  height: 30px;
  margin: 20px 0 0;
  border-radius: 20px;
  border: 3px solid ${color.lightGrey};
  background: transparent;
`;

const Progress = styled.div`
  width: 20%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  margin: 0;
  padding: 0;
  background-color: ${color.appleBlue};
  animation: loading 1s ease infinite;

  @keyframes loading {
    0% {
      width: 10%;
    }
    50% {
      width: 70%;
    }
    87.5% {
      width: 100%;
    }
  }
`;

const Loading = () => {
  return (
    <Container>
      <span>loading</span>
      <ProgressBar>
        <Progress />
      </ProgressBar>
    </Container>
  );
};

export default Loading;
