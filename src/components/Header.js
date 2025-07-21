// src/components/Header.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaTerminal, FaBars, FaTimes } from "react-icons/fa";

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${(props) => props.theme.colors.background}cc;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${(props) => props.theme.colors.primary}33;
  padding: 1rem 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    text-shadow: 0 0 20px ${(props) => props.theme.colors.primary};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: ${(props) => props.theme.colors.background}dd;
    backdrop-filter: blur(10px);
    padding: 2rem;
    transform: translateY(${(props) => (props.isOpen ? "0" : "-100%")});
    transition: transform 0.3s ease;
  }
`;

const InternalNavLink = styled(Link)`
  position: relative;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 10px ${(props) => props.theme.colors.primary}33;
  }

  ${(props) =>
    props.$active &&
    `
    border-color: ${props.theme.colors.primary};
    background: ${props.theme.colors.primary}11;
  `}
`;

const ExternalNavLink = styled.a`
  position: relative;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  color: inherit;
  text-decoration: none;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 10px ${(props) => props.theme.colors.primary}33;
  }
`;

const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

const TypingText = styled.span`
  &::after {
    content: "|";
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    51%,
    100% {
      opacity: 0;
    }
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const location = useLocation();
  const targetText = "root@host:~$";

  useEffect(() => {
    let i = 0;
    const typewriter = setInterval(() => {
      if (i < targetText.length) {
        setDisplayText(targetText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typewriter);
      }
    }, 100);

    return () => clearInterval(typewriter);
  }, [targetText]);

  const navItems = [
    { path: "/", label: "home" },
    { path: "/about", label: "about.txt" }
    // { path: "/portfolio", label: "projects/" },
  ];

  const isActive = (itemPath) => {
    if (itemPath === "/") return location.pathname === "/";
    return location.pathname.startsWith(itemPath);
  };

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Nav>
        <Logo to="/">
          <FaTerminal />
          <TypingText>{displayText}</TypingText>
        </Logo>

        <NavLinks isOpen={isOpen}>
          {navItems.map((item) => (
            <li key={item.path}>
              {item.external ? (
                <ExternalNavLink
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </ExternalNavLink>
              ) : (
                <InternalNavLink
                  to={item.path}
                  $active={isActive(item.path)}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </InternalNavLink>
              )}
            </li>
          ))}
        </NavLinks>

        <MobileMenuToggle onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuToggle>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
