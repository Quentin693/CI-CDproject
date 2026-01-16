'use client'

import { Phone } from 'lucide-react'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <div className="w-4 h-4 text-primary-blue">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
            </div>
            <span className="text-white text-xl font-semibold">Stayava</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white hover:text-yellow-400 hover:underline transition">Accueil</a>
            <a href="#room" className="text-white hover:text-yellow-400 hover:underline transition">Chambres</a>
            <a href="#facilities" className="text-white hover:text-yellow-400 hover:underline transition">Équipements</a>
            <a href="#about" className="text-white hover:text-yellow-400 hover:underline transition">À propos</a>
            <a href="#contact" className="text-white hover:text-yellow-400 hover:underline transition">Contact</a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-white">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+01 782 7886 12</span>
            </div>
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-yellow-400 hover:scale-105 transition-all duration-300">
              Réserver
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

