import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaCheckCircle } from "react-icons/fa";
import Footer from '../Home/Footer/Footer';

const Description = () => {

    const { id } = useParams() 
    const data = useLoaderData()
 
    const find = data.find(item => item.id == id)

    const {  name, short_description,images , long_description, price, thumbnailImg } = find


    return (
        <div >
            <h1 className='bg-red-700 text-white text-center block py-7 text-3xl font-medium'>{name}</h1>
           
                
                         <div className='flex  lg:flex-row  flex-col-reverse  container mx-auto'>
                <div className='lg:w-[50%] w-full p-4'>
                      <h1 className='my-6 text-2xl text-black font-semibold'>{long_description.brief}</h1>
                      <p className='text-lg text-gray-700 my-4'>{long_description.importance}</p>
                      <div>
                         {
                            long_description.key_values.map((item,index) => <p key={index} className='flex items-center gap-2 text-lg text-blue-800'><FaCheckCircle></FaCheckCircle>{item}</p>)
                         }
                      </div>
                </div>
                <div className='lg:my-3  '>
               <img className='lg:rounded-tr-3xl' src={thumbnailImg} alt="" />
            
                       
                </div>

            </div>

            <div className='my-10 container mx-auto'>
                <h1 className='text-2xl text-center font-semibold '>Some Momments of our Clients</h1>
                <div className='grid my-5 lg:grid-cols-4 grid-cols-2 gap-0'>
                   <img src={images[0]} alt="" />
                   <img src={images[1]} alt="" />
                   <img src={images[2]} alt="" />
                   <img src={images[3]} alt="" />
                </div>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Description;