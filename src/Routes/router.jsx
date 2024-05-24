import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Products from '../Pages/Products/Products';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import ProductDetails from '../Components/ProductDetails/ProductDetails';
import CategoryPage from '../Pages/CategoryPage/CategoryPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/products',
          element: <Products></Products>,
          loader: ()=> fetch(`https://product-pulse-server-five.vercel.app/products`)
        },
        {
          path: '/productDetails/:id',
          element: <ProductDetails></ProductDetails>,
          loader: ({params})=> fetch(`https://product-pulse-server-five.vercel.app/products/${params.id}`)
        },
        {
          path: '/categoryPage',
          element: <CategoryPage></CategoryPage>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);

export default router;