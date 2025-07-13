// src/components/Terminal.js
import React from 'react';
import styled from 'styled-components';

const TerminalWrapper = styled.div`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 8px;
  overflow: hidden;
  font-family: ${props => props.theme.fonts.mono};
  font-size: 0.9rem;
`;

const TerminalHeader = styled.div`
  background: ${props => props.theme.colors.primary}22;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TerminalButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const TerminalTitle = styled.span`
  color: ${props => props.theme.colors.text};
  margin-left: 1rem;
`;

const TerminalBody = styled.div`
  padding: 1rem;
  color: ${props => props.theme.colors.primary};
  line-height: 1.6;
`;

const TerminalLine = styled.div`
  margin-bottom: 0.5rem;
  
  &:first-child {
    color: ${props => props.theme.colors.accent};
  }
`;

function Terminal({ title = "terminal", lines = [] }) {
  return (
    <TerminalWrapper>
      <TerminalHeader>
        <TerminalButton color="#ff5f56" />
        <TerminalButton color="#ffbd2e" />
        <TerminalButton color="#27ca3f" />
        <TerminalTitle>{title}</TerminalTitle>
      </TerminalHeader>
      <TerminalBody>
        {lines.map((line, index) => (
          <TerminalLine key={index}>
            {line}
          </TerminalLine>
        ))}
      </TerminalBody>
    </TerminalWrapper>
  );
}

export default Terminal;

