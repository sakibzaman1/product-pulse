import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./categories.css"; // Import custom styles
import { Pagination, Zoom } from "swiper/modules";
import { IoIosArrowRoundForward } from "react-icons/io";

const Categories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`/products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className=" ">
      <section className="text-center mb-4 ">
        <h1 className="text-4xl font-bold mb-10">Categories</h1>
        <p className="text-gray-500 font-medium mb-20">
          Find what you are lookig for
        </p>
      </section>
      <section className="mx-auto  text-center bg-[#C1DCDC] p-20">
        <Swiper
         speed={2000} // Adjust slide animation speed (milliseconds)
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          initialSlide={1} // Ensures the middle slide is centered upon landing
          pagination={{ clickable: true }}
          modules={[Pagination, Zoom]} // Include the Zoom module
          className="mySwiper -mt-32"
          effect={"zoom"} // Apply the zoom effect
          zoom={{
            maxRatio: 2, // Maximum zoom ratio
            minRatio: 1, // Minimum zoom ratio
            toggle: true, // Enable/disable toggle zooming by click
            containerClass: "swiper-zoom-container", // CSS class of zoom container
            zoomedSlideClass: "swiper-slide-zoomed" // CSS class of zoomed slide
          }}
        >
          {products?.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product-card">
                <img className="w-[600px] h-[500px]" src={product?.images[1]} alt={product?.name} />
                <h2 className="mt-6 text-xl font-semibold">{product?.category}</h2>
              </div>
            </SwiperSlide>
          ))}
         
        </Swiper>
        <div className="text-center mx-auto space-y-12 mt-10">
          <p>Trees and plants always look like the people they live with, somehow.</p>
          <button className='text-center mx-auto font-bold w-48 px-10 py-6 h-2 bg-white flex justify-center items-center rounded-xl'>Explore<IoIosArrowRoundForward size={30} className='ml-6' /></button>
          </div>
      </section>
    </div>
  );
};

export default Categories;
