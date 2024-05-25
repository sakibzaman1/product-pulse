import axios from 'axios';
import React from 'react';


const UseAxiosSecure = () => {

    const axiosSecure = axios.create({
        baseURL : 'https://product-pulse-server-five.vercel.app'
    })
    return axiosSecure;
};

export default UseAxiosSecure;