import Image from 'next/image'

export function GradientBackground() {
  return (
    <>
      {/* Vibrant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-orange-600 to-orange-400" />
      
      {/* Dark vignette corners - top left and top right */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-bl from-black/50 via-transparent to-transparent" />
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 mix-blend-overlay opacity-30">
        <Image
          src="/image/background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>
    </>
  )
}
