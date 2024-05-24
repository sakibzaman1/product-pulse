import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
const Testimonials = () => {
  return (
    <div>
      <section>
        <h1 className='text-2xl font-bold mb-10 w-96'>What customers say about GREENMIND?</h1>
      </section>
      <section className="p-6">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper h-72"
        >
          <SwiperSlide className="bg-[#C1DCDC]">Slide 1</SwiperSlide>
          <SwiperSlide className="bg-[#C1DCDC]">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-[#C1DCDC]">Slide 3</SwiperSlide>
          <SwiperSlide className="bg-[#C1DCDC]">Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
