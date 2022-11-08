import { Badge, Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Services = () => {
  return (
    <div>
      <div className="mx-auto gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
        <div className="w-full rounded-md shadow-md flex flex-col pb-4">
          <div>
            <PhotoProvider>
              <PhotoView src="https://flowbite.com/docs/images/blog/image-1.jpg">
                <img
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt=""
                  className="rounded-t-md"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="px-4 pt-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex flex-wrap gap-2 my-4">
              <Badge color="failure" size="sm">
                Failure
              </Badge>
              <Badge color="success" size="sm">
                Success
              </Badge>
            </div>
            <Link to="/services/1">
              <Button gradientMonochrome="purple">View Details</Button>
            </Link>
          </div>
        </div>
        <div className="w-full rounded-md shadow-md flex flex-col pb-4">
          <div>
            <PhotoProvider>
              <PhotoView src="https://flowbite.com/docs/images/blog/image-1.jpg">
                <img
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt=""
                  className="rounded-t-md"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="px-4 pt-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex flex-wrap gap-2 my-4">
              <Badge color="failure" size="sm">
                Failure
              </Badge>
              <Badge color="success" size="sm">
                Success
              </Badge>
            </div>
            <Link to="/services/1">
              <Button gradientMonochrome="purple">View Details</Button>
            </Link>
          </div>
        </div>
        <div className="w-full rounded-md shadow-md flex flex-col pb-4">
          <div>
            <PhotoProvider>
              <PhotoView src="https://flowbite.com/docs/images/blog/image-1.jpg">
                <img
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt=""
                  className="rounded-t-md"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="px-4 pt-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex flex-wrap gap-2 my-4">
              <Badge color="failure" size="sm">
                Failure
              </Badge>
              <Badge color="success" size="sm">
                Success
              </Badge>
            </div>
            <Link to="/services/1">
              <Button gradientMonochrome="purple">View Details</Button>
            </Link>
          </div>
        </div>

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
