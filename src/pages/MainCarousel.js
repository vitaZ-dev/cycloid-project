import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import CommonTitle from "../components/CommonTitle";

const MainCarousel = () => {
  return (
    <>
      <CommonTitle title="최근 재생 한 컨텐츠" />
      <Swiper
        id="recently-played-contents"
        navigation={{
          prevEl: ".swiper-prev-btn",
          nextEl: ".swiper-next-btn",
        }}
        modules={[Navigation]}
        loop={false}
        slidesPerView={2}
        slidesPerGroup={1}
        spaceBetween={25}
        // breakpoints={{
        //   968: {
        //     slidesPerView: 2,
        //   },
        //   // 1024px 이상일 때
        //   1180: {
        //     slidesPerView: 2,
        //   },
        // }}
      >
        <SwiperSlide>slie01</SwiperSlide>
        <SwiperSlide>slie02</SwiperSlide>
        <SwiperSlide>slie03</SwiperSlide>
      </Swiper>
    </>
  )
}

export default MainCarousel;