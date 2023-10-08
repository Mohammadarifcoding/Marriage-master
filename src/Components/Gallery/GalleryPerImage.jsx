import React from 'react';

const GalleryPerImage = ({data}) => {
    const {id,image,person_name,event_date} = data
    return (
        <div  data-aos="zoom-in" className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={image} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{event_date}</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{person_name}</h1>
            <p className="leading-relaxed">We have given a Memorable moment for this client. This moment's came only once in the life.Take a look on the moment that they are enjoying</p>
          </div>
        </div>
      </div>
    );
};

export default GalleryPerImage;