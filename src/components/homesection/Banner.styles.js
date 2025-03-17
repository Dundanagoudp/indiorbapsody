import styled from 'styled-components';
import theme from '../../theme/Theme';

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.Banner};
  padding: ${theme.spacing(6)} ${theme.spacing(30)};
  min-height: 30vh;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    padding: ${theme.spacing(4)} ${theme.spacing(6)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(3)};
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-right: ${theme.spacing(6)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
    align-items: center;
    padding-right: 0;
    text-align: center;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    text-align: left;
    align-items: flex-start;
    margin-top: ${theme.spacing(4)};
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const BannerImage = styled.img`
  max-width: 100%;
  height: auto;
  width: 28vw;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 25vw;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const BannerContent = styled.div`
  max-width: 30vw;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

export const BannerHeading = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-family: ${theme.fonts.heading};
  font-weight: 400;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(2)};
`;

export const BannerSubheading = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-family: ${theme.fonts.heading};
  font-weight: 400;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(2)};
`;

export const ComingSoonText = styled.p`
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-family: ${theme.fonts.body};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(2)};
`;

export const StoreLinksContainer = styled.div`
  display: flex;
  gap: ${theme.spacing(2)};
  justify-content: flex-start;
  margin-top: ${theme.spacing(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    align-items: flex-start;
  }
`;

export const StoreLink = styled.a`
  display: inline-block;
`;

export const StoreImage = styled.img`
  width: 10vw;
  height: auto;
  border-radius: 0.25em;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 30vw;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 28vw;
  }
`;
