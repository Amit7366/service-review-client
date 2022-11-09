import React from 'react';
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Badge,Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

const ServiceCard = ({service}) => {
    const {_id,title,image,price,ratings,details} = service;
    return (
        <div className="w-full rounded-md shadow-md flex flex-col pb-4">
          <div>
            <PhotoProvider>
              <PhotoView src={image}>
                <img
                  src={image}
                  alt=""
                  className="rounded-t-md h-64 w-full object-cover"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="px-4 pt-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {details.slice(0,100)}
            </p>
            <div className="flex flex-wrap gap-2 my-4">
              <Badge color="failure" size="sm">
                ${price}
              </Badge>
              <div className='flex items-center gap-1 px-2 bg-teal-400 rounded-sm text-white'><FaStar></FaStar> {ratings}</div>
            </div>
            <Link to={`/services/${_id}`}>
              <Button gradientMonochrome="purple">View Details</Button>
            </Link>
          </div>
        </div>
    );
};

export default ServiceCard;