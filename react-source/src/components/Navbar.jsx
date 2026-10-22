import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Command, Menu, Search, ShieldCheck, X } from 'lucide-react'
import { navigation, profile } from '../data/portfolio'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [active, setActive] = useState('#home')
  const searchRef = useRef(null)
  const commandItems = [{ label: 'Home', href: '#home' }, ...navigation]
  const matches = commandItems.filter(item => item.label.toLowerCase().includes(search.trim().toLowerCase()))

  useEffect(() => {
    const onKey = event => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setPaletteOpen(v => !v)
      }
      if (event.key === 'Escape') { setMenuOpen(false); setPaletteOpen(false) }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])
  useEffect(() => { if (paletteOpen) { setSearch(''); searchRef.current?.focus() } }, [paletteOpen])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]) setActive(`#${visible[0].target.id}`)
    }, { rootMargin: '-14% 0px -65% 0px', threshold: [0, .2, .5, 1] })
    commandItems.forEach(item => { const el = document.querySelector(item.href); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])
  const close = () => { setPaletteOpen(false); setMenuOpen(false) }
  const go = href => { close(); document.querySelector(href)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }) }

  return <>
    <header className="site-header">
      <div className="site-container nav-layout">
        <a href="#home" className="brand-mark" onClick={close} aria-label="Ghanshyam Vekariya home">
          <span className="logo-square"><ShieldCheck size={21}/></span>
          <span className="brand-title"><strong>GV<span>/</span>SEC</strong><small>SECURITY LAB · PERSONAL PORTFOLIO</small></span>
        </a>
        <nav className="desktop-links" aria-label="Primary navigation">
          {navigation.map(item => <a key={item.href} href={item.href} aria-current={active===item.href?'page':undefined} className={`nav-link ${active===item.href?'active':''}`}>{item.label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="command-launch" type="button" aria-label="Open navigation command palette" title="Quick navigate (Ctrl+K)" onClick={() => setPaletteOpen(true)}><Command size={15}/><span>⌘ K</span></button>
          <a className="header-button" href={`mailto:${profile.email}`}>Hire / Connect <ArrowUpRight size={15}/></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(v=>!v)} aria-expanded={menuOpen} aria-label={menuOpen?'Close menu':'Open menu'}>{menuOpen?<X size={24}/>:<Menu size={24}/>}</button>
        </div>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile menu">{navigation.map(item => <a key={item.href} href={item.href} onClick={close}>{item.label}</a>)}<a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></nav>}
    </header>
    {paletteOpen && <div className="command-overlay" onMouseDown={event => { if (event.target===event.currentTarget) close() }}>
      <div className="command-dialog" role="dialog" aria-modal="true" aria-label="Quick navigation">
        <div className="command-input-row"><Search size={19}/><input ref={searchRef} value={search} onChange={e=>setSearch(e.target.value)} placeholder="Find a section…" aria-label="Search sections"/><button type="button" className="close-dialog" onClick={close} aria-label="Close dialog"><X size={19}/></button></div>
        <div className="command-results">{matches.length ? matches.map(item => <button key={item.href} type="button" onClick={() => go(item.href)}><span><ShieldCheck size={16}/>{item.label}</span><ArrowUpRight size={15}/></button>):<p className="no-results">No matching sections.</p>}</div>
        <div className="command-foot">Quick navigation · Ctrl+K to open · Esc to close</div>
      </div>
    </div>}
  </>
}
