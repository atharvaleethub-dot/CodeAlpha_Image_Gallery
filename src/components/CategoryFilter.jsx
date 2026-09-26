import { Heart } from 'lucide-react'

const categories = ['all', 'nature', 'cities', 'animals', 'food', 'technology', 'favorites']

function CategoryFilter({ activeCategory, onSelect, favoritesCount }) {
  return (
    <div
      role="group"
      aria-label="Filter images by category"
      className="no-scrollbar -mx-4 mb-5 flex gap-3 overflow-x-auto px-4 py-3 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category
        const isFavorites = category === 'favorites'

        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            aria-pressed={isActive}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap capitalize transition duration-300 active:scale-95 ${
              isActive
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 dark:bg-indigo-500'
                : 'bg-white text-slate-600 shadow-sm hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
            }`}
          >
            {isFavorites && <Heart className="h-4 w-4" />}
            {isFavorites ? `${category} (${favoritesCount})` : category}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter