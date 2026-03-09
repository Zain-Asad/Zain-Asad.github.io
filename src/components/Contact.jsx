import AnimateIn from './AnimateIn'

const linkClass =
  'inline-flex items-center gap-3 rounded-lg border border-zinc-700/50 bg-zinc-800/50 px-5 py-3.5 text-zinc-200 transition hover:border-violet-500/40 hover:bg-zinc-800'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-black">
      <div className="section-container section-padding">
        <AnimateIn>
        <div className="max-w-prose">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Connect
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Get in touch
          </h2>
          <p className="mt-3 text-zinc-400">
            Interested in working together or discussing a project? Reach out via email or
            connect on LinkedIn.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="mailto:zainbinasad@gmail.com" className={linkClass}>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span className="font-medium">zainbinasad@gmail.com</span>
          </a>
          <a href="tel:+923175881919" className={linkClass}>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <span className="font-medium">(+92) 317 5881919</span>
          </a>
          <a
            href="https://www.linkedin.com/in/zain-asad-2513a31a5/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </span>
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
        <p className="mt-8 text-center text-sm text-zinc-500">
          You can also find my code and more projects on{' '}
          <a href="https://github.com/Zain-Asad" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
            GitHub
          </a>
          .
        </p>
        </AnimateIn>
      </div>
    </section>
  )
}
