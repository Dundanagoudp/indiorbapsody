import styled from 'styled-components';
import theme from '../../theme/Theme';

export const FormContainer = styled.div`
  max-width: 37.5em; 
  margin: 5em auto;
  padding: 1.5em;
  background: ${theme.colors.background};
  border-radius: 0.5em;
  text-align: center;

  @media (max-width: ${theme.breakpoints.desktop}) {
    max-width: 30em;
    padding: 1.2em;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 90%;
    margin: 4em auto;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 95%;
    margin: 3em auto;
    padding: 1em;
  }
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 1rem;
  color: ${theme.colors.text};
  margin-top: 0.8em;

  span {
    color: ${theme.colors.error};
  }
`;

export const Input = styled.input`
  width: 95%;
  padding: 0.75em;
  margin-top: 0.3em;
  border: 0.07em solid ${theme.colors.margin};
  border-radius: 0.3em;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75em;
  margin-top: 1.2em;
  background: ${theme.colors.success};
  color: ${theme.colors.white};
  border: none;
  border-radius: 0.3em;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${theme.colors.primary};
  }
`;

export const ErrorText = styled.p`
  color: ${theme.colors.error};
  font-size: 0.9rem;
  text-align: left;
  margin-top: 0.5em;
`;
