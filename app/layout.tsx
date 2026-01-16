import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stayava - Luxury Hotel Booking',
  description: 'Book your dream luxury hotel stay',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

