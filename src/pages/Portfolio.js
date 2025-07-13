// src/pages/Portfolio.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PortfolioContainer = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 3rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.primary}33;
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 10px 30px ${props => props.theme.colors.primary}22;
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${props => props.theme.colors.primary}22;
  color: ${props => props.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
  border: 1px solid ${props => props.theme.colors.primary}44;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.accent};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Secure Chat App",
      description: "Зашифрованный мессенджер с end-to-end шифрованием, построенный на React и Node.js с использованием Socket.IO для real-time коммуникации.",
      tech: ["React", "Node.js", "Socket.IO", "Crypto", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 2,
      title: "Vulnerability Scanner",
      description: "Инструмент для автоматического сканирования веб-приложений на предмет уязвимостей. Включает проверку XSS, SQL injection и других распространенных уязвимостей.",
      tech: ["Python", "BeautifulSoup", "Requests", "SQLite"],
      github: "https://github.com",
      demo: null
    },
    {
      id: 3,
      title: "Blockchain Wallet",
      description: "Кошелек для криптовалют с поддержкой множественных блокчейнов. Включает функции создания кошельков, отправки транзакций и просмотра баланса.",
      tech: ["React", "Web3.js", "Ethereum", "MetaMask"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <PortfolioContainer>
      <Title>$ ls projects/</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.tech.map(tech => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </TechStack>
            <ProjectLinks>
              <ProjectLink href={project.github} target="_blank">
                <FaGithub /> GitHub
              </ProjectLink>
              {project.demo && (
                <ProjectLink href={project.demo} target="_blank">
                  <FaExternalLinkAlt /> Demo
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PortfolioContainer>
  );
}

export default Portfolio;

