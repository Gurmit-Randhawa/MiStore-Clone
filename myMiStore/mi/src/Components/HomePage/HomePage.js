import React from "react";
import { Navbar } from "../Navbar/Navbar";
import "../HomePage/HomePage.css";
import { github, youtube, facebook, twitter } from "../FontAweSome/FontAweSome";

import {
  Background,
  InfoSection,
  ImageSection,
  SocialIconBox,
  InfoBox,
  ButtonBox,
  MyImage,
  Icons,
  BtnStyle,
} from "../HomePage/HomePageStyle.js";
import abc from '../Images/1.JPG';

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <Navbar />
        <Background>
          <InfoSection>
            <SocialIconBox>
              <Icons href="https://github.com/Gurmit-Randhawa">{github}</Icons>
              <Icons href="https://github.com/Gurmit-Randhawa">{youtube}</Icons>
              <Icons href="https://github.com/Gurmit-Randhawa">{twitter}</Icons>
              <Icons href="https://github.com/Gurmit-Randhawa">{facebook}</Icons>
            </SocialIconBox>
            <InfoBox size={"22px"}>
              Hello, I'M <span>Gurmit</span>
            </InfoBox>
            <InfoBox size={"35px"}>Mern Stack Developer</InfoBox>
            <InfoBox>
              Knack of building applications with front and back end operations.
            </InfoBox>
            <ButtonBox>
              <button style={BtnStyle}>Hire Me</button>
              <button>Get Resume</button>
            </ButtonBox>
          </InfoSection>
          <ImageSection>
            <MyImage>
              <img className="CircleImage" src={abc} alt="" />
            </MyImage>
          </ImageSection>
        </Background>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="white" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,234.7C960,267,1056,277,1152,250.7C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </>
  );
};

export { HomePage };
