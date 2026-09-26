import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, Download, Heart, X } from 'lucide-react'
import Tooltip from './Tooltip'

const navButtonClass =
  'absolute top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/25 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white active:scale-90'

const actionButtonClass =
  'flex rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition hover:bg-white/25 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white active:scale-90'

const keyClass = 'rounded bg-white/10 px-1.5 py-0.5 font-sans text-slate-200'

function getDownloadName(image) {
  const extension = image.src.split('.').pop()
  const name = image.title.toLowerCase().replace(/\s+/g, '-')
  return `${name}.${extension}`
}

function Lightbox({ images, currentIndex, favorites, onToggleFavorite, onClose, onPrev, onNext }) {
  const image = images[currentIndex]
  const isFavorite = favorites.includes(image.id)

  // Keyboard controls: Escape, Left Arrow, Right Arrow
  useEffect(() => {
    function handleKeyDown(event) {
      switch (event.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          event.preventDefault()
          onPrev()
          break
        case 'ArrowRight':
          event.preventDefault()
          onNext()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, onPrev, onNext])

  // Stop the page behind from scrolling while the lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
      className="animate-fade-in fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
    >
      {/* Top-right action buttons */}
      <div className="absolute top-4 right-4 flex gap-2">
        <Tooltip text="Download">
          <a href={image.src}
            download={getDownloadName(image)}
            aria-label={`Download ${image.title}`}
            className={actionButtonClass}
          >
            <Download className="h-6 w-6" />
          </a>
        </Tooltip>

        <Tooltip text={isFavorite ? 'Remove favorite' : 'Add to favorites'}>
          <button
            type="button"
            onClick={() => onToggleFavorite(image.id)}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            aria-pressed={isFavorite}
            className={actionButtonClass}
          >
            <Heart className={`h-6 w-6 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>
        </Tooltip>

        <Tooltip text="Close">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className={actionButtonClass}
          >
            <X className="h-6 w-6" />
          </button>
        </Tooltip>
      </div>

      {/* Previous button */}
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous image"
        className={`${navButtonClass} left-2 sm:left-6`}
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      {/* Image and caption */}
      <figure key={image.id} className="animate-fade-in flex max-w-5xl flex-col items-center">
        <img
          src={image.src}
          alt={image.title}
          className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
        />
        <figcaption className="mt-4 text-center text-white">
          <h3 className="text-lg font-semibold">{image.title}</h3>
          <p className="text-sm text-slate-300 capitalize">
            {image.category} • {currentIndex + 1} / {images.length}
          </p>
          <p className="mt-3 hidden text-xs text-slate-400 sm:block">
            Use <kbd className={keyClass}>←</kbd> <kbd className={keyClass}>→</kbd> to navigate,{' '}
            <kbd className={keyClass}>Esc</kbd> to close
          </p>
        </figcaption>
      </figure>

      {/* Next button */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Next image"
        className={`${navButtonClass} right-2 sm:right-6`}
      >
        <ChevronRight className="h-7 w-7" />
      </button>
    </div>
  )
}

export default Lightbox