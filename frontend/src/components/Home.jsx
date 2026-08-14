import React from 'react';
import './Home.css';
import {
  HeroIllustration,
  AboutIllustration,
  ExperienceIllustration,
  ContactIllustration,
} from './Illustrations';

const skills = [
  { name: 'React', color: '#61DAFB' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'Design', color: '#A1A1AA' },
  { name: 'Bootstrap', color: '#7952B3' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Git', color: '#F05032' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'Figma', color: '#F24E1E' },
];

const experiences = [
  {
    title: 'Auxiliar de Desenvolvimento JR',
    items: [
      <>Desenvolvimento de interfaces <span className="highlight">frontend</span> utilizando <span className="highlight">Vue.js</span> e tecnologias modernas.</>,
      <>Manutenção e evolução de sistemas web, garantindo performance e usabilidade.</>,
      <>Colaboração com equipe via <span className="highlight">GitHub</span> e metodologias ágeis.</>,
    ],
  },
  {
    title: 'Estagiária de TI',
    items: [
      <>Suporte técnico e manutenção de <span className="highlight">máquinas</span> e infraestrutura.</>,
      <>Configuração e monitoramento de <span className="highlight">redes</span> corporativas.</>,
      <>Documentação de processos e procedimentos técnicos.</>,
    ],
  },
];

const education = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'IFSP',
    period: 'Nov 2021 - Dez 2024',
  },
  {
    title: 'Técnico em Desenvolvimento de Sistemas',
    institution: 'ETEC',
    period: 'Jan 2019 - Dez 2020',
  },
  {
    title: 'Fundamentos Front-End',
    institution: 'Alura',
    link: true,
  },
  {
    title: 'Desenvolvimento Web Completo',
    institution: 'Udemy',
    link: true,
  },
];

const contacts = [
  {
    label: 'Email',
    value: 'anacarolinaavenancio@gmail.com',
    href: 'mailto:anacarolinaavenancio@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/anacarolinadealmeidavenancio/',
    href: 'https://www.linkedin.com/in/anacarolinadealmeidavenancio/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/anaalmeida-v',
    href: 'https://github.com/anaalmeida-v',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export const Home = () => {
  return (
    <main className="portfolio">
      {/* Hero */}
      <section className="section hero-section" id="home">
        <div className="section-inner hero-grid">
          <div className="hero-content">
            <span className="section-tag">// Olá, eu sou a</span>
            <h1 className="hero-title">
              Ana Carolina <span className="text-purple">Venâncio</span>
            </h1>
            <p className="hero-description">
              Criando interfaces modernas, responsivas e intuitivas com as melhores
              tecnologias do mercado. Front-end Developer.
            </p>
            <div className="hero-buttons">
              <a href="https://github.com/anacarolina" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                Github
              </a>
              <a href="#" className="btn btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                Currículo
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">projetos</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">repos</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-number">+2</span>
                <span className="stat-label">anos exp</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="section about-section" id="sobre">
        <div className="section-inner about-grid">
          <div className="about-image">
            <AboutIllustration />
          </div>
          <div className="about-content">
            <span className="section-tag">// Sobre mim</span>
            <h2 className="section-title">
              Criando experiências <span className="text-purple">digitais que importam</span>
            </h2>
            <div className="about-text">
              <p>
                Sou <span className="highlight">Front-end Developer</span> apaixonada por
                transformar ideias em interfaces funcionais e visualmente atraentes.
                Com experiência em <span className="highlight">React</span> e{' '}
                <span className="highlight">Next.js</span>, busco sempre entregar
                soluções que combinem performance, acessibilidade e design moderno.
              </p>
              <p>
                Minha jornada na tecnologia começou com curiosidade e evoluiu para uma
                paixão por criar produtos digitais que fazem diferença na vida das
                pessoas. Acredito que código limpo e boa experiência do usuário andam
                juntos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section skills-section" id="skills">
        <div className="section-inner skills-inner">
          <span className="section-tag">// Minhas skills</span>
          <h2 className="section-title">Stack & Ferramentas</h2>
          <p className="section-subtitle">As tecnologias que mais utilizo no dia a dia.</p>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-tag"
                style={{ borderColor: skill.color }}
              >
                <span className="skill-dot" style={{ background: skill.color }} />
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiência */}
      <section className="section experience-section" id="experiencia">
        <div className="section-inner experience-grid">
          <div className="experience-content">
            <span className="section-tag">// Minha trajetória</span>
            <h2 className="section-title">
              Experiência <span className="text-purple">Profissional</span>
            </h2>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={exp.title} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot" />
                    {index < experiences.length - 1 && <div className="timeline-line" />}
                  </div>
                  <div className="timeline-body">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <ul className="timeline-list">
                      {exp.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="experience-image">
            <ExperienceIllustration />
          </div>
        </div>
      </section>

      {/* Formação */}
      <section className="section education-section" id="formacao">
        <div className="section-inner education-inner">
          <span className="section-tag">// Formação</span>
          <h2 className="section-title">Formação & Cursos</h2>
          <div className="education-grid">
            {education.map((item) => (
              <div key={item.title} className="education-card">
                {item.link && (
                  <a href="#" className="education-link">ver info</a>
                )}
                <h3 className="education-title">{item.title}</h3>
                <p className="education-institution">{item.institution}</p>
                {item.period && (
                  <p className="education-period">{item.period}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="section contact-section" id="contato">
        <div className="section-inner contact-grid">
          <div className="contact-content">
            <span className="section-tag">// Contato</span>
            <h2 className="section-title">Vamos conversar?</h2>
            <p className="contact-description">
              Se você tem interesse em meu trabalho ou tem alguma dúvida,
              sinta-se à vontade para me contatar.
            </p>
            <div className="contact-links">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-item"
                >
                  <span className="contact-icon">{contact.icon}</span>
                  <div className="contact-info">
                    <span className="contact-label">{contact.label}</span>
                    <span className="contact-value">{contact.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-image">
            <ContactIllustration />
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>ana almeida - dev front-end / web developer | 2026</p>
      </footer>
    </main>
  );
};
