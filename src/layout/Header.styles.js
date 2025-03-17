import styled from "styled-components";
import theme from "../theme/Theme";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing(2)} ${theme.spacing(6)};
  background-color: ${theme.colors.background};
  border-bottom: 1px solid ${theme.colors.margin};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing(2)} ${theme.spacing(3)};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: flex-start;
    margin-left: ${theme.spacing(-5)};
  }
`;

export const LogoImage = styled.img`
  width: ${theme.spacing(25)};
  height: ${theme.spacing(8)};
  object-fit: contain;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: ${theme.spacing(20)};
    height: ${theme.spacing(6)};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const HeaderButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Nav = styled.div`
  display: flex;
  gap: ${theme.spacing(4)};

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const NavItem = styled.div`
  font-size: ${theme.spacing(2.5)};
  color: ${theme.colors.text};
  cursor: pointer;
  padding-bottom: ${theme.spacing(0.5)};
  transition: border-bottom 0.3s ease;
  border-bottom: ${({ active }) =>
    active ? `2px solid ${theme.colors.primary}` : "none"};
`;

export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 260px;
  height: 100vh;
  background-color: ${theme.colors.background};
  box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing(4)};
  z-index: 1000;

  & > svg {
    align-self: flex-end;
    cursor: pointer;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(3)};
  margin-top: ${theme.spacing(3)};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
