function Tooltip({ text, children }) {
  return (
    <div className="group relative">
      {children}

      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 rounded-md bg-white px-2 py-1 text-xs font-medium whitespace-nowrap text-slate-900 opacity-0 shadow-lg transition duration-200 group-focus-within:opacity-100 group-hover:opacity-100"
      >
        {text}
      </span>
    </div>
  )
}

export default Tooltip