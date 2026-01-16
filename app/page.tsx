import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import ConfidenceSection from '@/components/ConfidenceSection'
import HotelPicksSection from '@/components/HotelPicksSection'
import BlogSection from '@/components/BlogSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ConfidenceSection />
      <HotelPicksSection />
      <BlogSection />
      <FAQSection />
      <Footer />
    </main>
  )
}

