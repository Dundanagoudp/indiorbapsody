import styled from 'styled-components';
import theme from '../../theme/Theme';

export const ContactContainer = styled.div`
  max-width: ${theme.breakpoints.desktop};
  margin: 0 auto;
  margin-top: ${theme.spacing(8)};
  margin-bottom: ${theme.spacing(8)};
  padding: ${theme.spacing(4)};
  background-color: ${theme.colors.white};
  border-radius: ${theme.spacing(1)};
  text-align: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(3)};
    margin-top: ${theme.spacing(6)};
    margin-bottom: ${theme.spacing(6)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(2)};
    margin-top: ${theme.spacing(4)};
    margin-bottom: ${theme.spacing(4)};
  }
`;

export const FormTitle = styled.h2`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.Vision};
  font-weight: bold;
  margin-bottom: ${theme.spacing(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.lg};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.md};
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: ${theme.spacing(2.5)};
`;

export const FormInput = styled.input`
  width: 95%;
  padding: ${theme.spacing(1.5)};
  font-size: ${theme.fontSizes.lg};
  border: 1px solid ${theme.colors.info};
  border-radius: ${theme.spacing(1)};
  outline: none;

  &:focus {
    border-color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.md};
    padding: ${theme.spacing(1.2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.sm};
    padding: ${theme.spacing(1)};
  }
`;

export const FormTextarea = styled.textarea`
  width: 95%;
  padding: ${theme.spacing(2)};
  font-size: ${theme.fontSizes.lg};
  border: 1px solid ${theme.colors.info};
  border-radius: ${theme.spacing(1)};
  outline: none;
  resize: vertical;

  &:focus {
    border-color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.md};
    padding: ${theme.spacing(1.5)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.sm};
    padding: ${theme.spacing(1.2)};
  }
`;

export const FormButton = styled.button`
  width: 100%;
  padding: ${theme.spacing(1)};
  background-color: ${theme.colors.Vision};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.spacing(1)};
  font-size: ${theme.fontSizes.lg};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.primary};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.md};
    padding: ${theme.spacing(1.2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.sm};
    padding: ${theme.spacing(1)};
  }
`;

export const ErrorMessage = styled.span`
  color: ${theme.colors.error};
  font-size: ${theme.fontSizes.md};
  margin-top: ${theme.spacing(1)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.sm};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.xs};
  }
`;
