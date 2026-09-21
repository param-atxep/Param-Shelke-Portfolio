"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Activity, ArrowDown, ArrowUpRight, CheckCircle2, Code2, Layers3, Mail, MapPin, Menu, Terminal, X } from "lucide-react";
import { assets } from "@/config/assets";
import { profile, metrics } from "@/data/profile";
import { projects } from "@/data/projects";
import { activity, engineeringFocus, stack } from "@/data/stack";
import { github } from "@/data/github";
import { dsaTopics, leetcode } from "@/data/leetcode";
import CommandCenter from "@/components/CommandCenter";
import SocialIcon from "@/components/SocialIcon";

const navItems = [
  ["01", "HOME", "#home"],
  ["02", "ABOUT", "#about"],
  ["03", "PROJECTS", "#projects"],
  ["04", "STACK", "#stack"],
  ["05", "CONTACT", "#contact"],
];

export default function Home() {
  const [projectFilter, setProjectFilter] = useState("ALL");
  const [projectSearch, setProjectSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const filteredProjects = useMemo(() => projects.filter((project) => {
    const matchesFilter = projectFilter === "ALL" || project.tags.some((tag) => tag.toUpperCase().includes(projectFilter)) || project.category.includes(projectFilter);
    const searchable = `${project.name} ${project.description} ${project.tags.join(" ")}`.toLowerCase();
    return matchesFilter && searchable.includes(projectSearch.toLowerCase());
  }), [projectFilter, projectSearch]);
  return (
    <main className="app-frame">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Param Shelke home">
          <span className="brand-mark"><Image src={assets.logo} alt="Param.SYS logo" width={24} height={24} /></span>
          <span>
            <strong>{profile.name.toUpperCase()}</strong>
            <small>{profile.role.toUpperCase()}</small>
          </span>
        </a>
        <div className="availability"><span className="status-dot" /> ONLINE</div>
        <button className="mobile-menu-trigger" onClick={() => setMobileMenuOpen((open) => !open)} aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileMenuOpen}>{mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}<span>MENU</span></button>
        <nav className={mobileMenuOpen ? "open" : ""} aria-label="Primary navigation">
          {navItems.map(([number, label, href], index) => (
            <a className={index === 0 ? "active" : ""} href={href} key={label} onClick={() => setMobileMenuOpen(false)}><span>{number}</span>{label}</a>
          ))}
        </nav>
      </header>
      <CommandCenter />

      <section id="home" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span>&gt;</span> INITIALIZING PARAM.SYS... <b><CheckCircle2 size={12} /> STATUS: ONLINE</b></p>
          <h1>Building<br />Digital Systems<br />That <em>Matter.</em></h1>
          <p className="hero-lede">I design and build scalable web applications with clean architecture, modern interfaces, and robust backend systems.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">VIEW MY WORK <ArrowUpRight size={15} /></a>
            <a className="button" href="#contact">START A CONVERSATION <Mail size={15} /></a>
          </div>
          <div className="hero-terminal"><Terminal size={14} /> <span>system_ready</span><span>·</span><span>profile_active</span><span>·</span><span>2026.09.21</span></div>
        </div>
        <div className="profile-stage">
          <div className="portrait-frame">
            <div className="frame-label">PORTRAIT // 001</div>
            <Image src={assets.profile} alt="Param Shelke" fill priority sizes="(max-width: 800px) 80vw, 460px" />
            <span className="corner corner-tl" /><span className="corner corner-br" />
            <div className="portrait-footer"><span>IDENTITY_CAPTURE</span><span>PS // 001</span></div>
          </div>
          <div className="identity-panel">
            <div className="identity-heading"><span>PROFILE_METADATA</span><i /></div>
            <Meta label="WHO_AM_I" value="Param Shelke" />
            <Meta label="ROLE" value="Full-Stack Developer / Software Engineer" />
            <Meta label="BASED_IN" value="Pune, India" icon={<MapPin size={12} />} />
            <Meta label="CURRENTLY" value="Building ALTFaze & exploring AI systems" />
            <Meta label="OPEN_FOR" value="Internships · Full-time · Freelance" />
          </div>
        </div>
      </section>

      <section className="metrics section-shell" aria-labelledby="metrics-title">
        <SectionHead number="01" title="ENGINEERING METRICS" id="metrics-title" />
        <div className="metric-grid">{metrics.map((metric, index) => { const MetricIcon = [Code2, Activity, Layers3, Terminal][index]; return <article className="metric-card" key={metric.label}><span className="metric-index">0{index + 1}</span><span className="metric-icon"><MetricIcon size={15} /></span><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.detail}</p></article>; })}</div>
      </section>

      <section id="about" className="about section-shell">
        <SectionHead number="02" title="ABOUT THE OPERATOR" id="about-title" />
        <div className="about-grid">
          <div className="about-lead"><p className="quote">“The best systems are the ones that make complexity feel simple.”</p><p>I am Param Shelke, a software engineer focused on building reliable backend systems, full-stack products, and practical AI-powered applications.</p><p>My work spans Java, Spring Boot, Node.js, Next.js, databases, cloud deployment, and system architecture. I enjoy turning complex requirements into clean, maintainable and production-oriented software.</p></div>
          <div className="principles"><span className="principles-label">ENGINEERING_PRINCIPLES</span><Signal label="01" value="BUILD FOR CLARITY" /><Signal label="02" value="DESIGN FOR SCALE" /><Signal label="03" value="SHIP REAL PRODUCTS" /><Signal label="04" value="SOLVE THE ROOT PROBLEM" /></div>
        </div>
      </section>

      <section id="stack" className="stack-section section-shell">
        <SectionHead number="03" title="TECHNICAL STACK" id="stack-title" />
        <div className="stack-grid">{stack.map((group, index) => <article className="stack-card" key={group.title}><span className="card-number">0{index + 1} {"//"}</span><h3>{group.title}</h3>{group.items.map(item => <div className="stack-item" key={item}><span className="status-dot" />{item}<ArrowUpRight size={12} /></div>)}</article>)}</div>
      </section>

      <section className="focus-strip" aria-label="Engineering focus">
        <span className="focus-label">ENGINEERING_FOCUS</span>
        {engineeringFocus.map(item => <span className="focus-item" key={item}><i className="status-dot" />{item}</span>)}
      </section>

      <section className="activity section-shell">
        <div className="activity-copy"><SectionHead number="04" title="ACTIVITY FEED" id="activity-title" /><p>Consistency compounds. A quiet snapshot of the work happening across my GitHub and problem-solving practice.</p><a className="text-link" href={`https://github.com/${profile.github}`} target="_blank" rel="noreferrer">OPEN GITHUB <ArrowUpRight size={14} /></a></div>
        <div className="activity-panel"><div className="panel-top"><span>CONTRIBUTION_MATRIX</span><span>LAST 140 DAYS</span></div><div className="heatmap">{activity.flatMap((row, rowIndex) => row.map((level, colIndex) => <span className={`level-${level}`} key={`${rowIndex}-${colIndex}`} />))}</div><div className="heatmap-legend"><span>LESS</span>{[0, 1, 2, 3].map(level => <i className={`level-${level}`} key={level} />)}<span>MORE</span></div></div>
      </section>

      <section className="github-section section-shell">
        <SectionHead number="05" title="GITHUB_ACTIVITY" id="github-title" />
        <div className="proof-header"><div><span className="eyebrow">PROFILE // {github.username.toUpperCase()}</span><h2>Engineering in public.</h2><p>Repository and activity surfaces are prepared for server-side GitHub sync. This view is explicitly marked as fallback data until a live integration is configured.</p></div><a className="text-link" href={github.profileUrl} target="_blank" rel="noreferrer">VIEW GITHUB PROFILE <ArrowUpRight size={14} /></a></div>
        <div className="proof-grid"><div className="github-heatmap"><div className="panel-top"><span>CONTRIBUTION_MATRIX</span><span>FALLBACK_VIEW</span></div><div className="heatmap">{activity.flatMap((row, rowIndex) => row.map((level, colIndex) => <span className={`level-${level}`} key={`${rowIndex}-${colIndex}`} />))}</div><p className="data-note">[!] LIVE_SYNC_NOT_CONFIGURED · showing cached profile structure</p></div><div className="repo-panel"><div className="repo-stat"><span>PUBLIC REPOSITORIES</span><strong>{github.repositories}</strong></div>{github.repositoriesList.map((repo) => <a className="repo-row" href={`${github.profileUrl}/${repo.name}`} target="_blank" rel="noreferrer" key={repo.name}><span><b>{repo.name}</b><small>{repo.description}</small></span><i>{repo.language}</i><ArrowUpRight size={13} /></a>)}</div></div>
      </section>

      <section className="leetcode-section section-shell">
        <SectionHead number="06" title="LEETCODE_ACTIVITY" id="leetcode-title" />
        <div className="leetcode-profile"><div><span className="eyebrow">LEETCODE_PROFILE // {leetcode.source.toUpperCase()}</span><h2>{leetcode.username}</h2><p>Problem-solving practice as a replaceable reference dataset. The interface is ready for a reliable API integration later.</p></div><div className="contest-inline"><Stat label="CONTEST RATING" value={leetcode.contestRating.toLocaleString()} /><Stat label="GLOBAL RANK" value={leetcode.globalRank} /><Stat label="ATTENDED" value={String(leetcode.attended)} /></div></div>
        <div className="leetcode-grid"><div className="solved-card"><div className="solved-ring"><strong>{leetcode.solved}</strong><span>SOLVED</span></div><span className="total-label">TOTAL // {leetcode.total}</span><a className="text-link" href={`https://leetcode.com/u/${leetcode.username}`} target="_blank" rel="noreferrer">VIEW LEETCODE PROFILE <ArrowUpRight size={14} /></a></div><div className="difficulty-grid"><Difficulty label="EASY" solved={leetcode.easy} total={leetcode.easyTotal} /><Difficulty label="MEDIUM" solved={leetcode.medium} total={leetcode.mediumTotal} /><Difficulty label="HARD" solved={leetcode.hard} total={leetcode.hardTotal} /></div><div className="submission-card"><div className="panel-top"><span>SUBMISSION_ACTIVITY</span><span>REFERENCE_DATA</span></div><div className="submission-stats"><Stat label="SUBMISSIONS" value={String(leetcode.submissions)} /><Stat label="ACTIVE DAYS" value={String(leetcode.activeDays)} /><Stat label="MAX STREAK" value={String(leetcode.maxStreak)} /><Stat label="BADGES" value={String(leetcode.badges)} /></div><p className="data-note">[!] ACTIVITY_DATA_NOT_CONFIGURED · showing reference statistics only</p></div></div>
      </section>

      <section id="projects" className="projects section-shell">
        <div className="projects-title-row"><SectionHead number="07" title="FEATURED PROJECTS" id="projects-title" /><a className="text-link" href="#contact">VIEW_ALL_PROJECTS <ArrowUpRight size={14} /></a></div>
        <div className="project-tools"><div className="project-filters">{["ALL", "BACKEND", "AI", "WEB"].map(filter => <button className={projectFilter === filter ? "selected" : ""} onClick={() => setProjectFilter(filter)} key={filter}>[{filter}]</button>)}</div><label><span>SEARCH_PROJECTS</span><input value={projectSearch} onChange={(event) => setProjectSearch(event.target.value)} placeholder="name / stack / domain" /></label></div>
        <div className="project-grid">{filteredProjects.map(project => <article className="project-card" key={project.name}><div className="project-image">{project.image ? <Image src={project.image} alt={`${project.name} project preview`} fill sizes="(max-width: 800px) 100vw, 50vw" /> : <div className="image-fallback"><span>{project.number}</span><small>IMAGE_ASSET_NOT_CONFIGURED</small></div>}<span className="project-type">{project.number} {"//"} {project.category}</span><a className="image-overlay" href={`/projects/${project.slug}`}>VIEW CASE STUDY <ArrowUpRight size={14} /></a></div><div className="project-body"><div className="project-heading"><h3>{project.name}</h3><span className="project-status"><i className="status-dot" />{project.status}</span></div><p>{project.description}</p><div className="project-microdata"><span>STACK:: {project.tags[0].toUpperCase()}</span><span>DATA:: {project.tags.find((tag) => tag.includes("SQL"))?.toUpperCase() ?? "SYSTEM"}</span><span>ARCH:: FULL-STACK</span></div><div className="tags">{project.tags.slice(0, 5).map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a className="text-link" href={`/projects/${project.slug}`}>VIEW CASE STUDY <ArrowUpRight size={14} /></a>{project.href && <a className="text-link" href={project.href} target="_blank" rel="noreferrer">LIVE <ArrowUpRight size={14} /></a>}{project.github && <a className="text-link" href={project.github} target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={14} /></a>}</div></div></article>)}</div>
      </section>

      <section className="architecture section-shell"><SectionHead number="06" title="CASE STUDY // SYSTEM ARCHITECTURE" id="case-title" /><div className="architecture-grid"><div><h2>ALTFaze — System Architecture</h2><p>A deeper look into how a marketplace is structured: authentication, discovery, workflows, payments, and real-time collaboration joined into one dependable system.</p><div className="architecture-nodes">{["CLIENT", "NEXT.JS", "API / SERVER ACTIONS", "DOMAIN SERVICES", "PRISMA", "POSTGRESQL"].map((node, index) => <div key={node}><span>{node}</span>{index < 5 && <b>↓</b>}</div>)}</div></div><div className="service-grid">{["AUTH", "PAYMENTS", "REDIS", "CLOUDINARY", "EMAIL", "ANALYTICS"].map(service => <span key={service}><span className="status-dot" />{service}</span>)}</div></div></section>

      <section className="dsa-section section-shell"><SectionHead number="08" title="PROBLEM_SOLVING" id="dsa-title" /><div className="dsa-grid"><div><p className="dsa-copy">I regularly practice data structures and algorithms to strengthen problem solving, algorithmic thinking, and implementation skills.</p><div className="topic-grid">{dsaTopics.map(topic => <span key={topic}>{topic}</span>)}</div></div><div className="dsa-chain">{["DSA", "JAVA", "PROBLEM SOLVING", "SYSTEM DESIGN", "PRODUCTION SOFTWARE"].map((item, index) => <div key={item}><strong>{item}</strong>{index < 4 && <b>↓</b>}</div>)}</div></div></section>

      <section id="contact" className="contact section-shell"><div><p className="eyebrow"><span>&gt;</span> CONNECTION_AVAILABLE</p><h2>Have a system<br /><em>worth building?</em></h2></div><div className="contact-side"><p>Tell me what you&apos;re working on. I&apos;m always interested in ambitious products, hard technical problems, and teams that care about craft.</p><a className="button button-primary" href={`mailto:${profile.email}`}>GET IN TOUCH <Mail size={15} /></a></div></section>

      <footer className="site-footer"><span>© {new Date().getFullYear()} PARAM SHELKE // ALTFAZE</span><span>SYSTEM_STATUS: <b>OPERATIONAL</b></span><div><a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><SocialIcon kind="github" /></a><a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><SocialIcon kind="linkedin" /></a><a href={`mailto:${profile.email}`} aria-label="Email"><SocialIcon kind="email" /></a><a href="#home" aria-label="Back to top"><ArrowDown size={16} className="back-top" /></a></div></footer>
    </main>
  );
}

function Meta({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return <div className="meta"><span>{label}</span><strong>{icon}{value}</strong></div>;
}
function Signal({ label, value }: { label: string; value: string }) {
  return <div className="signal"><span>{label}</span><strong>{value}</strong></div>;
}
function Stat({ label, value }: { label: string; value: string }) {
  return <div className="stat"><span>{label}</span><strong>{value}</strong></div>;
}
function Difficulty({ label, solved, total }: { label: string; solved: number; total: number }) {
  return <div className={`difficulty difficulty-${label.toLowerCase()}`}><span>{label}</span><strong>{solved} <small>/ {total}</small></strong><i><b style={{ width: `${Math.round((solved / total) * 100)}%` }} /></i></div>;
}
function SectionHead({ number, title, id }: { number: string; title: string; id: string }) {
  return <div className="section-head"><span>/{number}</span><h2 id={id}>{title}</h2><i /></div>;
}
