import { Card } from "flowbite-react";
import React from "react";

const About = () => {
  return (
    <div className="w-full mt-8">
      <Card
        className="min-w-full"
        horizontal={true}
        imgSrc="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Welcome to the Fitness Family
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        There are no judgments here – No too much or not enough. No glares of disapproval. Here we keep open minds. We are nurturers. We seek only to encourage, empower and entertain. There is no one type. There is no one reason. There is no one way.
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        What we are is a diverse community; what we have is a culture of fun; what there is, is room for everyone: all kinds of people with all kinds of goals who’ve chosen to come reach them with us.
        </p>
      </Card>
    </div>
  );
};

export default About;
