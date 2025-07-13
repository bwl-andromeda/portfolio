// src/pages/Home.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTerminal } from "react-icons/fa";
import TerminalText from "../components/TerminalText";
import GlitchText from "../components/GlitchText";

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 80px;
`;

const Content = styled.div`
  text-align: center;
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const ActionButton = styled(Link)`
  padding: 1rem 2rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  background: transparent;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${(props) => props.theme.colors.primary}22;
    box-shadow: 0 0 20px ${(props) => props.theme.colors.primary}66;
    transform: translateY(-2px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${(props) => props.theme.colors.primary}44,
      transparent
    );
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  font-size: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    filter: drop-shadow(0 5px 15px ${(props) => props.theme.colors.primary}66);
  }
`;

const TerminalSection = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  padding: 2rem;
  margin: 2rem 0;
  font-family: ${(props) => props.theme.fonts.mono};
`;

function Home() {
  return (
    <HomeContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <GlitchText text="bwl_andromeda" />
        </Title>

        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Проникая в цифровые глубины • Создавая невозможное • Ломая границы
          кода
        </Subtitle>

        <TerminalSection
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <TerminalText
            lines={[
              "> whoami",
              "Full-Stack Developer & Security Researcher",
              "> cat skills.txt",
              "React.js • Node.js • Python • Cybersecurity",
              "> ls projects/",
              "web-apps/ • security-tools/ • open-source/",
              '> echo "Добро пожаловать в мой мир"',
              "Добро пожаловать в мой мир",
            ]}
          />
        </TerminalSection>

        <ButtonGroup
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <ActionButton to="/about">
            <FaTerminal /> Обо мне
          </ActionButton>
          <ActionButton to="/portfolio">Проекты</ActionButton>
        </ButtonGroup>
        <SocialLinks
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <SocialLink href="https://github.com" target="_blank">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com" target="_blank">
            <FaLinkedin />
          </SocialLink>
        </SocialLinks>
      </Content>
    </HomeContainer>
  );
}

export default Home;
