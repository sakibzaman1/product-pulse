import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import Rating from "react-rating";
import StarRatings from "react-star-ratings";
const Testimonials = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <section>
        <h1 className="text-2xl font-bold mb-10 w-96">
          What customers say about GREENMIND?
        </h1>
      </section>
      <section className="p-6">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper lg:h-96"
        >
          <SwiperSlide>
            <div className="text-center px-24 flex flex-col items-center justify-center gap-6 bg-[#C1DCDC] p-10" data-aos="fade-right"
        data-aos-duration="2000">
              <p>
                "I recently purchased a Fiddle Leaf Fig from GreenMind, and I
                couldn't be happier! The website is easy to navigate, with
                detailed descriptions and beautiful images for each plant. My
                order arrived promptly, and the plant was in perfect condition.
                The customer service is excellent, and I appreciate the helpful
                care tips provided. GreenMind is my go-to site for all my indoor
                plant needs!"
              </p>
              <div className="flex gap-8">
                <BsChatSquareQuoteFill size={50}></BsChatSquareQuoteFill>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://i.ibb.co/chP95Qs/person1.jpg" alt="" />
                  </div>
                </div>
                <div>
                  <h3 className="text-yellow-700 text-4xl">John Smith</h3>
                  <p>Youtuber</p>
                  <StarRatings
                    rating={4.5}
                    readOnly
                    starDimension="20px"
                    starSpacing="10px"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center px-24 flex flex-col items-center justify-center gap-6 bg-[#C1DCDC] p-10" data-aos="fade-right"
        data-aos-duration="3000">
              <p>
                "I absolutely love shopping on GreenMind! The selection of
                indoor plants is fantastic, and the prices are very reasonable.
                I recently bought a Snake Plant, and it was delivered quickly
                and packaged with care. The quality of the plant exceeded my
                expectations. The website’s user-friendly interface and detailed
                plant care guides make it a joy to use. Highly recommend
                GreenMind for all plant enthusiasts!"
              </p>
              <div className="flex gap-8">
                <BsChatSquareQuoteFill size={50}></BsChatSquareQuoteFill>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://i.ibb.co/SNXrFzP/sakib.jpg" alt="" />
                  </div>
                </div>
                <div>
                  <h3 className="text-yellow-700 text-4xl">Sakib Zaman</h3>
                  <p>Digital Creator</p>
                  <StarRatings
                    rating={4.5}
                    readOnly
                    starDimension="20px"
                    starSpacing="10px"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center px-24 flex flex-col items-center justify-center gap-6 bg-[#C1DCDC] p-10">
              <p>
                "GreenMind has truly impressed me with their exceptional service
                and top-notch selection of plants. I recently ordered a Monstera
                Deliciosa from their website, and I couldn't be happier with my
                purchase. The plant arrived promptly and in excellent condition,
                carefully packaged to ensure its safety during transit. What
                sets GreenMind apart is their dedication to customer
                satisfaction".
              </p>
              <div className="flex gap-8">
                <BsChatSquareQuoteFill size={50}></BsChatSquareQuoteFill>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://i.ibb.co/JrKnHvF/person3.jpg" alt="" />
                  </div>
                </div>
                <div>
                  <h3 className="text-yellow-700 text-4xl">Hannah Baker</h3>
                  <p>Youtuber</p>
                  <StarRatings
                    rating={4.5}
                    readOnly
                    starDimension="20px"
                    starSpacing="10px"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
