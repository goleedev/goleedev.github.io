import React from 'react';
import emailjs from 'emailjs-com';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { boxShadow, Center, color, mq } from '../theme';

const modalOpenStyle = ({ openModal }) => css`
  padding: 16px;
  cursor: pointer;

  ${openModal === true &&
  `
    display: flex;
    align-items: center;
    animation: modal-bg-show .3s;
    
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
  `}
`;

const Modal = styled.div`
  position: fixed;
  display: none;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  ${modalOpenStyle};
`;

const ContactContainer = styled.div`
  width: 500px;
  padding: 30px;
  ${Center};

  border-radius: 10px;
  box-shadow: ${boxShadow.BoldShadow};
  background-color: ${color.white};
  animation: modal-show 0.3s;
  overflow: hidden;

  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }

  ${mq['md']} {
    width: 90% !important;
  }
`;

const ContactTitle = styled.h2`
  font-family: 'SF Pro Bold', sans-serif;
  font-size: 28px;
  color: ${color.deepGrey};

  ${mq['md']} {
    font-size: 24px;
  }
`;

const ContactContentContainer = styled.div`
  width: 90%;
  margin: 0 auto 5%;
  padding: 0;
`;

const ContactForm = styled.form`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  .input-text {
    display: block;
    width: 100%;
    height: 32px;
    border-width: 0;
    border-bottom: 2px solid ${color.appleBlue};
    font-size: 16px;
    line-height: 18px;
  }

  .input-text:focus {
    outline: none;
  }

  .input-text:focus + .label,
  .input-text.not-empty + .label {
    -webkit-transform: translateY(-16px);
    transform: translateY(-16px);
  }

  .label {
    font-size: 18px;
    color: ${color.deepGrey};
  }

  .input-text:valid + .label {
    -webkit-transform: translateY(-16px);
    transform: translateY(-16px);
    color: ${color.appleBlue};
  }
`;

const ContactInputContainer = styled.div`
  padding: 30px 0;
`;

const ContactFormField = styled.div`
  position: relative;
  text-align: left;
  margin: 48px 0;

  .js-input option {
    font-size: 12px;
  }
`;

const ContactFormLabel = styled.label`
  position: absolute;
  bottom: 24px;
  font-size: 24px;
  line-height: 30px;
  font-weight: 300;
  cursor: text;
  color: ${color.deepGrey};
  transition: transform 0.2s ease-in-out;
`;

const ContactBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const ContactCloseBtn = styled.input`
  width: 70px;
  height: 40px;
  border: 1px ${color.deepGrey} solid;
  text-transform: uppercase;

  background-color: transparent;
  color: ${color.deepGrey};
  border-radius: 20px;
  font-size: 12px;
  transition: 0.5s;
  cursor: pointer;

  :hover {
    border: 1px ${color.appleBlue} solid;
    color: ${color.appleBlue};
  }
`;

const ContactSubmitBtn = styled.input`
  width: 70px;
  height: 40px;

  border: none;
  border-radius: 20px;
  text-transform: uppercase;
  background-color: ${color.deepGrey};
  color: ${color.white};
  font-size: 12px;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    background-color: ${color.appleBlue};
    color: ${color.deepGrey};
  }
`;

const Alert = styled.div`
  display: none;
  margin: 0 auto;
  width: 80%;
  height: 30px;
  background-color: ${color.appleRed};
`;

const ContactModal = (props) => {
  const { open, close } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        'service_xr723vq',
        'template_qf9kdqz',
        event.target,
        'user_H4ohHQRiHSzcSUcFanWZH'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setTimeout(function () {
      document.getElementById('alert').innerHTML = '';
      document.getElementById('alert').style.display = 'none';
    }, 3000);
    document.getElementById('alert').style.transition = '0.5s ease';
    document.getElementById('alert').style.display = 'inline-block';
    document.getElementById('alert').innerHTML = 'Sent Successfully!👋';
    event.target.reset();
  };

  const onKeyClose = (event) => {
    if (event.keyCode === 27) close();
  };

  return (
    <Modal openModal={open} onKeyUp={onKeyClose}>
      {open ? (
        <ContactContainer id="contact">
          <ContactTitle>🎉 Let's Get in Touch! 🎉</ContactTitle>
          <Alert id="alert" />
          <ContactContentContainer>
            <ContactForm
              encType="multipart/form-data"
              method="post"
              onSubmit={onSubmit}
              autoComplete="off"
            >
              <ContactInputContainer>
                <ContactFormField>
                  <input
                    name="name"
                    id="name"
                    className="input-text js-input"
                    type="text"
                    autoFocus={true}
                    required
                  />
                  <ContactFormLabel className="label" htmlFor="name">
                    Name
                  </ContactFormLabel>
                </ContactFormField>
                <ContactFormField>
                  <input
                    name="email"
                    id="email"
                    className="input-text js-input"
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                  />
                  <ContactFormLabel className="label" htmlFor="email">
                    Email
                  </ContactFormLabel>
                </ContactFormField>
                <ContactFormField>
                  <input
                    name="message"
                    id="message"
                    className="input-text js-input"
                    type="text"
                    required
                  />
                  <ContactFormLabel className="label" htmlFor="message">
                    Message
                  </ContactFormLabel>
                </ContactFormField>
              </ContactInputContainer>
              <ContactBtnContainer>
                <ContactCloseBtn onClick={close} type="button" value="Close" />
                <ContactSubmitBtn
                  onSubmit={onSubmit}
                  type="submit"
                  value="Send"
                />
              </ContactBtnContainer>
            </ContactForm>
          </ContactContentContainer>
        </ContactContainer>
      ) : null}
    </Modal>
  );
};

export default ContactModal;
