'use client'

export default function Loading() {
  return (
    <main className="system-state" aria-label="Loading Ajitfolio">
      <div className="loader-shell">
        <div className="loader-mark">A</div>
        <div className="loader-wordmark">Ajit<span>folio</span></div>
        <div className="loader-track" aria-hidden="true"><div className="loader-progress" /></div>
        <p>INITIALIZING PORTFOLIO<span className="loader-dots">...</span></p>
      </div>
    </main>
  )
}
