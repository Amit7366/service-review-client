import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Avatar } from "flowbite-react";
import './Testimonial.css'

const Testimonial = () => {
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
        <SwiperSlide>
          <div className="w-full flex items-center shadow rounded-md py-6">
            <div className="w-1/4">
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            </div>
            <div className="w-3/4">
                <h3 className="text-base font-bold">Customer One</h3>
                <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos!
                </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex items-center shadow rounded-md py-6">
            <div className="w-1/4">
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            </div>
            <div className="w-3/4">
                <h3 className="text-base font-bold">Customer One</h3>
                <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos!
                </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex items-center shadow rounded-md py-6">
            <div className="w-1/4">
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            </div>
            <div className="w-3/4">
                <h3 className="text-base font-bold">Customer One</h3>
                <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos!
                </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex items-center shadow rounded-md py-6">
            <div className="w-1/4">
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            </div>
            <div className="w-3/4">
                <h3 className="text-base font-bold">Customer One</h3>
                <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dignissimos!
                </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Testimonial;
