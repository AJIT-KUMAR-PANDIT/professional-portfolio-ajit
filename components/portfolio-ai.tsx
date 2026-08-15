'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, Bot, BriefcaseBusiness, Code2, GraduationCap, LoaderCircle, Mail, Search, Sparkles, UserRound, X } from 'lucide-react'

export function PortfolioAI() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  async function ask(event: FormEvent) {
    event.preventDefault()
    if (!query.trim() || loading) return
    setLoading(true)
    setAnswer('')
    try {
      const response = await fetch('/api/portfolio-search', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ query }) })
      const data = await response.json()
      setAnswer(data.answer)
    } catch {
      setAnswer('Please try again in a moment.')
    } finally { setLoading(false) }
  }

  return <>
    {open && <div className="ai-panel" role="dialog" aria-label="Ask Ajit AI"><div className="ai-panel-head"><span><Sparkles size={15} /> Ask Ajit AI</span><button onClick={() => setOpen(false)} aria-label="Close AI assistant"><X size={17} /></button></div><p className="ai-hint">Ask about skills, projects, experience, or education.</p>{answer && <div className="ai-answer"><Bot size={16} /><p>{answer}</p></div>}<form onSubmit={ask} className="ai-form"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="e.g. What does Ajit build?" aria-label="Ask a question" /><button type="submit" aria-label="Send question">{loading ? <LoaderCircle className="spin" size={18} /> : <ArrowUpRight size={18} />}</button></form></div>}
    <div className="bottom-bar"><nav className="bottom-nav" aria-label="Section navigation">{([{ label: 'About', href: '#about', icon: UserRound }, { label: 'Skills', href: '#skills', icon: Code2 }, { label: 'Projects', href: '#projects', icon: BriefcaseBusiness }, { label: 'Education', href: '#education', icon: GraduationCap }, { label: 'Contact', href: '#contact', icon: Mail }]).map(({ label, href, icon: Icon }) => <a key={label} href={href} aria-label={label}><Icon size={17} strokeWidth={1.8} /><span>{label}</span></a>)}</nav><button className="ai-launch" onClick={() => setOpen(!open)} aria-expanded={open}><Search size={16} /> Search AI</button></div>
  </>
}
