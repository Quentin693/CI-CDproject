import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function ConfidenceSection() {
  const options = [
    {
      number: '01',
      title: 'Find Your Future Home',
      description: 'We help you find a home offering a curated estate experience'
    },
    {
      number: '02',
      title: 'Experienced Agent',
      description: 'Find a customer agent testtt who knows your market best'
    },
    {
      number: '03',
      title: 'Buy Or Rents Home',
      description: 'Millions of houses and apartments in your favourite cities'
    },
    {
      number: '04',
      title: 'List Your Own Property',
      description: 'Sign up now and sell or rent your own properties'
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
              <Image
                src="/ile1.jpg"
                alt="Luxury resort with pool"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-5xl font-serif text-gray-900 mb-6">
              Choose with Confidence
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-gray-600 leading-relaxed">
                At our Resorts and Residences, we foster positive relationships — to nature, to others, and to yourself for your own life.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Here, well-being and attention come together with every stay, leaving a positive impact on the mind, body and...
              </p>
            </div>

            <div className="space-y-4">
              {options.map((option, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-gray-300 group-hover:text-gray-400 transition">
                      {option.number}
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {option.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {option.description}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

