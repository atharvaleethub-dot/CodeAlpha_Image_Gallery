import ImageCard from './ImageCard'
import CategoryFilter from './CategoryFilter'
import SearchBar from './SearchBar'

function Gallery({
  images,
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  onImageClick,
  favorites,
  onToggleFavorite,
}) {
  const noFavoritesYet = activeCategory === 'favorites' && searchTerm.trim() === ''

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl md:text-4xl dark:text-white">
          Explore the Gallery
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-base dark:text-slate-400">
          Browse, search and save your favorite photos.
        </p>
      </div>

      <SearchBar value={searchTerm} onChange={onSearchChange} />

      <CategoryFilter
        activeCategory={activeCategory}
        onSelect={onCategoryChange}
        favoritesCount={favorites.length}
      />

      <p className="mb-6 text-center text-sm text-slate-500 dark:text-slate-400">
        Showing {images.length} {images.length === 1 ? 'photo' : 'photos'}
      </p>

      {images.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {images.map((image, index) => (
            <ImageCard
              key={image.id}
              image={image}
              index={index}
              onOpen={() => onImageClick(index)}
              isFavorite={favorites.includes(image.id)}
              onToggleFavorite={() => onToggleFavorite(image.id)}
            />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-lg text-slate-500 dark:text-slate-400">
          {noFavoritesYet
            ? 'No favorites yet. Tap the heart on any photo to save it.'
            : 'No images found. Try a different search or category.'}
        </p>
      )}
    </section>
  )
}

export default Gallery