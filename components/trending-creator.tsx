"use client"

import { ChevronRight, Settings } from "lucide-react"

const carouselItems = [
  {
    id: 1,
    avatar: "👩‍🎨",
    name: "Felicia",
    background: "bg-purple-100",
    text: "FEL",
    description: "Creative designer with colorful style"
  },
  {
    id: 2,
    avatar: "👨‍💻",
    name: "Alex",
    background: "bg-gray-100",
    text: "AJS",
    description: "Tech enthusiast with green glasses"
  },
  {
    id: 3,
    avatar: "👨‍🎓",
    name: "Marcus",
    background: "bg-purple-100",
    text: "mare",
    description: "Curly-haired developer with smartphone"
  }
]

export function TrendingBlocks() {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 to-white pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm text-sm text-gray-600 mb-6 shadow-sm">
            Gallery
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Trending Creators
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Where Influence Meets Value
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-8 mb-12 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">
              Latest Creators
            </span>
          </div>
          
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Creator Card
          </h3>
          
          <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center">
            {carouselItems.map((item) => (
              <div key={item.id} className="shrink-0 transition-transform hover:-translate-y-1 duration-300">
                <div className={`${item.background} rounded-2xl p-6 text-center relative overflow-hidden w-64 h-80 shadow-inner`}>
                  <div className="text-6xl mb-6">{item.avatar}</div>
                  <div className="absolute top-4 right-4 text-gray-900/40 text-lg font-bold">
                    {item.text}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-xl">{item.name}</h4>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {carouselItems.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === 0 ? 'bg-pink-500' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Each Creator is Important
            </h3>
          </div>
          
          <p className="text-xl text-gray-500 mb-8">
            Built to <span className="font-bold text-pink-500">run</span>. Built to <span className="font-bold text-pink-500">scale</span>.
          </p>

          <div className="flex justify-center mb-8 opacity-50">
            <div className="flex flex-col gap-1">
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-gray-400"></div>
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-gray-400"></div>
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-gray-400"></div>
            </div>
          </div>

          <a 
            href="/vaults"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Settings className="w-5 h-5" />
            Get started
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
