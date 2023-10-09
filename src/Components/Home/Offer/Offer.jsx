import React from 'react';
import OfferItem from './OfferItem';
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Offer = () => {
  const cardsData = [
        { id: 1,main:'https://i.ibb.co/qkb6Dfw/sundarbanbig.jpg', content: 'https://i.ibb.co/hmXCttR/sundorbon.png', name: "Sundarbans", description: "The Sundarbans is a vast mangrove forest in the coastal region of the Bay of Bengal. It's known for its unique ecosystem and is home to the Bengal tiger." },
        { id: 2, main:'https://i.ibb.co/FBCmZ2s/Sreemongolbig.jpg', content: 'https://i.ibb.co/QDpvkLc/Sreemongol.png', name: "Sreemongol", description: "Sreemongol is a town in northeastern Bangladesh, famous for its tea gardens, natural beauty, and the Lawachara National Park." },
        { id: 3, main:'https://i.ibb.co/0n9qzRY/sajekBIg.jpg', content: 'https://i.ibb.co/vVw0FSt/Sajek.png', name: "Sajek Valley", description: "Sajek Valley is a picturesque hill station in Bangladesh, located in the Rangamati District. It's known for its serene beauty and lush green hills." },
        { id: 4, main:'https://i.ibb.co/Ybdp59N/coxbazarbig.jpg', content: 'https://i.ibb.co/ZLwNxnZ/coxbazar.jpg', name: "Cox's bazar", description: "Cox's Bazar is a coastal town in southeastern Bangladesh, renowned for its extensive sandy beach along the Bay of Bengal. It's a top destination for beach lovers and offers a unique blend of natural beauty and cultural richness.." },
        { id: 5,main:'https://i.ibb.co/qkb6Dfw/sundarbanbig.jpg', content: 'https://i.ibb.co/hmXCttR/sundorbon.png', name: "Sundarbans", description: "The Sundarbans is a vast mangrove forest in the coastal region of the Bay of Bengal. It's known for its unique ecosystem and is home to the Bengal tiger." },
        { id: 6,main:'https://i.ibb.co/FBCmZ2s/Sreemongolbig.jpg', content: 'https://i.ibb.co/QDpvkLc/Sreemongol.png', name: "Sreemongol", description: "Sreemongol is a town in northeastern Bangladesh, famous for its tea gardens, natural beauty, and the Lawachara National Park." },
        { id: 7,main:'https://i.ibb.co/0n9qzRY/sajekBIg.jpg', content: 'https://i.ibb.co/vVw0FSt/Sajek.png', name: "Sajek Valley", description: "Sajek Valley is a picturesque hill station in Bangladesh, located in the Rangamati District. It's known for its serene beauty and lush green hills." },
        { id: 8, main:'https://i.ibb.co/Ybdp59N/coxbazarbig.jpg', content: 'https://i.ibb.co/ZLwNxnZ/coxbazar.jpg', name: "Cox's bazar", description: "Cox's Bazar is a coastal town in southeastern Bangladesh, renowned for its extensive sandy beach along the Bay of Bengal. It's a top destination for beach lovers and offers a unique blend of natural beauty and cultural richness.." },

      ];

    return (
        <div className='bg-gray-200'>
        <div className='container mx-auto relative py-20 flex  flex-wrap  flex-col-reverse  gap-0 items-center '>
            {/* <div className='relative shadow-2xl w-[300px]'>
              <img className='max-h-[500px] border-4 border-white rounded-xl'  src="/images/offer.jpg" alt="" />
              <img className='absolute bottom-0 mx-auto right-0 left-0 w-full ' src="/images/piclogo.png" alt="" />
              <div className='backdrop-brightness-[0.2] absolute bottom-0 text-white  h-[250px] w-[300px] rounded-tr-full'>
                 <h1 className='mt-8 ml-4 font-medium text-2xl'>Gardens by the Bay,Singapur</h1>
                 <p className='ml-4 mt-4'>Gardens by the Bay: Singapore's <br /> lush oasis. Spectacular Supertrees, <br /> vibrant domes, and waterfront views create a perfect wedding setting.</p>
              </div>
            </div> */}
            <div className='lg:w-[80%] w-full gap-2 flex lg:flex-row flex-col flex-wrap'>
            <OfferItem name={'Gardens by the Bay'} img={'/images/offer.jpg'} description={"Gardens by the Bay: Urban Oasis , where lush greenery and stunning , views create the perfect wedding ambiance."}></OfferItem>
            <OfferItem name={'Marina Bay Sands'} img={'/images/offer2.jpg'} description={"Marina Bay Sands: Singapore's best Skyline Jewel, where luxury meets panoramic views for your dream destination wedding."}></OfferItem>
            <OfferItem name={'Sentosa Island'} img={'/images/offer3.jpg'} description={'Tropical Paradise , a secluded  haven around for your dream wedding with beaches, resorts, and lush landscapes.'}></OfferItem>
            </div>
         
            <div  data-aos="fade-up" className=' w-full mb-10'>
                <h1 className=' font-semibold text-5xl  leading-[50px] my-4   text-center'>Exclusive <span className='text-red-600 font-bold'>25% Off</span> </h1>
                <p className='text-center w-full my-3 font-medium text-gray-700'>Offer going on in your favourite Destination wedding</p>
                <Link to='/contact'>
                <button className='btn bg-red-800 hover:bg-red-950 text-white w-[160px]  flex justify-center mx-auto'>Book Now <BsFillArrowThroughHeartFill></BsFillArrowThroughHeartFill></button>
                </Link>
            </div>
        </div>
        </div>

    );
};

export default Offer;