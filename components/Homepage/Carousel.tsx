import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(
    { playOnInit: true, delay: 700 }
  )])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src="./1.png" alt=""className=""></img> 
        </div>
        <div className="embla__slide">
          <img src="./2.png" alt=""className=""></img> 
        </div>
        <div className="embla__slide">
          <img src="./3.png" alt=""className=""></img> 
        </div>
        <div className="embla__slide">
          <img src="./4.png" alt=""className=""></img> 
        </div>
        <div className="embla__slide">
          <img src="./5.png" alt=""className=""></img> 
        </div>
        <div className="embla__slide">
          <img src="./6.png" alt=""className=""></img> 
        </div>
        <div className="embla__slide">
          <img src="./7.png" alt=""className=""></img> 
        </div>
        <div className="embla__slide">
          <img src="./8.png" alt=""className=""></img> 
        </div>
      </div>
    </div>
  )
}

export default Carousel