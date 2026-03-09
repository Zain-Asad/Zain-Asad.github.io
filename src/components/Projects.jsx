import { Link } from 'react-router-dom'
import AnimateIn from './AnimateIn'

const projects = [
  {
    title: 'Mira',
    tagline: 'AI Therapy Assistant · FYP',
    objective:
      'Deliver real-time, voice-first mental health support through natural conversation—with sentiment analysis, a fine-tuned therapy LLM, and multiple safety layers (crisis detection, 72 keywords, 3 levels) for accurate, safer responses.',
    strategy:
      'Voice pipeline: Speech-to-Text (Whisper) → Emotion analysis + Therapy LLM + RAG (CBT, DBT, ACT) → Safety check → Emotion-adaptive TTS. Session memory and crisis resources integrated. Built with FastAPI, React, PostgreSQL, Redis, WebSocket.',
    tech: 'Python, FastAPI, React, PostgreSQL, Redis, Whisper, Edge TTS, VADER',
    href: '/mira',
    featured: true,
  },
  {
    title: 'Quizverse',
    tagline: 'Online quiz platform',
    objective:
      'Deliver a full-stack web application where users can take and manage quizzes, with secure accounts and persistent scores.',
    strategy:
      'Built with Vue and Express for a fast, reactive front end and a scalable API; used MongoDB (Atlas) for data and implemented session-based authentication. Deployed for real-world use to validate performance and security.',
    tech: 'Vue, Express, MongoDB Atlas, session auth, deployment',
    href: null,
    featured: false,
  },
  {
    title: 'TORCS AI Model',
    tagline: 'AI race driver for TORCS simulator',
    objective:
      'Create an AI driver that can compete with in-game opponents in the TORCS racing simulator using collected data and learned behavior.',
    strategy:
      'Collected and cleaned driving data from the simulator, then trained and integrated an AI model to control the vehicle. Focused on end-to-end pipeline: data → model → in-game performance.',
    tech: 'Data collection & cleaning, AI/ML modeling, TORCS',
    href: null,
    featured: false,
  },
  {
    title: 'Flex Trainer',
    tagline: 'Gym management desktop app',
    objective:
      'Provide a single application for gym owners, trainers, and members to manage schedules, memberships, and roles.',
    strategy:
      'Designed role-based interfaces (Admin, Member, Trainer, Owner) with a SQL backend and Windows Forms front end. Ensured clear separation of permissions and a workflow that matches how gyms actually operate.',
    tech: 'C#, Windows Forms, SQL',
    href: null,
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-b border-zinc-800/50 bg-zinc-950/30">
      <div className="section-container section-padding">
        <AnimateIn>
        <div className="max-w-prose">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Work
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Projects & portfolio
          </h2>
          <p className="mt-3 text-zinc-400">
            End-to-end delivery—from objective and strategy to implementation.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          {projects.map((project, i) => {
            const Wrapper = project.href ? Link : 'div'
            const wrapperProps = project.href ? { to: project.href } : {}
            return (
              <Wrapper
                key={i}
                {...wrapperProps}
                className={`group block overflow-hidden rounded-xl border transition ${
                  project.featured
                    ? 'border-violet-500/30 bg-zinc-900/50 hover:border-violet-500/50'
                    : 'border-zinc-700/50 bg-black/50 hover:border-zinc-600'
                }`}
              >
                <div className="p-5 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                          {project.title}
                        </h3>
                        <span
                          className={`rounded-full px-3 py-0.5 text-xs font-medium ${
                            project.featured ? 'bg-violet-500/25 text-violet-300' : 'bg-zinc-700/50 text-zinc-400'
                          }`}
                        >
                          {project.tagline}
                        </span>
                      </div>
                      <dl className="mt-5 space-y-4">
                        <div>
                          <dt className="text-xs font-medium uppercase tracking-wider text-violet-400/90">Objective</dt>
                          <dd className="mt-1 text-sm leading-relaxed text-zinc-300 sm:text-base">{project.objective}</dd>
                        </div>
                        <div>
                          <dt className="text-xs font-medium uppercase tracking-wider text-violet-400/90">Strategy</dt>
                          <dd className="mt-1 text-sm leading-relaxed text-zinc-300 sm:text-base">{project.strategy}</dd>
                        </div>
                      </dl>
                      <p className="mt-4 text-sm text-zinc-500">
                        <span className="text-zinc-400">Tech:</span> {project.tech}
                      </p>
                    </div>
                    {project.href && (
                      <span className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-violet-400 sm:mt-1">
                        View project
                        <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              </Wrapper>
            )
          })}
        </div>
        </AnimateIn>
      </div>
    </section>
  )
}
