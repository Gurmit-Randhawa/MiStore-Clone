import React from 'react';
import {ContactMeBox,TopBar, Left, Right, ContactForm,ButtonBox, LabelBox, InputBox, Send, Message} from './ContactMeStyle.js';
import './ContactMe.css';
import { github, youtube, facebook, twitter } from "../FontAweSome/FontAweSome";
import ContactImage from '../Images/contactImage.jpeg'

const ContactMe = () => {
    return (
        <>
            <ContactMeBox >
                <TopBar>
                    <div>Get In Touch </div> 
                    <div className="SocialIcons">{github} {youtube} {facebook} {twitter}</div>
                </TopBar>
                <Left>
                    <div className="contactLabel">Send Your E-mail Here!</div>
                    <img className="contactImage" src={ContactImage} alt="" />
                </Left>
                <Right >
                    <ContactForm >
                        <LabelBox>Name</LabelBox>
                        <InputBox type="text"></InputBox>
                        <LabelBox>Email</LabelBox>
                        <InputBox type="email"></InputBox>
                        <LabelBox>Message</LabelBox>
                        <Message></Message>
                        <ButtonBox>
                            <Send>Send</Send>
                        </ButtonBox>
                    </ContactForm>
                </Right>
            </ContactMeBox>
        </>
    )
}

export {ContactMe};
