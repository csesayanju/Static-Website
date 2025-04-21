'use client'

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
    <div
      onClick={handleClick}
      className="cursor-pointer w-60 h-72 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
    >
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-xl mb-4" />
      <h3 className="font-bold text-lg text-black mb-1">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  )
}

export default PortfolioItem
