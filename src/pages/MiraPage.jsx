import { Link } from 'react-router-dom'
import MiraLogo from '../components/MiraLogo'

const whyMira = [
  {
    title: 'Inaccessible care',
    text: 'Long wait times, high costs, and stigma prevent people from seeking mental health support.',
  },
  {
    title: '24/7 voice AI',
    text: 'Accessible, judgment-free support as a complement to traditional therapy.',
  },
  {
    title: 'Existing gaps',
    text: 'Current chatbots lack real-time voice interaction, emotion awareness, and therapeutic grounding.',
  },
  {
    title: "Mira's solution",
    text: 'Crisis safety, emotion detection, and therapy-informed AI using CBT, DBT, and ACT.',
  },
]

const pipelineSteps = [
  { label: 'User', desc: 'Opens app, speaks.', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { label: 'Voice input', desc: 'Real-time Speech-to-Text (Whisper).', icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' },
  { label: 'Mira AI', desc: 'Emotion analysis, Therapy LLM + RAG.', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { label: 'Knowledge base', desc: 'CBT · DBT · ACT.', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { label: 'Safety check', desc: 'Crisis detection · 72 keywords · 3 levels.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', highlight: true },
  { label: 'Voice out', desc: 'Emotion-adaptive TTS (~1.5s latency).', icon: 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 9 5 9 7v10c0 2 1.923 3.337 2.293 3.707L14 17.414V17h1a1 1 0 001-1v-4a1 1 0 00-1-1h-1l-4.414-4.414z' },
  { label: 'User hears', desc: 'Empathetic response.', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
]

const features = [
  {
    title: 'Emotion-aware',
    desc: 'Detects how the user is feeling. 15+ tone presets for adaptive responses.',
    icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
  },
  {
    title: 'Therapy-grounded',
    desc: 'Backed by real therapeutic techniques: CBT, DBT, and ACT.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
  {
    title: 'Crisis safety',
    desc: 'Detects distress and intervenes immediately. 72 keywords across 3 severity levels.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    highlight: true,
  },
  {
    title: 'Voice-first',
    desc: 'Speak naturally, hear back instantly. Real-time with ~1.5s latency.',
    icon: 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 9 5 9 7v10c0 2 1.923 3.337 2.293 3.707L14 17.414V17h1a1 1 0 001-1v-4a1 1 0 00-1-1h-1l-4.414-4.414z',
  },
  {
    title: 'Remembers you',
    desc: 'Builds context over time. Session memory so every conversation feels continuous.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
  },
]

const techStack = [
  'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'React', 'TypeScript',
  'SQLAlchemy', 'Docker', 'WebSocket', 'OpenAI Whisper', 'Edge TTS', 'VADER',
]

export default function MiraPage() {
  return (
    <div className="bg-black text-zinc-200">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800/50 bg-gradient-to-b from-violet-950/30 to-black px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(139,92,246,0.15),transparent)]" />
        <div className="relative mx-auto max-w-4xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-5">
              <MiraLogo className="h-16 w-16 sm:h-20 sm:w-20" />
              <div>
                <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Mira
                </h1>
                <p className="font-display text-xl text-violet-300">AI Therapy Assistant</p>
                <p className="mt-4 max-w-xl text-lg text-zinc-400">
                  Real-time, voice-first mental health support through natural conversation—with
                  sentiment analysis, a fine-tuned therapy model, and multiple safety layers for
                  accurate, safer responses.
                </p>
              </div>
            </div>
            <div className="shrink-0 rounded-xl border border-zinc-700/50 bg-zinc-900/30 px-5 py-4 text-right text-sm text-zinc-500">
              <p className="font-medium text-zinc-400">Team</p>
              <p>Zain Bin Asad (221-1240)</p>
              <p>Ali Hamza Azam (221-2126)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mira */}
      <section className="border-b border-zinc-800/50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Why Mira?
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {whyMira.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-violet-500/20 bg-violet-950/30 p-5 transition hover:border-violet-500/40"
              >
                <h3 className="font-display font-semibold text-violet-300">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Mira works */}
      <section className="border-b border-zinc-800/50 bg-zinc-950/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <span className="font-display text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
            Pipeline
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            How Mira works
          </h2>
          <p className="mt-2 text-zinc-400">
            Voice pipeline: Audio → Text → AI → Speech, with safety and memory at every step.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {pipelineSteps.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col items-center rounded-xl border px-4 py-4 text-center transition ${
                  step.highlight
                    ? 'border-rose-500/40 bg-rose-950/30 text-rose-200'
                    : 'border-zinc-700/50 bg-zinc-900/50 hover:border-violet-500/30'
                }`}
              >
                <svg
                  className={`h-6 w-6 shrink-0 ${step.highlight ? 'text-rose-400' : 'text-violet-400'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                </svg>
                <span className="mt-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
                  {step.label}
                </span>
                <span className="mt-0.5 text-xs leading-snug text-zinc-500">{step.desc}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-zinc-500">
            Context feeds back into the next conversation via session memory.
          </p>
        </div>
      </section>

      {/* Key features */}
      <section className="border-b border-zinc-800/50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Key features
          </h2>
          <p className="mt-2 text-zinc-400">
            What sets Mira apart from a generic chatbot: emotionally aware, therapeutically
            grounded, safety-checked, spoken aloud, contextually informed.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-6 transition ${
                  f.highlight
                    ? 'border-rose-500/30 bg-rose-950/20 hover:border-rose-500/50'
                    : 'border-zinc-700/50 bg-zinc-900/30 hover:border-violet-500/30'
                }`}
              >
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${
                    f.highlight ? 'bg-rose-500/20 text-rose-400' : 'bg-violet-500/20 text-violet-400'
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 font-display font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built with */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Built with
          </h2>
          <p className="mt-2 text-zinc-400">
            React / iOS Client → WebSocket → FastAPI Server → PostgreSQL + Redis → AI Pipeline
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800 bg-zinc-950/50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-zinc-400">
            Part of my Final Year Project at FAST NUCES. See more of my work on the main
            portfolio.
          </p>
          <Link
            to="/#projects"
            className="mt-6 inline-flex rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
          >
            Back to portfolio
          </Link>
        </div>
      </section>
    </div>
  )
}
