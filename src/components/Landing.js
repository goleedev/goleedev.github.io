import React from "react";
import styled from "@emotion/styled";

import {Center, color, mq} from "../theme";
import me from "../assets/images/memoji.png";
import Navigation from "./Navigation";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden !important;
  width: 100vw;
  height: 100vh;
  padding: 60px;
  margin: 0;

  font-family: 'Ubuntu', sans-serif;
  color: ${color.deepGrey};

  ${mq['sm']} {
    padding: 30px;
  }
`

const HeaderImgContainer = styled.div`
  display: flex;
  justify-content: center;
  ${Center};
  margin-top: 10% !important;
  
  background-color: ${color.appleLightYellow};
  border-radius: 50%;
  width: 200px;
  height: 200px;
  
  img {
    width: 100%;
    height: 100%;
  }
  
  img:hover {
    animation: bounce 1s ease infinite;
  }

  ${mq['sm']} {
      width: 150px;
      height: 150px;
  }

  @keyframes bounce {
      from, 20%, 53%, 80%, to {
        transform: translate3d(0,0,0);
      }
    
      40%, 43% {
        transform: translate3d(0, -15px, 0);
      }
    
      70% {
        transform: translate3d(0, -5px, 0);
      }
    
      90% {
        transform: translate3d(0,-2px,0);
      }
  }
`

const HeaderContent = styled.div`
  padding-top: 10%;
  text-align: center;
  color: ${color.deepGrey};
`

const HeaderTitle = styled.h1`
  font-size: 52px;
  line-height: 68px;
  font-family: 'SF Pro Heavy', sans-serif;;

  ${mq['sm']} {
    font-size: 28px;
    line-height: 36px;
  }
`

const HeaderSubTitle = styled.h5`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5%;

  ${mq['sm']} {
    font-size: 18px;
    line-height: 24px;
  }
`

const HeaderDes = styled.p`
  font-size: 18px;
  margin: 5% auto 10%;

  ${mq['sm']} {
    font-size: 14px;
    line-height: 18px;
  }
`

const HeaderBtn = styled.a`
  display: inline-block;
  align-content: center;
  width: 200px;
  height: 60px;
  text-align: center;
  border-radius: 25px;
  border: none;
  
  color: ${color.white};
  background-color: ${color.deepGrey};
  font-size: 20px;
  line-height: 60px;
  transition: .5s;
  
  &:hover {
    background-color: ${color.appleBlue};
    color: ${color.deepGrey};
  }

  ${mq['sm']} {
    width: 150px;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    border-radius: 20px;
  }
`

const Landing = () => {
    return (
        <Container>
            <Navigation />
            <HeaderImgContainer>
                <img src={me} alt="my-pic"/>
            </HeaderImgContainer>
            <HeaderContent>
                <HeaderSubTitle>Hi, I’m GO 🤘</HeaderSubTitle>
                <HeaderTitle>
                    Building quality components
                    <br/>
                    and performant web apps
                </HeaderTitle>
                <HeaderDes>
                    <b>Junior Frontend Developer</b> based in Seoul, S.Korea.
                    <br/>
                    CS student @UOL in the ML/AI specialism.
                </HeaderDes>
                <HeaderBtn href={'#work'}>Recent Work</HeaderBtn>
            </HeaderContent>
        </Container>
    )
}

export default Landing;