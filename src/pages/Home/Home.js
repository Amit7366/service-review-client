import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Serives from '../../Components/Services/Serives';
import Testimonial from '../../Components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mt-4'>
            <Banner></Banner>
            <Serives></Serives>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;