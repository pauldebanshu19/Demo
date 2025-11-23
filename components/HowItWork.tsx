"use client"

import { Smartphone, Code2, Globe2, ArrowRight } from "lucide-react"
import { Space_Grotesk } from 'next/font/google'
import { useState } from "react"

// Initialize font
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export function HowItWorksSection() {
  // State to track which card is selected
  const [activeCard, setActiveCard] = useState(null)

  return (
    <section className="relative bg-black overflow-hidden py-24">
      
      {/* Ambient Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[700px] h-[700px] bg-orange-500/30 rounded-full blur-[180px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-orange-600/25 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-orange-700/20 rounded-full blur-[200px]" />
        <div className="absolute top-[60%] right-[30%] w-[500px] h-[500px] bg-orange-400/15 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-sm font-bold text-orange-400 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
            The Process
          </div>
          <h2 className={`${spaceGrotesk.className} text-5xl md:text-6xl font-bold text-white tracking-tighter`}>
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            Three simple steps to transform reputation into liquid capital.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Creators Deploy */}
          <div 
            onClick={() => setActiveCard(1)}
            className={`
              relative rounded-[2rem] p-8 flex flex-col h-full overflow-hidden cursor-pointer transition-all duration-500 ease-out
              ${activeCard === 1 
                ? 'bg-gray-900 border-2 border-orange-500 shadow-[0_0_50px_-12px_rgba(249,115,22,0.6)] scale-[1.02]' 
                : 'bg-gray-900/80 border border-white/10 hover:border-white/20 hover:bg-gray-900'
              }
            `}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-500/20 rounded-2xl text-orange-400">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-white`}>Deploy Vault</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-10">
              Launch your token with a custom symbol. Bootstrap with <span className="text-white font-bold">0.001 CELO</span> to unlock fan minting instantly.
            </p>
            
            <div className="mt-auto flex justify-center -mb-12">
              <div className="relative w-[200px] h-[260px] bg-gray-950 rounded-t-[2.5rem] border-[6px] border-gray-950 shadow-xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl z-10" />
                <div className="w-full h-full bg-gray-900 flex flex-col items-center pt-8 px-4">
                   <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-lg font-bold text-white mb-3">
                      AF
                   </div>
                   <div className="h-2 w-20 bg-gray-700 rounded-full mb-2"></div>
                   <div className="h-2 w-12 bg-gray-800 rounded-full"></div>
                   <div className="w-full mt-6 bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-orange-500 animate-[shimmer_2s_infinite]"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Fans Mint */}
          <div 
            onClick={() => setActiveCard(2)}
            className={`
              relative rounded-[2rem] p-8 flex flex-col h-full overflow-hidden cursor-pointer transition-all duration-500 ease-out
              ${activeCard === 2 
                ? 'bg-gray-900 border-2 border-orange-500 shadow-[0_0_50px_-12px_rgba(249,115,22,0.6)] scale-[1.02]' 
                : 'bg-gray-900/80 border border-white/10 hover:border-white/20 hover:bg-gray-900'
              }
            `}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gray-800 rounded-2xl text-white">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-white`}>Fans Mint</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-10">
              Fans stake CELO to mint tokens at <span className="text-white font-bold">150% collateralization</span>. Every token is backed by real value.
            </p>
            
            <div className="mt-auto flex justify-center items-center relative pb-8">
                <div className="grid grid-cols-2 gap-3">
                    <div className="w-20 h-20 rounded-2xl bg-orange-900/20 border border-orange-500/30 flex flex-col items-center justify-center shadow-sm">
                        <span className="text-xs text-orange-400 font-bold mb-1">STAKE</span>
                        <span className="font-bold text-white">CELO</span>
                    </div>
                    <div className="w-20 h-20 rounded-2xl bg-gray-800 border border-gray-700 flex flex-col items-center justify-center shadow-sm">
                        <span className="text-xs text-gray-400 font-bold mb-1">GET</span>
                        <span className="font-bold text-white">TOKEN</span>
                    </div>
                </div>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-2 border transition-colors duration-300 ${activeCard === 2 ? 'bg-orange-500 border-orange-400' : 'bg-gray-800 border-gray-700'}`}>
                    <ArrowRight className={`w-4 h-4 ${activeCard === 2 ? 'text-white' : 'text-gray-300'}`} />
                </div>
            </div>
          </div>

          {/* Card 3: Dynamic Value */}
          <div 
            onClick={() => setActiveCard(3)}
            className={`
              relative rounded-[2rem] p-8 flex flex-col h-full overflow-hidden cursor-pointer transition-all duration-500 ease-out
              ${activeCard === 3
                ? 'bg-gray-900 border-2 border-orange-500 shadow-[0_0_50px_-12px_rgba(249,115,22,0.6)] scale-[1.02]' 
                : 'bg-gray-900/80 border border-white/10 hover:border-white/20 hover:bg-gray-900'
              }
            `}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/10 rounded-2xl text-orange-400">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className={`${spaceGrotesk.className} text-2xl font-bold text-white`}>Value Growth</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-10">
              Aura scores update based on <span className="text-white font-bold">Farcaster engagement</span>, dynamically adjusting supply caps.
            </p>
            
            <div className="mt-auto flex justify-center pb-6">
                 <div className="relative w-40 h-40">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle cx="80" cy="80" r="70" stroke="#374151" strokeWidth="8" fill="transparent" />
                        <circle cx="80" cy="80" r="70" stroke="#f97316" strokeWidth="8" fill="transparent" strokeDasharray="440" strokeDashoffset="60" strokeLinecap="round" className="animate-[spin_3s_ease-out_reverse]" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className={`${spaceGrotesk.className} text-4xl font-black text-white`}>185</span>
                        <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">Aura Score</span>
                    </div>
                 </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}