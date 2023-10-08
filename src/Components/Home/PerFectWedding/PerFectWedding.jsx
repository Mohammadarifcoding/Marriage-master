import React from 'react';

const PerFectWedding = () => {
    return (
        <div className='bg-gray-100  '>
         
        <div  className='flex lg:flex-row flex-col justify-center items-center  py-10  container mx-auto' >
            <div data-aos="fade-up" className='w-1/2 flex justify-center flex-col items-center'>
                 <h1 className='text-3xl font-bold text-center leading-10 mb-4 text-red-800'>Destination Weddings: <span className='text-red-600 italic'>Where Dreams Take Flight</span> </h1>
                 <p className='text-center '>Escape to the destination of your dreams and say 'I do' in a setting that's as unique as your love. Our destination wedding services bring your fairytale wedding to life in the most breathtaking locations. Discover the magic of love, travel, and adventure all in one extraordinary celebration.</p>
                 <img className='w-[200px]' src="/images/headinLogo.png" alt="" />
            </div>
            <div data-aos="" className='w-1/2 flex flex-wrap gap-5 justify-center'>
                 <img data-aos="zoom-in-right" className='rounded-full  drop-shadow-2xl' src="/images/item1.jpg" alt="" />
                 <img  data-aos="zoom-out" className='rounded-full drop-shadow-2xl' src="/images/item2.jpg" alt="" />
                 <img data-aos="zoom-out-down" className='rounded-full drop-shadow-2xl' src="/images/item3.jpg" alt="" />
            </div>
        </div>
        </div>

    );
};

export default PerFectWedding;