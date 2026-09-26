import { Aperture } from 'lucide-react'

const techStack = ['React (Vite)', 'Tailwind CSS', 'JavaScript', 'Local Storage']

const linkClass =
  'text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400'

const headingClass =
  'text-sm font-semibold tracking-wider text-slate-800 uppercase dark:text-white'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="about"
      className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        {/* About */}
        <div>
          <div className="flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-white">
            <Aperture className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span>
              Atharva<span className="text-indigo-600 dark:text-indigo-400">Gallery</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-slate-500 dark:text-slate-400">
            A responsive image gallery with search, category filters, favorites, dark mode and a
            keyboard-friendly lightbox.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className={headingClass}>Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#home" className={linkClass}>
                Home
              </a>
            </li>
            <li>
              <a href="#gallery" className={linkClass}>
                Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* Tech stack */}
        <div>
          <h3 className={headingClass}>Built with</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 px-4 py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © {year} Atharva · Built for the CodeAlpha Frontend Development Internship
      </div>
    </footer>
  )
}

export default Footer