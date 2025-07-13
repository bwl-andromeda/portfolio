// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import MatrixBackground from './components/MatrixBackground';

const theme = {
  colors: {
    primary: '#00ff00',
    secondary: '#00ffff',
    danger: '#ff0000',
    background: '#0a0a0a',
    surface: '#1a1a1a',
    text: '#00ff00',
    textSecondary: '#888888',
    accent: '#00ffff'
  },
  fonts: {
    mono: '"Fira Code", "Courier New", monospace',
    system: 'system-ui, sans-serif'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px'
  }
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.mono};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
  }

  ::selection {
    background: ${props => props.theme.colors.primary}33;
    color: ${props => props.theme.colors.primary};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 4px;
  }

  a {
    color: ${props => props.theme.colors.accent};
    text-decoration: none;
    transition: all 0.3s ease;
  }

  a:hover {
    color: ${props => props.theme.colors.primary};
    text-shadow: 0 0 10px ${props => props.theme.colors.primary};
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <MatrixBackground />
          <ContentWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ContentWrapper>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;

