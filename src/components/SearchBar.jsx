import { Search, X } from 'lucide-react'

function SearchBar({ value, onChange }) {
  return (
    <div className="relative mx-auto mb-6 max-w-xl">
      <Search className="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400 dark:text-slate-500" />

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by title or category..."
        aria-label="Search images by title or category"
        className="w-full rounded-full border border-slate-200 bg-white py-3 pr-12 pl-12 text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 focus:outline-hidden dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-200"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

export default SearchBar