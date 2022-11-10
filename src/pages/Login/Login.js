import { Button, Label, TextInput } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  useTitle("Login - Plabon Fitness Trainer");
  const { logIn, providerLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
    navigate(from, { replace: true });
  };

  const signIn = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        }

        console.log(currentUser)

        fetch('https://service-review-server-amit7366.vercel.app/jwt',{
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          localStorage.setItem('token',data.token)

          form.reset();
        toast.success("Successfully Loged In");

        navigate(from, { replace: true });
        })
        
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center my-4 px-8 md:px-4">
      <div className="w-full md:w-1/3">
        <h2 className="text-3xl font-semibold text-blue-500">Login</h2>
        <form onSubmit={signIn} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              name="email"
              placeholder="name@flowbite.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              name="password"
              id="password1"
              type="password"
              required={true}
            />
          </div>

          <Button type="submit" gradientDuoTone="cyanToBlue">
            Login
          </Button>
          <h4 className="text-center text-md text-bold">or</h4>
          <Button
            onClick={handleGoogleSignIn}
            outline={true}
            gradientDuoTone="greenToBlue"
            className="flex items-center mx-auto"
          >
            <p className="mr-2">Login with </p>
            <p>
              {" "}
              <FaGoogle></FaGoogle>
            </p>
          </Button>
        </form>
      </div>
      <div className="w-full md:w-2/3 text-center">
        <h2 className="text-4xl text-green-500 font-extrabold">
          Welcome Back !
        </h2>
        <p className="text-sm font-semibold text-gray-400">
          login with your email & password
        </p>
      </div>
    </div>
  );
};

export default Login;
