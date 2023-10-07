import React from 'react';
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
const OfferItem = ({name,img, description}) => {
    return (
        <div data-aos="fade-down" className='relative shadow-2xl w-[300px] mx-auto'>
        <img className='h-[500px] w-[300px] border-4 border-white rounded-xl'  src={img} alt="" />
        <img className=' absolute -top-10 mx-auto right-0 left-0 w-full ' src="/public/images/offerLogo (2).png" alt="" />
        <img className='absolute bottom-0 mx-auto right-0 left-0 w-full ' src="/images/piclogo.png" alt="" />
        <div style={{
            borderTopRightRadius:'210px'
        }} className='backdrop-brightness-[0.2] flex flex-col absolute bottom-0  text-white  h-[300px] w-[300px] '>

           <h1 className='mt-14 ml-4 font-medium text-2xl'>{name}</h1>
           <p className=' m-6 flex-grow' >{description}</p>
            <button className='btn ml-4 bg-red-800 w-[30%] mb-5 flex hover:bg-red-950 text-white'>Go <BsFillAirplaneEnginesFill></BsFillAirplaneEnginesFill></button>
        </div>
      </div>
    );
};

export default OfferItem;