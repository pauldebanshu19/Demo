"use client"

import { HeroSection } from "@/components/hero-section"
import { TrendingBlocks } from "@/components/trending-creator"
import { Footer } from "@/components/footer"
import { HowItWorksSection } from "@/components/HowItWork"
import Link from "next/link"
import { Rocket, Users, TrendingUp, Shield, Zap, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Rocket,
    title: "Instant Launch",
    description: "Deploy your creator token in seconds with customizable parameters and automatic collateral management.",
  },
  {
    icon: Users,
    title: "Community Minting",
    description: "Fans mint tokens by providing collateral, creating sustainable economic models for creator growth.",
  },
  {
    icon: TrendingUp,
    title: "Dynamic Pricing",
    description: "Aura-based peg system ensures fair pricing that reflects community engagement and vault health.",
  },
  {
    icon: Shield,
    title: "Collateral Protection",
    description: "Multi-stage vault progression with health monitoring keeps the ecosystem stable and secure.",
  },
  {
    icon: Zap,
    title: "Stage Progression",
    description: "Unlock new capacity tiers as your community grows, rewarding early supporters and creators.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor vault performance, community metrics, and token economics with live dashboards.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Spacer */}
      <div className="h-24 bg-black"></div>

      {/* Features Section */}
      <section className="relative bg-black border-t border-white/10 px-6 py-32 overflow-hidden">
        {/* Ambient Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-900/20 rounded-full blur-[150px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-orange-600/25 rounded-full blur-[180px] opacity-50 pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[160px] opacity-40 pointer-events-none" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to launch and manage your creator token ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 hover:border-emerald-400/50 hover:bg-white/10 transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Creators */}
      <TrendingBlocks />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* CTA Section */}
      <section className="relative bg-black border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center space-y-10">
          <h2 className="text-6xl md:text-7xl font-black text-white tracking-tight">
            Ready to Launch?
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Join thousands of creators building the future of fan engagement on Celo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/creator/create"
              className="inline-flex items-center justify-center bg-white text-black hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-lg transition-all shadow-lg"
            >
              Launch Your Vault
            </Link>
            <Link
              href="/vaults"
              className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 font-bold bg-transparent px-8 py-4 rounded-lg transition-all"
            >
              Browse Vaults
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
