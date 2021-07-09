import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

import './Loading.css';

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  height: 100vh;
  margin: 0;

  background: #FFF;
  font-weight: 300;
  font-style: normal;
  font-size: 28px;
  color: #2C2C2E;
`

const ProgressBar = styled.div`
  width: 300px;
  height: 30px;
  margin: 20px 0 0;
  border-radius: 20px;
  border: 3px solid #E5E5EA;
  background: transparent;
`

const Progress = styled.div`
  width: 20%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  margin: 0;
  padding: 0;
  background-color: #0084FF;
  z-index: -1;
`

const loading = keyframes`
  0% {
    width: 0%;
  }
  87.5% {
    width: 100%;
  }
`

const Loading = () => {
    return (
        <Layout>
            <span>loading</span>
            <ProgressBar>
                <Progress css={css`
                  animation: ${loading} 1s ease infinite;
                `}
                />
            </ProgressBar>
        </Layout>
    );
};

export default Loading;
