import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="w-full min-h-screen  bg-[url('/images/bg.jpg')] bg-cover bg-center">
       <div className="w-full min-h-screen h-full flex p-6  justify-center items-center backdrop-brightness-50">
               <div className='container mx-auto flex lg:flex-row flex-col justify-center items-center'>
               <div data-aos="fade-right" className='w-full p-4 '>
                <h1 className='lg:text-7xl md:text-7xl text-5xl flex justify-start text-white font-bold'>Your Perfect Wedding, Our Expertise </h1>
                <p className='md:text-xl text-lg  text-white my-5'>Let us make your wedding day truly special. With our expertise in event management, we ensure every detail is perfect, so you can enjoy a stress-free celebration of your love.</p>
                <Link to='/contact'>
                <button className='btn bg-red-800 hover:bg-red-950 text-white'>Book Now</button>
                </Link>

               </div>
                <div data-aos="flip-left" className='w-full flex justify-center'>
                    <img src="/images/home.png" alt="" />
                </div>
               </div>
             
        </div>
        </div>
    );
};

export default Banner;