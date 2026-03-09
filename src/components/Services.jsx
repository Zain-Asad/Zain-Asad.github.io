import AnimateIn from './AnimateIn'

const services = [
  {
    title: 'Web & App Development',
    description:
      'Modern, responsive websites and web applications built with React, Next.js, Vue, or Node/Express. From landing pages to full-stack platforms with authentication and databases—so your business has a professional online presence and scalable tools.',
    benefit: 'Helps businesses reach customers online, automate workflows, and scale without rewriting from scratch.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    featured: true,
  },
  {
    title: 'Software & Custom Solutions',
    description:
      'Desktop applications, internal tools, and custom software tailored to your processes. Experience in C#, C++, Unity, and cross-platform development—delivering solutions that fit your workflow instead of forcing you into generic software.',
    benefit: 'Reduces manual work, improves accuracy, and gives you control over your own tools and data.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 0H5m14 0h2m2 0h-2M3 14h2m2 0h2m-2 0h-2M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z',
    featured: false,
  },
  {
    title: 'AI & Data Solutions',
    description:
      'Data collection, cleaning, and modeling for automation and smarter decisions. From building AI-driven features to integrating ML models into your products—I help you use data to compete and innovate.',
    benefit: 'Enables automation, better forecasting, and differentiated products without needing a large in-house data team.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    featured: false,
  },
]

export default function Services() {
  const [featured, ...rest] = services
  return (
    <section id="services" className="scroll-mt-20 border-b border-zinc-800/50 bg-black">
      <div className="section-container section-padding">
        <AnimateIn>
        <div className="max-w-prose">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            What I offer
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Services
          </h2>
          <p className="mt-3 text-zinc-400">
            Technical services that help businesses and clients ship products and operate more efficiently.
          </p>
        </div>

        {/* Featured service — full width */}
        <article className="group mt-8 rounded-xl border border-zinc-700/50 bg-zinc-900/50 p-6 transition hover:border-violet-500/30 sm:p-7">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-500/20 text-violet-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={featured.icon} />
            </svg>
          </div>
          <h3 className="mt-4 font-display text-xl font-semibold text-white sm:text-2xl">
            {featured.title}
          </h3>
          <p className="mt-2 text-zinc-400">
            {featured.description}
          </p>
          <p className="mt-4 border-l-2 border-violet-500/40 pl-3 text-sm text-zinc-300">
            <span className="font-semibold text-violet-400">How it helps:</span> {featured.benefit}
          </p>
        </article>

        {/* Rest in 2-col grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {rest.map((service, i) => (
            <article key={i} className="rounded-xl border border-zinc-700/50 bg-zinc-900/50 p-5 transition hover:border-zinc-600">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                {service.description}
              </p>
              <p className="mt-3 border-l-2 border-violet-500/30 pl-3 text-sm text-zinc-300">
                <span className="font-semibold text-violet-400">How it helps:</span> {service.benefit}
              </p>
            </article>
          ))}
        </div>
        </AnimateIn>
      </div>
    </section>
  )
}
