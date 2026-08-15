import { ArrowUpRight } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="system-state" aria-labelledby="not-found-title">
      <div className="state-grid" aria-hidden="true" />
      <div className="state-content">
        <span className="state-code">AJITFOLIO / 404</span>
        <div className="state-mark">?</div>
        <h1 id="not-found-title">This page took<br /><em>a wrong turn.</em></h1>
        <p>The route you requested does not exist. Let&apos;s get you back to the useful stuff.</p>
        <div className="state-actions"><a className="button button-primary" href="/"><ArrowUpRight size={15} /> Back to Ajitfolio</a></div>
      </div>
    </main>
  )
}
