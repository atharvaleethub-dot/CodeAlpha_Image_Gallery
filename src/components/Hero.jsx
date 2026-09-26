import { ArrowRight, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500"
    >
      {/* Floating background shapes */}
      <div className="animate-float absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div
        className="animate-float absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl"
        style={{ animationDelay: '2s' }}
      />

      {/* Hero content */}
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        {/* Glass badge */}
        <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
          <Sparkles className="h-4 w-4" />A curated collection of photos
        </span>

        {/* Heading */}
        <h1
          className="animate-fade-up mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          style={{ animationDelay: '150ms' }}
        >
          Discover stunning moments in{' '}
          <span className="bg-linear-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
            every frame
          </span>
        </h1>

        {/* Description */}
        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-indigo-100"
          style={{ animationDelay: '300ms' }}
        >
          Browse nature, cities, animals, food and technology. Search, filter, favorite and
          download your best shots in a fast, beautiful gallery.
        </p>

        {/* Buttons */}
        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: '450ms' }}
        >
          <a
            href="#gallery"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-indigo-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95"
          >
            Explore Gallery
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/40 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20 active:scale-95"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero