import React from 'react';
import Banner from './Banner/Banner';
import PerFectWedding from './PerFectWedding/PerFectWedding';
import Offer from './Offer/Offer';
import Footer from './Footer/Footer';
import ServiceSection from './ServiceSection/ServiceSection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PerFectWedding></PerFectWedding>
            <Offer></Offer>
            <ServiceSection></ServiceSection>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;