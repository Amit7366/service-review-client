import { Carousel } from "flowbite-react";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src="https://images.unsplash.com/photo-1614928228253-dc09cbc3b11c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" alt="" />
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
