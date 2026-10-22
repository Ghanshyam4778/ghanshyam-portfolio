import { useEffect, useRef, useState } from 'react'
import { ChevronRight, TerminalSquare } from 'lucide-react'
import { profile } from '../data/portfolio'

const routes = { home:'#home', about:'#about', projects:'#projects', skills:'#skills', experience:'#experience', lab:'#lab', community:'#community', contact:'#contact' }
const welcome = [
  { type:'system', text:'GV/SEC • Personal terminal • v2.0' },
  { type:'text', text:'Welcome. Type help to navigate.' },
]
function output(command) {
  if (command in routes) return `Opening ${command} section…`
  if (command==='help') return 'help · about · projects · skills · experience · lab · community · contact · whoami · email · status · clear'
  if (command==='whoami') return `${profile.name} | Cybersecurity – Automobility student & developer`
  if (command==='status') return 'Personal portfolio online • Educational SOC-inspired UI (not a real security system).'
  if (command==='email') return profile.email
  if (command==='') return ''
  return `Command not found: ${command}. Try help.`
}
export default function Terminal(){
  const [input,setInput] = useState('')
  const [history,setHistory] = useState(welcome)
  const areaRef = useRef(null)
  const inputRef = useRef(null)
  useEffect(()=>{ if(areaRef.current) areaRef.current.scrollTop=areaRef.current.scrollHeight },[history])
  function run(raw){
    const command = raw.trim().toLowerCase()
    setInput('')
    if(command==='clear'){ setHistory([]); return }
    const result = output(command)
    setHistory(prev=>[...prev,{type:'command',text:raw},...(result?[{type:'text',text:result}]:[])].slice(-22))
    if(routes[command]) document.querySelector(routes[command])?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})
  }
  return <div className="terminal-frame" aria-label="Interactive portfolio terminal">
    <div className="terminal-topbar"><div className="terminal-dots" aria-hidden="true"><i/><i/><i/></div><span>ghanshyam@portfolio : ~</span><TerminalSquare size={17}/></div>
    <div className="terminal-body" ref={areaRef} onClick={()=>inputRef.current?.focus()}>
      {history.map((entry,index)=><div className="terminal-line" key={`${index}-${entry.type}`}>
        {entry.type==='command'?<><span className="prompt">guest@gv</span><span className="prompt-tail">:~$</span><span>{entry.text}</span></>:<span className={entry.type==='system'?'system-text':'terminal-result'}>{entry.text}</span>}
      </div>)}
      <form className="terminal-line terminal-form" onSubmit={e=>{e.preventDefault();run(input)}}><label htmlFor="terminal-command"><span className="prompt">guest@gv</span><span className="prompt-tail">:~$</span></label><input id="terminal-command" ref={inputRef} autoCapitalize="none" autoComplete="off" spellCheck="false" placeholder="help" value={input} onChange={e=>setInput(e.target.value)} aria-label="Type a terminal navigation command"/><button type="submit" aria-label="Submit command"><ChevronRight size={18}/></button></form>
    </div>
    <div className="terminal-footer"><span><i className="live-dot"/> INTERACTIVE NAVIGATION</span><span>NO LIVE SYSTEM ACCESS</span></div>
  </div>
}
