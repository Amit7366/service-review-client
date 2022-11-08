import { Button, Label, TextInput } from "flowbite-react";
import React from "react";

const Login = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center my-4 px-4">
      <div className="w-1/3">
        <h2 className="text-3xl font-semibold text-blue-500">Login</h2>
        <form className="flex flex-col gap-4">
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

          <Button type="submit" gradientDuoTone="cyanToBlue">Login</Button>
        </form>
      </div>
      <div className="w-2/3 text-center">
            <h2 className="text-4xl text-green-500 font-extrabold">Welcome Back !</h2>
            <p className="text-sm font-semibold text-gray-400">login with your email & password</p>
      </div>
    </div>
  );
};

export default Login;
