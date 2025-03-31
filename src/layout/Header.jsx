import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  ButtonContainer,
  HeaderButton,
} from "./Header.styles";
import Logo from "../assets/logo2.jpeg";
import Loader from "../components/loader/ApiLoders";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const path = location.pathname;
    
    if (path === "/") {
      setActiveTab("Home");
    } else if (path.startsWith("/about") || path.startsWith("/policies") || path.startsWith("/delete-user")) {
      setActiveTab("About us");
    } else if (path.startsWith("/blog")) {
      setActiveTab("Blogs");
    }
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = (url) => {
    window.location.href = url;
  };

  if (loading) {
    return <Loader />;
  }

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
            <Link to="/" onClick={() => setActiveTab("Home")} style={{ textDecoration: "none" }}>
              Home
            </Link>
          </NavItem>
          <NavItem active={activeTab === "About us"}>
            <Link to="/about" onClick={() => setActiveTab("About us")} style={{ textDecoration: "none" }}>
              About us
            </Link>
          </NavItem>
          <NavItem active={activeTab === "Blogs"}>
            <Link to="/blog" onClick={() => setActiveTab("Blogs")} style={{ textDecoration: "none" }}>
              Blogs
            </Link>
          </NavItem>
        </Nav>

        {!isMobile && (
          <ButtonContainer>
            <HeaderButton onClick={() => handleNavigation("https://salesdashboard.indigorhapsody.com/")}>
              Login
            </HeaderButton>
            <HeaderButton onClick={() => handleNavigation("https://salesdashboard.indigorhapsody.com/signup")}>
              Sign Up
            </HeaderButton>
          </ButtonContainer>
        )}

        <MenuIcon onClick={toggleMenu}>
          <FiMenu size={28} />
        </MenuIcon>
      </HeaderContainer>

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
                  <Link
                    to="/"
                    onClick={() => {
                      setActiveTab("Home");
                      toggleMenu();
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </NavItem>
                <NavItem active={activeTab === "About us"}>
                  <Link
                    to="/about"
                    onClick={() => {
                      setActiveTab("About us");
                      toggleMenu();
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    About us
                  </Link>
                </NavItem>
                <NavItem active={activeTab === "Blogs"}>
                  <Link
                    to="/blog"
                    onClick={() => {
                      setActiveTab("Blogs");
                      toggleMenu();
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    Blogs
                  </Link>
                </NavItem>
              </MobileMenu>
              {isMobile && (
                <ButtonContainer style={{ marginTop: "30px" }}>
                  <HeaderButton onClick={() => handleNavigation("https://salesdashboard.indigorhapsody.com/")}>
                    Login
                  </HeaderButton>
                  <HeaderButton onClick={() => handleNavigation("https://salesdashboard.indigorhapsody.com/signup")}>
                    Sign Up
                  </HeaderButton>
                </ButtonContainer>
              )}
            </MobileMenuContainer>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;