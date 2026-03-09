import AnimateIn from './AnimateIn'

const strengths = [
  'Full-stack web development (React, Next.js, Node, Vue)',
  'Software design & implementation (C++, C#, Unity)',
  'AI & machine learning (modeling, data pipelines)',
  'Clear communication and project ownership',
  'Research, analysis, and problem-solving',
]

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-zinc-800/50 bg-black">
      <div className="section-container section-padding">
        <AnimateIn>
        <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
          What I bring
        </span>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Key strengths & skills
        </h2>
        <ul className="mt-6 max-w-prose border-l-2 border-violet-500/30 pl-5">
          {strengths.map((item, i) => (
            <li key={i} className="relative border-b border-zinc-800/50 py-3 text-zinc-300 last:border-0">
              <span className="absolute -left-[10px] top-5 size-1.5 rounded-full bg-violet-400" />
              {item}
            </li>
          ))}
        </ul>
        </AnimateIn>
      </div>
    </section>
  )
}
