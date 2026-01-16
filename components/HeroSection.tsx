import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/plage.avif"
          alt="Luxury beach resort"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-tight drop-shadow-2xl">
          Exhale Now,<br />
          Check In.
        </h1>
        <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition shadow-lg">
          Book your stay
        </button>
      </div>
    </section>
  )
}

