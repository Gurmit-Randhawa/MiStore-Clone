import React from "react";
import {
  AboutMeBox,
  Left,
  MyImage,
  Right,
  Paragraph,
  KeyFeatureList,
  ButtonBox,
  BtnStyle,
} from "../AboutMe/AboutMeStyle.js";
import "../AboutMe/AboutMe.css";
import  myImage from '../Images/2.JPG';

const AboutMe = () => {
  return (
    <>
      <AboutMeBox>
        <Left>
          <MyImage> <img className="myImage"src={myImage} alt="" /> </MyImage>
        </Left>
        <Right>
          <Paragraph>
            Full stack web and mobile developer with background knowledge of
            MERN stacks with redux, along with a knack of building applications
            with utmost efficiency. Strong professional with a BSC willing to be
            an asset for an organization.
          </Paragraph>
          <KeyFeatureList>
              <h3>Here are a Few Highlights</h3>
            <ul>
              <li className="features" id="feature1">
                <span> Full Stack Web development</span>
              </li>
              <li className="features" id="feature2">
                <span> Interactive Front End as per the design</span>
              </li>
              <li className="features" id="feature3">
                <span> React</span>
              </li>
              <li className="features" id="feature4">
                <span> Redux and Hooks for State Management</span>
              </li>
              <li className="features" id="feature5">
                <span> Building Rest API</span>
              </li>
              <li className="features" id="feature6">
                <span> Managing Database</span>
              </li>
            </ul>
          </KeyFeatureList>
          <ButtonBox>
            <button style={BtnStyle}>Hire Me</button>
            <button>Get Resume</button>
          </ButtonBox>
        </Right>
      </AboutMeBox>
    </>
  );
};

export { AboutMe };
