'use client'

import { motion } from 'framer-motion'

interface PortfolioItemProps {
  image: string
  title: string
  description: string
}

const PortfolioItem = ({ image, title, description }: PortfolioItemProps) => {
  const handleClick = () => {
    alert(`Open project: ${title}`)
    // Replace with modal or routing
  }

  return (
    <motion.div
      onClick={handleClick}
      className="cursor-pointer w-48 sm:w-56 md:w-60 h-64 sm:h-72 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-3 sm:p-4 flex flex-col items-center text-center"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      <motion.div 
        className="w-full h-32 sm:h-40 overflow-hidden rounded-xl mb-3 sm:mb-4"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      
      <motion.h3 
        className="font-bold text-base sm:text-lg text-black mb-1 sm:mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-xs sm:text-sm text-gray-700 line-clamp-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

export default PortfolioItem
