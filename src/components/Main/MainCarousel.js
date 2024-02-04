import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import CommonTitle from "../CommonTitle";
import { MainCarouselArea } from "../../style/MainCSS";
import ContentsItem from "./ContentsItem";

const MainCarousel = () => {
  const styleTemp = {
    width: "200px"
  };
  return (
    <MainCarouselArea>
      <CommonTitle title="최근 재생 한 컨텐츠" />
      <Swiper
        id="recently-played-contents"
        navigation={{
          prevEl: ".swiper-prev-btn",
          nextEl: ".swiper-next-btn",
        }}
        modules={[Navigation]}
        loop={false}
        slidesPerView={6}
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
        <SwiperSlide className="width200">
          <ContentsItem />
        </SwiperSlide>
        <SwiperSlide>slie01</SwiperSlide>
        <SwiperSlide>slie02</SwiperSlide>
        <SwiperSlide>slie03</SwiperSlide>
        <SwiperSlide>slie04</SwiperSlide>
        <SwiperSlide>slie05</SwiperSlide>
        <SwiperSlide>slie06</SwiperSlide>
      </Swiper>
    </MainCarouselArea>
  )
}

export default MainCarousel;