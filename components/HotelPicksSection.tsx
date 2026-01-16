'use client'

import { ChevronLeft, ChevronRight, MapPin, Star } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { hotelsData } from '@/lib/hotels-data'

export default function HotelPicksSection() {
  const hotels = hotelsData

  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl font-serif text-gray-900 mb-4">
              Our Hotel Picks
            </h2>
            <p className="text-gray-600 max-w-2xl">
              At vestibulum pharetra leo nullam quis nibh pellentesque vestibulum. In massa, eu sed nunc massa ridiculus lacus quis purus commodo
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setCurrentIndex(Math.min(hotels.length - 1, currentIndex + 1))}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition disabled:opacity-50"
              disabled={currentIndex === hotels.length - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hotel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <Link 
              key={hotel.id}
              href={`/hotel/${hotel.id}`}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 group-hover:shadow-2xl transition-shadow">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Rating badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1 z-10">
                  <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                  <span className="font-semibold text-sm">{hotel.rating}</span>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-2xl font-serif text-gray-900 mb-2 group-hover:text-gray-700 transition">
                  {hotel.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{hotel.location}</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {hotel.price}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

