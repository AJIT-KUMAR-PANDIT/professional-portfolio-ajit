'use client'

import { useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, Check, Code2, Copy, Mail, Menu, X } from 'lucide-react'
import { PortfolioAI } from '@/components/portfolio-ai'

const skillGroups = [
  { label: 'Frontend', skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux', 'REST APIs'] },
  { label: 'Backend', skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful API Design'] },
  { label: 'Cloud & Infrastructure', skills: ['AWS · EC2', 'MinIO · Open Source S3', 'Docker', 'Linux', 'Cloudflare', 'Vercel'] },
  { label: 'AI / ML & LLM Integration', skills: ['Deep Learning', 'Neural Networks', 'TensorFlow / PyTorch', 'Computer Vision', 'LLM Integration', 'AI Agents', 'Prompt Engineering'] },
]

const projects = [
  { number: '01', title: 'AI-powered intelligent systems', description: 'Practical AI integrations, LLM-powered workflows, and neural network experiments built around real-world problems.', tags: ['Full Stack', 'AI / ML', 'LLM Integration'] },
  { number: '02', title: 'Full-stack web applications', description: 'Scalable digital products crafted from thoughtful interfaces to clean, reliable architectures.', tags: ['Full Stack', 'Next.js', 'Cloud'] },
  { number: '03', title: 'AI research & experiments', description: 'Computer vision models, deep learning prototypes, and creative engineering exploring the frontier of AI.', tags: ['Deep Learning', 'Python', 'Research'] },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => { await navigator.clipboard.writeText('ajit@nakprc.com'); setCopied(true); setTimeout(() => setCopied(false), 1600) }
  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="site-header">
        <a href="#top" className="brand" onClick={closeMenu} aria-label="Ajit Kumar Pandit home"><span className="brand-mark">A</span><span className="brand-code">&lt;ajitkumarpandit /&gt;</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
        </nav>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-kicker"><span className="status-dot" /> Fresher · Available for opportunities — India</div>
        <p className="eyebrow">Hello, I&apos;m</p>
        <h1>Ajit Kumar<br /><em>Pandit</em></h1>
        <div className="role-line"><span /> Full Stack Developer | AI / ML Engineer</div>
        <p className="hero-copy">Crafting AI-powered solutions and intelligent web applications at the intersection of scalable architecture, LLM integration, and creative engineering.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">View my work <ArrowUpRight size={16} /></a><a className="button button-ghost" href="#contact">Get in touch</a></div>
        <div className="social-row"><a href="https://github.com/ajitkumarpandit" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a><a href="#education"><BriefcaseBusiness size={17} /> Education</a><a href="mailto:ajit@nakprc.com"><Mail size={17} /> Email</a></div>
        <div className="hero-side-note"><span>01</span><span>BUILD<br />WITH<br />INTENT</span></div>
      </section>

      <section id="about" className="section-shell content-section about-section">
        <div className="section-label">01 / About me</div>
        <div className="about-grid"><div><h2>Engineering clarity<br /><span>into complexity.</span></h2></div><div className="about-text"><p>I&apos;m a passionate Full Stack Developer &amp; AI / ML enthusiast based in <strong>Jamshedpur, Jharkhand, India</strong>, with a deep love for crafting innovative and intelligent web applications.</p><p>My focus is on AI-powered solutions, LLM integration, and building scalable full-stack products that solve real-world problems.</p><p className="quote">Build over hype.<br />Quality over quantity.</p></div></div>
        <div className="stats"><div><strong>44<span>+</span></strong><small>PUBLIC REPOSITORIES</small></div><div><strong>21<span>+</span></strong><small>TECHNICAL ARTICLES</small></div><div><strong>1<span>+</span></strong><small>GITHUB PROJECTS</small></div></div>
      </section>

      <section id="skills" className="section-shell content-section"><div className="section-label">02 / Skills &amp; technologies</div><div className="section-heading-row"><h2>My tech<br /><span>console.</span></h2><p>Tools are only useful when they disappear behind a great experience. These are the systems I use to make that happen.</p></div><div className="skills-grid">{skillGroups.map((group) => <div className="skill-card" key={group.label}><div className="skill-index">/ {String(skillGroups.indexOf(group) + 1).padStart(2, '0')}</div><h3>{group.label}</h3><ul>{group.skills.map((skill) => <li key={skill}><Check size={14} />{skill}</li>)}</ul></div>)}</div></section>

      <section id="experience" className="section-shell content-section"><div className="section-label">03 / Education &amp; Experience</div><div className="experience-row"><div><p className="date-range">2024 — PRESENT</p><h2>M.Tech<br /><span>Computer Science &amp; Engineering</span></h2></div><div className="experience-detail"><div className="experience-company">Arka Jain University <span>AJU</span></div><p>Specializing in AI, machine learning, and intelligent systems.</p></div></div><div className="experience-row secondary"><div><p className="date-range">AUG — OCT 2025</p><h2>Machine Learning<br /><span>Internship</span></h2></div><div className="experience-detail"><div className="experience-company">Tata Steel Remote <span>Tata</span></div><p>Applied Deep Learning and Neural Networks to real-world image analysis problems in an industrial setting.</p></div></div><div className="experience-row secondary"><div><p className="date-range">SEP 2021 — MAY 2022</p><h2>Research<br /><span>Internship</span></h2></div><div className="experience-detail"><div className="experience-company">Samsung R&amp;D Institute India / Samsung PRISM Remote <span>Samsung</span></div><p>Contributed to research and development in advanced technologies through Samsung's remote internship program.</p></div></div></section>

      <section id="projects" className="section-shell content-section projects-section"><div className="section-label">04 / Selected work</div><div className="section-heading-row"><h2>Made to<br /><span>matter.</span></h2><p>A selection of the kind of work I love: useful, considered, and built to hold up under pressure.</p></div><div className="project-list">{projects.map((project) => <article className="project-item" key={project.number}><div className="project-number">{project.number}</div><div><h3>{project.title}</h3><p>{project.description}</p><div className="pill-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><ArrowUpRight className="project-arrow" size={22} /></article>)}</div></section>

      <section id="education" className="section-shell content-section education-section"><div className="section-label">05 / Education</div><div className="education-grid"><div><h2>Always<br /><span>learning.</span></h2></div><div className="education-list"><div><b>M.Tech · Computer Science &amp; Engineering</b><span>Arka Jain University · 2024—2026</span></div><div><b>B.E. Computer Science</b><span>Chandigarh University [ CU ] · 2020—2023</span></div><div><b>Diploma · Computer Engineering</b><span>Nettur Technical Training Foundation [ NTTF ] · 2017—2020</span></div><div><b>Fullstack Web Development Certification</b><span>Cuvette · 2023—2024</span></div></div></div></section>

      <section id="contact" className="contact-section"><div className="section-shell"><div className="section-label">06 / Contact</div><div className="contact-grid"><h2>Have a problem<br />worth solving?</h2><div><p>Let&apos;s turn your idea into something useful, beautiful, and built to last.</p><div className="email-box"><a href="mailto:ajit@nakprc.com">ajit@nakprc.com</a><button onClick={copyEmail} aria-label="Copy email">{copied ? <Check size={17} /> : <Copy size={17} />}</button></div><p className="contact-meta">+91 6200281082 · Jamshedpur, India</p></div></div><footer><span>© 2026 Ajit Kumar Pandit</span><span>Built with curiosity &amp; care</span><a href="#top">Back to top ↑</a></footer></div></section>
    <PortfolioAI />
    </main>
  )
}
