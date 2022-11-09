import { Badge, Button } from "flowbite-react";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import ServiceCard from "../../Components/Services/ServiceCard";
const Service = () => {
  const serviceData = useLoaderData();


  
  return (
    <div className="mx-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
        {
          serviceData.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
    </div>
  );
};

export default Service;
