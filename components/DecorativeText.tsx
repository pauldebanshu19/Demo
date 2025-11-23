"use client"

import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export function DecorativeText({ scrollProgress }: { scrollProgress: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 text-white px-8 py-6">
      

      {/* Main title - left side */}
      <div className="absolute top-[15%] left-8 max-w-xl">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
        The future of<br />
        Creator Tokens<br />
        to Earn
      </h1>
      </div>

      {/* Description - right side */}

      <div className="absolute top-[15%] right-8 text-right max-w-md">
      <p className={`
      ${spaceGrotesk.className}  /* Applies the techy font */
      text-xl md:text-2xl 
      font-medium                /* lighter weight than the headline */
     leading-snug               /* comfortable reading distance */
     tracking-tight
   text-white/80              /* slightly transparent for elegance */
    `}>
    Redefines creator finance—<br />
    transforming intangible<br />
    influence into a backed<br />
    economy anchored by<br />
    verifiable reputation.
    </p>
   </div>

      
      {/* Large background text NEBULA */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] overflow-hidden select-none">
        <p className="text-[20rem] md:text-[30rem] font-black text-white whitespace-nowrap tracking-wider">
          AURA
        </p>
      </div>
    </div>
  )
}
