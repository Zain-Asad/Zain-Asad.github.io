import AnimateIn from './AnimateIn'

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-zinc-800/50 bg-zinc-950/30">
      <div className="section-container pt-4 pb-10 sm:pt-5 sm:pb-12 lg:pt-6 lg:pb-16">
        <AnimateIn className="max-w-prose">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            About
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            From idea to shipped product.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            I'm Zain Bin Asad, a Computer Science undergraduate at FAST NUCES with a strong
            focus on building real-world software. I've been programming since primary school
            and have worked across game development, full-stack web apps, and AI/ML—so I'm
            comfortable turning ideas into reliable, maintainable solutions for businesses
            and clients.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
