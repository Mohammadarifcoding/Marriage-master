import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AboutTeamMember from './AboutTeamMember';

const About = () => {
    const data = useLoaderData()
    return (
        <div>
  <section className="bg-gray-100 py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Marriage Master</h2>
    <p className="text-lg text-gray-600 mb-10">
      Marriage Master is your trusted partner in creating magical and memorable wedding experiences. With our passion for perfection and attention to detail, we turn your dreams into reality.
    </p>
    <a href="/contact" className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-full inline-block transition duration-300">Contact Us</a>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      {
        data.map(item => <AboutTeamMember key={item.id} data={item}></AboutTeamMember>)
      }
    </div>
  </div>
</section>





        </div>
    );
};

export default About;