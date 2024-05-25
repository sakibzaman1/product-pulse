import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const UserProduct = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [userProducts, setUserProducts] = useState([]);

    useEffect(() => {
        fetch('https://product-pulse-server-five.vercel.app/sold')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        if (user && products.length > 0) {
            const filteredProducts = products.filter(product => product?.email === user?.email);
            setUserProducts(filteredProducts);
            console.log(filteredProducts)
        }
    }, [user, products]);

    return (
        <div className='mx-auto'>
            <h1 className='text-3xl mb-10'>My Products</h1>
            {userProducts.length > 0 ? (
                userProducts.map(product => (
                    <div key={product.id} className="product-card bg-[#C1DCDC] p-4">
                        
                        <p>Product ID: {product.id}</p>
                       
                        
                    </div>
                ))
            ) : (
                <p>No products found for the current user.</p>
            )}
        </div>
    );
};

export default UserProduct;
