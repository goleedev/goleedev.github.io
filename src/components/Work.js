import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolderOpen,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { boxShadow, color, mq } from '../theme';
import { workData } from '../data';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  margin: 0 auto;
`;

const WorkHeader = styled.div`
  width: 100%;
  height: 20%;
`;

const WorkTitle = styled.h2`
  position: relative;
  left: 60px;
  color: ${color.deepGrey};
  font-weight: 700;
  font-family: 'SF Pro Bold', sans-serif;
  font-size: 36px;

  ${mq['md']} {
    left: 30px;
    font-size: 28px;
  }
`;

const WorkArchive = styled.span`
  position: relative;
  margin-bottom: 5%;
  padding: 5px;
  left: 60px;

  color: ${color.appleBlue};
  border-bottom: 2px solid ${color.appleBlue};
  transition: all 0.4s ease-out;
  cursor: pointer;

  :hover {
    color: ${color.deepGrey};
    border-bottom: 2px solid ${color.deepGrey};
  }

  ${mq['md']} {
    left: 30px;
    font-size: 16px;
  }
`;

const WorkCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: left;
  max-width: 550px;
  min-height: 300px;
  margin: 10% auto 0;
  padding: 0;

  border-radius: 10px;
  box-shadow: ${boxShadow.BoldShadow};
  background-color: ${color.white};
  color: ${color.regularGrey};

  ${mq['md']} {
    width: 90%;
    margin: 15% auto 5%;
  }
`;

const WorkContent = styled.div`
  width: 55%;
  height: 100%;
  padding: 5%;
  margin: 0;
  pointer-events: none;

  ${mq['md']} {
    width: 90%;
    height: 100%;
  }
`;

const WorkName = styled.h2`
  width: 75%;
  margin: 10px 0;

  font-family: 'SF Pro Bold', sans-serif;
  color: ${color.deepGrey};

  ${mq['md']} {
    font-size: 32px;
  }
`;

const WorkSub = styled.span`
  padding: 3px 5px;
  border-radius: 5px;
  color: ${color.white};
  background-color: ${color.appleBlue};

  ${mq['md']} {
    font-size: 14px;
  }
`;

const WorkStack = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;

  span {
    padding: 3px;
    margin-right: 5px;
    font-size: 14px;
    font-family: 'Source Code Pro', monospace !important;
    background-color: ${color.regularGrey};
    color: ${color.white};
    border-radius: 5px;
  }
`;

const WorkImg = styled.div`
  position: absolute;
  top: -30px;
  right: -180px;
  pointer-events: none;

  img {
    border-radius: 10px;
    max-width: 400px;
    box-shadow: ${boxShadow.RegularShadow};

    ${mq['md']} {
      top: 0;
      width: 98%;
    }
  }

  ${mq['md']} {
    text-align: center;
    position: relative !important;
    top: 0;
    left: 0;
  }
`;

const WorkLinkSpace = styled.div`
  width: 36px;
  height: 36px;
`;

const WorkLink = styled.div`
  position: relative;
  cursor: pointer;
  bottom: 65px;
  left: -226px;

  a {
    margin-right: 5px;
    color: ${color.appleBlue};
  }

  ${mq['md']} {
    bottom: 300px;
  }

  @media (max-width: 600px) {
    left: -37%;
  } 
  
  ${mq['sm']} {
    bottom: 270px;
    left: -35%;
  }

  @media (max-width: 380px) {
    bottom: 250px;
  }

`;

const Work = () => {
  return (
    <Container id="work">
      <WorkHeader>
        <WorkTitle>Recent Work</WorkTitle>
        <Link to="/archive">
          <WorkArchive>
            <FontAwesomeIcon icon={faFolderOpen} /> more projects
          </WorkArchive>
        </Link>
      </WorkHeader>
      {workData.map((d, i) => {
        return (
          <>
            <WorkCard
              key={`${i}-work-card`}
              data-aos={i % 2 === 0 ? 'fade-left' : 'fade-right'}
              data-aos-delay="150"
              data-aos-easing="ease-in-out"
            >
              <WorkContent>
                <WorkSub>Featured Project · {d.type}</WorkSub>
                <WorkName>{d.project}</WorkName>
                <p>{d.description}</p>
                <WorkStack>
                  {d.stack.map((s, i) => {
                    return <span key={`${i}-stack`}>{s}</span>;
                  })}
                </WorkStack>
                <WorkLinkSpace />
              </WorkContent>
              <WorkImg>
                <img src={d.image} alt={`${i}-work-pic`} />
              </WorkImg>
            </WorkCard>
            <WorkLink
              data-aos={i % 2 === 0 ? 'fade-left' : 'fade-right'}
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
            >
              <a href={d.github} target={'_blank'} rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={d.website} target={'_blank'} rel="noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </WorkLink>
          </>
        );
      })}
    </Container>
  );
};

export default Work;
