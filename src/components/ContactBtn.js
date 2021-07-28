import React, { useState } from 'react';
import styled from '@emotion/styled';

import { boxShadow, color, mq } from '../theme';
import ContactModal from './ContactModal';

const ContactBtnContainer = styled.div`
  position: fixed;
  text-align: center;
  width: 40px;
  height: 40px;
  right: 60px;
  bottom: 60px;
  
  span {
    font-size: 28px;
    line-height: 40px;
  }

  background-color: ${color.white};
  box-shadow: ${boxShadow.BoldShadow};
  border-radius: 10px;
  border: none;
  cursor: pointer;

  ${mq['md']} {
    right: 30px;
    bottom: 30px;
  }
`;

const ContactBtn = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <ContactBtnContainer onClick={openModal}>
        <span>📧</span>
      </ContactBtnContainer>
      <ContactModal open={modalOpen} close={closeModal} />
    </>
  );
};

export default ContactBtn;
