import React from "react";
import { FaHome } from "react-icons/fa";
import { MdAddIcCall, MdOutlineCategory } from "react-icons/md";
import './navbar.css'
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";
import { TbMenuDeep } from "react-icons/tb";
import { AiFillProduct, AiOutlineProduct } from "react-icons/ai";

const Navbar = () => {
  const navOptions = (
    <>
      <NavLink to="/" className="hover:text-gray-900  font-semi-bold navLinks"><span className='pb-2 flex items-center gap-2'><FaHome></FaHome>Home</span></NavLink>
      <NavLink className="hover:text-gray-900  font-semi-bold navLinks"><span className='pb-2 flex items-center gap-2'><AiFillProduct />Products</span></NavLink>
      <NavLink  className="hover:text-gray-900  font-semi-bold navLinks"><span className='pb-2 flex items-center gap-2'>
      <details className="dropdown">
  <summary className="">Categories</summary>
  <ul className=" menu dropdown-content z-[1]">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
      </span></NavLink>
      <NavLink className="hover:text-gray-900  font-semi-bold navLinks"><span className='pb-2 flex items-center gap-2'><MdAddIcCall></MdAddIcCall>Contact Us</span></NavLink>
      
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className=" text-xl font-mono font-bold">GreenMind</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10 text-sm">{navOptions}</ul>
        </div>
        <div className="navbar-end flex justify-end items-center gap-10">
          <BsCart size={20}></BsCart>
          <IoPersonOutline size={20} />
          <RxDividerVertical size={20} />
          <TbMenuDeep size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
