import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Star, Users, Bed, Bath, Wifi, Utensils, Waves, Dumbbell, CheckCircle } from 'lucide-react'
import { getHotelById, hotelsData } from '@/lib/hotels-data'

export async function generateStaticParams() {
  return hotelsData.map((hotel) => ({
    id: hotel.id,
  }))
}

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  const hotel = getHotelById(params.id)

  if (!hotel) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="bg-gray-900 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <Link 
            href="/" 
            className="flex items-center gap-2 hover:text-gray-300 transition w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </div>

      {/* Hero Image Gallery */}
      <section className="relative h-[60vh] bg-gray-100">
        <div className="container mx-auto px-6 h-full py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
            {/* Main Image */}
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden">
              <Image
                src={hotel.images[0]}
                alt={hotel.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Side Images */}
            <div className="hidden md:flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden flex-1">
                <Image
                  src={hotel.images[1] || hotel.image}
                  alt={`${hotel.name} - vue 2`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden flex-1">
                <Image
                  src={hotel.images[2] || hotel.image}
                  alt={`${hotel.name} - vue 3`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Location */}
            <div>
              <div className="flex items-center gap-2 text-gray-500 mb-3">
                <MapPin className="w-5 h-5" />
                <span>{hotel.location}</span>
              </div>
              <h1 className="text-5xl font-serif text-gray-900 mb-4">
                {hotel.name}
              </h1>
              <p className="text-xl text-gray-600">
                {hotel.description}
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 py-6 border-y border-gray-200">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{hotel.guests} invités</span>
              </div>
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{hotel.bedrooms} chambres</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{hotel.bathrooms} salles de bain</span>
              </div>
              <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-900">{hotel.rating}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                À propos de cet établissement
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {hotel.longDescription}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-6">
                Équipements & Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hotel.amenities.map((amenity, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <Wifi className="w-6 h-6 text-cyan-600" />
                </div>
                <span className="text-sm text-gray-700">WiFi Gratuit</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <Utensils className="w-6 h-6 text-cyan-600" />
                </div>
                <span className="text-sm text-gray-700">Restaurant</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <Waves className="w-6 h-6 text-cyan-600" />
                </div>
                <span className="text-sm text-gray-700">Piscine</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <Dumbbell className="w-6 h-6 text-cyan-600" />
                </div>
                <span className="text-sm text-gray-700">Spa & Fitness</span>
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {hotel.price}
                  </div>
                  <p className="text-gray-500">par séjour</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="border border-gray-300 rounded-lg p-4">
                    <label className="text-sm text-gray-600 mb-1 block">Check-in</label>
                    <input 
                      type="date" 
                      className="w-full text-gray-900 outline-none"
                    />
                  </div>
                  <div className="border border-gray-300 rounded-lg p-4">
                    <label className="text-sm text-gray-600 mb-1 block">Check-out</label>
                    <input 
                      type="date" 
                      className="w-full text-gray-900 outline-none"
                    />
                  </div>
                  <div className="border border-gray-300 rounded-lg p-4">
                    <label className="text-sm text-gray-600 mb-1 block">Invités</label>
                    <select className="w-full text-gray-900 outline-none">
                      <option>1 invité</option>
                      <option>2 invités</option>
                      <option>3 invités</option>
                      <option>4 invités</option>
                      <option>5+ invités</option>
                    </select>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition shadow-lg">
                  Réserver maintenant
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Vous ne serez pas débité pour le moment
                </p>

                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <div className="flex justify-between text-gray-700">
                    <span>Prix de base</span>
                    <span>{hotel.price}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Frais de service</span>
                    <span>Inclus</span>
                  </div>
                  <div className="flex justify-between font-semibold text-gray-900 text-lg pt-3 border-t border-gray-200">
                    <span>Total</span>
                    <span>{hotel.price}</span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="mt-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-3">Besoin d'aide ?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Notre équipe est disponible 24h/24 pour répondre à vos questions
                </p>
                <button className="w-full bg-white text-gray-900 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                  Contacter le concierge
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Hotels */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-gray-900 mb-8">
            Établissements similaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hotelsData
              .filter(h => h.id !== hotel.id)
              .slice(0, 2)
              .map((similarHotel) => (
                <Link
                  key={similarHotel.id}
                  href={`/hotel/${similarHotel.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
                >
                  <div className="relative h-64">
                    <Image
                      src={similarHotel.image}
                      alt={similarHotel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                      <span className="font-semibold text-sm">{similarHotel.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-serif text-gray-900 mb-2 group-hover:text-cyan-600 transition">
                      {similarHotel.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{similarHotel.location}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {similarHotel.price}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}

