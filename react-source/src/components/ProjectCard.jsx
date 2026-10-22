import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, BookOpen, ChevronDown, Code2, Network, ShieldCheck } from 'lucide-react'
const icons = {development: Code2, security: ShieldCheck, research: BookOpen}
const categoryLabels = {development:'DEVELOPMENT',security:'SECURITY LAB',research:'RESEARCH'}
export default function ProjectCard({project}) {
  const [expanded,setExpanded] = useState(false)
  const reduce = useReducedMotion()
  const Icon=icons[project.category] || Network
  return <motion.article className={`project-card card-${project.category}`} whileHover={reduce?undefined:{y:-5}} transition={{duration:.2}}>
    <div className="project-visual" aria-hidden="true"><div className="visual-grid"/><Icon size={54} strokeWidth={1.1}/><span>{project.number} / PROJECT INDEX</span></div>
    <div className="project-content">
      <div className="project-overline"><span>{categoryLabels[project.category]}</span><span>{project.kind}</span></div>
      <h3>{project.title}</h3><p className="project-description">{project.intro}</p>
      <div className="tag-list">{project.tags.map(tag=><span className="tech-tag" key={tag}>{tag}</span>)}</div>
      <div className="project-actions"><button aria-expanded={expanded} aria-controls={`details-${project.id}`} onClick={()=>setExpanded(v=>!v)}>{expanded?'Hide details':'Explore project'}<ChevronDown className={expanded?'turned':''} size={16}/></button>{project.github&&<a href={project.github} rel="noopener noreferrer" target="_blank">Code <ArrowUpRight size={14}/></a>}{project.demo&&<a href={project.demo} rel="noopener noreferrer" target="_blank">Live demo <ArrowUpRight size={14}/></a>}</div>
      {expanded&&<ul id={`details-${project.id}`} className="project-details">{project.points.map(point=><li key={point}>{point}</li>)}</ul>}
    </div>
  </motion.article>
}
