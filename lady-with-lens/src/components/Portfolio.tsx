'use client'

import { useEffect, useRef, useState } from 'react'
import PortfolioItem from './PortfolioItem'

const items = [
  { image: '/design1.jpg', title: 'Branding Project', description: 'Bold fashion identity' },
  { image: '/design2.jpg', title: 'Poster Design', description: '3D gradient event poster' },
  { image: '/design3.jpg', title: 'Social Pack', description: 'Instagram content pack' },
  { image: '/design4.jpg', title: 'UI Kit', description: 'Modular UI for dashboard' },
  { image: '/design5.jpg', title: 'Logo Set', description: 'Modern branding logos' },
  { image: '/design6.jpg', title: 'Packaging', description: 'Eco-friendly wraps' },
  { image: '/design7.jpg', title: 'Event Kit', description: 'Conference toolkit' },
  { image: '/design8.jpg', title: 'Editorial Layout', description: 'Print magazine layout' },
]

const useIsMobile = () => {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const update = () => setMobile(window.innerWidth < 768)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return mobile
}

const Portfolio = () => {
  const isMobile = useIsMobile()
  const [angle, setAngle] = useState(0)
  const isHovered = useRef(false)
  const ITEM_COUNT = items.length
  const ANGLE_STEP = 360 / ITEM_COUNT
  const RADIUS = 400

  // Animate rotation
  useEffect(() => {
    let frame: number
    const animate = () => {
      if (!isHovered.current) {
        setAngle((prev) => (prev + 0.3) % 360)
      }
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  const rotateLeft = () => setAngle((prev) => (prev - ANGLE_STEP + 360) % 360)
  const rotateRight = () => setAngle((prev) => (prev + ANGLE_STEP) % 360)

  // Helper to check visibility (-45° to +45° in front)
  const isVisible = (itemAngle: number) => {
    const diff = ((itemAngle - angle + 360) % 360 + 180) % 360 - 180
    return Math.abs(diff) <= 60
  }

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#ce3d51] to-[#1e1e2f] text-white overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12">Our Portfolio</h2>

      {isMobile ? (
        <div className="flex flex-col items-center gap-8 px-4">
          {items.map((item, i) => <PortfolioItem key={i} {...item} />)}
        </div>
      ) : (
        <div className="relative group flex justify-center items-center h-[550px]">
          {/* Glow ring */}
          <div className="absolute w-[600px] h-[600px] rounded-full border border-[#fff3] blur-3xl opacity-20 pointer-events-none z-0" />

          {/* Navigation Buttons */}
          <button
            onClick={rotateLeft}
            className="absolute left-4 z-10 hidden group-hover:block bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full"
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
          >
            ◀
          </button>
          <button
            onClick={rotateRight}
            className="absolute right-4 z-10 hidden group-hover:block bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full"
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
          >
            ▶
          </button>

          {/* Carousel */}
          <div
            className="perspective-[1200px] relative w-full h-full flex items-center justify-center"
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
          >
            <div
              className="relative w-[300px] h-[300px] transform-style-preserve-3d"
              style={{ transform: `rotateY(${angle}deg)` }}
            >
              {items.map((item, index) => {
                const itemAngle = index * ANGLE_STEP
                const visible = isVisible(itemAngle)

                if (!visible) return null

                return (
                  <div
                    key={index}
                    className="absolute left-1/2 top-1/2 transition-transform"
                    style={{
                      transform: `
                        rotateY(${itemAngle}deg)
                        translateZ(${RADIUS}px)
                        translateX(-50%) translateY(-50%)
                      `,
                      zIndex: index === 0 ? 10 : 5,
                    }}
                  >
                    <PortfolioItem {...item} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio
