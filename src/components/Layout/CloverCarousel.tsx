const CloverSet = ({ hidden }: { hidden?: boolean }) => (
  <div className="marquee__set" aria-hidden={hidden}>
    {Array.from({ length: 30 }, (_, i) => (
      <img key={i} src="/clover.svg" alt="Clover" width={32} height={32} />
    ))}
  </div>
)

const CloverCarousel = () => {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {/* Duplicate set for seamless loop */}
        <CloverSet />
        <CloverSet hidden />
      </div>
    </div>
  )
}

export default CloverCarousel
