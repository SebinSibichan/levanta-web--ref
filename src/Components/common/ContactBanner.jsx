import React from "react";
import styled from "styled-components";
import bannerImg from '../../images/bannerbg.webp';

const ContactUsSection = () => (
  <ContactUsWrapper>
    <BackgroundImage loading="lazy" srcSet={bannerImg} />
    <ContentWrapper>
      <TextContent>
        <Heading>Contact Us</Heading>
        <Description>
          Contact us today to begin planning your dream getaway.  Levanta Travel - Elevating Your Travel Experience.
        </Description>
      </TextContent>
      <LetsTalkButton href="/contact">Let’s Talk</LetsTalkButton>
    </ContentWrapper>
  </ContactUsWrapper>
);

const ContactUsWrapper = styled.div`
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  filter: blur(1px) grayscale(10%) brightness(70%);
  object-position: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 40px; 
  position: relative;
  z-index: 1; 

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  max-width: 450px;
  text-align: center;

  @media (min-width: 992px) {
    text-align: left;
  }
`;

const Heading = styled.div`
  color: #fff;
  letter-spacing: -1.44px;
  font: 600 48px Manrope, sans-serif;
  margin-bottom: 16px;
  
  @media (max-width: 991px) {
    font-size: 32px;
  }
`;

const Description = styled.div`
  color: #fff;
  font: 500 16px/29px Manrope, -apple-system, Roboto, Helvetica, sans-serif;
  text-shadow: #888;

  @media (max-width: 991px) {
    font-size: 14px;
    margin: 8px 18px 19px 20px;
  }
`;

const LetsTalkButton = styled.a`
  color: #000;
  text-align: center;
  letter-spacing: -0.48px;
  white-space: nowrap;
  border-radius: 47px;
  background-color: #fff;
  padding: 18px 60px;
  font: 600 16px/113.4% Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
  text-decoration: none;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 10px 45px;
    margin: 18px;
  }

  @media (min-width: 992px) {
    margin-left: auto;
  }

  &:hover {
    color: #fff;
    background-color: #aaa;
  }
`;

export default ContactUsSection;
