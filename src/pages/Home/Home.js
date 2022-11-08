import React from 'react';
import About from '../../Components/About/About';
import Banner from '../../Components/Banner/Banner';
import Services from '../../Components/Services/Services';
import Testimonial from '../../Components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mt-4'>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;