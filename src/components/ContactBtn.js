import React, { useState } from 'react';
import styled from '@emotion/styled';

import { boxShadow, color, mq } from '../theme';
import ContactModal from './ContactModal';

const ContactBtnContainer = styled.button`
  position: fixed;
  width: 40px;
  height: 40px;
  text-align: center;
  right: 60px;
  bottom: 60px;
  
  span {
    width: 36px;
    height: 36px;
    font-size: 28px;
  }

  background-color: ${color.white};
  box-shadow: ${boxShadow.BoldShadow};
  border-radius: 10px;
  border: none;

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
