import React, { useState } from "react";
import { Link } from "react-router-dom";

const Service = ({ data }) => {
  const { id, name, short_description, long_description, price, thumbnailImg } =
    data;
  const [Price, SetPrice] = useState(true);

  return (
    <div
      data-aos="fade-up"
      className=" max-h-[700px]  w-[100%] mb-7 border-2 bg-[#f0efef] lg:rounded-l-2xl shadow-xl lg:rounded-tr-2xl lg:rounded-br-[100px] flex md:flex-row justify-center flex-col gap-0 mx-auto "
    >
      <div className=" lg:w-[50%] w-full lg:h[100%] ">
        <img
          className="w-full h-full  md:rounded-l-2xl  "
          src={thumbnailImg}
          alt=""
        />
      </div>
      <div className=" lg:rounded-r-2xl  flex flex-col justify-center mx-auto p-4 lg:w-[50%] w-full max-h-[350px] text-black">
        <h1 className="text-center my-3 text-2xl text-blue-800 font-bold italic">
          {name}
        </h1>
        <p className="text-center my-3 text-gray-600">{short_description}</p>
        <div className="flex gap-0 justify-center items-center flex-grow">
          {/* <button
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="btn bg-red-700  flex justify-center w-[100px] text-white hover:bg-red-800 "
          >
            {Price ? "Price" : price}
          </button>{" "}
          :
          <button
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="btn bg-blue-700  flex justify-center w-[100px] text-white hover:bg-blue-800 "
          >
            {price}
          </button> */}
          <p className="font-bold text-lg text-center flex-grow">Price : <span className=" text-red-800">{price}</span> </p>
        </div>

        <Link>
          <button className="btn bg-red-700 hover:bg-red-900 flex justify-center text-white mx-auto my-5">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
