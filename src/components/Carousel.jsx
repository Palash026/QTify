import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";
import "swiper/css"

const Carousel = ({ data, componentRender}) => {
  const Controls = ({ data }) => {
    const swiper = useSwiper();
    useEffect(() => {
      swiper.slideTo(0, null);
    }, [data]);

    return <></>;
  };

  return (
    <div className="carousel-container">
      <Swiper
        style={{ padding: "0px 20px" }}
        initialState={0}
        slidesPreView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data}/>
        <CarouselLeftNavigation/>
        <CarouselRightNavigation/>
        {
          data.map((item) => {
            return <SwiperSlide>{componentRender(item)}</SwiperSlide>
          })
        }
      </Swiper>
    </div>
  );
};

export default Carousel;
