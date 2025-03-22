import styled from 'styled-components';
import theme from '../../theme/Theme';

/**
 * Container for the entire blog view page
 */
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
  }
`;

/**
 * Large banner image at the top
 */
export const BlogBanner = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${theme.spacing(1)};
`;

/**
 * Main blog title
 */
export const BlogTitle = styled.h1`
  font-size: ${theme.fontSizes.xxl};
  margin-top: ${theme.spacing(4)};
  color: ${theme.colors.black};
  text-align: left;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.xl};
  }
`;

/**
 * Publication date
 */
export const BlogDate = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.warning};
  margin-top: ${theme.spacing(1)};
  text-align: left;
`;

/**
 * Optional subtitle or short descriptor under the main title
 */
export const BlogSubtitle = styled.h2`
  font-size: ${theme.fontSizes.lg};
  margin-top: ${theme.spacing(3)};
  color: ${theme.colors.black};
  text-align: left;
`;

/**
 * Main content container
 */
export const BlogContent = styled.div`
  margin-top: ${theme.spacing(3)};
  line-height: 1.6;
  color: ${theme.colors.text};
  font-size: 1rem;
  text-align: left;

  p {
    margin-bottom: ${theme.spacing(3)};
  }
`;
