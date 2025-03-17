import styled from 'styled-components';
import theme from '../../theme/Theme';

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.Banner};
  padding: ${theme.spacing(6)} ${theme.spacing(30)};
  min-height: 500px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column-reverse; /* Image comes below on mobile */
    padding: ${theme.spacing(4)} ${theme.spacing(6)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing(5)} ${theme.spacing(3)};
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
      align-items: left;
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
  width: 450px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 400px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const BannerContent = styled.div`
  max-width: 500px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

export const BannerHeading = styled.h1`
  font-size: 48px;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 36px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 28px;
  }
`;

export const BannerSubheading = styled.h2`
  font-size: 32px;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 28px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`;

export const ComingSoonText = styled.p`
  font-size: 24px;
  font-family: ${theme.fonts.body};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export const StoreLinksContainer = styled.div`
  display: flex;
  gap: ${theme.spacing(3)};
  justify-content: flex-start;
  margin-top: ${theme.spacing(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    // gap: ${theme.spacing(2)};
    align-items: left;
    
  }
`;

export const StoreLink = styled.a`
  display: inline-block;
`;

export const StoreImage = styled.img`
  width: 140px;
  height: auto;
  border-radius: 4px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 120px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100px;
  }
`;
