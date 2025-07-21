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
    {
      name: "Bash",
      level: 60,
      details: [
        "Автоматизация рутинных задач и администрирования",
        "Работа с cron и системными планировщиками",
        "Парсинг логов с использованием awk, sed, grep",
        "Разработка Bash-скриптов для CI/CD пайплайнов",
        "Работа с переменными окружения, аргументами CLI",
        "Управление файлами, процессами, правами доступа",
        "Отладка скриптов, обработка ошибок, написание утилит"
      ]
    },
    {
      name: "Linux",
      level: 60,
      details: [
        "Настройка systemd, journalctl, iptables/ufw",
        "Управление пользователями, группами, правами",
        "Диагностика и анализ логов (dmesg, journalctl, /var/log)",
        "Работа с сетевыми утилитами: netstat, ss, ip, ping",
        "Использование пакетных менеджеров (apt, pacman, yum)",
        "Настройка ssh, firewall, резервное копирование"
      ]
    },
    {
      name: "Python",
      level: 55,
      details: [
        "Написание CLI-скриптов и утилит автоматизации",
        "Разработка Telegram-ботов (aiogram, telebot)",
        "Создание микросервисов (Flask, FastAPI)",
        "Работа с файлами, JSON, YAML, API",
        "Тестирование, логирование, venv, ORM (SQLAlchemy)",
        "Работа с очередями, async/await, multithreading"
      ]
    },
    {
      name: "Ansible",
      level: 30,
      details: [
        "Создание и запуск playbook для автоматизации",
        "Автоматическая установка и настройка ПО",
        "Работа с переменными, roles, handlers, facts",
        "Пример: приведение системы в нужное состояние из коробки"
      ]
    },
    {
      name: "GitLab CI/CD",
      level: 50,
      details: [
        "Разработка DevSecOps пайплайнов",
        "Интеграция SAST, DAST, Secrets сканеров",
        "Использование Webhooks, создание GitLab Runners",
        "Разработка пайплайнов с кэшем, артефактами, переменными среды",
        "Автоматизация сборки, тестирования и деплоя"
      ]
    },
    {
      name: "Git",
      level: 60,
      details: [
        "Работа с ветками, конфликтами, rebase, cherry-pick, stash",
        "Настройка и использование pre-commit, commit-msg hook",
        "Управление историей: интерактивный rebase, логгирование",
        "Интеграция с CI/CD, автоматизация проверки кода",
        "Работа с подмодулями, git aliases, сабтреками"
      ]
    },
    {
      name: "Docker",
      level: 50,
      details: [
        "Создание и оптимизация Docker-образов",
        "Написание Dockerfile и docker-compose конфигураций",
        "Работа с сетями, томами, секретами",
        "Деплой микросервисов в контейнерах",
        "Диагностика проблем, healthcheck, подключение к реестрам"
      ]
    },
    {
      name: "Administration",
      level: 60,
      details: [
        "Администрирование Windows и Linux систем",
        "Настройка сетей, RDP, брандмауэров, служб",
        "Создание пользователей, групп, разграничение прав",
        "Установка и настройка ПО, резервное копирование (Ovirt)",
        "Настройка VirtualBox, VMWare, локальных серверов"
      ]
    },
    {
      name: "Security Documents",
      level: 60,
      details: [
        "Знание основных стандартов безопасности (ГОСТ Р ИСО/МЭК 27001-2012)",
        "ГИС, ИСПДН",
        "Разработка безопасного программного обеспечения (ГОСТ Р 56939-2024)",
        "Разработка внутренних регламентов безопасности"
      ]
    }
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
                Люблю операционную систему Linux, и её возможности, и хочу развиваться в этом направлении.
                В свободное время люблю кодить или гулять и другой вид деятельности.
              </BioText>
              <BioText>
                C 2022 года по 2025 год проходил курсы на платформе "Netology" по специальности "Fullstack-python разработчик"
              </BioText>
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
                details={skill.details}
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
