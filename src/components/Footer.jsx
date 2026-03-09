import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-black">
      <div className="section-container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Zain Bin Asad. Portfolio for Digital Marketing.
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:zainbinasad@gmail.com"
            className="text-sm text-zinc-500 transition hover:text-violet-400"
          >
            Email
          </a>
          <Link to="/mira" className="text-sm text-zinc-500 transition hover:text-violet-400">
            Mira
          </Link>
          <a
            href="https://www.linkedin.com/in/zain-asad-2513a31a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition hover:text-violet-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Zain-Asad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition hover:text-violet-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
