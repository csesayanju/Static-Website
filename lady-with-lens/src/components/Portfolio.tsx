'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextItem = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % items.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevItem = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const getVisibleItems = () => {
    const visibleItems = []
    for (let i = -1; i <= 1; i++) {
      const index = (activeIndex + i + items.length) % items.length
      visibleItems.push(items[index])
    }
    return visibleItems
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#ce3d51] to-[#1e1e2f] text-white overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Our Portfolio
      </motion.h2>

      {isMobile ? (
        <motion.div 
          className="flex flex-col items-center gap-8 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {items.map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <PortfolioItem {...item} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="relative group flex justify-center items-center h-[550px]">
          {/* Glow effect */}
          <motion.div 
            className="absolute w-[600px] h-[600px] rounded-full border border-[#fff3] blur-3xl opacity-20 pointer-events-none z-0"
            animate={{
              scale: isHovered ? [1, 1.1, 1] : 1,
              opacity: isHovered ? [0.2, 0.3, 0.2] : 0.2
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevItem}
            className="absolute left-4 z-10 hidden group-hover:block bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            ◀
          </motion.button>
          <motion.button
            onClick={nextItem}
            className="absolute right-4 z-10 hidden group-hover:block bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            ▶
          </motion.button>

          {/* Carousel */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-[900px] h-[400px] overflow-hidden">
              <motion.div
                className="absolute w-full h-full flex items-center justify-center gap-8"
                animate={{
                  x: direction === 1 ? -300 : direction === -1 ? 300 : 0
                }}
                transition={{
                  x: { 
                    duration: 0.4,
                    ease: "easeInOut"
                  }
                }}
                onAnimationComplete={() => {
                  if (direction !== 0) {
                    setDirection(0)
                  }
                }}
              >
                {getVisibleItems().map((item, index) => (
                  <motion.div
                    key={`${activeIndex}-${index}`}
                    initial={{ 
                      scale: 0.85,
                      opacity: 0,
                      rotateY: index === 0 ? -35 : index === 2 ? 35 : 0,
                      x: index === 0 ? -80 : index === 2 ? 80 : 0,
                      zIndex: index === 1 ? 10 : 5
                    }}
                    animate={{ 
                      scale: index === 1 ? 1 : 0.85,
                      opacity: 1,
                      rotateY: index === 0 ? -35 : index === 2 ? 35 : 0,
                      x: index === 0 ? -80 : index === 2 ? 80 : 0,
                      zIndex: index === 1 ? 10 : 5
                    }}
                    transition={{
                      scale: { 
                        duration: 0.4,
                        ease: "easeInOut"
                      },
                      opacity: { duration: 0.3 },
                      rotateY: { duration: 0.4, ease: "easeInOut" },
                      x: { duration: 0.4, ease: "easeInOut" }
                    }}
                    className="relative"
                    style={{
                      perspective: "1000px",
                      transformStyle: "preserve-3d"
                    }}
                  >
                    <PortfolioItem {...item} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio
