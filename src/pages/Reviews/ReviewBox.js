import { Avatar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FaEdit, FaStar, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewBox = ({ review,handleDelete }) => {
  const { _id, serviceId, serviceName, userName, userImg, text, ratings } =
    review;
    const [service,setService] = useState({});

    useEffect(() =>{
        fetch(`https://service-review-server-amit7366.vercel.app/service/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    
  return (
    <div className="flex flex-col gap-2">
      <div>
        <img
          className="h-36 w-full object-cover"
          src={service.image}
          alt=""
        />
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-1/6">
          <Avatar
            img={userImg}
            size="lg"
          />
        </div>
        <div className="w-4/6">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {serviceName}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {text}
          </p>
          <div className="flex items-center gap-2 rounded-sm bg-cyan-600 w-12 px-2 text-white">
            <FaStar></FaStar>
            <p>{ratings}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-1/6 items-end">
          <Link to={`/reviews/${_id}`}><FaEdit className="text-teal-400 block"></FaEdit></Link>
          <FaTrashAlt onClick={() => handleDelete(_id)} className="text-orange-600 block"></FaTrashAlt>
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
