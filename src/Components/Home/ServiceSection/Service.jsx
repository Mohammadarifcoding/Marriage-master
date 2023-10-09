import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Service = ({ data }) => {
  const { id, name, short_description, long_description, price, thumbnailImg } =
    data;
  const [Price, SetPrice] = useState(true);

  return (
    // <div
    //   data-aos="flip-left"
    //   className=" max-h-[700px]  w-[100%] mb-7 border-2 bg-[#f0efef] lg:rounded-l-2xl shadow-xl lg:rounded-tr-2xl lg:rounded-br-[100px] flex md:flex-row justify-center flex-col gap-0 mx-auto "
    // >
    //   <div className=" lg:w-[50%] w-full lg:h[100%] ">
    //     <img
    //       className="w-full h-full  md:rounded-l-2xl  "
    //       src={thumbnailImg}
    //       alt=""
    //     />
    //   </div>
    //   <div className=" lg:rounded-r-2xl  flex flex-col justify-center mx-auto p-4 lg:w-[50%] w-full max-h-[350px] text-black">
    //     <h1 className="text-center my-3 text-2xl text-blue-800 font-bold italic">
    //       {name}
    //     </h1>
    //     <p className="text-center my-3 text-gray-600">{short_description}</p>
    //     <div className="flex gap-0 justify-center items-center flex-grow">
    //       <p className="font-bold text-lg text-center flex-grow">Price : <span className=" text-red-800">{price}</span> </p>
    //     </div>

    //     <Link to={`/descrition/${id}`}>
    //       <button className="btn bg-red-700 hover:bg-red-900 flex justify-center text-white mx-auto my-5">
    //         View Details
    //       </button>
    //     </Link>
    //   </div>
    // </div>

    <div data-aos="flip-left" 
    style={{
      backgroundImage:`url(${thumbnailImg})`,
    }}
    className={`max-h-[700px] w-full  min-h-[350px] bg-cover bg-center  mb-7 border-2  lg:rounded-bl-2xl shadow-xl lg:rounded-tr-2xl lg:rounded-br-[90px] flex md:flex-row justify-center flex-col gap-0 mx-auto `}>
      <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="500"
     data-aos-offset="0" className="w-full h-full  flex p-3  flex-col justify-center items-center backdrop-brightness-[0.2]">
         <p className="flex text-2xl font-semibold flex-col-reverse justify-center items-center text-white"> <span data-aos="zoom-in">{name}</span>  <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="w-[70px]" src="/images/servicelogo.png" alt="" /></p>
         <p data-aos="zoom-in-down" className="max-w-[80%] text-blue-200 text-center">{short_description}</p>
         <p className="text-white my-2">Price: <span >{price}</span> </p>
         <Link to={`/descrition/${id}`}>
         <button className="btn my-3 bg-red-700 hover:gap-3 hover:bg-red-900 text-center text-white">Show Details <FaArrowRightLong></FaArrowRightLong> </button>  
         </Link>
        
         
      </div>


    </div>
  );
};

export default Service;
