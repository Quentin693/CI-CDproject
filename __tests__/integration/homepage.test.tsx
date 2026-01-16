import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

// Mock des composants Next.js
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />
  },
}))

describe('Homepage Integration Test', () => {
  it('renders all main sections', () => {
    render(<Home />)
    
    // Vérifier que les éléments principaux sont présents (il y a plusieurs "Stayava")
    const stayavaElements = screen.getAllByText('Stayava')
    expect(stayavaElements.length).toBeGreaterThan(0)
    expect(screen.getByText(/Exhale Now/i)).toBeInTheDocument()
  })

  it('renders hotel picks section', () => {
    render(<Home />)
    
    // Vérifier que la section hôtels est présente en cherchant un élément spécifique
    const hotelNames = screen.getByText('The Ritz-Carlton, Melbourne')
    expect(hotelNames).toBeInTheDocument()
  })

  it('renders multiple hotel cards', () => {
    render(<Home />)
    
    // Devrait avoir au moins 3 cartes d'hôtels
    const hotelNames = [
      'The Ritz-Carlton, Melbourne',
      'The Langham, Gold Coast',
      "Longitude 131°, Uluru"
    ]
    
    hotelNames.forEach(name => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })
})

