"use client"

import { useState, useRef } from "react"
import { Space_Grotesk } from 'next/font/google'

// Initialize font
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

const carouselItems = [
  {
    id: 1,
    avatar: "👩‍🎨",
    name: "Felicia",
    background: "bg-pink-100", // Matched theme
    text: "FEL",
    description: "Creative designer with colorful style"
  },
  {
    id: 2,
    avatar: "👨‍💻",
    name: "Alex",
    background: "bg-orange-100", // Matched theme
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
  },
  {
    id: 4,
    avatar: "🚀",
    name: "Sarah",
    background: "bg-blue-100",
    text: "SAR",
    description: "Crypto native builder shipping daily"
  }
]

export function TrendingBlocks() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    setActiveIndex(index)
    if (scrollContainerRef.current) {
      const cardWidth = 288 + 24 // card width (w-72 = 288px) + gap (gap-6 = 24px)
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden border-t border-white/10">
      
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-pink-900/20 rounded-full blur-[150px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-orange-600/30 rounded-full blur-[180px] opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-sm text-pink-400 mb-6 shadow-sm font-semibold">
            Gallery
          </div>
          <h2 className={`${spaceGrotesk.className} text-5xl md:text-6xl font-bold text-white mb-6`}>
            Trending Creators
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Where Influence Meets Value
          </p>
        </div>

        {/* Main Container Box */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-8 md:p-12 mb-12 shadow-2xl relative overflow-hidden">
          
          <div className="flex items-center justify-between mb-8 px-2">
            <div>
               <div className="flex items-center gap-3 mb-2">
                 <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs uppercase tracking-wider font-bold rounded-full">
                   Latest Drops
                 </span>
               </div>
               <h3 className={`${spaceGrotesk.className} text-3xl font-bold text-white`}>
                 Creator Vaults
               </h3>
            </div>
            {/* Slider Controls (Visual only) */}
            <div className="flex gap-2">
               <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 cursor-pointer text-white">
                 ←
               </div>
               <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 cursor-pointer text-white">
                 →
               </div>
            </div>
          </div>
          
          {/* SCROLLABLE CAROUSEL CONTAINER */}
          {/* 'pb-4' adds space for shadow, 'snap-x' aligns cards */}
          <div ref={scrollContainerRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar">
            {carouselItems.map((item) => (
              <div key={item.id} className="snap-center flex-shrink-0 first:pl-4 last:pr-4">
                <div className="group cursor-pointer">
                    <div className={`${item.background} rounded-[2rem] p-6 text-center relative overflow-hidden w-72 h-96 shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl`}>
                      
                      {/* Avatar */}
                      <div className="text-7xl mb-8 mt-4 transform transition-transform group-hover:scale-110 duration-300">
                        {item.avatar}
                      </div>
                      
                      {/* Top Right Tag */}
                      <div className="absolute top-6 right-6 text-gray-900/20 text-xl font-black tracking-wider">
                        {item.text}
                      </div>
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 w-full p-6 bg-white/40 backdrop-blur-md border-t border-white/20">
                         <h4 className={`${spaceGrotesk.className} font-bold text-gray-900 mb-1 text-2xl`}>
                           {item.name}
                         </h4>
                         <p className="text-sm text-gray-700 font-medium leading-snug line-clamp-2">
                           {item.description}
                         </p>
                      </div>
                    </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-6 relative z-20">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer border-0 ${
                  index === activeIndex ? 'bg-pink-500 w-8' : 'bg-gray-600 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}