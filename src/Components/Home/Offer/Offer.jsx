import React from 'react';

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
        <div className='container mx-auto relative py-20 flex lg:flex-row flex-col justify-around items-center '>
            <div className='relative shadow-2xl'>
              <img className='max-h-[500px] border-4 border-yell rounded-xl'  src="/images/offer.jpg" alt="" />
              <img className='absolute bottom-0 mx-auto right-0 left-0 w-[300px]' src="/images/piclogo.png" alt="" />
            </div>
            <div>
                <h1 className='text-red-600 font-semibold text-5xl text-center leading-[50px]'>Exclusive <br /> 25% Off Offer</h1>
            </div>
        </div>
        </div>

    );
};

export default Offer;