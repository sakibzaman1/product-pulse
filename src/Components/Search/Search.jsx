import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [matchingProducts, setMatchingProducts] = useState([]);
  
    useEffect(() => {
      // Fetch movie data from MongoDB
      // You can use fetch or any library like axios to fetch data
      // For simplicity, I'm assuming you have a function called fetchMoviesFromMongoDB
      fetch(`https://product-pulse-server-five.vercel.app/products`)
          .then(res=> res.json())
          .then(data=> setProducts(data))
    }, []);
  
    useEffect(() => {
      // Filter movies based on search query
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      setMatchingProducts(filteredProducts);
    }, [searchQuery, products]);
  
    const handleSearchChange = event => {
      setSearchQuery(event.target.value);
    };
  
    const handleLinkClick = () => {
      setSearchQuery(''); // Reset search query
    };


    return (
        <div className='hidden lg:flex justify-center items-center relative w-full'>
      <input
        type="text"
        placeholder="Search"
        className="input bg-transparent input-bordered w-full md:w-auto  lg:w-full h-14 rounded-lg bg-white"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {searchQuery && (
        <div className="z-10 search-results rounded-b-xl absolute top-full left-0 bg-transparent bg-opacity-90 shadow-lg w-[100%]">
          {matchingProducts.map(product => (
            <Link to={`/productDetails/${product?._id}`} onClick={handleLinkClick} key={product?._id}>
            <div className='flex space-y-8 items-center gap-2 pl-4' >
                <img className='w-10 h-8  avatar' src={product?.images[0]} alt="" />
                <p className='text-sm h-12'>{product?.name}</p>
                
                </div>
            </Link>
          ))}
        </div>
      )}
      <button className="bg-[#C1DCDC] rounded-xl h-10 w-10 flex justify-center items-center -ml-12">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
    </div>
    );
};

export default Search;