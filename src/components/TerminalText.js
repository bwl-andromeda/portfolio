// src/components/TerminalText.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TerminalContainer = styled.div`
  font-family: ${props => props.theme.fonts.mono};
  color: ${props => props.theme.colors.primary};
  line-height: 1.6;
`;

const TerminalLine = styled.div`
  margin-bottom: 0.5rem;
  
  &::before {
    content: '$ ';
    color: ${props => props.theme.colors.accent};
  }
`;

const Cursor = styled.span`
  background: ${props => props.theme.colors.primary};
  animation: blink 1s infinite;
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

function TerminalText({ lines, speed = 50 }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    
    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, lines, speed]);

  return (
    <TerminalContainer>
      {displayedLines.map((line, index) => (
        <TerminalLine key={index}>
          {line}
          {index === currentLineIndex && currentCharIndex <= lines[currentLineIndex]?.length && (
            <Cursor>|</Cursor>
          )}
        </TerminalLine>
      ))}
    </TerminalContainer>
  );
}

export default TerminalText;

