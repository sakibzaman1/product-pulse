import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Products from '../Pages/Products/Products';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import ProductDetails from '../Components/ProductDetails/ProductDetails';
import CategoryPage from '../Pages/CategoryPage/CategoryPage';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Contact from '../Pages/Contact/Contact';

import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import UserProfile from '../Pages/Dashboard/User/UserProfile';
import AdminProfile from '../Pages/Dashboard/Admin/AdminProfile';
import ManageUsers from '../Pages/Dashboard/Admin/ManageUsers';
import ManageReviews from '../Pages/Dashboard/Admin/ManageReviews';
import ManageProduct from '../Pages/Dashboard/Admin/ManageProduct';
import UserProduct from '../Pages/Dashboard/User/UserProduct';
import UserReview from '../Pages/Dashboard/User/UserReview';
import UserPayment from '../Pages/Dashboard/User/UserPayment';

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
          path: '/contact',
          element: <Contact></Contact>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: '', // Empty path for the default route
          element: <Navigate to="userProfile" />
        },
        {
          path: 'userProfile',
          element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        },
        {
          path: 'userProduct',
          element: <UserProduct></UserProduct>
        },
        {
          path: 'userReview',
          element: <UserReview></UserReview>
        },
        {
          path: 'userPayment',
          element: <UserPayment></UserPayment>
        },
        {
          path: 'adminProfile',
          element: <AdminProfile></AdminProfile>
        },
        {
          path: 'manageUsers', 
          element: <ManageUsers></ManageUsers>
        },
        {
          path: 'manageReviews', 
          element: <ManageReviews></ManageReviews>
        },
        {
          path: 'manageProduct', 
          element: <ManageProduct></ManageProduct>
        },
      ]
    }
  ]);

export default router;