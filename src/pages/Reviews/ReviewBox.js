import { Avatar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ReviewBox = ({ review,handleDelete }) => {
  const { _id, serviceId, serviceName, userName, userImg, text, ratings } =
    review;
    const [service,setService] = useState({});

    useEffect(() =>{
        fetch(`http://localhost:5000/service/${serviceId}`)
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
        </div>
        <div className="flex flex-col gap-2 w-1/6 items-end">
          <FaEdit className="text-teal-400 block"></FaEdit>
          <FaTrashAlt onClick={() => handleDelete(_id)} className="text-orange-600 block"></FaTrashAlt>
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
