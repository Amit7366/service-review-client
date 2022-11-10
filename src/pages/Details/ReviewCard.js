import { Avatar, Badge } from 'flowbite-react';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    const {_id,date,serviceName,userName,userImg,text,ratings
    } = review;
    return (
        <div className="w-full flex items-center shadow rounded-md py-6">
            <div className="w-1/4">
              <Avatar
                img={userImg}
                rounded={true}
              />
            </div>
            <div className="w-3/4">
              <h3 className="text-base font-bold">{userName}</h3>
              <h4 className='text-xs font-bold'>{date}</h4>

              <div className='flex items-center gap-1 px-2 bg-teal-400 rounded-sm text-white w-12'><FaStar></FaStar> {ratings}</div>
            
              <p className="text-sm text-gray-600">
                {text}
              </p>
            </div>
          </div>
    );
};

export default ReviewCard;