import { Award, Home, MapPin } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      number: '01',
      icon: Award,
      title: 'Hospitality',
      description: 'Warm hospitality from the moment you arrive'
    },
    {
      number: '02',
      icon: Home,
      title: 'Rooms',
      description: 'Stylish rooms designed and dedicated to total comfort'
    },
    {
      number: '04',
      icon: MapPin,
      title: 'Location',
      description: 'Great access & prime location close to everything you love'
    }
  ]

  return (
    <section className="relative -mt-32 z-30 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-2">
                    {feature.number} — {feature.title}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

