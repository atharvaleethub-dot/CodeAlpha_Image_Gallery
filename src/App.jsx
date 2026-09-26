import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Lightbox from './components/Lightbox'
import Footer from './components/Footer'
import images from './data/images'
import useLocalStorage from './hooks/useLocalStorage'

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [lightboxImages, setLightboxImages] = useState([])
  const [theme, setTheme] = useLocalStorage('theme', systemTheme)
  const [favorites, setFavorites] = useLocalStorage('favorites', [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((favoriteId) => favoriteId !== id) : [...current, id],
    )
  }

  const filteredImages = images.filter((image) => {
    const matchesCategory =
      activeCategory === 'all' ||
      (activeCategory === 'favorites'
        ? favorites.includes(image.id)
        : image.category === activeCategory)

    const query = searchTerm.trim().toLowerCase()
    const matchesSearch =
      image.title.toLowerCase().includes(query) ||
      image.category.toLowerCase().includes(query)

    return matchesCategory && matchesSearch
  })

  const openLightbox = (index) => {
    setLightboxImages(filteredImages)
    setSelectedIndex(index)
  }

  const closeLightbox = () => setSelectedIndex(null)

  const showPrev = () =>
    setSelectedIndex((current) => (current - 1 + lightboxImages.length) % lightboxImages.length)

  const showNext = () =>
    setSelectedIndex((current) => (current + 1) % lightboxImages.length)

  return (
    <div className="min-h-screen bg-slate-50 transition-colors duration-300 dark:bg-slate-950">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Gallery
          images={filteredImages}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onImageClick={openLightbox}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </main>

      <Footer />

      {selectedIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={selectedIndex}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </div>
  )
}

export default App