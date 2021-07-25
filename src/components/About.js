import React from 'react';
import styled from '@emotion/styled';

import { color, mq } from '../theme';
import me from '../assets/images/memoji2.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  user-select: none;
`;

const AboutHeader = styled.div`
  position: relative;
  left: 60px;
  width: 100%;
  height: 10%;

  ${mq['md']} {
    left: 30px;
  }
`;

const AboutTitle = styled.h2`
  width: 100%;
  color: ${color.deepGrey};
  font-weight: 700;
  font-family: 'SF Pro Bold', sans-serif;
  font-size: 36px;

  ${mq['md']} {
    font-size: 28px;
  }
`;

const AboutContentContainer = styled.div`
  max-width: 800px;
  width: 80%;
  padding: 60px 0;

  ${mq['md']} {
    width: 90%;
    padding: 30px 0;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 30px 0;
  margin: 0 auto;
  text-align: left;

  border-radius: 20px;
  font-size: 18px;
  background-color: ${color.lightGrey};

  ${mq['md']} {
    flex-direction: column;
    align-items: center;
    font-size: 16px;
  }
`;

const AboutContentImg = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;

  ${mq['md']} {
    width: 120px;
    height: 120px;
  }
`;

const AboutImessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 180px;
  width: 100%;
  font-size: 16px;

  p {
    position: relative;
    max-width: 90%;
    padding: 0.5rem 0.875rem;
    line-height: 1.25;
    border-radius: 1.15rem;
    word-wrap: break-word;
  }

  p::before,
  p::after {
    bottom: -0.1rem;
    content: '';
    height: 1rem;
    position: absolute;
  }

  p.from-me {
    align-self: flex-end;
    background-color: ${color.appleBlue};
    color: ${color.white};
  }

  p.from-me::before {
    border-bottom-left-radius: 0.8rem 0.7rem;
    border-right: 1rem solid ${color.appleBlue};
    right: -0.35rem;
    transform: translate(0, -0.1rem);
  }

  p.from-me::after {
    background-color: ${color.lightGrey};
    border-bottom-left-radius: 0.5rem;
    right: -40px;
    transform: translate(-30px, -2px);
    width: 10px;
  }

  p[class^='from-'] {
    margin: 0.5rem 0;
    width: fit-content;
  }

  p.from-me ~ p.from-me {
    margin: 0.25rem 0 0;
  }

  p.from-me ~ p.from-me:not(:last-child) {
    margin: 0.25rem 0 0;
  }

  p.from-me ~ p.from-me:last-child {
    margin-bottom: 0.5rem;
  }

  p[class^='from-'].emoji {
    background: none;
    font-size: 2.5rem;
    animation-name: wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;

    ${mq['md']} {
      font-size: 32px;
    }
  }

  p[class^='from-'].emoji::before {
    content: none;
  }

  .no-tail::before {
    display: none;
  }

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    15% {
      transform: rotate(14deg);
    }
    30% {
      transform: rotate(-8deg);
    }
    40% {
      transform: rotate(14deg);
    }
    50% {
      transform: rotate(-4deg);
    }
    60% {
      transform: rotate(10deg);
    }
    70% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const AboutContentRight = styled.div`
  padding: 0 30px;
  border-left: 1px solid ${color.regularGrey};

  p {
    margin-top: 0;
    margin-bottom: 20px;
  }

  span {
    font-family: 'SF Pro Bold', sans-serif;
  }

  ul {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    padding: 0;
    margin: 0;

    li {
      list-style: none;
    }

    li::before {
      content: '▶️ ';
      color: ${color.appleBlue};
    }
  }

  ${mq['md']} {
    border-left: none;
    border-top: 1px solid ${color.regularGrey};
    padding-top: 30px;
  }
`;

const AboutContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

const About = () => {
  return (
    <Container id="about">
      <AboutHeader>
        <AboutTitle>About Me</AboutTitle>
      </AboutHeader>
      <AboutContentContainer
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
      >
        <AboutContent>
          <AboutContentLeft
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-easing="ease-in-out"
          >
            <AboutContentImg src={me} alt={'my-pic'} />
            <AboutImessage>
              <p className="from-me">Let's get to know me better!</p>
              <p className="from-me emoji no-tail">👋</p>
            </AboutImessage>
          </AboutContentLeft>
          <AboutContentRight
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-easing="ease-in-out"
          >
            <p>
              Hi! I'm Goeun Lee, but I go by <span>GO 🏃</span>, a frontend
              engineer based in Seoul, S. Korea. <br />I{' '}
              <span>enjoy creating things</span> that live on/off the internet —
              which explains my pottery hobby🍶.
              <br />
              My ultimate goal as a developer is to build on quality components
              and performant web applications for both users and fellow team
              mates.
            </p>
            <p>
              Here are a few <span>technologies</span> I've been working with
              recently 👇
            </p>
            <ul>
              <li>TypeScript</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML5 & CSS3</li>
              <li>GraphQL & Apollo</li>
              <li>Firebase</li>
              <li>Express/Node</li>
              <li>Git/Github</li>
            </ul>
          </AboutContentRight>
        </AboutContent>
      </AboutContentContainer>
    </Container>
  );
};

export default About;
