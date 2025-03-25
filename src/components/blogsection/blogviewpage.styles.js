import styled from 'styled-components';
import theme from '../../theme/Theme';

export const BlogViewContainer = styled.div`
  max-width: ${theme.breakpoints.desktop};
  margin: 0 auto;
  margin-top: ${theme.spacing(8)};
  margin-bottom: ${theme.spacing(8)};
  padding: ${theme.spacing(4)};
  background-color: ${theme.colors.white};
  border-radius: ${theme.spacing(1)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(3)};
    margin-top: ${theme.spacing(6)};
    margin-bottom: ${theme.spacing(6)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(2)};
    margin-top: ${theme.spacing(4)};
    margin-bottom: ${theme.spacing(4)};
    border-radius: 0;
  }

  @media (max-width: 480px) {
    padding: ${theme.spacing(1.5)};
    margin-top: ${theme.spacing(3)};
    margin-bottom: ${theme.spacing(3)};
  }
`;

export const BlogBanner = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: ${theme.spacing(1)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-height: 400px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-height: 300px;
    border-radius: 0;
  }

  @media (max-width: 480px) {
    max-height: 200px;
  }
`;

export const BlogTitle = styled.h1`
  font-size: ${theme.fontSizes.xxl};
  margin-top: ${theme.spacing(4)};
  color: ${theme.colors.black};
  text-align: left;
  line-height: 1.3;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.xl};
    margin-top: ${theme.spacing(3)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.lg};
    margin-top: ${theme.spacing(2)};
  }

  @media (max-width: 480px) {
    font-size: ${theme.fontSizes.md};
  }
`;

export const BlogDate = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.black};
  margin-top: ${theme.spacing(1)};
  text-align: left;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.xs};
  }
`;

export const BlogSubtitle = styled.h2`
  font-size: ${theme.fontSizes.lg};
  margin-top: ${theme.spacing(3)};
  color: ${theme.colors.textPrimary};
  text-align: left;
  line-height: 1.4;
  font-weight: 500;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.md};
    margin-top: ${theme.spacing(2)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.sm};
  }
`;

export const BlogContent = styled.div`
  margin-top: ${theme.spacing(3)};
  line-height: 1.6;
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.md};
  text-align: justify;

  p {
    margin-bottom: ${theme.spacing(3)};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.sm};
    line-height: 1.5;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.xs};
    line-height: 1.4;
    
    p {
      margin-bottom: ${theme.spacing(2)};
    }
  }
`;