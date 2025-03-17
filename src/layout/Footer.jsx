import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    alert("Newsletter subscribed successfully!");
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <LogoContainer as={Link} to="/">
            <LogoImage src={Logo} alt="Logo" />
          </LogoContainer>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLink href="/about">About us</FooterLink>
          <FooterLink href="/policies">Policies</FooterLink>
          <FooterLink href="/delete-user">Delete User</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Contact</FooterHeading>
          <FooterLink href="mailto:contact@sveccha.in">Email : contact@sveccha.in</FooterLink>
        </FooterSection>
      </FooterContent>

      <NewsletterSection>
        <FooterHeading>Newsletter</FooterHeading>
        <NewsletterInput 
          type="email" 
          placeholder="Email*" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </NewsletterSection>

      <FooterBottom>
        © 2025 All Rights Reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;