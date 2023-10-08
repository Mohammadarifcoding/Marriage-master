import React, {  useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { user , OUT }= useContext(AuthContext)
  const navigation = useNavigate()
  const location = useLocation()

  console.log(user)
   
  const link = <>
  <NavLink to='/' className=' text-lg font-medium '  >Home</NavLink>
  <NavLink to='/About' className=' text-lg font-medium '>About</NavLink>
  <NavLink to='/gallery' className=' text-lg font-medium'>Gallery</NavLink>
  <NavLink to='/contact' className=' text-lg font-medium'>Contact</NavLink>
  
  
  </>

  const handleSignOut = ()=>{
       OUT()
       .then(res => {
        localStorage.removeItem('user')
      {
        navigation(location.pathname)
      }
        console.log('Sign out ', res.user)
       })
       .catch(err => {
        console.log(err.message)
       })
  }

    return (
      <div data-aos="fade-down" className=' '>
 <div className="navbar  rounded-b-xl container  mx-auto px-5 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {link}
          </ul>
        </div>
        <img className='w-[70px]' src="/images/logo.png" alt="" />
        <h1 className='font-bold text-xl md:block hidden  text-red-900'>MarriageMasters</h1>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-4">
          {link}
        </ul>
      </div>
   
        {
          user ?   
        
               <div className="navbar-end gap-5">
                <div className='flex flex-col items-center'>
                <img className='w-[50px] rounded-full' src={user.photoURL} alt="" />
                <p className='font-medium'>{user.displayName}</p>
                </div>

              
                <NavLink onClick={handleSignOut}>
              <button className='btn bg-red-800 hover:bg-red-950 text-white'>Sign Out</button>
                </NavLink>
         </div> :
               <div className="navbar-end gap-5">
                <div className='flex flex-col items-center'>
                <img className='w-[50px]' src="/images/user.png" alt="" />
                <p className='font-medium'>Unknown</p>
                </div>

              
                 <NavLink to='/login'>
      <button className='btn bg-red-800 hover:bg-red-950 text-white'>Log In</button>
        </NavLink>
        <NavLink to='/register'>
      <button className='btn bg-blue-800 hover:bg-blue-950 text-white'>Register</button>
        </NavLink>
                 </div>
   
        }

        
      
    </div>
      </div>
     
    );
};

export default Navbar;