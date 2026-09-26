import { useState } from 'react'
import { Heart } from 'lucide-react'

function ImageCard({ image, index, onOpen, isFavorite, onToggleFavorite }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <article
      style={{ animationDelay: `${(index % 6) * 80}ms` }}
      className="animate-fade-up group relative overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View ${image.title}`}
        className="block w-full cursor-pointer text-left focus:outline-hidden focus-visible:ring-4 focus-visible:ring-indigo-500/50"
      >
        <div className="relative aspect-4/3 overflow-hidden bg-slate-200 dark:bg-slate-700">
          {/* Skeleton loader: visible until the photo has loaded */}
          {!isLoaded && (
            <div
              aria-hidden="true"
              className="absolute inset-0 animate-pulse bg-slate-300 dark:bg-slate-600"
            />
          )}

          <img
            src={image.src}
            alt={image.title}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsLoaded(true)}
            className={`h-full w-full object-cover transition duration-500 group-hover:scale-110 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-4 opacity-100 transition duration-300 md:opacity-0 md:group-hover:opacity-100">
          <h3 className="font-semibold text-white">{image.title}</h3>
          <p className="text-sm text-slate-200 capitalize">{image.category}</p>
        </div>
      </button>

      <button
        type="button"
        onClick={onToggleFavorite}
        aria-label={isFavorite ? `Remove ${image.title} from favorites` : `Add ${image.title} to favorites`}
        aria-pressed={isFavorite}
        className="absolute top-3 right-3 z-10 rounded-full bg-black/30 p-3 text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-black/50 active:scale-90 sm:p-2"
      >
        <Heart
          className={`h-5 w-5 ${isFavorite ? 'animate-pop fill-rose-500 text-rose-500' : ''}`}
        />
      </button>
    </article>
  )
}

export default ImageCard