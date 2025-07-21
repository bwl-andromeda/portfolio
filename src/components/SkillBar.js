// src/components/SkillBar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
`;

const SkillBarContainer = styled.div`
  height: 8px;
  background: ${props => props.theme.colors.surface};
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.primary}33;
`;

const SkillProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, 
    ${props => props.theme.colors.primary}, 
    ${props => props.theme.colors.accent}
  );
  border-radius: 4px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255,255,255,0.3), 
      transparent
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

function SkillBar({ name, level, details, delay = 0 }) {
  const [open, setOpen] = useState(false);

  return (
    <SkillContainer>
      <SkillName
        style={details ? { cursor: 'pointer' } : {}}
        onClick={details ? () => setOpen((prev) => !prev) : undefined}
      >
        <span>{name}</span>
        <span>{level}% {details && (
          <span style={{ marginLeft: 8, fontSize: '1.1em' }}>
            {open ? '▲' : '▼'}
          </span>
        )}</span>
      </SkillName>
      <SkillBarContainer>
        <SkillProgress
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
      </SkillBarContainer>
      {details && open && (
        <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', color: '#aaa', fontSize: '0.97em' }}>
          {details.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </SkillContainer>
  );
}

export default SkillBar;

