'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useAccount } from 'wagmi'
import { WalletConnect } from './Wallet-connect'
import { useEffect, useState } from 'react'

export function Navigation() {
    const pathname = usePathname()
    const { address } = useAccount()

    const [scrolled, setScrolled] = useState(false)

    const isCreator = !!address
    const isAdmin = false

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-8 py-4 shadow-lg">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10">
                            <Image
                                src="/image/logo.png"
                                alt="Aura.Farm Logo"
                                fill
                                className="object-contain opacity-80"
                                unoptimized
                            />
                        </div>
                        <span className="text-xl font-bold text-black">
                            Aura.Farm
                        </span>
                    </Link>

                    {/* Center Navigation Links */}
                    <div className="flex items-center gap-1">
                        <Link
                            href="/"
                            className="px-5 py-2 rounded-full transition-all font-semibold text-sm text-black hover:bg-white/10"
                        >
                            Home
                        </Link>

                        <Link
                            href="/vaults"
                            className="px-5 py-2 rounded-full transition-all font-semibold text-sm text-black hover:bg-white/10"
                        >
                            Browse Vaults
                        </Link>

                        <Link
                            href="/liquidate"
                            className="px-5 py-2 rounded-full transition-all font-semibold text-sm text-black hover:bg-white/10"
                        >
                            Liquidate
                        </Link>

                        {isCreator && (
                            <Link
                                href="/creator"
                                className="px-5 py-2 rounded-full transition-all font-semibold text-sm text-black hover:bg-white/10"
                            >
                                Creator
                            </Link>
                        )}
                    </div>

                    {/* Wallet Connect Button */}
                    <WalletConnect />
                </div>
            </div>
        </nav>
    )
}
