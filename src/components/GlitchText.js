// src/components/GlitchText.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const glitch = keyframes`
  0% {
    text-shadow: 0.05em 0 0 #00ffff, -0.03em -0.04em 0 #ff00ff,
                 0.025em 0.04em 0 #ffff00;
  }
  15% {
    text-shadow: 0.05em 0 0 #00ffff, -0.03em -0.04em 0 #ff00ff,
                 0.025em 0.04em 0 #ffff00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #00ffff, 0.025em 0.035em 0 #ff00ff,
                 -0.05em -0.05em 0 #ffff00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00ffff, 0.025em 0.035em 0 #ff00ff,
                 -0.05em -0.05em 0 #ffff00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #00ffff, 0.03em 0 0 #ff00ff,
                 0 -0.04em 0 #ffff00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #00ffff, 0.03em 0 0 #ff00ff,
                 0 -0.04em 0 #ffff00;
  }
  100% {
    text-shadow: -0.05em 0 0 #00ffff, -0.025em -0.04em 0 #ff00ff,
                 -0.04em -0.025em 0 #ffff00;
  }
`;

const GlitchWrapper = styled.span`
  position: relative;
  display: inline-block;
  animation: ${glitch} 1s linear infinite;
  
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::before {
    animation: ${glitch} 1s linear infinite;
    color: #ff00ff;
    z-index: -1;
  }

  &::after {
    animation: ${glitch} 1s linear infinite;
    color: #00ffff;
    z-index: -2;
  }
`;

function GlitchText({ text, ...props }) {
  return (
    <GlitchWrapper data-text={text} {...props}>
      {text}
    </GlitchWrapper>
  );
}

export default GlitchText;

