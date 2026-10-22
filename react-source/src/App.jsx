import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, ArrowUp, BookOpen, Check, ChevronDown,
  Clipboard, Code2, Cpu, Github, GraduationCap, Instagram, Layers, Linkedin, Mail,
  MapPin, Network, Radio, ShieldCheck, Sparkles, TerminalSquare, Users, Wifi,
} from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import Terminal from './components/Terminal.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import { profile, projects, skillGroups, timeline, labEntries, certificates, automotiveTopics } from './data/portfolio'

const portfolioStats = [
  { value:'8.94', suffix:'/10', label:'B.Tech CGPA', icon:GraduationCap },
  { value:'02', suffix:'', label:'Development internships', icon:Layers },
  { value:'02', suffix:'', label:'Major academic software projects', icon:Code2 },
  { value:'01', suffix:'', label:'Cybersecurity club community', icon:Users },
]
function Heading({number,eyebrow,title,accent,description}){
  return <div className="section-header"><p className="eyebrow"><span>// {number}</span> {eyebrow}</p><h2>{title} <em>{accent}</em></h2>{description&&<p className="section-desc">{description}</p>}</div>
}
function SocialLink({href,label,children}){
  if(!href)return null
  return <a className="social-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>{children}</a>
}
function ActionLink({href,children,primary,external,download}){
  if(!href)return null
  return <a className={primary?'button-main':'button-outline'} href={href} {...(external?{target:'_blank',rel:'noopener noreferrer'}:{})} download={download||undefined}>{children}<ArrowUpRight size={16}/></a>
}
function Hero({appear}){
  return <section className="hero site-container" aria-label="Introduction">
    <motion.div className="hero-text" {...appear}>
      <p className="status-pill"><i className="live-dot"/> PORTFOLIO ONLINE <span> / SECURITY + DEVELOPMENT</span></p>
      <p className="hero-greeting">HELLO WORLD, I'M</p>
      <h1>Ghanshyam<br/><span>Vekariya.</span></h1>
      <h2>{profile.headline}</h2>
      <p className="hero-description">{profile.description}</p>
      <div className="hero-cta"><ActionLink href="#projects" primary>Explore my work</ActionLink><ActionLink href="#contact">Let's connect</ActionLink>{profile.resume&&<ActionLink href={profile.resume} download>Get résumé</ActionLink>}</div>
      <div className="hero-socials"><SocialLink href={profile.linkedin} label="LinkedIn"><Linkedin size={19}/></SocialLink><SocialLink href={profile.instagram} label="Instagram"><Instagram size={19}/></SocialLink><SocialLink href={profile.github} label="GitHub"><Github size={19}/></SocialLink><a className="social-link" href={`mailto:${profile.email}`} aria-label="Email"><Mail size={19}/></a><span className="social-separator"/><span>{profile.location}</span></div>
    </motion.div>
    <motion.div className="hero-stage" {...appear}>
      <div className="identity-card">
        <div className="identity-grid" aria-hidden="true"/>
        <div className="identity-header"><span><Radio size={14}/> IDENTITY / GV-001</span><span className="identity-status"><i className="live-dot"/> ACTIVE</span></div>
        <div className="identity-copy"><small>ENGINEER IN PROGRESS /</small><strong>Building with<br/>security in mind<span>.</span></strong><span className="identity-label">CYBERSECURITY • AUTOMOBILITY</span></div>
        <div className="portrait-halo" aria-hidden="true"/>
        <img className="hero-portrait" src={profile.photo} alt="Ghanshyam Vekariya wearing a black suit and tie" loading="eager" fetchPriority="high"/>
        <div className="identity-bottom"><span>COMP. ENGINEERING</span><span>→</span><span>CYBERSECURITY</span></div>
      </div>
      <div className="terminal-label"><span><TerminalSquare size={15}/> INTERACTIVE TERMINAL</span><span>TYPE: HELP</span></div>
      <Terminal/>
    </motion.div>
    <a href="#about" className="scroll-hint">SCROLL TO EXPLORE <ArrowDown size={16}/></a>
  </section>
}
function MetricStrip(){return <div className="site-container"><div className="metrics-strip">{portfolioStats.map(s=><div className="metric" key={s.label}><s.icon size={18}/><div><strong>{s.value}<span>{s.suffix}</span></strong><p>{s.label}</p></div></div>)}</div></div>}
function AboutSection({appear}){return <section className="site-container section-gap" id="about">
  <Heading number="01" eyebrow="THE PERSON BEHIND THE WORK" title="From building software" accent="to understanding security." description="My developer foundation and hands-on cybersecurity coursework shape how I approach connected systems."/>
  <div className="about-grid">
    <motion.div className="panel about-story" {...appear}>
      <div className="about-intro"><img src={profile.photo} alt="Professional portrait of Ghanshyam Vekariya" loading="lazy"/><div><span className="eyebrow">ABOUT ME / PERSONAL STORY</span><h3>Developer mindset.<br/><span>Security direction.</span></h3></div></div>
      <p>I completed a B.Tech in Computer Engineering, where I developed applications for employee management and QR-code attendance. Two internships introduced me to practical full-stack and React development.</p>
      <p>Now I study Cybersecurity – Automobility at St. Clair College. I'm exploring Linux, networking, risk management, secure systems and the security challenges connected technologies bring.</p>
      <div className="about-badges"><span><ShieldCheck size={15}/> Security learning</span><span><Code2 size={15}/> Development foundation</span><span><Users size={15}/> College Cybersecurity Club</span></div>
    </motion.div>
    <motion.div className="panel journey-card" {...appear}><p className="eyebrow">// MY PATH</p><h3>The evolution</h3><div className="journey-list">{[
      ['01','Computer Engineering','Building the fundamentals'],['02','Full-Stack Development','Practical application experience'],['03','Cybersecurity – Automobility','Securing connected systems'],['04','Security Engineering','Future career direction'],
    ].map((j,i)=><div className="journey-item" key={j[0]}><span>{j[0]}</span><div><strong>{j[1]}</strong><small>{j[2]}</small></div>{i===2?<i className="current-marker">NOW</i>:null}</div>)}</div></motion.div>
  </div>
