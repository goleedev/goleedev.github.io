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
import workData from '../workData';

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
  }
`;

const WorkCard = styled.div`
  display: flex;
  flex-direction: column;
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
  z-index: -1;

  ${mq['md']} {
    width: 90%;
    margin: 15% auto 5%;
  }
`;

const WorkContent = styled.div`
  width: 65%;
  height: 100%;
  padding: 5%;
  margin: 0;

  ${mq['md']} {
    width: 90%;
  }
`;

const WorkName = styled.h2`
  width: 75%;
  margin: 10px 0;

  color: ${color.deepGrey};
  font-weight: 700;

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
    background-color: ${color.appleMint};
    color: ${color.white};
    border-radius: 5px;
  }
`;

const WorkLink = styled.div`
  margin-top: 5px;

  a {
    margin-right: 5px;
    color: ${color.appleBlue};
    z-index: 1;
  }

  a > svg {
    width: 32px;
    height: 32px;
  }
`;

const WorkImg = styled.div`
  position: absolute;
  top: -30px;
  right: -180px;

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

const Work = () => {
  return (
    <div id="work">
      <Container>
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
            <WorkCard key={`${i}-data`}>
              <WorkContent>
                <WorkSub>Featured Project ?? {d.type}</WorkSub>
                <WorkName>{d.project}</WorkName>
                <p>{d.description}</p>
                <WorkStack className="product-stack">
                  {d.stack.map((s, i) => {
                    return <span key={`${i}-stack`}>{s}</span>;
                  })}
                </WorkStack>
                <WorkLink>
                  {d.github && (
                    <a href={d.github}>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  )}
                  {d.website && (
                    <a href={d.website}>
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                  )}
                </WorkLink>
              </WorkContent>
              <WorkImg>
                <img src={d.image} alt={`${i}-image`} />
              </WorkImg>
            </WorkCard>
          );
        })}
      </Container>
    </div>
  );
};

export default Work;
