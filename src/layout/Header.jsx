import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeaderContainer,
  LogoContainer,
  LogoImage,
  Nav,
  NavItem,
  MenuIcon,
  MobileMenuContainer,
  MobileMenu,
  Overlay,
} from "./Header.styles";
import Logo from "../assets/logo.jpg";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Link to="/" onClick={() => setActiveTab("Home")}>
            <LogoImage src={Logo} alt="Logo" />
          </Link>
        </LogoContainer>

        <Nav>
          <NavItem active={activeTab === "Home"}>
            <Link to="/" onClick={() => setActiveTab("Home")} style={{ textDecoration: "none" }}>Home</Link>
          </NavItem>
          <NavItem active={activeTab === "About us"}>
            <Link to="/about" onClick={() => setActiveTab("About us")} style={{ textDecoration: "none" }}>About us</Link>
          </NavItem>
        </Nav>

        <MenuIcon onClick={toggleMenu}>
          <FiMenu size={28} />
        </MenuIcon>
      </HeaderContainer>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <Overlay
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
            />
            <MobileMenuContainer
              as={motion.div}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
              <IoClose size={32} onClick={toggleMenu} />
              <MobileMenu>
                <NavItem active={activeTab === "Home"}>
                  <Link to="/" onClick={() => { setActiveTab("Home"); toggleMenu(); }} style={{ textDecoration: "none" }}>Home</Link>
                </NavItem>
                <NavItem active={activeTab === "About us"}>
                  <Link to="/about" onClick={() => { setActiveTab("About us"); toggleMenu(); }} style={{ textDecoration: "none" }}>About us</Link>
                </NavItem>
              </MobileMenu>
            </MobileMenuContainer>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
