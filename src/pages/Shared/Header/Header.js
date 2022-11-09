import { Avatar, Button, Navbar, Tooltip } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="#">
        <img
          src="https://i.ibb.co/rQ3XWBh/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Plabon Fitness Trainer
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2 items-center">
        {user ? (
          <>
            <Tooltip content={user?.displayName}>
              <Avatar img={user?.photoURL} bordered={true} />
            </Tooltip>
            <Button gradientMonochrome="failure" size="xs">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link to="/register">
              <Button size="xs" gradientDuoTone="purpleToBlue">
                Register
              </Button>
            </Link>
            <Link to="/login">
              <Button size="xs" gradientDuoTone="cyanToBlue">
                Login
              </Button>
            </Link>
          </>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <li>
          <Link
            to="/"
            className="lock py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-blue-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/reviews"
            className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          >
            My Reviews
          </Link>
        </li>
        <li>
          <Link
            to="/addservice"
            className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          >
            Add Service
          </Link>
        </li>
        <li>
          <Link
            to="/blogs"
            className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
          >
            Blog
          </Link>
        </li>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
