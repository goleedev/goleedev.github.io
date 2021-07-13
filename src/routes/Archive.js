import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import archiveData from '../archiveData';
import { color, mq } from '../theme';

const ArchiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 30px;

  table {
    ${mq['md']} {
      margin: 0 !important;
      margin-left: -2px !important;
      margin-right: 2px !important;
      font-size: 12px !important;
    }
  }

  th {
    font-weight: 300;
  }

  th,
  td {
    padding: 10px 0;
    color: ${color.deepGrey};

    ${mq['md']} {
      font-size: 10px !important;
      padding: 10px 2px;
    }
  }

  td > a {
    color: ${color.regularGrey};
    margin-right: 5px;

    ${mq['md']} {
      font-size: 10px;
      padding-right: 2px;
    }
  }

  td > a:hover {
    color: ${color.appleBlue};
  }
`;

const ArchiveHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 60px;
`;

const ArchiveTitle = styled.h2`
  margin: 0;
  color: ${color.deepGrey};
  font-weight: bold;
  user-select: none;

  span {
    color: ${color.appleBlue} !important;
    font-size: 48px;
    margin-left: 0 !important;
  }
`;

const ArchiveBack = styled.p`
  position: relative;
  right: 0;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    color: ${color.appleBlue};
  }
`;

const ArchiveBuilt = styled.td`
  font-family: 'Source Code Pro', monospace;
  font-size: 14px;
`;

const Archive = () => {
  const history = useHistory();
  const onGoBack = () => {
    window.scrollTo(0, 0);
    history.goBack();
  };
  return (
    <ArchiveContainer>
      <ArchiveHeader>
        <ArchiveTitle>
          Archive<span>.</span>
        </ArchiveTitle>
      </ArchiveHeader>
      <ArchiveBack onClick={onGoBack}>
        Back <FontAwesomeIcon icon={faArrowLeft} />
      </ArchiveBack>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th colSpan="3" scope="col">
              Title
            </th>
            <th colSpan="2" scope="col">
              Built with
            </th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          {archiveData.map((data, i) => {
            return (
              <tr key={`${i}-archive`}>
                <th scope="row">{data.year}</th>
                <td colSpan="3">{data.title}</td>
                <ArchiveBuilt colSpan="2">
                  {data.built.map((b, i) => {
                    if (i !== data.built.length - 1) {
                      return `${b} · `;
                    } else {
                      return `${b}`;
                    }
                  })}
                </ArchiveBuilt>
                <td>
                  {data.github && (
                    <a href={data.github}>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  )}
                  {data.link && (
                    <a href={data.link}>
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ArchiveContainer>
  );
};

export default Archive;
