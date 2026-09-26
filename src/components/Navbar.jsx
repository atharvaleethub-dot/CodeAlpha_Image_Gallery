import { useState } from 'react'
import { Aperture, Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
]

function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 shadow-sm backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-900/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-white">
          <Aperture className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
          <span>
            Atharva<span className="text-indigo-600 dark:text-indigo-400">Gallery</span>
          </span>
        </a>

        {/* Links, theme toggle and mobile menu button */}
        <div className="flex items-center gap-2 md:gap-6">
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white/90 px-4 pb-4 md:hidden dark:border-slate-700 dark:bg-slate-900/95">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar