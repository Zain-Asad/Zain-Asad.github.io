import { Link } from 'react-router-dom'
import { useContactModal } from '../context/ContactModalContext'

export default function Hero() {
  const { openModal } = useContactModal()

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-zinc-800/50 bg-black">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(139,92,246,0.18),transparent_60%)]" />

      <div className="section-container relative py-24">
        <div className="mx-auto max-w-2xl text-center">

          <p className="mb-5 font-display text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
            Technical Services & Development
          </p>

          <h1 className="font-display text-4xl font-bold tracking-tight leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Build what matters.
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Ship it with clarity.
            </span>
          </h1>

          <p className="mt-7 text-base leading-relaxed text-zinc-400 sm:text-lg">
            I help businesses and clients with custom software, modern web
            applications, and data-driven solutions—so you can focus on growth
            instead of technical debt.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
            >
              Get in touch
            </button>

            <a
              href="#projects"
              className="inline-flex items-center rounded-lg border border-zinc-600 bg-zinc-800/80 px-6 py-3 font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800"
            >
              View my work
            </a>

            <Link
              to="/mira"
              className="inline-flex items-center gap-2 rounded-lg border border-violet-500/40 bg-violet-950/40 px-6 py-3 font-medium text-violet-300 transition hover:border-violet-400 hover:bg-violet-950/60"
            >
              <span>Featured: Mira</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}