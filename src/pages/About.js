// src/pages/About.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SkillBar from "../components/SkillBar";
import Terminal from "../components/Terminal";

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled(motion.section)`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100px;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.colors.primary},
      transparent
    );
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.primary}33;
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 10px 30px ${(props) => props.theme.colors.primary}22;
    transform: translateY(-5px);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const BioText = styled.p`
  line-height: 1.8;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: "Bash", level: 60 },
    { name: "Linux", level: 80 },
    { name: "Python", level: 55 },
    { name: "Ansible", level: 30},
    { name: "Gitlab CI/CD", level: 50},
    { name: "Git", level: 60},
    { name: "Docker", level: 50},
    { name: "Administration", level: 60},
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <AboutContainer ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Section variants={itemVariants}>
          <SectionTitle>$ cat photo.jpg</SectionTitle>
          <Card variants={itemVariants} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 320 }}>
            <img
              src={process.env.PUBLIC_URL + '/photo.jpg'}
              alt="Моё фото"
              style={{
                maxWidth: '220px',
                width: '100%',
                borderRadius: '8px',
                border: '2px solid #00ff00',
                boxShadow: '0 0 30px #00ff0022',
                background: '#111',
                objectFit: 'cover',
              }}
            />
          </Card>
        </Section>
        <Section variants={itemVariants}>
          <SectionTitle>$ cat bio.txt</SectionTitle>
          <Grid>
            <Card variants={itemVariants}>
              <BioText>
                Приветствую, меня зовут Иванов Никита! Я DevSecOps специалист,
                занимаюсь внедрением безопасности в компании, от этапов моделирования до внедрения и поддержки.
              </BioText>
              {/* <BioText>
                Моя страсть - исследование уязвимостей, создание защищенных
                веб-приложений и разработка инструментов для пентестинга. Я
                верю, что знание того, как ломать системы, делает меня лучшим в
                их защите.
              </BioText> */}
              {/* <BioText>
                В свободное время веду блог о безопасности, участвую в
                CTF-соревнованиях и делюсь знаниями с сообществом информационной
                безопасности.
              </BioText> */}
            </Card>

            <Card variants={itemVariants}>
              <Terminal
                title="system_info.sh"
                lines={[
                  "#!/bin/bash",
                  'echo "=== SYSTEM INFO ==="',
                  "whoami: bwl-andromeda",
                  "location: ???",
                  "status: ERROR",
                  "uptime: NOT FOUND",
                  "skills: you don't have permissions",
                  "mission: ERROR",
                  'echo "=== END ==="',
                ]}
              />
            </Card>
          </Grid>
        </Section>

        

        <Section variants={itemVariants}>
          <SectionTitle>$ ls skills/</SectionTitle>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.1}
              />
            ))}
          </SkillsGrid>
        </Section>


        <Section variants={itemVariants}>
          <SectionTitle>$ cat contact.txt</SectionTitle>
          <Card variants={itemVariants}>
            <ContactInfo>
              <ContactItem>
                <span>📧</span>
                <span>bwl-andromeda@yandex.ru</span>
              </ContactItem>
              <ContactItem>
                <span>🐙</span>
                <span>
                  <a
                    href="https://github.com/bwl-andromeda"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "underline" }}
                  >
                    github.com/bwl-andromeda
                  </a>
                </span>
              </ContactItem>
              <ContactItem>
                <span>🌐</span>
                <span>
                  <a
                    href="https://t.me/bwl_andromeda"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "underline" }}
                  >
                    Telegram: t.me/bwl_andromeda
                  </a>
                </span>
              </ContactItem>
            </ContactInfo>
          </Card>
        </Section>
      </motion.div>
    </AboutContainer>
  );
}

export default About;
