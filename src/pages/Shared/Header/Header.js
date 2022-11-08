import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <Link to='/register'>
            <Button size="xs" gradientDuoTone="purpleToBlue">Register</Button>
        </Link>
        <Link to='/login'>
            <Button size="xs" gradientDuoTone="cyanToBlue">Login</Button>
        </Link>
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <li>
          <Link to='/' className="lock py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-blue-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white" >
            Home
          </Link>
        </li>
        <li>
          <Link to='/services' className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
            Services
          </Link>
        </li>
        <li>
          <Link to='/services' className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
            My Reviews
          </Link>
        </li>
        <li>
          <Link to='/services' className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
            Add Service
          </Link>
        </li>
        <li>
          <Link to='/blogs' className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
            Blog
          </Link>
        </li>
        <li>
          <Link to='/services' className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
            <Button gradientMonochrome="failure" size='xs'>
                Logout
            </Button>
          </Link>
        </li>
       
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
