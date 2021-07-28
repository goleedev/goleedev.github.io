import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

import { color, defaultFont, smallFont, Center, mq } from '../theme';
import ContactModal from './ContactModal';

const Container = styled.footer`
  width: 100vw;
  height: 20%;
  margin: 5% auto;
`;

const FooterContent = styled.div`
  ${Center};
`;

const FooterTitle = styled.h2`
  margin: 0;
  color: ${color.deepGrey};
  font-weight: bold;
  user-select: none;

  span {
    margin-left: 0 !important;
    font-size: 48px;
    color: ${color.appleBlue} !important;
  }

  ${mq['md']} {
    font-size: 24px !important;

    span {
      font-size: 36px;
    }
  }
`;
const FooterSub = styled.p`
  margin-bottom: 5%;
  ${defaultFont};

  ${mq['md']} {
    margin-bottom: 3%;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 20px auto;

  a {
    margin: 0 10px;
    color: ${color.appleBlue};
  }

  ${mq['md']} {
    margin: 10px auto;
  }
`;

const FooterCopyright = styled.p`
  margin-bottom: 5%;
  ${smallFont};
  color: ${color.regularGrey};
`;

const FooterContact = styled.button`
  padding: 0 5px;
  line-height: 24px;
  border: none;
  background-color: ${color.white};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const FooterHere = styled.a`
  padding-right: 5px;
  text-decoration: none;
  color: ${color.appleBlue} !important;
  border-bottom: 3px ${color.appleLightYellow} solid;
  box-shadow: inset 0 0 0 ${color.appleLightYellow} !important;
  transition: all 0.5s !important;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:hover {
    color: ${color.deepGrey} !important;
    box-shadow: inset 0px -80px 0px ${color.appleLightYellow} !important;
  }
`;

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <FooterContent>
        <Link to="/">
          <FooterTitle>
            golee<span>.</span>dev
          </FooterTitle>
        </Link>
        <FooterSocial>
          <a
            href="https://www.linkedin.com/in/goleedev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="https://github.com/goleedev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://maily.so/1step"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faNewspaper} />
          </a>
        </FooterSocial>
        <FooterSub>
          I’m available for interesting projects.
          <br />
          Contact me
          <FooterContact>
            <FooterHere onClick={openModal}>@here</FooterHere>
            🎉
          </FooterContact>
          <ContactModal open={modalOpen} close={closeModal} />
        </FooterSub>

        <FooterCopyright>
          &copy; Copyright {new Date().getFullYear()} GO Lee. All rights
          reserved.
        </FooterCopyright>
      </FooterContent>
    </Container>
  );
};

export default Footer;
