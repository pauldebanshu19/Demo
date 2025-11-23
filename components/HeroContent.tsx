"use client"

import Link from 'next/link'
import { Sparkles, ArrowRight, Wallet } from "lucide-react"
import { useAccount } from 'wagmi'
import { useState, useEffect } from 'react'
import { Space_Grotesk } from 'next/font/google'

// Initialize the font
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export function HeroContent() {
  const { address } = useAccount()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="max-w-5xl mx-auto text-center space-y-8 px-6 pt-20">
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/30 bg-white/10 px-4 py-2 backdrop-blur shadow-lg">
        <Sparkles className="w-4 h-4 text-orange-200" />
        <span className="text-sm text-orange-50 font-semibold">Welcome to the future of social DeFi</span>
      </div>

      {/* Main Headline */}
      <h1 className={`${spaceGrotesk.className} text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black leading-[0.9] text-balance drop-shadow-sm`}>
        AURA.FARM
        <br />
        <span className="bg-gradient-to-b from-orange-100 to-orange-200/60 bg-clip-text text-transparent">
          FARM.STAKE.EARN
        </span>
      </h1>

      {/* Description */}
      <p className="text-xl text-orange-50/90 max-w-2xl mx-auto leading-relaxed text-balance font-medium">
        Launch collateral-backed fan tokens on Celo. Build communities, earn rewards, and create sustainable creator
        economies with verifiable on-chain reputation.
      </p>

      {/* CTA Buttons with Wagmi Logic */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 items-center">
        <Link
          href="/vaults"
          className="inline-flex items-center gap-2 bg-white text-orange-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all shadow-xl hover:-translate-y-1"
        >
          Browse Vaults
          <ArrowRight className="w-5 h-5" />
        </Link>

        {mounted && address ? (
          <Link
            href="/creator/create"
            className="inline-flex items-center gap-2 bg-black/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-black/30 transition-all backdrop-blur-md hover:-translate-y-1"
          >
            Create Your Vault
            <Sparkles className="w-5 h-5" />
          </Link>
        ) : mounted && !address ? (
          <div className="inline-flex items-center gap-2 bg-black/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg opacity-90 backdrop-blur-md">
            <Wallet className="w-5 h-5" />
            Connect Wallet to Create
          </div>
        ) : (
          <div className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg opacity-75 backdrop-blur-md">
            Loading...
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/20 mt-12 pb-16 relative z-10">
        {[
          { value: "2.5K+", label: "Active Creators" },
          { value: "$50M+", label: "Total Value Locked" },
          { value: "150K+", label: "Community Members" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col gap-3 bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className={`${spaceGrotesk.className} text-5xl md:text-6xl font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]`}>
              {stat.value}
            </div>
            <p className="text-base text-white uppercase tracking-wider font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}