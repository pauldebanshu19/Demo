"use client"

import { useState, useRef, useEffect } from "react"
import { Space_Grotesk } from 'next/font/google'
import Image from "next/image"

// Initialize font
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

const carouselItems = [
  {
    id: 1,
    image: "/image/creator1.png",
    background: "bg-[#A3B8C8]", // Muted blue-grey
    text: "marc",
  },
  {
    id: 2,
    image: "/image/creator2.png",
    background: "bg-[#B4A8D3]", // Muted purple
    text: "FEL",
  },
  {
    id: 3,
    image: "/image/creator3.png",
    background: "bg-[#D6D2C8]", // Beige/Bone
    text: "AJ",
  }
]

export function CardCarousel() {
  const [activeIndex, setActiveIndex] = useState(1) // Start at index 1 to show center card
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, carouselItems.length - 1))
    setActiveIndex(clampedIndex)
    if (scrollContainerRef.current) {
      // Calculate scroll position to center the selected item
      const cardWidth = 288 + 24 // card width + gap
      const containerWidth = scrollContainerRef.current.offsetWidth
      const scrollPosition = (clampedIndex * cardWidth) - (containerWidth / 2) + (cardWidth / 2)
      scrollContainerRef.current.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth'
      })
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        scrollToIndex(activeIndex - 1)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        scrollToIndex(activeIndex + 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex])

  // Handle mouse wheel navigation
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      // Check if wheel event is over the carousel
      const rect = container.getBoundingClientRect()
      const isOverCarousel = 
        e.clientX >= rect.left && 
        e.clientX <= rect.right && 
        e.clientY >= rect.top && 
        e.clientY <= rect.bottom

      if (isOverCarousel) {
        e.preventDefault()
        if (e.deltaY < 0) {
          // Scroll up = previous item
          scrollToIndex(activeIndex - 1)
        } else {
          // Scroll down = next item
          scrollToIndex(activeIndex + 1)
        }
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [activeIndex])

  return (
    <section className={`relative bg-black py-24 px-6 overflow-hidden border-t border-white/10 ${spaceGrotesk.className}`}>
      
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-pink-900/20 rounded-full blur-[150px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-orange-600/30 rounded-full blur-[180px] opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Trending Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-sm text-pink-400 mb-6 shadow-sm font-semibold">
            Gallery
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Trending Creators
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Where Influence Meets Value
          </p>
        </div>

        {/* Main Container Box */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-4xl p-8 md:p-12 mb-12 shadow-2xl relative overflow-hidden">
          
          <div className="flex items-center justify-center mb-8">
            <div>
               <div className="flex items-center gap-3 mb-2 justify-center">
                 <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs uppercase tracking-wider font-bold rounded-full">
                   Latest Drops
                 </span>
               </div>
               <h3 className="text-3xl font-bold text-white text-center">
                 Creator Vaults
               </h3>
            </div>
          </div>
          
          {/* Scrollable Area - Centered Layout */}
          <div className="flex justify-center overflow-hidden">
            <div 
              ref={scrollContainerRef} 
              className="flex gap-6 pb-8 scroll-smooth"
              style={{ scrollBehavior: 'smooth' }}
            >
              {carouselItems.map((item, index) => {
                const isActive = index === activeIndex;
                
                return (
                  <div 
                    key={item.id} 
                    className="transition-all duration-500 ease-out shrink-0"
                    onClick={() => scrollToIndex(index)}
                  >
                    <div 
                        className={`
                          relative overflow-hidden rounded-4xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                          ${isActive ? 'w-72 h-96 opacity-100 scale-100 z-10 shadow-2xl' : 'w-72 h-96 opacity-40 scale-75 grayscale z-0'}
                        `}
                    >
                        {/* Card Background */}
                        <div className={`absolute inset-0 ${item.background}`} />
                        
                        {/* Top Labels (Visual decoration) */}
                        <div className="absolute top-4 left-0 w-full px-6 flex justify-between text-[10px] uppercase tracking-widest text-white/40 font-bold z-20">
                            <span>Topic for feed</span>
                            <span>Singapore Airlines</span>
                        </div>

                        {/* Creator Image */}
                        <div className="relative w-full h-full flex items-center justify-center z-20">
                          <Image
                            src={item.image}
                            alt={`Creator ${item.id}`}
                            width={288}
                            height={384}
                            className="object-cover w-full h-full"
                            priority={isActive}
                          />
                        </div>

                        {/* Liquid/Distorted Text behind Avatar */}
                        <div className="absolute top-24 left-0 w-full text-center z-10 opacity-20">
                            <span className="text-[8rem] leading-none font-black text-white mix-blend-overlay blur-sm">
                                {item.text}
                            </span>
                        </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8 relative z-20">
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