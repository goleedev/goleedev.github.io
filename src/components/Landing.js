import React from 'react';
import styled from '@emotion/styled';

import { color, mq } from '../theme';
import me from '../assets/images/memoji.png';
import Navigation from './Navigation';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden !important;
  width: 100vw;
  height: 100%;
  margin: 0;
  color: ${color.deepGrey};

  ${mq['md']} {
    height: 100vh;
  }
`;

const HeaderImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10% !important;

  background-color: ${color.appleLightYellow};
  border-radius: 50%;
  width: 200px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    animation: bounce 1s ease;
  }

  img:hover {
    animation: bounce 1s ease infinite;
  }

  ${mq['md']} {
    width: 150px;
    height: 150px;
  }

  @keyframes bounce {
    from,
    20%,
    53%,
    80%,
    to {
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      transform: translate3d(0, -15px, 0);
    }

    70% {
      transform: translate3d(0, -5px, 0);
    }

    90% {
      transform: translate3d(0, -2px, 0);
    }
  }
`;

const HeaderContent = styled.div`
  padding-top: 5%;
  text-align: center;
  color: ${color.deepGrey};
`;

const HeaderTitle = styled.h1`
  font-size: 52px;
  line-height: 68px;
  font-family: 'SF Pro Heavy', sans-serif;

  ${mq['md']} {
    font-size: 28px;
    line-height: 36px;
  }
`;

const HeaderSubTitle = styled.h5`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5%;

  ${mq['md']} {
    font-size: 18px;
    line-height: 24px;
  }
`;

const HeaderDes = styled.p`
  font-size: 18px;
  margin: 3% auto 8%;

  ${mq['md']} {
    font-size: 14px;
    line-height: 18px;
  }
`;

const HeaderBtn = styled.a`
  display: inline-block;
  align-content: center;
  width: 200px;
  height: 60px;
  text-align: center;
  border-radius: 25px;
  border: none;

  color: ${color.white};
  background-color: ${color.deepGrey};
  font-size: 20px;
  line-height: 60px;
  transition: 0.5s;
  margin-bottom: 10%;

  &:hover {
    background-color: ${color.appleBlue};
    color: ${color.deepGrey};
  }

  ${mq['md']} {
    width: 150px;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    border-radius: 20px;
    margin-bottom: 0;
  }
`;

const Landing = () => {
  return (
    <Container>
      <Navigation />
      <HeaderImgContainer>
        <img src={me} alt="my-pic" />
      </HeaderImgContainer>
      <HeaderContent>
        <HeaderSubTitle>Hi, I’m GO 🤘</HeaderSubTitle>
        <HeaderTitle>
          Building quality components
          <br />
          and performant web apps
        </HeaderTitle>
        <HeaderDes>
          <b>Junior Frontend Developer</b> based in Seoul, S.Korea.
          <br />
          CS student @UOL in the ML/AI specialism.
        </HeaderDes>
        <HeaderBtn href={'#work'}>Recent Work</HeaderBtn>
      </HeaderContent>
    </Container>
  );
};

export default Landing;
