import styled from 'styled-components';
import theme from '../theme/Theme';

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.background};
  padding: ${theme.spacing(5)} 0;
  text-align: center;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  padding-bottom: ${theme.spacing(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  margin: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-bottom: ${theme.spacing(3)};
  }
`;

export const FooterHeading = styled.h3`
  font-size: 30px;
  margin-top: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(2)};
  color: ${theme.colors.text};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.md};
  }
`;

export const FooterLink = styled.a`
  display: block;
  color: ${theme.colors.text};
  text-decoration: none;
  margin-bottom: ${theme.spacing(1)};
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.sm};
  }
`;

export const NewsletterSection = styled.div`
  align-items: center;
  gap: ${theme.spacing(4)};
  margin-top: ${theme.spacing(4)};
  width: 100%;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing(1)};
  }
`;

export const NewsletterInput = styled.input`
  width: 250px;
  padding: ${theme.spacing(1)};
  font-size: ${theme.fontSizes.md};
  border: none;
  border-bottom: 1px solid ${theme.colors.text};
  text-align: left;
  outline: none;
  background: transparent;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 200px;
    font-size: ${theme.fontSizes.sm};
  }
`;

export const SubmitButton = styled.button`
  padding: ${theme.spacing(1)} ${theme.spacing(3)};
  background-color: transparent;
  border: 1px solid ${theme.colors.text};
  color: ${theme.colors.text};
  border-radius: ${theme.spacing(5)};
  cursor: pointer;
  font-size: ${theme.fontSizes.md};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.text};
    color: ${theme.colors.white};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.sm};
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding-top: ${theme.spacing(3)};
  border-top: 1px solid ${theme.colors.primary};
  margin-top: ${theme.spacing(3)};
  font-size: ${theme.fontSizes.sm};
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogoText = styled.h2`
  font-size: ${theme.fontSizes.xl};
  font-family: 'Dancing Script', cursive;
  color: ${theme.colors.primary};
  font-weight: bold;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.lg};
  }
`;


export const LogoImage = styled.img`
  width: ${theme.spacing(25)};
  height: ${theme.spacing(8)};
  object-fit: contain;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: ${theme.spacing(20)};
    height: ${theme.spacing(6)};
    
  }
`;