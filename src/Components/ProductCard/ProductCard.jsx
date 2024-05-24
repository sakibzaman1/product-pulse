import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const ProductCard = ({product}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
        <div data-aos="zoom-in"
        data-aos-duration="2000">
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className='w-60 h-60' src={product.images[0]} alt={product.name} /></figure>
  <div className="card-body">
    <h2 className="card-title">{product?.name}</h2>

  
    <div className="card-actions justify-end">
      <p>${product?.price}</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;