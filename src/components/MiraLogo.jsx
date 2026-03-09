import logo from '../assets/mira_logo.svg'
export default function MiraLogo({ className = 'h-14 w-14' }) {
  return (
    <div className={`shrink-0 ${className}`}>
      <img src={logo} alt="Mira Logo" className="h-full w-full" />
    </div>
  )
}
