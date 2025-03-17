import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterHeading,
  FooterLink,
  NewsletterSection,
  NewsletterInput,
  SubmitButton,
  FooterBottom,
  LogoContainer,
  LogoText
} from '../layout/Footer.styles';
import Logo from "../assets/logo.jpg";
import { LogoImage } from './Header.styles';


const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <LogoContainer>
                    <LogoImage src={Logo} alt="Logo" />
                  </LogoContainer>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLink href="/about">About us</FooterLink>
          <FooterLink href="/policies">Policies</FooterLink>
          {/* <FooterLink href="/delete-user">Delete User</FooterLink> */}
        </FooterSection>

        <FooterSection>
          <FooterHeading>Contact</FooterHeading>
          <FooterLink href="mailto:contact@sveccha.in">Email : contact@sveccha.in</FooterLink>
        </FooterSection>
      </FooterContent>

      <NewsletterSection>
        <FooterHeading>Newsletter</FooterHeading>
        <NewsletterInput type="email" placeholder="Email*" />
        <SubmitButton>Submit</SubmitButton>
      </NewsletterSection>

      <FooterBottom>
        © 2025 All Rights Reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
