import styled from "styled-components";
import theme from "../../theme/Theme";

export const PoliciesContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: ${theme.spacing(5)} ${theme.spacing(2)};
  text-align: left;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(4)} ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(3)} ${theme.spacing(1)};
  }
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes.xxl};
  font-weight: bold;
  color: ${theme.colors.text};
  text-align: left;
  margin-bottom: ${theme.spacing(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.xl};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 38px;
  }
`;

export const Section = styled.div`
  margin-bottom: ${theme.spacing(3)};
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes.lg};
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(1)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.md};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.sm};
  }
`;

export const Paragraph = styled.p`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.text};
  line-height: 1.6;
  text-align: justify;

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.sm};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.xs};
  }
`;
