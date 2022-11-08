import {
  Avatar,
  Badge,
  Button,
  Label,
  Textarea,
  TextInput,
} from "flowbite-react";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Details = () => {
  return (
    <div className="w-full rounded-md shadow-md flex flex-col pb-4 mb-6">
      <div>
        <PhotoProvider>
          <PhotoView src="https://flowbite.com/docs/images/blog/image-1.jpg">
            <img
              src="https://flowbite.com/docs/images/blog/image-1.jpg"
              alt=""
              className="rounded-t-md w-full"
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
      </div>
      <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-col md:flex-row h-96 md:h-80 px-8">
        <form className="flex flex-col gap-4 w-full md:w-1/2">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username3" color="green" value="Your name" />
            </div>
            <TextInput
              id="username"
              placeholder="Bonnie Green"
              required={true}
              color="green"
            />
          </div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Your message" />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required={true}
              rows={4}
            />
          </div>
          <Button type="submit">Review</Button>
        </form>
        <div className="w-full md:w-1/2 overflow-y-auto">
          <div className="w-full flex items-center shadow rounded-md py-6">
            <div className="w-1/4">
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            </div>
            <div className="w-3/4">
              <h3 className="text-base font-bold">Customer One</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi, dignissimos!
              </p>
            </div>
          </div>
          <div className="w-full flex items-center shadow rounded-md py-6">
            <div className="w-1/4">
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            </div>
            <div className="w-3/4">
              <h3 className="text-base font-bold">Customer One</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi, dignissimos!
              </p>
            </div>
          </div>
          <div className="w-full flex items-center shadow rounded-md py-6">
            <div className="w-1/4">
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            </div>
            <div className="w-3/4">
              <h3 className="text-base font-bold">Customer One</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi, dignissimos!
              </p>
            </div>
          </div>
          <div className="w-full flex items-center shadow rounded-md py-6">
            <div className="w-1/4">
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            </div>
            <div className="w-3/4">
              <h3 className="text-base font-bold">Customer One</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi, dignissimos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
