import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import logoImg from "../assets/logo.jpeg"; // <-- Import your logo image

const Nav = styled.nav`
  background: ${({ theme }) => theme.background};
  padding: 0.7rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Logo = styled(Link)`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Space between logo image and text */
`;

const LogoImg = styled.img`
  width: 40px; /* Adjust size as needed */
  height: 40px;
  object-fit: contain;
  border-radius: 20px;
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    right: ${({ open }) => (open ? "0" : "-100%")};
    width: 60vw;
    height: 100vh;
    background: ${({ theme }) => theme.background};
    flex-direction: column;
    padding: 2rem 1.5rem;
    gap: 2rem;
    transition: right 0.3s ease;
    box-shadow: -2px 0 10px rgba(0,0,0,0.15);
    z-index: 99;
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ThemeToggle = styled.button`
  background: ${({ theme }) => theme.primary};
  border: none;
  color: #fff;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primaryHover || "#4b5cff"};
  }
`;

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <Nav>
      <Logo to="/" onClick={closeMenu}>
        <LogoImg src={logoImg} alt="Navbodh Tower Logo" />
        Navbodh Tower
      </Logo>

      <Hamburger onClick={handleToggle} aria-label="Toggle menu">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>

      <NavLinks open={menuOpen}>
        <NavItem><NavLink to="/" onClick={closeMenu}>Home</NavLink></NavItem>
        <NavItem><NavLink to="/about" onClick={closeMenu}>About</NavLink></NavItem>
        <NavItem><NavLink to="/projects" onClick={closeMenu}>Projects & Clients</NavLink></NavItem>
        <NavItem><NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink></NavItem>
        <NavItem><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></NavItem>
      </NavLinks>

      <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "light" ? <FaSun /> : <FaMoon />}
      </ThemeToggle>
    </Nav>
  );
};

export default Navbar;
