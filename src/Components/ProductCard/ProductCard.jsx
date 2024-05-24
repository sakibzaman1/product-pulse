import React, { useContext, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { IoMdStarOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const ProductCard = ({product}) => {


  const {goToTop} = useContext(AuthContext)

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return (
      <>
      <Link onClick={goToTop} to={`/productDetails/${product?._id}`}>
      <div data-aos="zoom-in"
        data-aos-duration="2000">
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className='w-60 h-60' src={product.images[0]} alt={product.name} /></figure>
  <div className="card-body">
    <h2 className="card-title">{product?.name}</h2>

  
    <div className="card-actions justify-end">
      <p>${product?.price}</p>
      <div className='flex justify-center items-center gap-2'>
      <IoMdStarOutline />
      <small>{product?.average_rating}</small>
      </div>
    </div>
  </div>
</div>
        </div>
      </Link>
      </>
    );
};

export default ProductCard;