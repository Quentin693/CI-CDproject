import { getHotelById, hotelsData } from '@/lib/hotels-data'

describe('Hotels Data', () => {
  it('should have 3 hotels', () => {
    expect(hotelsData).toHaveLength(3)
  })

  it('each hotel should have required fields', () => {
    hotelsData.forEach(hotel => {
      expect(hotel).toHaveProperty('id')
      expect(hotel).toHaveProperty('name')
      expect(hotel).toHaveProperty('location')
      expect(hotel).toHaveProperty('price')
      expect(hotel).toHaveProperty('rating')
      expect(hotel).toHaveProperty('image')
      expect(hotel).toHaveProperty('description')
      expect(hotel).toHaveProperty('amenities')
    })
  })

  it('should get hotel by id', () => {
    const hotel = getHotelById('ritz-carlton-melbourne')
    expect(hotel).toBeDefined()
    expect(hotel?.name).toBe('The Ritz-Carlton, Melbourne')
  })

  it('should return undefined for invalid id', () => {
    const hotel = getHotelById('invalid-id')
    expect(hotel).toBeUndefined()
  })

  it('all hotels should have 5.0 rating', () => {
    hotelsData.forEach(hotel => {
      expect(hotel.rating).toBe(5.0)
    })
  })

  it('all hotels should have amenities', () => {
    hotelsData.forEach(hotel => {
      expect(hotel.amenities.length).toBeGreaterThan(0)
    })
  })
})

