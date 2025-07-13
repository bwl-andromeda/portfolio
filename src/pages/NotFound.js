// src/pages/NotFound.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Content = styled.div`
  text-align: center;
  max-width: 600px;
`;

const ErrorCode = styled(motion.h1)`
  font-size: 6rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
  text-shadow: 0 0 20px ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 4rem;
  }
`;

const ErrorMessage = styled(motion.h2)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const Terminal = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  padding: 2rem;
  font-family: ${(props) => props.theme.fonts.mono};
  text-align: left;
  margin-bottom: 2rem;
`;

const TerminalLine = styled.div`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.5rem;

  &::before {
    content: "$ ";
    color: ${(props) => props.theme.colors.accent};
  }
`;

const HomeButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-family: ${(props) => props.theme.fonts.mono};

  &:hover {
    background: ${(props) => props.theme.colors.primary}22;
    box-shadow: 0 0 20px ${(props) => props.theme.colors.primary}44;
    transform: translateY(-2px);
  }
`;

function NotFound() {
  return (
    <NotFoundContainer>
      <Content>
        <ErrorCode
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          404
        </ErrorCode>

        <ErrorMessage
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Страница не найдена
        </ErrorMessage>

        <Terminal
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <TerminalLine>ls -la /requested/page</TerminalLine>
          <TerminalLine style={{ color: "#ff0000" }}>
            ls: cannot access '/requested/page': No such file or directory
          </TerminalLine>
          <TerminalLine>echo "Возможно, вы ошиблись в URL?"</TerminalLine>
          <TerminalLine>cd /home</TerminalLine>
        </Terminal>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <HomeButton to="/">Вернуться на главную</HomeButton>
        </motion.div>
      </Content>
    </NotFoundContainer>
  );
}

export default NotFound;
