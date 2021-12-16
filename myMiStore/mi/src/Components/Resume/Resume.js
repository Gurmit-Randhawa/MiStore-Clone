import React from "react";
import {
  ResumePage,
  Left,
  Right,
  Center,
  Row,
  RowLeft,
  RowRight,
  RowBlank,
  RowBlankRight,
  RowBlankLeft,
} from "../Resume/ResumeStyle.js";
import "./Resume.css";
import {education,workHistory,programmingSkills,projects,interests} from '../FontAweSome/FontAweSome.js';
import {ResumeContent} from './ResumeContent.js';

const Resume = () => {
  return (
    <>
      <ResumePage>
        <Left>
          <RowBlank>
            <RowBlankLeft></RowBlankLeft>
            <RowBlankRight></RowBlankRight>
          </RowBlank>
          <Row>
            <RowLeft>{education}</RowLeft>
            <RowRight>Education</RowRight>
          </Row>
          <Row>
            <RowLeft>{workHistory}</RowLeft>
            <RowRight>Work History</RowRight>
          </Row>
          <Row>
            <RowLeft>{programmingSkills}</RowLeft>
            <RowRight>Programming Skills</RowRight>
          </Row>
          <Row>
            <RowLeft>{projects}</RowLeft>
            <RowRight>Projects</RowRight>
          </Row>
          <Row>
            <RowLeft>{interests}</RowLeft>
            <RowRight>Interests</RowRight>
          </Row>
          <RowBlank>
            <RowBlankLeft></RowBlankLeft>
            <RowBlankRight></RowBlankRight>
          </RowBlank>
        </Left>
        <Center></Center>
        <Right>
          <ResumeContent/>
        </Right>
      </ResumePage>
    </>
  );
};

export { Resume };
