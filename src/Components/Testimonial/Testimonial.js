import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Avatar } from "flowbite-react";
import './Testimonial.css'

const Testimonial = () => {
  const [reviews,setReviews] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])
  return (
    <div className="py-4">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        navigation
        breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
      >
        {
          reviews.map(review => <SwiperSlide key={review._id}>
            <div className="w-full flex items-center shadow rounded-md py-6">
              <div className="w-1/4">
                <Avatar
                  img={review.userImg}
                  rounded={true}
                />
              </div>
              <div className="w-3/4">
                  <h3 className="text-base font-bold">{review.userName}</h3>
                  <p className="text-sm text-gray-600">
                      {review.text}
                  </p>
              </div>
            </div>
          </SwiperSlide>)
        }
        
       
      </Swiper>
    </div>
  );
};

export default Testimonial;
