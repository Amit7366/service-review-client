import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const Services = () => {
  const [services,setServices] = useState([]);

  useEffect(() =>{
    fetch('https://service-review-server-amit7366.vercel.app/services')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])

  return (
    <div>
      <div className="mx-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
        
        {
          services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }


      </div>
      <div className="w-full text-center">
        <Link to={"/services"} className="inline-block">
          <Button gradientMonochrome="info">See All Service</Button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
