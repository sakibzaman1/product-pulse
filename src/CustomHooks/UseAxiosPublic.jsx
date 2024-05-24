import axios from 'axios';


const axiosPublic = axios.create({
    baseURL: `https://product-pulse-server-five.vercel.app`
})

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;