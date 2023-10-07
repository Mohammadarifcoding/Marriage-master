import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../Provider/AuthProvider";
import Service from "./Service";

const ServiceSection = () => {
  const { data } = useContext(AuthContext);

  console.log(data);

  return (
    <div className="w-full min-h-screen  bg-[url('/images/bgWOrld.jpg')] bg-cover bg-center">
        <div className="w-full min-h-screen h-full flex p-6  justify-center items-center backdrop-brightness-50">
        <div className="container mx-auto p-2">
        <div data-aos="fade-down">
          <h1 className="text-white my-6 italic text-5xl font-bold text-center">
            Our Top Service
          </h1>
          <p className="text-center text-gray-200 font-medium mx-auto max-w-3xl">
            Experience flawless weddings with our expert planning, from venue
            selection to the grand celebration. Your dream wedding, our
            expertise.
          </p>
        </div>

        <div className="grid  my-10  lg:grid-cols-2 grid-cols-1 gap-4">
          {data.map((item) => (
            <Service key={item.id} data={item}></Service>
          ))}
        </div>
      </div>
        </div>

    </div>
  );
};

export default ServiceSection;
