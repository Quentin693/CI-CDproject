export interface Hotel {
  id: string
  name: string
  location: string
  price: string
  rating: number
  image: string
  description: string
  longDescription: string
  amenities: string[]
  images: string[]
  rooms: number
  guests: number
  bedrooms: number
  bathrooms: number
}

export const hotelsData: Hotel[] = [
  {
    id: 'ritz-carlton-melbourne',
    name: 'The Ritz-Carlton, Melbourne',
    location: 'Malbern, Australia',
    price: '$1,240,000',
    rating: 5.0,
    image: '/grece.jpg',
    description: 'Un hôtel de luxe exceptionnel avec vue panoramique sur la mer Égée',
    longDescription: `Découvrez l'incarnation du luxe méditerranéen au Ritz-Carlton Melbourne. 
    Niché sur les falaises pittoresques avec une vue imprenable sur la mer turquoise, cet établissement 
    offre une expérience incomparable alliant sophistication et détente. Chaque suite est méticuleusement 
    conçue pour offrir le summum du confort, avec des terrasses privées, des piscines à débordement et 
    un accès direct à la plage privée.`,
    amenities: [
      'Piscine privée à débordement',
      'Spa de luxe & Wellness Center',
      'Restaurant gastronomique étoilé',
      'Plage privée avec service de conciergerie',
      'WiFi haut débit gratuit',
      'Service de chambre 24h/24',
      'Parking privé & voiturier',
      'Salle de sport équipée',
      'Héliport privé',
      'Service de majordome personnel'
    ],
    images: ['/grece.jpg', '/plage.avif', '/ile1.jpg'],
    rooms: 1,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2
  },
  {
    id: 'langham-gold-coast',
    name: 'The Langham, Gold Coast',
    location: 'Malbern, Australia',
    price: '$1,240,000',
    rating: 5.0,
    image: '/dubai.jpg',
    description: 'Architecture moderne et luxe urbain au cœur de la ville',
    longDescription: `Le Langham Gold Coast redéfinit le luxe moderne avec son architecture audacieuse 
    et ses vues spectaculaires sur la skyline. Cet établissement emblématique propose des suites ultra-modernes 
    avec une technologie de pointe, des piscines sur le toit et un accès privilégié aux meilleures expériences 
    de la ville. Un véritable sanctuaire urbain où l'excellence du service rencontre l'innovation.`,
    amenities: [
      'Rooftop infinity pool',
      'Spa signature avec hammam',
      'Restaurant fusion asiatique',
      'Bar panoramique au 50ème étage',
      'Salle de cinéma privée',
      'Business center équipé',
      'Service de limousine',
      'Personal shopper',
      'Club lounge exclusif',
      'Terrasse panoramique privée'
    ],
    images: ['/dubai.jpg', '/grece.jpg', '/plage.avif'],
    rooms: 1,
    guests: 6,
    bedrooms: 3,
    bathrooms: 3
  },
  {
    id: 'longitude-uluru',
    name: "Longitude 131°, Uluru",
    location: 'Malbern, Australia',
    price: '$1,240,000',
    rating: 5.0,
    image: '/ile.webp',
    description: 'Une escapade tropicale exclusive sur une île paradisiaque',
    longDescription: `Longitude 131° offre l'expérience ultime de l'île privée. Accessible uniquement 
    par bateau privé ou hélicoptère, ce resort exclusif vous plonge dans un paradis tropical préservé. 
    Avec ses villas sur pilotis, ses lagons cristallins et ses plages de sable blanc immaculées, 
    c'est la destination idéale pour ceux qui recherchent l'intimité et le luxe absolu.`,
    amenities: [
      'Villa sur pilotis avec accès direct à la mer',
      'Piscine naturelle privée',
      'Chef personnel à disposition',
      'Centre de plongée PADI',
      'Excursions en yacht privé',
      'Spa en plein air',
      'Activités nautiques illimitées',
      'Observation des dauphins',
      'Cours de cuisine locale',
      'Cinéma sous les étoiles'
    ],
    images: ['/ile.webp', '/ile1.jpg', '/plage.avif'],
    rooms: 1,
    guests: 8,
    bedrooms: 4,
    bathrooms: 4
  }
]

export function getHotelById(id: string): Hotel | undefined {
  return hotelsData.find(hotel => hotel.id === id)
}

