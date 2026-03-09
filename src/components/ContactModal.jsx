import { useEffect } from 'react'
import { useContactModal } from '../context/ContactModalContext'

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal()

  useEffect(() => {
    if (!isOpen) return
    const onEscape = (e) => e.key === 'Escape' && closeModal()
    document.addEventListener('keydown', onEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeModal])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeModal}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-md rounded-2xl border border-zinc-700/50 bg-zinc-900 shadow-2xl shadow-black/50 ring-1 ring-zinc-700/50">
        <div className="flex items-center justify-between border-b border-zinc-700/50 px-6 py-4">
          <h2 id="contact-modal-title" className="font-display text-lg font-semibold text-white">
            Get in touch
          </h2>
          <button
            type="button"
            onClick={closeModal}
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-4 px-6 py-5">
          <p className="text-sm text-zinc-400">
            Interested in working together or discussing a project? Reach out below.
          </p>
          <a
            href="mailto:zainbinasad@gmail.com"
            className="flex items-center gap-3 rounded-xl border border-zinc-700/50 bg-zinc-800/50 px-4 py-3 text-zinc-200 transition hover:border-violet-500/40 hover:bg-zinc-800"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/20 text-violet-400">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <div>
              <span className="block text-xs text-zinc-500">Email</span>
              <span className="font-medium">zainbinasad@gmail.com</span>
            </div>
          </a>
          <a
            href="tel:+923175881919"
            className="flex items-center gap-3 rounded-xl border border-zinc-700/50 bg-zinc-800/50 px-4 py-3 text-zinc-200 transition hover:border-violet-500/40 hover:bg-zinc-800"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/20 text-violet-400">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <div>
              <span className="block text-xs text-zinc-500">Phone</span>
              <span className="font-medium">(+92) 317 5881919</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/zain-asad-2513a31a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-zinc-700/50 bg-zinc-800/50 px-4 py-3 text-zinc-200 transition hover:border-violet-500/40 hover:bg-zinc-800"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/20 text-violet-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </span>
            <div>
              <span className="block text-xs text-zinc-500">LinkedIn</span>
              <span className="font-medium">Connect on LinkedIn</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
