import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GalleryPerImage from './GalleryPerImage';
import Footer from '../Home/Footer/Footer';

const Gallery = () => {
    const data = useLoaderData()
    return (
        <div>
            <h1 className='bg-red-700 text-white text-center block py-7 lg:text-2xl sm:text-[20px] font-medium'>Some Memorable moments of out client</h1>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">

{
    data.map(item => <GalleryPerImage key={item.id} data={item}></GalleryPerImage>)
}
    
    
      
    </div>
  </div>
</section>
 <Footer></Footer>
        </div>
    );
};

export default Gallery;