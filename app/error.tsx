'use client'

import { useEffect } from 'react'
import { RefreshCw, ArrowUpRight } from 'lucide-react'

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Keep the recovery screen quiet while still exposing errors to the browser console.
    console.error('[v0] Ajitfolio route error')
  }, [])

  return (
    <main className="system-state system-error" aria-labelledby="error-title">
      <div className="state-grid" aria-hidden="true" />
      <div className="state-content">
        <span className="state-code">AJITFOLIO / 500</span>
        <div className="state-mark">!</div>
        <h1 id="error-title">A small system<br /><em>hiccup.</em></h1>
        <p>Something interrupted the page. The portfolio is still here — try loading this route again.</p>
        <div className="state-actions">
          <button className="button button-primary" onClick={() => reset()}><RefreshCw size={15} /> Try again</button>
          <a className="button button-ghost" href="/"><ArrowUpRight size={15} /> Return home</a>
        </div>
      </div>
    </main>
  )
}
