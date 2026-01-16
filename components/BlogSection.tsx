'use client'

import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'

export default function BlogSection() {
  const posts = [
    {
      id: 1,
      category: 'Booking Hotel',
      date: '12 Sep 2025',
      title: 'Why Boutique Hotels Are Redefining Luxury Travel ...',
      image: 'from-cyan-300 to-blue-400'
    },
    {
      id: 2,
      category: 'Booking Hotel',
      date: '12 Sep 2025',
      title: 'Top 5 Affordable Things to Look for When Booking a Hotel ...',
      image: 'from-sky-300 to-cyan-400'
    },
    {
      id: 3,
      category: 'Booking Hotel',
      date: '12 Sep 2025',
      title: "A Weekend at The Langham: Gold Coast's Newest Luxury Gem ...",
      image: 'from-blue-300 to-cyan-300'
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl font-serif text-gray-900 mb-4">
              From Our Blog
            </h2>
            <p className="text-gray-600">
              At vestibulum pharetra leo nullam quis nibh pellentesque
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="hidden md:flex gap-2">
            <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition cursor-pointer group"
            >
              {/* Image */}
              <div className={`h-64 bg-gradient-to-br ${post.image} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-3/4 h-3/4 bg-white/30 backdrop-blur-sm rounded-xl shadow-2xl transform group-hover:scale-105 transition">
                    <div className="h-1/3 bg-white/40 rounded-t-xl" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 leading-tight group-hover:text-gray-700 transition">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

