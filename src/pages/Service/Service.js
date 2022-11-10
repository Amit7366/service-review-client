
import React from "react";
import {  useLoaderData } from "react-router-dom";
import ServiceCard from "../../Components/Services/ServiceCard";
import useTitle from "../../Hooks/useTitle";
const Service = () => {
  useTitle('All Service - Plabon Fitness Trainer')
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
