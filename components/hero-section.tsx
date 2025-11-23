"use client"

import { useEffect, useState } from 'react'
import { GradientBackground } from './GradientBackground'
import { DecorativeText } from './DecorativeText'
import { HeroContent } from './HeroContent'
import Image from 'next/image'

export function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const progress = Math.min(scrollPosition / (windowHeight * 2), 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Text fades out
  const textOpacity = Math.max(0, 1 - scrollProgress * 3)

  // Hand scales up
  const handScale = 1 + (scrollProgress * 2.5)
  const handOpacity = scrollProgress < 0.6 ? 1 : Math.max(0, 1 - (scrollProgress - 0.6) * 2.5)

  // Phone screen content scales with hand
  const phoneContentScale = 1 + (scrollProgress * 2.5)
  const phoneContentOpacity = scrollProgress > 0.2 ? Math.min((scrollProgress - 0.2) / 0.2, 1) : 0

  // HeroContent appears when fully zoomed
  const heroContentOpacity = scrollProgress > 0.8 ? Math.min((scrollProgress - 0.8) / 0.2, 1) : 0

  return (
    <section className="relative min-h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background */}
        <GradientBackground />

        {/* Decorative text */}
        <div style={{ opacity: textOpacity }}>
          <DecorativeText scrollProgress={scrollProgress} />
        </div>

        {/* Hand with phone - scales up */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700 ease-out"
          style={{ 
            opacity: handOpacity,
            transform: `scale(${handScale})`
          }}
        >
          <div className="relative w-full h-full max-w-[700px] max-h-[1200px]">
            <Image
              src="/image/hand.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Hand holding phone with music player"
              priority
              quality={100}
            />
          </div>
        </div>

        {/* HeroContent appears when fully zoomed */}
        <div 
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-700 px-6"
          style={{
            opacity: heroContentOpacity,
            pointerEvents: heroContentOpacity > 0.8 ? 'auto' : 'none'
          }}
        >
          <HeroContent />
        </div>
      </div>
    </section>
  )
}
