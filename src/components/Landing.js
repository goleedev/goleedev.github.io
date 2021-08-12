import React from 'react';
import styled from '@emotion/styled';

import { color, mq } from '../theme';
import me from '../assets/images/memoji.png';
import Navigation from './Navigation';
import LazyImage from './LazyImage';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden !important;
  width: 100vw;
  height: 100vh;
  margin: 0;
  color: ${color.deepGrey};
`;

const HeaderImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8% !important;

  background-color: ${color.appleLightYellow};
  border-radius: 50%;
  width: 180px;
  height: 180px;

  img {
    width: 100%;
    height: 100%;
    animation: bounce 1.3s ease;
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
  padding-top: 3%;
  text-align: center;
  color: ${color.deepGrey};
`;

const HeaderTitle = styled.h1`
  font-size: 44px;
  line-height: 58px;
  font-family: 'SF Pro Heavy', sans-serif;

  ${mq['md']} {
    font-size: 24px;
    line-height: 32px;
  }
`;

const HeaderSubTitle = styled.h5`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 5%;

  ${mq['md']} {
    font-size: 16px;
    line-height: 22px;
  }
`;

const HeaderDes = styled.p`
  font-size: 16px;
  line-height: 18px;
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
  height: 50px;
  text-align: center;
  border-radius: 25px;
  border: none;

  color: ${color.white};
  background-color: ${color.deepGrey};
  font-size: 18px;
  line-height: 50px;
  transition: 0.5s;
  margin-bottom: 10%;

  &:hover {
    background-color: ${color.appleBlue};
    color: ${color.deepGrey};
  }

  ${mq['md']} {
    width: 120px;
    height: 35px;
    font-size: 14px;
    line-height: 35px;
    border-radius: 20px;
    margin-bottom: 0;
  }
`;

const Landing = () => {
  return (
    <Container>
      <Navigation />
      <HeaderImgContainer data-aos="fade-up" data-aos-delay="150">
        <LazyImage src={me} alt="my-pic" />
      </HeaderImgContainer>
      <HeaderContent>
        <HeaderSubTitle data-aos="fade-up" data-aos-delay="250">
          Hi, I’m GO 🤘
        </HeaderSubTitle>
        <HeaderTitle data-aos="fade-up" data-aos-delay="300">
          Building quality components
          <br />
          and performant web apps
        </HeaderTitle>
        <HeaderDes data-aos="fade-up" data-aos-delay="250">
          <b>Junior Frontend Developer</b> based in Seoul, S.Korea.
          <br />
          CS student @UOL in the ML/AI specialism.
        </HeaderDes>
        <HeaderBtn href={'#work'} data-aos="fade-up" data-aos-delay="450">
          Recent Work
        </HeaderBtn>
      </HeaderContent>
    </Container>
  );
};

export default Landing;
