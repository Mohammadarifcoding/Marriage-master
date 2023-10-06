import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   
  const link = <>
  <NavLink to='/' className=' text-lg font-medium '  >Home</NavLink>
  <NavLink to='/About' className=' text-lg font-medium '>About</NavLink>
  <NavLink to='/Gallery' className=' text-lg font-medium'>Gallery</NavLink>
  
  
  </>



    return (
      <div data-aos="fade-down" className=' '>
 <div className="navbar  rounded-b-xl container py-5 mx-auto px-5 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {link}
          </ul>
        </div>
        <img className='w-[100px]' src="/images/logo.png" alt="" />
        <h1 className='font-bold text-xl text-red-900'>MarriageMasters</h1>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-4">
          {link}
        </ul>
      </div>
      <div className="navbar-end">
      <NavLink to='/logIn'>
      <button className='btn bg-red-800 hover:bg-red-950 text-white'>Log In</button>
        </NavLink>
        
      </div>
    </div>
      </div>
     
    );
};

export default Navbar;