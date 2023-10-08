import React, { useContext, useEffect } from 'react';
import { AuthContext } from './AuthProvider';
import { NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Login from './../Login/Login';

const PrivateProvider = ({children}) => {

   const { user,loading } = useContext(AuthContext)
   
   console.log(user)
   const location = useLocation()
   
  
//    if(!user){
//       <div className='flex justify-center items-center'>
//    <span className="loading loading-infinity loading-lg"></span>
//    </div> 
//    if(user){
//       return children
      
//    }
//    else{
//       return  <Navigate state={location.pathname} to={'/login'}></Navigate>  
//    }
      
//    }
//    return children

  if(loading){
   return (<div className='flex flex-col justify-center mt-[13%] items-center'>
    <p>Please wait...</p>
   <span className="loading loading-infinity  loading-lg"></span>
    </div> 
   )}
  
  if(user){
   return children
  }

  return <Navigate state={location.pathname} to={'/login'}></Navigate>  



// return(
//    <>
//    {
//       loading && <div className='flex top-48  justify-center items-center'>
//       <span className="loading loading-infinity loading-lg bg-black"></span>
//       </div> 
//    }
//      { user ?  children : <Navigate state={location.pathname} to={'/login'}></Navigate>}
//      </>
// )
   
  
};

export default PrivateProvider;