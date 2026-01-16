import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header Component', () => {
  it('renders the logo', () => {
    render(<Header />)
    const logo = screen.getByText('Stayava')
    expect(logo).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Accueil')).toBeInTheDocument()
    expect(screen.getByText('Chambres')).toBeInTheDocument()
    expect(screen.getByText('Équipements')).toBeInTheDocument()
    expect(screen.getByText('À propos')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the booking button', () => {
    render(<Header />)
    const bookButton = screen.getByRole('button', { name: /réserver/i })
    expect(bookButton).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<Header />)
    expect(screen.getByText('+01 782 7886 12')).toBeInTheDocument()
  })
})

