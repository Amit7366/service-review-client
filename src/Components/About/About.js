import { Card } from "flowbite-react";
import React from "react";

const About = () => {
  return (
    <div className="w-full mt-8">
      <Card
        className="min-w-full"
        horizontal={true}
        imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
};

export default About;
