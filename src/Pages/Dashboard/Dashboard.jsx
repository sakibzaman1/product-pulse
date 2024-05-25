import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const isAdmin = user?.email?.toLowerCase() === "zaman@gmail.com";
    return (
      <div className='max-w-7xl mx-auto'>
       <section>
        <Navbar></Navbar>
       </section>
        <section className='mb-10 '>
          {isAdmin ? (
            <div className=" lg:flex">
              <div className="card rounded-none lg:w-[20%] flex flex-col card-side py-6 bg-[#C1DCDC] shadow-2xl">
                <figure className="rounded-full">
                  <img className="w-40 mt-10 rounded-full" src={user?.photoURL} alt="Movie" />
                </figure>
                <div className="card-body text-center">
                  <h2 className="text-3xl mt-4">{user?.displayName}</h2>
                  <p>{user?.email}</p>
                  <div className="card-actions justify-end"></div>
                </div>
                <div className="">
                  <label htmlFor="" aria-label="" className=""></label>
                  <ul className="menu p-4  text-base-content ">
                    {/* Sidebar content here */}
                    <li>
                      <NavLink to='/dashboard/adminProfile'>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to='/dashboard/manageUsers'>Manage Users</NavLink>
                    </li>
                    <li>
                      <NavLink to='/dashboard/manageReviews'>Manage Reviews</NavLink>
                    </li>
                    <li>
                      <NavLink to='/dashboard/manageProduct'>Manage Product</NavLink>
                    </li>
                  </ul>{" "}
                </div>
              </div>
              <div className="w-[80%] flex justify-center text-center mx-auto mt-16">
               <Outlet></Outlet>
              </div>
            </div>
          ) : (
            <div className=" lg:flex">
              <div className="card rounded-none lg:w-[20%] flex flex-col card-side bg-[#C1DCDC] shadow-2xl">
                <figure className="">
                  <img className="w-40 mt-10 rounded-full" src={user?.photoURL} alt="Movie" />
                </figure>
                <div className="card-body text-center">
                  <h2 className="text-3xl mt-4">{user?.displayName}</h2>
                  <p>{user?.email}</p>
                  <div className="card-actions justify-end"></div>
                </div>
                <div className="">
                  <label htmlFor="" aria-label="" className=""></label>
  
                  <ul className="menu p-4  text-base-content">
                    {/* Sidebar content here */}
                    <li>
                      <NavLink to='/dashboard/userProfile'>Home</NavLink>
                    </li>
                    <li>
                      <NavLink>My Product</NavLink>
                    </li>
                    <li>
                      <NavLink>Payment</NavLink>
                    </li>
                    <li>
                      <NavLink>Reviews</NavLink>
                    </li>
                   
                  </ul>
                </div>
              </div>
              <div className="w-[80%] flex mx-auto   text-center mt-16 ">
                <Outlet></Outlet>
              </div>
            </div>
          )}
        </section>
     <section>
        <Footer></Footer>
     </section>
      </div>
    );
  };

export default Dashboard;