</section>}
function ProjectsSection(){
  const [filter,setFilter]=useState('all')
  const filtered=filter==='all'?projects:projects.filter(p=>p.category===filter)
  return <section className="site-container section-gap" id="projects"><Heading number="02" eyebrow="PROJECT EXPLORER" title="Real work." accent="Thoughtful execution." description="Software builds, practical security exercises and researched security topics. Academic work is clearly labelled."/>
    <div className="filters" role="group" aria-label="Project filters">{[
      ['all','All work'],['development','Development'],['security','Cyber labs'],['research','Research']
    ].map(([key,label])=><button type="button" key={key} className={filter===key?'selected':''} aria-pressed={filter===key} onClick={()=>setFilter(key)}>{label}<span>{key==='all'?projects.length:projects.filter(p=>p.category===key).length}</span></button>)}</div>
    <div className="project-grid">{filtered.map(project=><ProjectCard project={project} key={project.id}/>)}</div>
  </section>
}
function SkillsSection({appear}){return <section className="site-container section-gap" id="skills">
  <Heading number="03" eyebrow="MY TECHNICAL TOOLKIT" title="Skills and tools" accent="in practice." description="Technologies I have used or studied—without invented skill percentages or unsupported claims."/>
  <div className="skill-grid">{skillGroups.map((group,i)=>{
    const Icon=group.icon==='shield'?ShieldCheck:group.icon==='code'?Code2:TerminalSquare
    return <motion.div className="panel skill-card" key={group.name} {...appear} transition={{duration:.45,delay:i*.08}}><div className="skill-top"><span className="skill-icon"><Icon size={27}/></span><span className="skill-index">0{i+1} / {group.label}</span></div><h3>{group.name}</h3><div className="skill-chips">{group.skills.map(skill=><span key={skill}>{skill}</span>)}</div></motion.div>
  })}</div>
  <div className="panel focus-banner"><div className="focus-symbol"><Network size={27}/></div><div><span className="eyebrow">CURRENT LEARNING FOCUS</span><h3>Cybersecurity + software engineering + connected systems</h3><p>Connecting an understanding of how software is built with the question of how it can be secured.</p></div><a href="#automotive" aria-label="Explore connected systems">Explore <ArrowRight size={17}/></a></div>
</section>}
function ExperienceSection(){return <section className="site-container section-gap" id="experience">
  <Heading number="04" eyebrow="CAREER TIMELINE" title="Learning and" accent="experience." description="A timeline of education, developer internships, volunteering, and the St. Clair College Cybersecurity Club."/>
  <div className="timeline">{timeline.map((item,i)=><article className="timeline-entry" key={`${item.title}-${i}`}><div className="timeline-node"/><div className="timeline-meta"><span>{item.type}</span><span>{item.date}</span></div><h3>{item.title}</h3><p className="timeline-org">{item.org}</p><p>{item.summary}</p></article>)}</div>
</section>}
function LabSection(){const [selected,setSelected]=useState(0);return <section className="site-container section-gap" id="lab"><Heading number="05" eyebrow="ACADEMIC SECURITY LAB" title="A security notebook" accent="in progress." description="Exploration, configuration, troubleshooting and lessons learned in educational environments—not production SOC activity."/>
  <div className="lab-grid"><div className="lab-intro panel"><span className="lab-big-icon"><TerminalSquare size={34}/></span><span className="eyebrow">// LEARNING JOURNAL</span><h3>Understand it.<br/>Test it.<br/><span>Document it.</span></h3><p>Meaningful security work is about understanding the configuration, validating the outcome, and documenting what happened—even when a test fails.</p><div className="lab-verified"><i className="live-dot"/> Coursework / practice environment</div></div>
  <div className="lab-entries">{labEntries.map((entry,i)=><div className={`lab-entry ${selected===i?'open':''}`} key={entry.task}><button type="button" aria-expanded={selected===i} onClick={()=>setSelected(selected===i?-1:i)}><span className="lab-number">{String(i+1).padStart(2,'0')}</span><span className="lab-name"><strong>{entry.task}</strong><small>{entry.tools}</small></span><ChevronDown size={18}/></button>{selected===i&&<div className="lab-expanded"><p>{entry.detail}</p><div><strong>What I'm learning</strong><p>{entry.takeaway}</p></div></div>}</div>)}</div></div>
</section>}
function AutomotiveSection(){const [selected,setSelected]=useState(0);const topic=automotiveTopics[selected];return <section className="site-container section-gap" id="automotive">
  <Heading number="06" eyebrow="FUTURE FOCUS / AUTOMOBILITY" title="Security for" accent="connected systems." description="An interactive learning diagram inspired by my current program. This is an educational visualization, not a completed automotive security project."/>
  <div className="auto-layout panel"><div className="auto-graphic"><div className="auto-grid-bg"/><svg className="auto-lines" viewBox="0 0 420 350" aria-hidden="true"><path d="M210 172 L100 84 M210 172 L328 84 M210 172 L100 275 M210 172 L328 275"/></svg><div className="auto-center"><ShieldCheck size={34}/><small>VEHICLE<br/>SYSTEM</small></div>{automotiveTopics.map((node,i)=><button type="button" key={node.key} className={`auto-node auto-node-${i} ${selected===i?'active':''}`} onClick={()=>setSelected(i)} aria-pressed={selected===i}>{node.key}</button>)}</div><div className="auto-details"><span className="eyebrow">CONNECTED VEHICLE / CONCEPT MAP</span><h3>{topic.title}</h3><p>{topic.description}</p><div className="auto-topic-list">{automotiveTopics.map((item,i)=><button type="button" key={item.key} aria-pressed={i===selected} onClick={()=>setSelected(i)}><span>{String(i+1).padStart(2,'0')}</span>{item.title}<ArrowUpRight size={14}/></button>)}</div><span className="auto-disclaimer">EDUCATIONAL CONCEPT · NOT LIVE VEHICLE DATA</span></div></div>
</section>}
function CommunitySection(){return <section className="site-container section-gap" id="community">
  <Heading number="07" eyebrow="BEYOND THE CLASSROOM" title="Community, events" accent="and growth." description="Technical learning is stronger with people, conversations, and opportunities to participate."/>
  <div className="community-grid">
    <article className="community-feature panel">
      <div className="community-feature-grid" aria-hidden="true"/>
      <div className="community-feature-top"><span className="eyebrow">// FEATURED COMMUNITY EXPERIENCE</span><span className="community-year">2026 / EVENT</span></div>
      <div className="community-feature-mark" aria-hidden="true"><Network size={66} strokeWidth={1.2}/><span className="community-orbit community-orbit-one"/><span className="community-orbit community-orbit-two"/></div>
      <div className="community-feature-body"><div className="community-icon"><Radio size={20}/></div><span className="community-type">CYBERSECURITY EVENT · VOLUNTEERING</span><h3>siberX<br/><span>Operation: Defend the North</span></h3><p>Volunteering at a cybersecurity event and connecting with people in the security community.</p></div>
      <div className="community-feature-bottom"><span><i className="live-dot"/> COMMUNITY PARTICIPATION</span><span>WINDSOR · ONTARIO</span></div>
    </article>
    <div className="community-side"><div className="club-card panel"><span className="club-badge"><Users size={18}/> COLLEGE COMMUNITY</span><h3>Cybersecurity Club</h3><p>Member of the <strong>St. Clair College Cybersecurity Club</strong>. Building connections and continuing to learn with others interested in security.</p><span className="club-footer"><ShieldCheck size={16}/> St. Clair College · Windsor</span></div><div className="community-highlight panel"><div className="highlight-symbol"><Sparkles size={26}/></div><div><span className="eyebrow">BEYOND CLASSROOMS</span><h3>Learning with a community.</h3><p>Exploring ideas, participating in events, and meeting others who care about cybersecurity.</p></div></div></div>
  </div>
  <div className="cert-grid">{certificates.map((cert,i)=><article className="cert-card" key={cert.name}><div><span className="cert-icon">{i===3?<Users size={24}/>:i===2?<ShieldCheck size={24}/>:i===0?<Cpu size={24}/>:<BookOpen size={24}/>}</span><span className="cert-n">0{i+1}</span></div><p className="eyebrow">{cert.label}</p><h3>{cert.name}</h3><p>{cert.description}</p></article>)}</div>
</section>}
function ContactSection(){const [copied,setCopied]=useState(false);async function copy(){try{await navigator.clipboard.writeText(profile.email);setCopied(true);window.setTimeout(()=>setCopied(false),2200)}catch{setCopied(false);window.location.href=`mailto:${profile.email}`}}
return <section className="site-container section-gap" id="contact"><div className="contact-panel"><div className="contact-orbit" aria-hidden="true"/><span className="eyebrow">// 08 LET'S CONNECT</span><h2>Let's build something<br/><span>worth securing.</span></h2><p>Interested in cybersecurity, engineering, or collaboration? I'd be happy to connect and talk about projects, learning, and opportunities.</p><div className="contact-actions"><ActionLink primary href={`mailto:${profile.email}`}>Email me</ActionLink><button type="button" className="button-outline" onClick={copy}>{copied?<Check size={16}/>:<Clipboard size={16}/>} {copied?'Copied email':'Copy email'}</button></div><div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={19}/> LinkedIn <ArrowUpRight size={16}/></a><a href={profile.instagram} target="_blank" rel="noreferrer"><Instagram size={19}/> Instagram <ArrowUpRight size={16}/></a>{profile.github&&<a href={profile.github} target="_blank" rel="noreferrer"><Github size={19}/> GitHub <ArrowUpRight size={16}/></a>}<a href={`mailto:${profile.email}`}><Mail size={19}/> {profile.email} <ArrowUpRight size={16}/></a></div></div></section>}
function App(){
  const reduced=useReducedMotion()
  const appear=reduced?{}:{initial:{opacity:0,y:17},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.13},transition:{duration:.55}}
  const [scroll,setScroll]=useState(0)
  useEffect(()=>{const handle=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;setScroll(max>0?Math.min(100,window.scrollY/max*100):0)};window.addEventListener('scroll',handle,{passive:true});handle();return()=>window.removeEventListener('scroll',handle)},[])
  return <div className="website-shell" id="home"><div className="top-progress" style={{width:`${scroll}%`}} aria-hidden="true"/><div className="ambient-glow" aria-hidden="true"/><Navbar/><main><Hero appear={appear}/><MetricStrip/><AboutSection appear={appear}/><ProjectsSection/><SkillsSection appear={appear}/><ExperienceSection/><LabSection/><AutomotiveSection/><CommunitySection/><ContactSection/></main><footer className="site-container footer"><a href="#home" className="footer-brand">GV<span>/</span>SEC</a><span>© {new Date().getFullYear()} Ghanshyam Vekariya · Designed for people, built with React.</span><a href="#home">Back to top <ArrowUp size={15}/></a></footer></div>
}
export default App
