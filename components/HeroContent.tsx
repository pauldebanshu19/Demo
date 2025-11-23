"use client"

import Link from 'next/link'
import { Sparkles } from "lucide-react"
import { useAccount } from 'wagmi'
import { useState, useEffect } from 'react'

export function HeroContent() {
  const { address } = useAccount()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="max-w-5xl mx-auto text-center space-y-8 px-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-400/10 px-4 py-2 backdrop-blur">
        <Sparkles className="w-4 h-4 text-emerald-400" />
        <span className="text-sm text-emerald-300 font-semibold">Welcome to the future of social DeFi</span>
      </div>

      <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-white leading-tight text-balance">
        FARM.STAKE.EARN
        <br />
        <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Powered by Aura
        </span>
      </h1>

      <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-balance">
        Launch collateral-backed fan tokens on Celo. Build communities, earn rewards, and create sustainable creator
        economies with transparent, decentralized infrastructure.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <Link
          href="/vaults"
          className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-lg font-bold text-base hover:bg-gray-100 shadow-lg"
        >
          Browse Creator Vaults
        </Link>

        {mounted && address ? (
          <Link
            href="/creator/create"
            className="inline-flex items-center justify-center bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold text-base hover:bg-yellow-300 shadow-lg"
          >
            Create Your Vault
          </Link>
        ) : mounted && !address ? (
          <div className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-base opacity-75">
            Connect Wallet to Create
          </div>
        ) : (
          <div className="bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold text-base opacity-75">
            Loading...
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 pt-16 border-t border-white/10">
        {[
          { value: "2.5K+", label: "Active Creators" },
          { value: "$50M+", label: "Total Value Locked" },
          { value: "150K+", label: "Community Members" },
        ].map((stat, i) => (
          <div key={i}>
            <div className="text-3xl md:text-4xl font-black text-black">{stat.value}</div>
            <p className="text-sm text-black-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
