import React, { useContext, useState } from 'react';
import { Button, Label, TextInput } from "flowbite-react";
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const Register = () => {
  useTitle('Register - Plabon Fitness Trainer')
    const {createUser,updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState();

    const handleRegister =(event)=>{
      event.preventDefault();

      const form = event.target;

      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;
      const cpassword = form.cpassword.value;

      if (password.length < 6) {
        setError("Password must be at least 6 character");
        toast.error("Password must be at least 6 character");
        return;
      }
      if (cpassword !== password) {
        setError("Password did not match");
        toast.error("Password did not match");
        return;
      }
  
      if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        setError("Please provide at least 2 Uppercase letter");
        toast.error("Please provide at least 2 Uppercase letter");
        return;
      }
  
      if (!/(?=.*[!@#$&*])/.test(password)) {
        setError("Password should have special charecter");
        toast.error("Password should have special charecter");
        return;
      }

      createUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        toast.success('Successfully Registered!')
      })
      .then((error) => {console.log(error)});


    }

    const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL,
      };
      updateUserProfile(profile)
        .then(() => {})
        .catch((error) => console.error(error));
    };

    return (
        <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center my-4 px-8 md:px-4">
      <div className="w-full md:w-1/3">
        <h2 className="text-3xl font-semibold text-blue-500">Register</h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label value="Name" />
            </div>
            <TextInput
              type="text"
              name='name'
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
              name='photoURL'
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
              name='email'
              type="email"
              placeholder="name@flowbite.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput name='password' id="password1" type="password" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Your password" />
            </div>
            <TextInput name='cpassword' type="password" required={true} />
          </div>

          <Button type="submit" gradientDuoTone="purpleToBlue">Register</Button>
        </form>
      </div>
      <div className="w-full md:w-2/3 text-center">
            <h2 className="text-4xl text-green-500 font-extrabold">Create Your Account !</h2>
            <p className="text-sm font-semibold text-gray-400">Register with your information</p>
      </div>
    </div>
    );
};

export default Register;