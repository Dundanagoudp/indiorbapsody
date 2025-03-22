import styled from 'styled-components';
import theme from '../../theme/Theme';

// Same container styling snippet you provided
export const BlogContainer = styled.div`
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

export const BlogTitle = styled.h2`
  font-size: ${theme.fontSizes.xl};
  margin-bottom: ${theme.spacing(4)};
  color: ${theme.colors.black};
`;

export const BlogCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BlogCard = styled.div`
  width: 30%;
  background-color: ${theme.colors.white};
  border-radius: ${theme.spacing(1)};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border: 1px solid ${theme.colors.border};
  text-align: left;
  padding: ${theme.spacing(2)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 80%;
    margin-bottom: ${theme.spacing(3)};
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${theme.spacing(1)};
`;

export const CardTitle = styled.h3`
  font-size: 1.1rem;
  margin-top: ${theme.spacing(2)};
  color: ${theme.colors.black};
`;

export const CardDate = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.warning};
  margin-top: ${theme.spacing(1)};
`;

export const CardReadMore = styled.a`
  display: inline-block;
  margin-top: ${theme.spacing(2)};
  color: ${theme.colors.primary};
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
