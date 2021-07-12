import React from 'react';
import styled from "@emotion/styled";

import { Center, color, mq } from "../theme";
import me from '../assets/images/memoji2.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  padding: 60px 60px 0;
  margin: 0 auto;
  
  ${mq['sm']} {
    padding: 30px;
  }
`

const AboutHeader = styled.div`
  width: 100%;
  height: 10%;
`

const AboutTitle = styled.h2`
  width: 100%;
  color: ${color.deepGrey};
  font-weight: 700;
  font-family: 'SF Pro Bold', sans-serif;
  font-size: 36px;
`

const AboutContentContainer = styled.div`
  max-width: 800px;
  width: 80%;
  padding: 60px 0;
  ${Center};

  ${mq['sm']} {
    width: 100%;
  }
`

const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  text-align: left;
  margin: 0 auto;
  padding: 30px;
  
  border-radius: 20px;
  font-size: 18px;
  background-color: ${color.lightGrey};

  ${mq['sm']} {
    flex-direction: column;
    align-items: center;
    font-size: 16px;
  }
`

const AboutContentImg = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  
  position: relative;
  left: -10px;
  
  ${mq['sm']} {
    width: 150px;
    height: 150px;
    
    left: 0;
  }
`

const AboutImessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  padding-right: 30px;
  
  p {
    border-radius: 1.15rem;
    line-height: 1.25;
    max-width: 90%;
    padding: 0.5rem .875rem;
    position: relative;
    word-wrap: break-word;
  }

  p::before,
  p::after {
    bottom: -0.1rem;
    content: "";
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
    transform:translate(-30px, -2px);
    width: 10px;
  }

  p[class^="from-"] {
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

  p[class^="from-"].emoji {
    background: none;
    font-size: 2.5rem;
    animation-name: wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
  }

  p[class^="from-"].emoji::before {
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
`

const AboutContentRight = styled.div`
  padding-left: 30px;
  border-left: 1px solid ${color.regularGrey};

  p {
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
      content: "▶️ ";
      color: ${color.appleBlue};
    }
  }

  ${mq['sm']} {
    border-left: none;
    border-top: 1px solid ${color.regularGrey};
    padding-left: 0 ;
    padding-top: 30px;
  }
`

const AboutContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const About = () => {
  return (
    <Container id="about">
      <AboutHeader>
        <AboutTitle>About Me</AboutTitle>
      </AboutHeader>
      <AboutContentContainer>
        <AboutContent>
          <AboutContentLeft>
            <AboutContentImg src={me} alt={'my-pic'} />
            <AboutImessage>
              <p className="from-me">Let's get to know me better!</p>
              <p className="from-me emoji no-tail">👋</p>
            </AboutImessage>
          </AboutContentLeft>
          <AboutContentRight>
            <p>
                Hi! I'm Goeun Lee, but I go by  <span>GO 🏃</span>, a frontend engineer based in Seoul, S. Korea. <br/>
                I <span>enjoy creating things</span> that live on/off the internet — which explains my pottery hobby🍶.<br/>
                My ultimate goal as a developer is to build on quality components and performant web applications for both users and fellow team mates.
            </p>
            <p>
                Here are a few <span>technologies</span> I've been working with recently 👇
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
