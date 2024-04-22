import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Carousel = () => {
  return (
    
    <swiper-container slides-per-view="4" spaceBetween={10} autoplay-delay="50" loop="true" speed={5000} effect="slide" navigation="true" pagination="true">
      <swiper-slide><img src="./1.png" alt=""className=""></img></swiper-slide>
        <swiper-slide><img src="./2.png" alt=""className=""/></swiper-slide>
        <swiper-slide><img src="./3.png" alt=""className=""/></swiper-slide>
        <swiper-slide><img src="./4.png" alt="" className=""/></swiper-slide>
        <swiper-slide><img src="./5.png" alt=""className=""/></swiper-slide>
        <swiper-slide><img src="./6.png" alt=""className=""/></swiper-slide>
        <swiper-slide><img src="./7.png" alt=""className=""/></swiper-slide>
        <swiper-slide><img src="./8.png" alt=""className=""/></swiper-slide>
        {/* <swiper-slide><img src="./image35.png" alt=""className="h-96 w-96"/></swiper-slide>
        <swiper-slide><img src="./image36.png" alt=""className="h-96 w-96"/></swiper-slide> */}
    </swiper-container>
   
    
  )
}

export default Carousel