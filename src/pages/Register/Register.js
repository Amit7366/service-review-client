import React from 'react';
import { Button, Label, TextInput } from "flowbite-react";

const Register = () => {
    return (
        <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center my-4 px-4">
      <div className="w-1/3">
        <h2 className="text-3xl font-semibold text-blue-500">Register</h2>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label value="Name" />
            </div>
            <TextInput
              type="test"
              placeholder="name"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Photo URL" />
            </div>
            <TextInput
              type="text"
              placeholder="https://xxxxxxxx.ccc"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required={true} />
          </div>

          <Button type="submit" gradientDuoTone="purpleToBlue">Register</Button>
        </form>
      </div>
      <div className="w-2/3 text-center">
            <h2 className="text-4xl text-green-500 font-extrabold">Create Your Account !</h2>
            <p className="text-sm font-semibold text-gray-400">Register with your information</p>
      </div>
    </div>
    );
};

export default Register;