import { render, screen } from '@testing-library/react'
import HeroSection from '@/components/HeroSection'

describe('HeroSection Component', () => {
  it('renders the main title', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Exhale Now/i)).toBeInTheDocument()
    expect(screen.getByText(/Check In/i)).toBeInTheDocument()
  })

  it('renders the booking button', () => {
    render(<HeroSection />)
    const bookButton = screen.getByRole('button', { name: /book your stay/i })
    expect(bookButton).toBeInTheDocument()
  })

  it('renders the background image', () => {
    const { container } = render(<HeroSection />)
    // Vérifier qu'une section existe
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    // Vérifier que l'image est présente
    const image = screen.getByAltText('Luxury beach resort')
    expect(image).toBeInTheDocument()
  })
})

