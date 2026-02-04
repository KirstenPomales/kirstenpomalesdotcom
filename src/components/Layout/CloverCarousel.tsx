const CloverCarousel = () => {
  // Create an array of clover images - we'll duplicate them for seamless looping
  const cloverImages = Array.from({ length: 30 }, (_, i) => (
    <img
      key={i}
      src="/clover.svg"
      alt="Clover"
      className="h-8 w-8 object-contain flex-shrink-0"
    />
  ))

  return (
    <div className="w-full overflow-hidden bg-base-100 pt-2 pb-6">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* First set of images */}
        <div className="flex items-center gap-4">
          {cloverImages}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-4">
          {cloverImages}
        </div>
      </div>
    </div>
  )
}

export default CloverCarousel
