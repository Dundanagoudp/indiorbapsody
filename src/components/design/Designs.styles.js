import styled from 'styled-components';
import theme from '../../theme/Theme';

export const DesignContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing(4)};
  background-color: ${theme.colors.designbg};
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

  @media (max-width: ${theme.breakpoints.desktop}) {
    padding: ${theme.spacing(3)};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    padding: ${theme.spacing(2)};
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  max-width: 50%;
  align-items: center;
  padding: ${theme.spacing(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
    padding: ${theme.spacing(2)};
  }
`;

export const RightSection = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing(3)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
    padding: ${theme.spacing(2)};
  }
`;

export const DesignHeading = styled.h1`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.white};
  font-weight: 400;
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacing(2)};
  text-align: center; /* ✅ Center align the text */

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.lg};
  }
`;

export const StoreLinksContainer = styled.div`
  display: flex;
  gap: ${theme.spacing(2)};
  justify-content: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing(1)};
  }
`;

export const StoreLink = styled.a`
  display: inline-block;
  siz
`;

export const StoreImage = styled.img`
  width: ${theme.spacing(18)};
  height: auto;
  gap: ${theme.spacing(5)};
  border-radius: ${theme.spacing(0.5)};
  margin-top: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: ${theme.spacing(12)};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: ${theme.spacing(10)};
  }
`;

export const DesignImage = styled.img`
  max-width: 90%;
  height: auto;
  border-radius: ${theme.spacing(2)};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 80%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 70%;
  }  
`;
