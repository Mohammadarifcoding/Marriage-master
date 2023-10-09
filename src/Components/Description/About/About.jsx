import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AboutTeamMember from './AboutTeamMember';
import Footer from '../../Home/Footer/Footer';

const About = () => {
    const data = useLoaderData()
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return (
        <div className=''>
  <section className="bg-gray-100 py-16">
  <div className="container mx-auto text-center">
    <h2 data-aos="fade-right" className="text-3xl font-semibold text-gray-800 mb-6">About Marriage Master</h2>
    <p data-aos="flip-up" className="text-lg text-gray-600 mb-10">
      Marriage Master is your trusted partner in creating magical and memorable wedding experiences. With our passion for perfection and attention to detail, we turn your dreams into reality.
    </p>
    <Link data-aos="zoom-in-up" to="/contact" className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-full inline-block transition duration-300">Contact Us</Link>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div data-aos="fade-up" className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div className="flex flex-wrap  ">
      {
        data.map(item => <AboutTeamMember key={item.id} data={item}></AboutTeamMember>)
      }
    </div>
  </div>
</section>

    <Footer></Footer>



        </div>
    );
};

export default About;