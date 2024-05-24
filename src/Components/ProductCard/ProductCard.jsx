import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div>
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