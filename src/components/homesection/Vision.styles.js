import styled from 'styled-components';
import theme from '../../theme/Theme';

export const VisionContainer = styled.div`
  padding: ${theme.spacing(4)};
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(3)};
    max-width: 90%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(2)};
    max-width: 100%;
  }
`;

export const VisionHeading = styled.h1`
  font-size: ${theme.fontSizes.xxl};
  color: ${theme.colors.Vision};
  margin-bottom: ${theme.spacing(2)};
  font-family: ${theme.fonts.heading};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.xl};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 35px;
  }
`;

export const MissionHeading = styled.h2`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.Vision};
  margin-top: ${theme.spacing(3)};
  margin-bottom: ${theme.spacing(2)};
  font-family: ${theme.fonts.heading};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.lg};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 35px;
  }
`;

export const VisionText = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${theme.spacing(2)};
  font-family: ${theme.fonts.body};
  text-align: justify;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.md};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.sm};
  }
`;

export const MissionText = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${theme.spacing(2)};
  font-family: ${theme.fonts.body};
  text-align: justify;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.md};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.sm};
  }
`;