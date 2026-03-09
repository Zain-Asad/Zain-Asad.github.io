import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useContactModal } from '../context/ContactModalContext'

const navLinks = [
  { label: 'Home', to: '/', hash: false, contact: false },
  { label: 'About', to: '/#about', hash: true, contact: false },
  { label: 'Skills', to: '/#skills', hash: true, contact: false },
  { label: 'Services', to: '/#services', hash: true, contact: false },
  { label: 'Projects', to: '/#projects', hash: true, contact: false },
  { label: 'Mira', to: '/mira', hash: false, contact: false },
  { label: 'Contact', to: '/#contact', hash: true, contact: true },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { openModal } = useContactModal()

  const handleNavClick = (e, isContact) => {
    if (isContact) {
      e.preventDefault()
      openModal()
    }
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/90 backdrop-blur-md">
      <div className="section-container flex items-center justify-between py-4">
        <Link
          to="/"
          className="font-display text-xl font-semibold tracking-tight text-violet-400 transition hover:text-violet-300"
        >
          Zain Bin Asad
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map(({ label, to, hash, contact }) => {
            const isActive = to === '/mira' && location.pathname === '/mira'
            if (contact) {
              return (
                <button
                  key={to}
                  type="button"
                  onClick={() => openModal()}
                  className="text-sm font-medium text-zinc-400 transition hover:text-violet-400"
                >
                  {label}
                </button>
              )
            }
            if (hash) {
              return (
                <a
                  key={to}
                  href={to}
                  className="text-sm font-medium text-zinc-400 transition hover:text-violet-400"
                >
                  {label}
                </a>
              )
            }
            return (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium transition hover:text-violet-400 ${
                  isActive ? 'text-violet-400' : 'text-zinc-400'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-violet-400 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-zinc-800 bg-black/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map(({ label, to, hash, contact }) => {
              if (contact) {
                return (
                  <button
                    key={to}
                    type="button"
                    className="w-full rounded-lg px-3 py-2 text-left text-zinc-300 hover:bg-zinc-800 hover:text-violet-400"
                    onClick={() => handleNavClick(null, true)}
                  >
                    {label}
                  </button>
                )
              }
              if (hash) {
                return (
                  <a
                    key={to}
                    href={to}
                    className="rounded-lg px-3 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-violet-400"
                    onClick={() => handleNavClick(null, false)}
                  >
                    {label}
                  </a>
                )
              }
              return (
                <Link
                  key={to}
                  to={to}
                  className="rounded-lg px-3 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-violet-400"
                  onClick={() => handleNavClick(null, false)}
                >
                  {label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
